import React from 'react'
import styles from './main-title.module.css'

export default ({ title, category = '' }) => category ? (
  <h1 className={ styles.title }>
    <span className={styles.category}>{ category }</span>
    <span className={styles.main}>{ title }</span>
  </h1>
) : (
  <h1 className={ styles.title }>{ title }</h1>
)
