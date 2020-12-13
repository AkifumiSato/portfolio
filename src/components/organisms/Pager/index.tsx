import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  ${ralewayMixin};
  justify-content: space-between;
`

const ButtonSpace = styled.div`
  height: 50px;
  width: 100px;
`

const BaseButton = styled(Link)`
  align-items: center;
  border-radius: 3px;
  border: 1px solid ${colors.black['500']};
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  color: ${colors.black['500']};
  display: flex;
  ${ralewayMixin};
  font-size: 15px;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s;
  height: 50px;
  width: 100px;

  &:hover {
    box-shadow: 0 4px 48px rgba(0, 0, 0, 0.3);
    background-color: ${colors.black['500']};
    color: #fff;
  }
`

type Props = {
  current: number
  max: number
  prevLink: string
  nextLink: string
}

const Pager: React.FC<Props> = ({ current, max, prevLink, nextLink }) => (
  <Wrapper>
    {current === 1 ? (
      <ButtonSpace />
    ) : (
      <BaseButton to={prevLink}>&lt; prev</BaseButton>
    )}
    {`${current} / ${max}`}
    {current === max ? (
      <ButtonSpace />
    ) : (
      <BaseButton to={nextLink}>next &gt;</BaseButton>
    )}
  </Wrapper>
)

export default Pager
