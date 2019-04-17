import React from 'react'
import get from 'lodash/get'
import head from 'lodash/head'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'
import MainTitle from '../components/atoms/MainTitle'
import Article from '../components/organisms/Article'

const MyLink = styled(Link)`
  color: #00C5B2;
  font-size: 14px;
  text-decoration: underline;
`

const AboutPage = ({ data }) => {
  const siteTitle = `About - ${get(data, 'site.siteMetadata.title')}`
  const posts = get(data, 'allContentfulPerson.edges[0].node.about.content')

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title="ABOUT" />
      <Article>
        { posts.map((({content, nodeType}, index) => {
          switch (nodeType) {
            case 'heading-2':
              return (
                <h2 key={ index }>{ head(content).value }</h2>
              )
            case 'paragraph':
              return (
                <p key={ index }>{ head(content).value }</p>
              )
            default:
              return null
          }
        })) }
        <h2>contact</h2>
        <p>
          <MyLink to={ '/contact/' }>&#x203A; go to contact</MyLink>
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulPerson {
      edges {
        node {
          about {
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
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
