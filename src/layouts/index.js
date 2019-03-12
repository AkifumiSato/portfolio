import React from 'react'
import Link from 'gatsby-link'
import './base.css'
import styles from './index.module.css'
import fonts from '../components/utils/fonts.module.css'
import Navigation from '../components/navigation'

class Template extends React.Component {
  isRoot() {
    return this.props.location.pathname === '/'
  }

  render() {
    const { children } = this.props
    const date = new Date()
    const year = date.getFullYear()

    return (
      <div className={ styles.wrapper }>
        <Navigation />
        <Link to={ '/' } className={ `${styles.title} ${fonts.raleway} ${this.isRoot() ? styles.hidden : styles.show}` }>
          <span className={ styles.strong }>A</span>KIFUMI
          &nbsp;
          <span className={ styles.strong }>S</span>ATO
        </Link>
        <div className={ styles.inner }>
          { children() }
          <p className={ `${styles.copyright} ${fonts.raleway}` }>©︎akfm.sato.jp { year }</p>
        </div>
      </div>
    )
  }
}

export default Template
