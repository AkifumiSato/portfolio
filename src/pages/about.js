import React from 'react'
import get from 'lodash/get'
import head from 'lodash/head'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from './about.module.css'
import articleStyles from '../components/article.module.css'
import MainTitle from '../components/main-title'

class RootIndex extends React.Component {
  render() {
    const siteTitle = `About - ${get(this, 'props.data.site.siteMetadata.title')}`
    const posts = get(this, 'props.data.allContentfulPerson.edges[0].node.about.content')

    return (
      <div>
        <Helmet title={ siteTitle } />
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
                break
            }
          })) }
          <h2 className={ styles.sub_title }>contact</h2>
          <p className={ styles.text }><Link to={ '/contact/' } className={ styles.link }>&#x203A; go to contact</Link></p>
        </div>
      </div>
    )
  }
}

export default RootIndex

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
