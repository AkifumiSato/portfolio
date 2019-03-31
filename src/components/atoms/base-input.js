import React from 'react'
import styles from './base-input.module.css'

export default ({ type='text', placeholder='', value='', onChange }) => (
  <div className={ styles.inputText }>
    <input value={ value } onChange={ e => onChange(e) } type={ type } placeholder={ placeholder } />
  </div>
)
