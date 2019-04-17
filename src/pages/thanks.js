import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styled  from 'styled-components'

const Thanks = styled.p`
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 80vh;
  justify-content: center;
  line-height: 2;
  text-align: center;
`

export default ({ data }) => {
  const siteTitle = `Thanks - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <Thanks>お問い合わせ、ありがとうございました。</Thanks>
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
