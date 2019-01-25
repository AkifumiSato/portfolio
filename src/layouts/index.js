import React from 'react'
import base from './base.css'
import styles from './index.module.css'
import RalewayFonts from '../components/utils/raleway-fonts'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const date   = new Date()
    const year  = date.getFullYear()

    return (
      <div className={ styles.wrapper }>
        <div className={ styles.inner }>
          { children() }
          <RalewayFonts>
            <p className={ styles.copyright }>©︎akfm.sato.jp { year }</p>
          </RalewayFonts>
        </div>
      </div>
    )
  }
}

export default Template
