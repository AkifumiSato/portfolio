import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
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
        fluid: FluidObject
      }
      createdAt: string
      body: {
        childMarkdownRemark: {
          html: string
        }
      }
      description: {
        description: string
      }
    }
  }
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const post = data.contentfulBlogPost
  const siteTitle = `${post.title} - ${data.site.siteMetadata.title}`
  const { description } = data.contentfulBlogPost.description

  return (
    <>
      <CustomHead title={siteTitle} description={description} />
      <Blog
        title={post.title}
        mainImage={post.heroImage.fluid}
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
        fluid(maxHeight: 400, maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp
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
