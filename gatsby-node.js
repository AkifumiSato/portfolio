const Promise = require('bluebird')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulBlogPost(
          sort: {fields: [createdAt], order: DESC}
        ) {
          edges {
            node {
              createdAt(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `,
  )
  if (result.errors) {
    return
  }
  // ...
  // Create blog-list pages
  const posts = result.data.allContentfulBlogPost.edges
  const limit = 10
  const numPages = Math.ceil(posts.length / limit)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${ i + 1 }`,
      component: path.resolve('./src/templates/BlogList.tsx'),
      context: {
        skip: i * limit,
        limit,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  createdAt(formatString: "YYYY-MM-DD")
                  slug
                  id
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.publishDate}/${post.node.slug}.html`,
            component: blogPost,
            context: {
              id: post.node.id,
            },
          })
        })
      })
    )
  })
}