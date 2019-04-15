import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { GlobalStyles, ralewayMixin } from '../../styles/mixin/font'
import Navigation from '../molecules/navigation'

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
  ${ralewayMixin}
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
  ${ralewayMixin}
  font-size: 14px;
  left: 7%;
  position: absolute;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
`

export default ({ children, rootLink = true }) => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Wrapper>
      <GlobalStyles />
      <Navigation />
      { rootLink && (
        <SiteRootLink to={ '/' }>
          <StrongFont>A</StrongFont>KIFUMI
          &nbsp;
          <StrongFont>S</StrongFont>ATO
        </SiteRootLink>
      ) }
      <Contents>
        { children }
        <Copyright>©︎akfm.sato.jp { year }</Copyright>
      </Contents>
    </Wrapper>
  )
}
