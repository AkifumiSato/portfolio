import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import Article from '../../organisms/Article'
import Layout from '../../organisms/Layout'

const MyLink = styled(Link)`
  font-size: 14px;
  text-decoration: underline;
`

export type Props = {
  posts: Array<{
    node: {
      contents: string
      type: string
    }
  }>
}

const AboutPage: React.FC<Props> = ({ posts }) => (
  <Layout title="About">
    <Article>
      {posts.map(({ node }, index) => {
        switch (node.type) {
          case 'heading-2':
            return <h2 key={index}>{node.contents}</h2>
          case 'paragraph':
            return <p key={index}>{node.contents}</p>
          default:
            return null
        }
      })}
      <h2>contact</h2>
      <p>
        <MyLink to={'/contact/'}>&#x203A; go to contact</MyLink>
      </p>
    </Article>
  </Layout>
)

export default AboutPage
