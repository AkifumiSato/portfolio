import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import styles from '../styles/article.module.css'
import MainTitle from '../components/atoms/main-title'

export default ({ data }) => {
  const post = get(data, 'contentfulBlogPost')
  const siteTitle = `${post.title} - ${get(data, 'site.siteMetadata.title')}`
  const { description } = get(data, 'contentfulBlogPost.description')

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout>
      <Helmet>
        <title>{ siteTitle }</title>
        <meta content={ description } name="description" />
      </Helmet>
      <MainTitle category="BLOG" title={ post.title } />
      <Img className={ styles.mainImage } alt={ post.title } sizes={ post.heroImage.sizes } imgStyle={ {
        objectFit: 'cover',
        objectPosition: 'top',
      } } />
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
