import React from 'react'
import styles from './base-input.module.css'

export default ({ type='text', placeholder='' }) => (
  <div className={ styles.inputText }>
    <input type={ type } placeholder={ placeholder } />
  </div>
)
