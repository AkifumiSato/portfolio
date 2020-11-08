import { graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'
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
      fixed: FixedObject
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
      fixed: post.node.heroImage.fixed,
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
            fixed(
              width: 200
              height: 120
              cropFocus: CENTER
              resizingBehavior: PAD
            ) {
              ...GatsbyContentfulFixed_withWebp
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
