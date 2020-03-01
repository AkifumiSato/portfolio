import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { get } from 'lodash'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import Blog from '../components/templates/Blog'

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
    contentfulBlogPost: {
      title: string;
      heroImage: {
        sizes: FluidObject;
      };
      publishDate: string;
      body: {
        childMarkdownRemark: {
          html: string;
        }
      };
    }
  }
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  const post = data.contentfulBlogPost
  const siteTitle = `${ post.title } - ${ data.site.siteMetadata.title }`
  const { description } = get(data, 'contentfulBlogPost.description')

  return (
    <>
      <CustomHead
        title={ siteTitle }
        description={ description }
      />
      <Blog
        title={ post.title }
        mainImage={ post.heroImage.sizes }
        publishDate={ post.publishDate }
        html={ post.body.childMarkdownRemark.html }
      />
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!) {
        contentfulBlogPost(id: { eq: $id }) {
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
