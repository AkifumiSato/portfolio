import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import styles from './index.module.css'
import fonts from '../styles/fonts.module.css'

export default ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout rootLink={ false }>
      <Helmet title={ siteTitle } />
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
          <li>
            <Link to={ '/about/' } className={ styles.link }>
              <span className={ styles.link__text }>about</span>
            </Link>
          </li>
          <li>
            <Link to={ '/blog/' } className={ styles.link }>
              <span className={ styles.link__text }>blog</span>
            </Link>
          </li>
          <li>
            <Link to={ '/contact/' } className={ styles.link }>
              <span className={ styles.link__text }>contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
