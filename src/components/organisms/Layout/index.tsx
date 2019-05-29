import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as font from '../../../styles/font'
import { GlobalStyles } from '../../../styles/global'
import Navigation from '../../molecules/Navigation'

const { ralewayMixin } = font

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 50px 50px 20px;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

const SiteRootLink = styled(Link)`
  text-align: left;
  text-decoration: none;
  font-size: 18px;
  ${ ralewayMixin }
`

const StrongFont = styled.strong`
  color: #00C5B2;
  font-weight: normal;
`

const Contents = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
`

const Copyright = styled.p`
  bottom: 20px;
  color: #aaa;
  font-size: 14px;
  left: 7%;
  position: absolute;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
  ${ ralewayMixin }
`

const PolicyLink = styled.a`
  font-style: italic;
`

interface IProps {
  rootLinkDisplay?: boolean;
}

const Layout: React.FC<IProps> = ({ children, rootLinkDisplay = true }) => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Wrapper>
      <GlobalStyles />
      <Navigation
        links={ [
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
        ] }
      />
      { rootLinkDisplay && (
        <SiteRootLink to={ '/' }>
          <StrongFont>A</StrongFont>KIFUMI
          &nbsp;
          <StrongFont>S</StrongFont>ATO
        </SiteRootLink>
      ) }
      <Contents>
        { children }
        <Copyright>©︎akfm.dev { year }. Using <PolicyLink href="https://www.google.com/intl/ja/policies/privacy/partners/" target="_blank">Google Analytics</PolicyLink></Copyright>
      </Contents>
    </Wrapper>
  )
}

export default Layout
