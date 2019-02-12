import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'
import MainTitle from '../components/main-title'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div>
        <Helmet title={ siteTitle } />
        <MainTitle title='Blog' />
        <ul className={ styles['tag-list'] }>
          <li>
            <Link to={ '/' } className={ styles.link }>gatsby</Link>
          </li>
          <li>
            <Link to={ '/' } className={ styles.link }>react</Link>
          </li>
        </ul>
        <div style={ { 'margin-top': '10px' } }>
          <ul className="article-list">
            { posts.map(({ node }) => {
              return (
                <li key={ node.slug }>
                  <ArticlePreview article={ node } />
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
