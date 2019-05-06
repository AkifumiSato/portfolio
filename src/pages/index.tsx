import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styled, { keyframes } from 'styled-components'
import { ralewayMixin } from '../styles/mixin/font'

const TitleWrap = styled.div`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 40%;
  width: 100%;
  @media screen and (max-width: 768px) {
    top: 35%;
  }
`

const MainTitle = styled.h1`
  font-size: 50px;
  ${ralewayMixin};
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

interface IStrongFont {
  delay: string;
}

const StrongFont = styled.strong`
  color: #00C5B2;
  font-weight: normal;
  animation: ${fadeIn} 1s;
  animation-delay: ${(props: IStrongFont) => props.delay};
  animation-fill-mode: forwards;
  opacity: 0;
`

const SubTitle = styled.p`
  color: #aaa;
  font-size: 25px;
  ${ralewayMixin};
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 5px;
  }
`

const IndexMenu = styled.div`
  bottom: 20%;
  ${ralewayMixin};
  left: 0;
  margin: auto;
  max-width: 850px;
  padding: 0 50px;
  position: absolute;
  right: 0;
  text-align: center;
  @media screen and (max-width: 768px) {
    bottom: 15%;
  }
`

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const MenuListItem = styled.li`
  @media screen and (max-width: 768px) {
    padding: 10px 25px;
  }
`

const MenuLinkText = styled.span`
  color: #aaa;
  font-size: 22px;
  position: relative;
  transition: .3s;
  transition-property: color;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  &:after {
    background-color: #333;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 100%;
    transition: .3s;
    width: 0;
    will-change: color, width;
  }
`

const MenuLink = styled(Link)`
  display: block;
  padding: 10px 25px;
  text-decoration: none;
  @media screen and (min-width: 769px) {
    &:hover ${MenuLinkText} {
      color: #333;
      &:after {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: inline-block;
    padding: 0;
  }
`

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

  interface IMenuLinks {
    name: string;
    url: string;
  }

  const menuLinks: Array<IMenuLinks> = [
    {
      name: 'about',
      url: '/about/',
    },
    {
      name: 'blog',
      url: '/blog/',
    },
    {
      name: 'contact',
      url: '/contact/',
    },
  ]

  return (
    <Layout rootLinkDisplay={ false }>
      <CustomHead title={ siteTitle } />
      <TitleWrap className="raleway">
        <MainTitle>
          <StrongFont delay=".3s">A</StrongFont>KIFUMI
          &nbsp;
          <StrongFont delay=".8s">S</StrongFont>ATO
        </MainTitle>
        <SubTitle>frontend developer</SubTitle>
      </TitleWrap>
      <IndexMenu>
        <MenuList>
          { menuLinks.map((link, index) => (
            <MenuListItem key={ index }>
              <MenuLink to={ link.url }>
                <MenuLinkText>{ link.name }</MenuLinkText>
              </MenuLink>
            </MenuListItem>
          )) }
        </MenuList>
      </IndexMenu>
    </Layout>
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
