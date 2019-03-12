import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import styles from '../components/blog-post.module.css'
import MainTitle from '../components/main-title'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={ siteTitle } />
        <MainTitle category="BLOG" title={ post.title } />
        <Img className={ styles.mainImage } alt={ post.title } sizes={ post.heroImage.sizes } />
        <div className={ styles.contents }>
          <p className={ styles.publish }>{ post.publishDate }</p>
          <div className={ styles.article }
            dangerouslySetInnerHTML={ {
              __html: post.body.childMarkdownRemark.html,
            } }
          />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180) {
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
