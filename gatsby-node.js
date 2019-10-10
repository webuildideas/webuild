const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCaseStudy {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {
      results.data.allContentfulCaseStudy.edges.forEach(({ node }) => {
        createPage({
          path: `/case-studies/${node.slug}`,
          component: path.resolve('./src/components/CaseStudyDetail/index.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
