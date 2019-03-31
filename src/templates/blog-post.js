import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import styles from '../styles/article.module.css'
import MainTitle from '../components/atoms/main-title'

export default ({ data }) => {
  const post = get(data, 'contentfulBlogPost')
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout>
      <Helmet title={ siteTitle } />
      <MainTitle category="BLOG" title={ post.title } />
      <Img className={ styles.mainImage } alt={ post.title } sizes={ post.heroImage.sizes } imgStyle={{
        objectFit: 'cover',
        objectPosition: 'top',
      }} />
      <div className={ styles.contents }>
        <p className={ styles.publish }>{ post.publishDate }</p>
        <div className={ styles.article }
             dangerouslySetInnerHTML={ {
               __html: post.body.childMarkdownRemark.html,
             } }
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxHeight: 400) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
