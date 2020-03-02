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
import NavyButton from '../../atoms/NavyButton'
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
  position: relative;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px 100px;
    width: 100%;
    min-width: 100%;
    margin: 0 auto;
    min-height: 100%;
    height: 100%;
  }
`

const CatchCopyWrapper = styled.div`
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding-top: 100px;
  }
`

const CatchCopy = styled.p`
  color: ${ color.navy.deep };
  font-size: 70px;
  line-height: 1.5;
  ${ SansationLight };
  
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`

const SiteIntroduction = styled.h1`
  ${ ralewayMixin };
  color: ${ color.green.base };
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  column-gap: 100px;
  margin-top: 90px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 25px;
    margin-top: 350px;
  }
`

const SquareWrapper = styled.div`
  width: 554px;
  height: 277px;
  position: relative;
  transform: translateX(75px);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 355px;
  }
`

const slide1 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.3%);
  }
`

const slide2 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-66.6%);
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
  
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    left: 0;
    margin: auto;
  }
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
      <CatchCopyWrapper>
        <CatchCopy>
          Innovation<br />
          through<br />
          Development.
        </CatchCopy>
        <SiteIntroduction>Akifumi Sato Portfolio</SiteIntroduction>
      </CatchCopyWrapper>
      <ButtonWrapper>
        <NavyButton to="/about/">about</NavyButton>
        <NavyButton to="/blog/">blog</NavyButton>
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
