import React, { useState } from 'react'
import styles from './base-input.module.css'

export default (props) => {
  const {
    type = 'text',
    placeholder = '',
    value = '',
    onBlur = () => true,
    error = '',
  } = props

  const [tmpValue, setTmpValue] = useState(value)
  const [animationEnd, setAnimationEnd] = useState(false)

  return (
    <div className={ styles.inputText } onAnimationEnd={() => setAnimationEnd(true)}>
      <input
        value={ tmpValue }
        onChange={ e => setTmpValue(e.target.value) }
        onBlur={ e => onBlur(e) && setAnimationEnd(false) }
        type={ type }
        placeholder={ placeholder }
      />
      { (() => error && !animationEnd && <p className={ styles.error }>{ error }</p>)() }
    </div>
  )

}