import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'
import MainTitle from '../components/atoms/MainTitle'
import Article from '../components/organisms/Article'

const Publish = styled.p`
  color: #aaa;
  font-size: 14px;
`

const MyContents = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

const MyImg = styled(Img)`
  box-shadow: 0 4px 24px rgba(0, 0, 0, .35);
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

const BlogPost = ({ data }) => {
  const post = get(data, 'contentfulBlogPost')
  const siteTitle = `${post.title} - ${get(data, 'site.siteMetadata.title')}`
  const { description } = get(data, 'contentfulBlogPost.description')

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout>
      <CustomHead
        title={ siteTitle }
        description={ description }
      />
      <MainTitle category="BLOG" title={ post.title } />
      <MyImg alt={ post.title } sizes={ post.heroImage.sizes } imgStyle={ {
        objectFit: 'cover',
        objectPosition: 'top',
      } } />
      <MyContents>
        <Publish>{ post.publishDate }</Publish>
        <Article
             dangerouslySetInnerHTML={ {
               __html: post.body.childMarkdownRemark.html,
             } }
        />
      </MyContents>
    </Layout>
  )
}

export default BlogPost

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
      description {
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`