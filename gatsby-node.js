const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const CaseStudyDetail = path.resolve('./src/components/CaseStudyDetail')
  return new Promise(resolve => {
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
          component: CaseStudyDetail,
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
