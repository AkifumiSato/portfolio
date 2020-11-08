import Img, { FluidObject, GatsbyImageFluidProps } from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'
import MainTitle from '../../atoms/MainTitle'
import Article from '../../organisms/Article'
import Layout from '../../organisms/Layout'
import CommonSetting from '../hoc/CommonSetting'

const Wrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

const Publish = styled.p`
  color: #666;
  font-size: 14px;
`

const MyContents = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

const MyImg = styled(Img)<GatsbyImageFluidProps>`
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);

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
  <Layout>
    <MainTitle>{title}</MainTitle>
    <Wrapper>
      <MyImg
        alt={title}
        fluid={mainImage}
        imgStyle={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      />
      <MyContents>
        <Publish>{createdAt}</Publish>
        <Article
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </MyContents>
    </Wrapper>
  </Layout>
)

export default CommonSetting<Props>(BlogPost)
