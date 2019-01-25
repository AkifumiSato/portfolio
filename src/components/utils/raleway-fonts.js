import React from 'react'
import styles from './raleway-fonts.module.css'

export default ({ article, children }) => (
  <div className={ styles.fonts }>
    { children }
  </div>
)
