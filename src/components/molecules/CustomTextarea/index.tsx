import * as React from 'react'
import Error from '../../atoms/FormError'
import styled  from 'styled-components'

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

interface IProps {
  cols?: number;
  rows?: number;
  value?: string;
  placeholder?: string;
  onBlur?: Function;
  error?: string;
}

const CustomTextarea: React.FC<IProps> = (props) => {
  const {
    cols = 30,
    rows = 5,
    value = '',
    placeholder = 'Free Text',
    onBlur = () => true,
    error = '',
  } = props

  const [tmpValue, setTmpValue] = React.useState(value)

  return (
    <Wrapper>
      <MyTextarea
        cols={ cols }
        rows={ rows }
        value={ tmpValue }
        onChange={ e => setTmpValue(e.target.value) }
        onBlur={ e => onBlur(e) }
        placeholder={ placeholder }
      />
      { (() => error && <Error text={ error } />)() }
    </Wrapper>
  )
}

export default CustomTextarea
