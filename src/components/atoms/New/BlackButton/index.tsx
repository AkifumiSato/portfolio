import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/color'

const Button = styled(Link)`
  color: ${colors.white.base};
  font-size: 15px;
  background-color: ${colors.black['700']};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: relative;
  text-decoration: none;
  transition-property: color, background-color;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${colors.white.base};
    color: ${colors.black['700']};
  }
`

type Props = {
  to: string
}

const BlackButton: React.FC<Props> = ({ to, children }) => (
  <Button to={to}>{children}</Button>
)

export default BlackButton
