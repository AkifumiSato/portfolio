import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'
import ArticlePreview from '../components/molecules/ArticlePreview'
import MainTitle from '../components/atoms/MainTitle'

const MyList = styled.ul`
  & > li:not(:first-child) {
    margin-top: 50px;
  }
  
  @media screen and (max-width: 768px) {
    & > li:not(:first-child) {
      margin-top: 20px;
    }
  }
`

const MyArticle = styled.div`
  margin-top: 10px;
`

const BlogPage = ({ data }) => {
  const posts = get(data, 'allContentfulBlogPost.edges')
  const siteTitle = `Blog - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title='Blog' />
      <MyArticle>
        <MyList>
          { posts.map(({ node }) => {
            return (
              <li key={ node.slug }>
                <ArticlePreview article={ node } heroImage={ node.heroImage } />
              </li>
            )
          }) }
        </MyList>
      </MyArticle>
    </Layout>
  )
}

export default BlogPage

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
