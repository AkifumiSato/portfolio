import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from './about.module.css'
import MainTitle from '../components/main-title'

class RootIndex extends React.Component {
  render() {
    const siteTitle = `About - ${get(this, 'props.data.site.siteMetadata.title')}`
    const posts = get(this, 'props.data.allContentfulPerson.edges[0].node')
    const iAmText = get(posts, 'iAm.content').map((obj) => {
      return obj.content[0].value
    })
    const skillText = get(posts, 'skill.content').map((obj) => {
      return obj.content[0].value
    })
    const carrerText = get(posts, 'carrer.content').map((obj) => {
      return obj.content[0].value
    })

    return (
      <div>
        <Helmet title={ siteTitle } />
        <MainTitle title="ABOUT" />
        <div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>I am ...</h2>
            <p className={ styles.text }>{ iAmText }</p>
          </div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>skill</h2>
            <p className={ styles.text }>{ skillText }</p>
          </div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>career</h2>
            <p className={ styles.text }>{ carrerText }</p>
          </div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>contact</h2>
            <p className={ styles.text }><Link to={ '/contact/' } className={ styles.link }>&#x203A; go to contact</Link></p>
          </div>
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
          iAm {
            content {
              content {
                value
              }
            }
          }
          skill {
            content {
              content {
                value
              }
            }
          }
          carrer {
            content {
              content {
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
