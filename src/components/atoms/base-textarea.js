import React, { useState } from 'react'
import styles from '../../styles/form.module.css'

export default (props) => {
  const {
    cols = '30',
    rows = '5',
    value = '',
    placeholder = 'Free Text',
    onBlur = () => true,
    error = '',
  } = props

  const [tmpValue, setTmpValue] = useState(value)
  const [animationEnd, setAnimationEnd] = useState(false)

  return (
    <div className={ styles.textareaWrap } onAnimationEnd={ () => setAnimationEnd(true) }>
      <textarea
        className={ styles.textarea }
        cols={ cols }
        rows={ rows }
        value={ tmpValue }
        onChange={ e => setTmpValue(e.target.value) }
        onBlur={ e => onBlur(e) && setAnimationEnd(false) }
        placeholder={ placeholder }
      />
      { (() => error && !animationEnd && <p className={ styles.error }>{ error }</p>)() }
    </div>
  )

}