import { graphql } from 'gatsby'
import * as React from 'react'
import CustomHead from '../components/atoms/CustomHead'
import About from '../components/templates/About'

type QueryResult = Array<{
  content: [
    {
      value: string
    }
  ]
  nodeType: string
}>

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allContentfulPerson: {
      edges: [
        {
          node: {
            about: {
              content: QueryResult
            }
          }
        }
      ]
    }
  }
}

const postsParse = (data: QueryResult) =>
  data.map((item) => ({
    node: {
      contents: item.content[0] ? item.content[0].value : '',
      type: item.nodeType,
    },
  }))

const AboutPage: React.FC<Props> = ({ data }) => {
  const siteTitle = `About - ${data.site.siteMetadata.title}`
  const postsOrg = data.allContentfulPerson.edges[0].node.about.content
  const posts = React.useMemo(() => postsParse(postsOrg), [postsOrg])

  return (
    <>
      <CustomHead title={siteTitle} />
      <About posts={posts} />
    </>
  )
}

export default AboutPage

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
