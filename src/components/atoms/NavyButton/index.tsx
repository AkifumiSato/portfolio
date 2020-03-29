import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import color from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'

const Button = styled(Link)`
  ${ ralewayMixin };
  color: ${ color.white.base };
  font-size: 20px;
  background-color: ${ color.navy.deep };
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  position: relative;
  text-decoration: none;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    opacity: 0.9;
  }  
  
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`

const ButtonText = styled.span`
  z-index: 1;
`

type Props = {
  to: string
}

const NavyButton: React.FC<Props> = ({ to, children }) => (
  <Button to={ to }>
    <ButtonText>
      { children }
    </ButtonText>
  </Button>
)

export default NavyButton
