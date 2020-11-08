import Img, { FluidObject, GatsbyImageFluidProps } from 'gatsby-image'
import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'

const MyLink = styled(Link)`
  display: grid;
  grid-template-columns: 20px 200px 1fr;
  column-gap: 20px;
  background-color: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px 20px;
  text-decoration: none;
  transition: 0.3s;

  @media screen and (min-width: 769px) {
    &:hover {
      box-shadow: 0 4px 48px rgba(0, 0, 0, 0.3);
      transition: 0.3s;
      transform: translateY(-3px);
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 15px 1fr;
    row-gap: 10px;
  }
`

const DateView = styled.p`
  display: inline-block;
  height: 120px;
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
    height: auto;
    margin-right: 0;
    transform: rotate(0);
    text-align: left;
    writing-mode: initial;
  }
`

const MyImage = styled(Img)<GatsbyImageFluidProps>`
  height: 120px;
  object-fit: contain;
  margin-right: 20px;
  width: 200px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MainTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const MyText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`

type Props = {
  url: string
  createdAt: string
  title: string
  description: string
  heroImage: {
    sizes: FluidObject
  }
}

const ArticlePreview: React.FC<Props> = ({
  url,
  createdAt,
  title,
  description,
  heroImage,
}) => (
  <MyLink to={url}>
    <DateView>{createdAt}</DateView>
    <MyImage
      fluid={heroImage.sizes}
      imgStyle={{
        objectFit: 'contain',
      }}
      alt=""
    />
    <div>
      <MainTitle>{title}</MainTitle>
      <MyText>{description}</MyText>
    </div>
  </MyLink>
)

export default ArticlePreview
