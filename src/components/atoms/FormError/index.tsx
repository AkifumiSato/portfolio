import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/color'

const Error = styled.p`
  color: ${colors.red['500']};
  font-size: 14px;
  line-height: 1.5;
  padding: 10px 0;
`

type Props = {
  text: string
}

const FormError: React.FC<Props> = ({ text }) => <Error>{text}</Error>

export default FormError
