import React from 'react'
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
        <div style={ { 'margin-top': '10px' } }>
          <ul className={ styles.article_list }>
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
          publishDate(formatString: "YYYY-MM-DD")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`
