import * as React from 'react'
import styled from 'styled-components'
import color from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'

const MyTitle = styled.h1`
  display: block;
  ${ ralewayMixin };
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid ${ color.gray.base };

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const MainTitle: React.FC = ({ children }) => (
  <MyTitle>
    { children }
  </MyTitle>
)

export default MainTitle
