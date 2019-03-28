import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import MainTitle from '../components/main-title'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const siteTitle = `CONTACT - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <Helmet title={ siteTitle } />
      <MainTitle title="CONTACT" />
      <div>
        <p style={
          {
            color: '#aaa',
            fontSize: '30px',
            textAlign: 'center',
          }
        }>作成中...</p>
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
