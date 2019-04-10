import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState((prevState) => {
      return { count: ++prevState.count }
    })
  }

  getToggleClass() {
    let result = ''
    if (this.state.count === 0) {
      result = ''
    } else if (this.state.count % 2 === 0) {
      result = ` ${ styles.close }`
    } else {
      result = ` ${ styles.open }`
    }
    return result
  }

  render() {
    return (
      <div>
        <div className={ `${styles.wrapper}${ this.getToggleClass() }` }>
          <button aria-label="menu" className={ styles.trigger } onClick={ this.onClick }>
            <span className={ styles.hamburger }> </span>
          </button>
          <ul className={ styles.menu }>
            <li><Link to={ '/about/' } className={ styles.link } onClick={ this.onClick }>about</Link></li>
            <li><Link to={ '/blog/' } className={ styles.link } onClick={ this.onClick }>blog</Link></li>
            <li><Link to={ '/contact/' } className={ styles.link } onClick={ this.onClick }>contact</Link></li>
          </ul>
        </div>
        <div className={ `${ styles.overlay }${ this.getToggleClass()}` } onClick={ this.onClick }> </div>
      </div>
    )
  }
}

export default Navigation