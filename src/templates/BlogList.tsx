import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import List, { BlogPost } from '../components/templates/List'

type PostOrg = {
  node: {
    slug: string
    publishDate: string
    title: string
    description: {
      description: string
    }
    heroImage: {
      sizes: FluidObject
    }
  }
}

interface IProps {
  pageContext: {
    currentPage: number
    pageCount: number
    baseUrl: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
    allContentfulBlogPost: {
      edges: Array<PostOrg>
    }
  }
}

const parsePosts = (posts: PostOrg[]): BlogPost[] => posts.map(post => ({
  slug: post.node.slug,
  publishDate: post.node.publishDate,
  title: post.node.title,
  description: post.node.description.description,
  heroImage: {
    sizes: post.node.heroImage.sizes,
  },
}))

const BlogListPage: React.FC<IProps> = ({ data, pageContext }) => {
  const { edges } = data.allContentfulBlogPost
  const siteTitle = `Blog - ${ data.site.siteMetadata.title }`

  const posts = React.useMemo(() => parsePosts(edges), [edges])

  return (
    <>
      <CustomHead title={ siteTitle } />
      <List
        currentPage={ pageContext.currentPage }
        pageCount={ pageContext.pageCount }
        baseUrl={ pageContext.baseUrl }
        posts={ posts }
      />
    </>
  )
}

export default BlogListPage

export const pageQuery = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allContentfulBlogPost(
            sort: {fields: [createdAt], order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    title
                    slug
                    createdAt(formatString: "YYYY-MM-DD")
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
