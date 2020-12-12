import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/color'

const MyTitle = styled.h1`
  font-size: 50px;
  color: ${colors.teal['900']};
  font-weight: normal;
  text-align: center;
  padding-bottom: 50px;
  border-bottom: 1px solid ${colors.gray['300']};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const MainTitle: React.FC = ({ children }) => <MyTitle>{children}</MyTitle>

export default MainTitle
