/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const portfolioTemplate = require.resolve('./src/templates/portfolioTemplate.jsx')
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              summary
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    return reporter.panicOnBuild('Error while running GQL query')
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: 'portfolio/' + node.frontmatter.title.toLowerCase().replace(' ', '-'),
      component: portfolioTemplate,
      context: {
        title: node.frontmatter.title
      }
    })
  })
}
