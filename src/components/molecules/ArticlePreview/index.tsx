import * as React from 'react'
import Link from 'gatsby-link'
import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

const MyLink = styled(Link)`
  background-color: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  padding: 15px 20px;
  text-decoration: none;
  transition: .3s;
  @media screen and (min-width: 769px) {
    &:hover {
      box-shadow: 0 4px 48px rgba(0, 0, 0, 0.3);
      transition: .3s;
      transform: translateY(-3px);
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const DateView = styled.p`
  display: inline-block;
  flex-shrink: 0;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
    margin-right: 0;
    transform: rotate(0);
    text-align: left;
    writing-mode: initial;
  }
`

const MyImage = styled(Img)`
  flex-shrink: 0;
  height: 120px;
  object-fit: contain;
  margin-right: 20px;
  width: 200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MyBody = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
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

interface IProps {
  url: string;
  publishDate: string;
  title: string;
  description: string;
  heroImage: {
    sizes: FluidObject;
  };
}

const ArticlePreview: React.FC<IProps> = ({ url, publishDate, title, description, heroImage }) => {
  return (
    <MyLink to={ url }>
      <DateView>{ publishDate }</DateView>
      <MyImage sizes={ heroImage.sizes } imgStyle={ {
        objectFit: 'contain',
      } } alt="" />
      <MyBody>
        <MainTitle>{ title }</MainTitle>
        <MyText>{ description }</MyText>
      </MyBody>
    </MyLink>
  )
}

export default ArticlePreview
