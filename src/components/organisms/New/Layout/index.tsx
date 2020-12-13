import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/color'
import { ralewayMixin } from '../../../../styles/font'
import { GlobalStyles } from '../../../../styles/new/global'
import MainTitle from '../../../atoms/New/MainTitle'
import Navigation from '../../../molecules/New/Navigation'
import { OnlyPC, OnlySP } from '../../../utils/Devise'

const Wrapper = styled.div`
  background-color: ${colors.white.base};
  box-sizing: border-box;
  min-height: 100vh;
`

const Logo = styled.img`
  display: block;
  width: 100px;
`

const HomeLink = styled(Link)`
  display: block;
  padding: 10px;
`

const LinkText = styled(Link)`
  color: ${colors.darkBlue['700']};
  font-size: 15px;
  font-weight: bold;
  ${ralewayMixin};
  padding: 10px;

  &:hover {
    color: ${colors.darkBlue['400']};
  }
`

const ExternalLinkText = LinkText.withComponent('a')

const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(5px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 70px;
  padding: 5px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 5px 20px;
  }
`

const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`

const Main = styled.main`
  box-sizing: border-box;
  padding: 120px 50px 50px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 120px 20px 50px;
  }
`

const MainInner = styled.div`
  margin-top: 50px;
`

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 50px;
  max-width: 1280px;
  margin: 0 auto 50px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`

const PolicyLink = styled.a`
  font-style: italic;
`

const year = new Date().getFullYear()

type Props = {
  page?: 'detail'
  title?: string
}

const Layout: React.FC<Props> = ({ page, title, children }) => (
  <Wrapper>
    <GlobalStyles />
    <Header>
      <div>
        <HomeLink to="/">
          <Logo src="/images/new/logo.svg" />
        </HomeLink>
      </div>
      <OnlyPC>
        <HeaderLinks>
          <LinkText to="/about">about</LinkText>
          <LinkText to="/blog/">blog</LinkText>
          <ExternalLinkText
            href="https://github.com/AkifumiSato"
            target="_blank"
          >
            github
          </ExternalLinkText>
          <LinkText to="/blog/">contact</LinkText>
        </HeaderLinks>
      </OnlyPC>
      <OnlySP>
        <Navigation />
      </OnlySP>
    </Header>
    <Main>
      {title ? (
        <>
          <MainTitle size={page === 'detail' ? 'normal' : undefined}>
            {title}
          </MainTitle>
          <MainInner>{children}</MainInner>
        </>
      ) : (
        <>{children}</>
      )}
    </Main>
    <Copyright>
      ©︎akfm.dev {year}. Using&nbsp;
      <PolicyLink
        href="https://www.google.com/intl/ja/policies/privacy/partners/"
        target="_blank"
        rel="noopener"
      >
        Google Analytics
      </PolicyLink>
    </Copyright>
  </Wrapper>
)

export default Layout
