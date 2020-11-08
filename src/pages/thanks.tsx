import { graphql } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'

const Thanks = styled.p`
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 80vh;
  justify-content: center;
  line-height: 2;
  text-align: center;
`

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const ThanksPage: React.FC<Props> = ({ data }) => {
  const siteTitle = `Thanks - ${data.site.siteMetadata.title}`

  return (
    <Layout>
      <CustomHead title={siteTitle} />
      <Thanks>お問い合わせ、ありがとうございました。</Thanks>
    </Layout>
  )
}

export default ThanksPage

export const pageQuery = graphql`
  query ThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
