import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/color'
import Article from '../../organisms/New/Article'
import Layout from '../../organisms/New/Layout'

const Publish = styled.p`
  color: ${colors.gray['300']};
  font-size: 14px;
`

const MyContents = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 50px;

  @media screen and (max-width: 768px) {
    row-gap: 30px;
  }
`

export type Props = {
  title: string
  createdAt: string
  html: string
}

const BlogPost: React.FC<Props> = ({ title, createdAt, html }) => (
  <Layout title={title} page="detail">
    <MyContents>
      <Publish>{createdAt}</Publish>
      <div>
        <Article
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </MyContents>
  </Layout>
)

export default BlogPost
