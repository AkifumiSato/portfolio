import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styles from './thanks.module.css'

export default ({ data }) => {
  const siteTitle = `Thanks - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
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
