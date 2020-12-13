import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/color'
import { ralewayMixin } from '../../../styles/font'
import Error from '../../atoms/FormError'

const Caption = styled.div`
  color: ${colors.gray['300']};
  font-size: 15px;
  ${ralewayMixin};
`

const MyTextarea = styled.textarea`
  border: 1px solid ${colors.gray['100']};
  border-radius: 5px;
  font-size: 14px;
  ${ralewayMixin};
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
    <div>
      <Caption>{name}</Caption>
      <MyTextarea
        cols={cols}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <Error text={error} />}
    </div>
  )
}

export default Textarea
