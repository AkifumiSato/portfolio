import Link from 'gatsby-link'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'
// @ts-ignore
import greenSquare from '../../../../static/images/greenSquare.svg'
// @ts-ignore
import navySquare from '../../../../static/images/navySquare.svg'
// @ts-ignore
import whiteSquare from '../../../../static/images/whiteSquare.svg'
import color from '../../../styles/color'
import { ralewayMixin, SansationLight } from '../../../styles/font'
import CommonSetting from '../hoc/CommonSetting'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 150px 100px 100px;
  max-width: 1280px;
  width: 100%;
  min-width: 960px;
  margin: 0 auto;
  min-height: 715px;
  height: 90vh;
`

const CatchCopy = styled.p`
  color: ${ color.navy.deep };
  font-size: 70px;
  line-height: 1.5;
  ${ SansationLight };
`

const SiteIntroduction = styled.h1`
  ${ ralewayMixin };
  color: ${ color.green.base };
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  column-gap: 100px;
  margin-top: 90px;
`

const Button = styled(Link)`
  ${ ralewayMixin };
  color: ${ color.white.base };
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.3s;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    transition-duration: 0.3s;
    width: 200px;
    height: 50px;
  }
  
  &::before {
    background-color: ${ color.navy.deep };
  }
  
  &::after {
    opacity: 0;
    border: 1px solid ${ color.navy.deep };
    transform: scale(1.3, 1.3);
  }
  
  &:hover {
    color: ${ color.navy.deep };

    &::before {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
    
    &::after {
      transform: scale(1, 1);
      opacity: 1;
    }
  }  
`

const ButtonText = styled.span`
  z-index: 1;
`

const SquareWrapper = styled.div`
  width: 554px;
  height: 277px;
  position: relative;
`

const slide1 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100px);
  }
`

const slide2 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200px);
  }
`

const Square = styled.img`
  width: 277px;
  height: 277px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

const SlideSquare1 = styled(Square)`
  animation: ${ slide1 } 1s;
  animation-fill-mode: forwards;
`

const SlideSquare2 = styled(Square)`
  animation: ${ slide2 } 1s;
  animation-fill-mode: forwards;
`

const Index: React.FC = () => (
  <Wrapper>
    <div>
      <CatchCopy>
        Innovation<br />
        through<br />
        Development.
      </CatchCopy>
      <SiteIntroduction>Akifumi Sato Portfolio</SiteIntroduction>
      <ButtonWrapper>
        <Button to="/about/">
          <ButtonText>about</ButtonText>
        </Button>
        <Button to="/blog/">
          <ButtonText>blog</ButtonText>
        </Button>
      </ButtonWrapper>
    </div>
    <SquareWrapper>
      <SlideSquare2 src={ navySquare } alt="" />
      <SlideSquare1 src={ greenSquare } alt="" />
      <Square src={ whiteSquare } alt="" />
    </SquareWrapper>
  </Wrapper>
)

export default CommonSetting(Index)
