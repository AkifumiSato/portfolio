import React from 'react'
import Link from 'gatsby-link'
import './style/base.css'
import styles from '../components/layout.module.css'
import fonts from '../components/utils/fonts.module.css'
import Navigation from '../components/navigation'

export default ({ children, rootLink = true }) => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className={ styles.wrapper }>
      <Navigation />
      <Link to={ '/' } className={ `${styles.title} ${fonts.raleway} ${ rootLink ? styles.show : styles.hidden}` }>
        <span className={ styles.strong }>A</span>KIFUMI
        &nbsp;
        <span className={ styles.strong }>S</span>ATO
      </Link>
      <div className={ styles.inner }>
        { children }
        <p className={ `${styles.copyright} ${fonts.raleway}` }>©︎akfm.sato.jp { year }</p>
      </div>
    </div>
  )
}
