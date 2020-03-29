const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
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
              slug
              id
            }
          }
        }
      }
    `,
  )
  if (result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog list pages
  const posts = result.data.allContentfulBlogPost.edges
  const limit = 10
  const numPages = Math.ceil(posts.length / limit)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${ i + 1 }`,
      component: path.resolve('./src/templates/BlogList.tsx'),
      context: {
        skip: i * limit,
        limit,
        pageCount: numPages,
        currentPage: i + 1,
        baseUrl: '/blog/',
      },
    })
  })

  // Create blog article pages
  posts.forEach((post) => {
    createPage({
      path: `/blog/${ post.node.createdAt }/${ post.node.slug }.html`,
      component: path.resolve('./src/templates/BlogPost.tsx'),
      context: {
        id: post.node.id,
      },
    })
  })
}