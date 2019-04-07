import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import MainTitle from '../components/atoms/main-title'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import NetlifyForm from '../container/netlify-form'
import styles from './contact.module.css'
import fonts from '../styles/fonts.module.css'

export default ({ data }) => {
  const siteTitle = `Contact - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <Helmet title={ siteTitle } />
      <MainTitle title="CONTACT" />
      <div className={ styles.wrapper }>
        <NetlifyForm>
          <div className={ styles.buttonWrapper }>
            <button type="submit" className={ fonts.raleway }>Send</button>
          </div>
        </NetlifyForm>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
