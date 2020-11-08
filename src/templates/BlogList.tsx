import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import List, { BlogPost } from '../components/templates/List'

type PostOrg = {
  node: {
    slug: string
    createdAt: string
    title: string
    description: {
      description: string
    }
    heroImage: {
      fluid: FluidObject
    }
  }
}

type Props = {
  pageContext: {
    currentPage: number
    pageCount: number
    baseUrl: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allContentfulBlogPost: {
      edges: Array<PostOrg>
    }
  }
}

const parsePosts = (posts: PostOrg[]): BlogPost[] =>
  posts.map((post) => ({
    slug: post.node.slug,
    createdAt: post.node.createdAt,
    title: post.node.title,
    description: post.node.description.description,
    heroImage: {
      fluid: post.node.heroImage.fluid,
    },
  }))

const BlogListPage: React.FC<Props> = ({ data, pageContext }) => {
  const { edges } = data.allContentfulBlogPost
  const siteTitle = `Blog - ${data.site.siteMetadata.title}`

  const posts = React.useMemo(() => parsePosts(edges), [edges])

  return (
    <>
      <CustomHead title={siteTitle} />
      <List
        currentPage={pageContext.currentPage}
        pageCount={pageContext.pageCount}
        baseUrl={pageContext.baseUrl}
        posts={posts}
      />
    </>
  )
}

export default BlogListPage

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "YYYY-MM-DD")
          tags
          heroImage {
            fluid(maxHeight: 120) {
              ...GatsbyContentfulFluid_withWebp
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
