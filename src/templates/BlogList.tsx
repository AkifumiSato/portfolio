import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'
import CustomHead from '../components/atoms/CustomHead'
import MainTitle from '../components/atoms/MainTitle'
import ArticlePreview from '../components/molecules/ArticlePreview'
import Layout from '../components/organisms/Layout'

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

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
    allContentfulBlogPost: {
      edges: [{
        node: {
          slug: string;
          publishDate: string;
          title: string;
          description: {
            description: string;
          };
          heroImage: {
            sizes: FluidObject;
          };
        };
      }]
    }
  }
}

const BlogListPage: React.FC<IProps> = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges
  const siteTitle = `Blog - ${data.site.siteMetadata.title}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title='Blog' />
      <MyArticle>
        <MyList>
          { posts.map(({ node }) => {
            return (
              <li key={ node.slug }>
                <ArticlePreview
                  url={`/blog/${node.publishDate}/${node.slug}.html`}
                  publishDate={ node.publishDate }
                  title={ node.title }
                  description={ node.description.description }
                  heroImage={ node.heroImage }
                />
              </li>
            )
          }) }
        </MyList>
      </MyArticle>
    </Layout>
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
