import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'
import Error from '../../atoms/FormError'

const Wrapper = styled.div`
  width: 300px;
  ${ralewayMixin};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Caption = styled.div`
  color: ${colors.gray['300']};
  font-size: 15px;
`

const MyInput = styled.input`
  border: 1px solid ${colors.gray['100']};
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
  margin-top: 10px;
  width: 100%;

  &::placeholder {
    color: #aaa;
  }
`

type Props = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  error?: string
}

const Input: React.FC<Props> = (props) => {
  const {
    value,
    onChange,
    name,
    type = 'text',
    placeholder = '',
    error = '',
  } = props

  return (
    <Wrapper>
      <Caption>{name}</Caption>
      <MyInput
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {error && <Error text={error} />}
    </Wrapper>
  )
}

export default Input
