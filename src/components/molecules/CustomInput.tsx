import * as React from 'react'
import Error from '../atoms/FormError'
import styled  from 'styled-components'

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
  font-size: 18px;
  line-height: 2;
  padding: 10px;
  width: 100%;
  &::placeholder {
    color: #aaa;
  }
`

interface IProps {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onBlur?: Function;
  error?: string;
}

const CustomInput: React.FC<IProps> = (props) => {
  const {
    type = 'text',
    name,
    placeholder = '',
    value = '',
    onBlur = () => true,
    error = '',
  } = props

  const [tmpValue, setTmpValue] = React.useState(value)

  return (
    <Wrapper>
      <MyInput
        value={ tmpValue }
        onChange={ e => setTmpValue(e.target.value) }
        onBlur={ e => onBlur(e) }
        type={ type }
        name={ name }
        placeholder={ placeholder }
      />
      { (() => error && <Error text={ error } />)() }
    </Wrapper>
  )
}

export default CustomInput