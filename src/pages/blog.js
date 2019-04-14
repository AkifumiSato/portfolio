import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/layout'
import styles from './blog.module.css'
import ArticlePreview from '../components/molecules/article-preview'
import MainTitle from '../components/atoms/main-title'

export default ({ data }) => {
  const posts = get(data, 'allContentfulBlogPost.edges')
  const siteTitle = `Blog - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title='Blog' />
      <div className={ styles.article }>
        <ul className={ styles.article_list }>
          { posts.map(({ node }) => {
            return (
              <li key={ node.slug }>
                <ArticlePreview article={ node } heroImage={ node.heroImage } />
              </li>
            )
          }) }
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "YYYY-MM-DD")
          tags
          heroImage {
            sizes(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            description
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
