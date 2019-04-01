import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import styles from './thanks.module.css'

export default ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout>
      <Helmet title={ siteTitle } />
      <p className={ styles.thanks }>お問い合わせ、ありがとうございました。</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
