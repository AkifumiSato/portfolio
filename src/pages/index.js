import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from './index.module.css'
import fonts from '../components/utils/fonts.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={ siteTitle }/>
        <div className={ `${styles.title} ${fonts.raleway}` }>
          <h1 className={ styles.title__main }>
            <span className={ `${styles.strong} ${styles.animation1}` }>A</span>KIFUMI
            &nbsp;
            <span className={ `${styles.strong} ${styles.animation2}` }>S</span>ATO
          </h1>
          <p className={ styles.title__sub }>frontend developer</p>
        </div>
        <div className={ `${styles.menu} ${fonts.raleway}` }>
          <ul className={ styles.menu__list }>
            <li><Link to={ '/about/' } className={ styles.link }>about</Link></li>
            <li><Link to={ '/blog/' } className={ styles.link }>blog</Link></li>
            <li><Link to={ '/contact/' } className={ styles.link }>contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
