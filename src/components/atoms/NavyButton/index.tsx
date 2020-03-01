import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import color from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'

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
