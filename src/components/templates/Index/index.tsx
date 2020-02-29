import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import color from '../../../styles/color'
import { ralewayMixin, SansationLight } from '../../../styles/font'
import CommonSetting from '../hoc/CommonSetting'

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 200px 100px 100px;
  width: 100%;
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
  background-color: ${ color.navy.deep };
  ${ ralewayMixin };
  color: ${ color.white.base };
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  text-decoration: none;
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`

const Index: React.FC = () => (
  <Wrapper>
    <CatchCopy>
      Innovation<br />
      through<br />
      Development.
    </CatchCopy>
    <SiteIntroduction>Akifumi Sato Portfolio</SiteIntroduction>
    <ButtonWrapper>
      <Button to="/about/">about</Button>
      <Button to="/blog/">blog</Button>
    </ButtonWrapper>
  </Wrapper>
)

export default CommonSetting(Index)
