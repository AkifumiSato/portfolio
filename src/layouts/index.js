import React from 'react'
import base from './base.css'
import styles from './index.module.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={ styles.wrapper }>
        { children() }
      </div>
    )
  }
}

export default Template
