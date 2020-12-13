import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'

const ButtonLink = styled(Link)`
  color: ${colors.white.base};
  font-size: 15px;
  background-color: ${colors.black['700']};
  ${ralewayMixin};
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width = '100%' }: { width?: string }) => width};
  height: 50px;
  position: relative;
  text-decoration: none;
  transition-property: color, background-color;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    color: ${colors.white.base};
  }
`

const Button = ButtonLink.withComponent('button')

type Props = {
  to?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BlackButton: React.FC<Props> = ({ to, onClick, children }) =>
  to ? (
    <ButtonLink to={to}>{children}</ButtonLink>
  ) : (
    <Button onClick={onClick}>{children}</Button>
  )

export default BlackButton
