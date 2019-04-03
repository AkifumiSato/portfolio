import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ article, heroImage }) => {
  return (
    <Link to={ `/blog/${article.slug}` } className={ styles.link }>
      <p className={ styles.day }>{ article.publishDate }</p>
      <Img sizes={ heroImage.sizes } className={ styles.image } alt="" />
      <div className={ styles.body }>
        <h3 className={ styles.title }>{ article.title }</h3>
        <p className={ styles.paragraph }>{ article.description.description }</p>
      </div>
    </Link>
  )
}
