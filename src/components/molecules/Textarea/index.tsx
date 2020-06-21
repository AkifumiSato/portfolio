import * as React from 'react'
import styled from 'styled-components'
import Error from '../../atoms/FormError'

const Wrapper = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 60px;
  }
`

const MyTextarea = styled.textarea`
  border: 1px solid #aaa;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1.5;
  outline: 1px solid transparent;
  padding: 20px;
  width: 100%;
  &:focus {
    border: 2px solid #00C5B2;
    padding: 19px;
  }
  &::placeholder {
    color: #aaa;
  }
`

type Props = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  cols?: number
  rows?: number
  placeholder?: string
  error?: string
}

const Textarea: React.FC<Props> = (props) => {
  const {
    name,
    value,
    onChange,
    cols = 30,
    rows = 5,
    placeholder = 'Free Text',
    error = '',
  } = props

  return (
    <Wrapper>
      <MyTextarea
        cols={ cols }
        rows={ rows }
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
      />
      { (() => error && <Error text={ error } />)() }
    </Wrapper>
  )
}

export default Textarea
