import React from 'react'
import base from './base.css'
import styles from './index.module.css'
import fonts from '../components/utils/fonts.module.css'
import Navigation from '../components/navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const date = new Date()
    const year = date.getFullYear()

    return (
      <div className={ styles.wrapper }>
        <Navigation />
        <div className={ styles.inner }>
          { children() }
          <p className={ `${styles.copyright} ${fonts.raleway}` }>©︎akfm.sato.jp { year }</p>
        </div>
      </div>
    )
  }
}

export default Template
