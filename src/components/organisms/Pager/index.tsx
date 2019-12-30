import * as React from 'react'
import styled from 'styled-components'
import { ralewayMixin } from '../../../styles/font'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  ${ ralewayMixin };
  justify-content: space-between;
`

const ButtonSpace = styled.div`
  height: 50px;
  width: 100px;
`

const BaseButton = styled.a`
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(0,0,0,.15);
  display: flex;
  ${ ralewayMixin };
  font-size:  15px;
  justify-content: center;
  text-decoration: none;
  height: 50px;
  width: 100px;
`

const PrevLink = styled(BaseButton)`
  border: 1px solid #00C5B2;
  color: #00C5B2;
`

const NextLink = styled(BaseButton)`
  background-color: #00C5B2;
  color: #FFF;
`

interface IProps {
  current: number
  max: number
}

const Pager: React.FC<IProps> = ({ current, max }) => (
  <Wrapper>
    { current === 1 ? <ButtonSpace /> : <PrevLink>&lt; prev</PrevLink> }
    { `${ current } / ${ max }` }
    { current === max ? <ButtonSpace /> : <NextLink>next &gt;</NextLink> }
  </Wrapper>
)

export default Pager
