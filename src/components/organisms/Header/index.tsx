import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import color from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'
import { zIndex } from '../../../styles/layout'
import NavyButton from '../../atoms/NavyButton'
import Navigation from '../../molecules/Navigation'

const Wrapper = styled.div`
  background-color: ${color.white.base};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: ${zIndex.fixed};

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 25px 50px;
  max-width: 1280px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    max-width: 100%;
  }
`

const Logo = styled.img`
  width: 52px;
  height: 38px;
`

const PCButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  column-gap: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SPButtonWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const WhiteButton = styled(Link)`
  color: ${color.navy.deep};
  font-size: 20px;
  font-weight: bold;
  ${ralewayMixin};
  line-height: 1;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  transition: color;
  transition-duration: 0.3s;

  &:hover {
    color: ${color.green.base};
  }
`

const Header: React.FC = () => (
  <Wrapper>
    <Inner>
      <Link to="/">
        <Logo src="/images/logo.svg" alt="site logo" width="52" height="38" />
      </Link>
      <PCButtonWrapper>
        <WhiteButton to="/about/">about</WhiteButton>
        <WhiteButton to="/blog/">blog</WhiteButton>
        <NavyButton to="/contact/">contact</NavyButton>
      </PCButtonWrapper>
      <SPButtonWrapper>
        <Navigation />
      </SPButtonWrapper>
    </Inner>
  </Wrapper>
)

export default Header
