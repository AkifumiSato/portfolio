import { graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'
import { get } from 'lodash'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import Blog from '../components/templates/Blog'

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    contentfulBlogPost: {
      title: string
      heroImage: {
        fixed: FixedObject
      }
      createdAt: string
      body: {
        childMarkdownRemark: {
          html: string
        }
      }
    }
  }
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const post = data.contentfulBlogPost
  const siteTitle = `${post.title} - ${data.site.siteMetadata.title}`
  const { description } = get(data, 'contentfulBlogPost.description')

  return (
    <>
      <CustomHead title={siteTitle} description={description} />
      <Blog
        title={post.title}
        mainImage={post.heroImage.fixed}
        createdAt={post.createdAt}
        html={post.body.childMarkdownRemark.html}
      />
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      createdAt(formatString: "MMMM Do, YYYY")
      heroImage {
        fixed(width: 800, height: 400, cropFocus: TOP) {
          ...GatsbyContentfulFixed_withWebp
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
