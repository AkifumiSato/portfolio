import React, { useState } from 'react'
import styles from '../../styles/form.module.css'

export default (props) => {
  const {
    type = 'text',
    name,
    placeholder = '',
    value = '',
    onBlur = () => true,
    error = '',
  } = props

  const [tmpValue, setTmpValue] = useState(value)

  return (
    <div className={ styles.inputText }>
      <input
        value={ tmpValue }
        onChange={ e => setTmpValue(e.target.value) }
        onBlur={ e => onBlur(e) }
        type={ type }
        name={ name }
        placeholder={ placeholder }
      />
      { (() => error && <p className={ styles.error }>{ error }</p>)() }
    </div>
  )
}