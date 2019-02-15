import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'

export default ({ article }) => {
  return (
    <Link to={`/blog/${article.slug}`} className={styles.link}>
      <p className={styles.day}>{article.publishDate}</p>
      <img src={article.heroImage.sizes.srcWebp} className={styles.image} alt="" />
      <div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.paragraph}>{article.description.description}</p>
      </div>
    </Link>
  )
}
