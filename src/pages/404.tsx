import { graphql } from 'gatsby'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import Index from '../components/templates/Index'

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <CustomHead title={siteTitle} />
      page not found...
      <br />
      <a href="/">please move to top page!</a>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
