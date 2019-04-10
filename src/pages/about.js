import React from 'react'
import get from 'lodash/get'
import head from 'lodash/head'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import styles from './about.module.css'
import articleStyles from '../styles/article.module.css'
import MainTitle from '../components/atoms/main-title'

export default ({ data }) => {
  const siteTitle = `About - ${get(data, 'site.siteMetadata.title')}`
  const posts = get(data, 'allContentfulPerson.edges[0].node.about.content')

  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>{ siteTitle }</title>
        <meta content="東京のフロントエンドエンジニア、佐藤昭文のポートフォリオサイトです。"  name="description" />
      </Helmet>
      <MainTitle title="ABOUT" />
      <div className={ articleStyles.article }>
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
        <h2 className={ styles.sub_title }>contact</h2>
        <p className={ styles.text }><Link to={ '/contact/' } className={ styles.link }>&#x203A; go to contact</Link></p>
      </div>
    </Layout>
  )
}

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
