import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'
import CustomHead from '../components/atoms/CustomHead'
import MainTitle from '../components/atoms/MainTitle'
import ArticlePreview from '../components/molecules/ArticlePreview'
import Layout from '../components/organisms/Layout'
import Pager from '../components/organisms/Pager'

const parsePagerUrl = (baseUrl: string, pageNumber: number) => pageNumber <= 1 ? `${ baseUrl }` : `${ baseUrl }/${ pageNumber }`

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
  display: grid;
  row-gap: 50px;
`

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

const BlogListPage: React.FC<IProps> = ({ data, pageContext }) => {
  const { edges } = data.allContentfulBlogPost
  const siteTitle = `Blog - ${ data.site.siteMetadata.title }`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title='Blog' />
      <MyArticle>
        <MyList>
          { edges.map(({ node }) => {
            return (
              <li key={ node.slug }>
                <ArticlePreview
                  url={ `/blog/${ node.publishDate }/${ node.slug }.html` }
                  publishDate={ node.publishDate }
                  title={ node.title }
                  description={ node.description.description }
                  heroImage={ node.heroImage }
                />
              </li>
            )
          }) }
        </MyList>
        <Pager
          current={ pageContext.currentPage }
          max={ pageContext.pageCount }
          prevLink={ parsePagerUrl(pageContext.baseUrl, pageContext.currentPage - 1) }
          nextLink={ parsePagerUrl(pageContext.baseUrl, pageContext.currentPage + 1) }
        />
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
