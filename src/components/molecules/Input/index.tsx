import * as React from 'react'
import styled from 'styled-components'
import Error from '../../atoms/FormError'

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  &:not(:first-child) {
    margin-top: 30px;
  }
  &:after {
    background-color: #aaa;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    transition: .3s;
    width: 300px;
  }
  &:focus-within:after {
    background-color: #00C5B2;
    height: 2px;
    transition: .3s;
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;  
    &:after {
      width: 100%;
    }
    &:focus-within:after {
      width: 100%;
    }
  }
`

const MyInput = styled.input`
  background-color: transparent;
  font-size: 18px;
  line-height: 2;
  padding: 10px;
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
      <MyInput
        value={ value }
        onChange={ onChange }
        type={ type }
        name={ name }
        placeholder={ placeholder }
      />
      { (() => error && <Error text={ error } />)() }
    </Wrapper>
  )
}

export default Input
