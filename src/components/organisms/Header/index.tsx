import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
// @ts-ignore
import logo from '../../../../static/images/logo.svg'
import color from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'
import NavyButton from '../../atoms/NavyButton'
import Navigation from '../../molecules/Navigation'

const Wrapper = styled.div`
  background-color: ${ color.white.base };
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  padding: 25px 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    max-width: 100%;
  }
`

const Logo = styled.img`
  width: 55px;
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
  color: ${ color.navy.deep };
  font-size: 20px;
  ${ ralewayMixin };
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
    color: ${ color.green.base };
  }
`

const Header: React.FC = ({}) => (
  <Wrapper>
    <Link to="/">
      <Logo src={ logo } alt="site logo" />
    </Link>
    <PCButtonWrapper>
      <WhiteButton to="/about/">about</WhiteButton>
      <WhiteButton to="/blog/">blog</WhiteButton>
      <NavyButton to="/contact/">contact</NavyButton>
    </PCButtonWrapper>
    <SPButtonWrapper>
      <Navigation />
    </SPButtonWrapper>
  </Wrapper>
)

export default Header
