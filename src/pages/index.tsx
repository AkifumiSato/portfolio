import { graphql } from 'gatsby'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import Index from '../components/templates/Index'

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const IndexPage: React.FC<IProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <CustomHead title={ siteTitle } />
      <Index />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
