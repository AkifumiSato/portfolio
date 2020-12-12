import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/color'

const MyTitle = styled.h1`
  font-size: ${({ fontSize }: SizeProperty) => fontSize};
  color: ${colors.teal['900']};
  font-weight: normal;
  line-height: 1.2;
  padding-bottom: 50px;
  border-bottom: 1px solid ${colors.darkBlue['300']};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

type SizeProperty = {
  fontSize: string
}

type SizeDictionary = {
  large: SizeProperty
  normal: SizeProperty
}

const sizeProperty: SizeDictionary = {
  large: {
    fontSize: '50px',
  },
  normal: {
    fontSize: '40px',
  },
}

type SizeProps = keyof SizeDictionary

const MainTitle: React.FC<{ size?: SizeProps }> = ({
  size = 'large',
  children,
}) => {
  const { fontSize } = sizeProperty[size]
  return <MyTitle fontSize={fontSize}>{children}</MyTitle>
}

export default MainTitle
