import * as React from 'react'
import Img, { FluidObject, GatsbyImageFluidProps } from 'gatsby-image'
import styled from 'styled-components'
import { colors, shadow } from '../../../styles/color'
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

const MyImg = styled(Img)<GatsbyImageFluidProps>`
  box-shadow: ${shadow.large};

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export type Props = {
  title: string
  mainImage: FluidObject
  createdAt: string
  html: string
}

const BlogPost: React.FC<Props> = ({ title, mainImage, createdAt, html }) => (
  <Layout title={title} page="detail">
    <MyContents>
      <MyImg
        alt={title}
        fluid={mainImage}
        imgStyle={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      />
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
