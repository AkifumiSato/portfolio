import React, { useState } from 'react'
import styles from '../../styles/form.module.css'

export default (props) => {
  const {
    name,
    cols = '30',
    rows = '5',
    value = '',
    placeholder = 'Free Text',
    onBlur = () => true,
    error = '',
  } = props

  const [tmpValue, setTmpValue] = useState(value)

  return (
    <div className={ styles.textareaWrap }>
      <textarea
        className={ styles.textarea }
        name={ name }
        cols={ cols }
        rows={ rows }
        value={ tmpValue }
        onChange={ e => setTmpValue(e.target.value) }
        onBlur={ e => onBlur(e) }
        placeholder={ placeholder }
      />
      { (() => error && <p className={ styles.error }>{ error }</p>)() }
    </div>
  )

}