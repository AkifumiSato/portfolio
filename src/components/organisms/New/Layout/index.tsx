import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/color'
import { GlobalStyles } from '../../../../styles/new/global'
import MainTitle from '../../../atoms/New/MainTitle'

const Wrapper = styled.div`
  background-color: ${colors.white.base};
  box-sizing: border-box;
  min-height: 100vh;
`

const Logo = styled.img`
  width: 100px;
`

const HomeLink = styled(Link)`
  padding: 10px;
`

const LinkText = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
`

const ExternalLinkText = styled.a`
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
`

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
  max-width: 1200px;
  margin: 0 auto;
`

const MainInner = styled.div`
  margin-top: 50px;
`

type Props = {
  isHome?: boolean
  title?: string
}

const Layout: React.FC<Props> = ({ isHome, title, children }) => (
  <Wrapper>
    <GlobalStyles />
    <Header>
      <div>
        {!isHome && (
          <HomeLink to="/">
            <Logo src="/images/new/logo.svg" />
          </HomeLink>
        )}
      </div>
      <HeaderLinks>
        <LinkText to="/about">about</LinkText>
        <LinkText to="/blog">blog</LinkText>
        <ExternalLinkText href="https://github.com/AkifumiSato" target="_blank">
          github
        </ExternalLinkText>
        <LinkText to="/blog">contact</LinkText>
      </HeaderLinks>
    </Header>
    <Main>
      {title ? (
        <>
          <MainTitle>{title}</MainTitle>
          <MainInner>{children}</MainInner>
        </>
      ) : (
        <>{children}</>
      )}
    </Main>
  </Wrapper>
)

export default Layout
