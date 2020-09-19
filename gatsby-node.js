// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulCaseStudy {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulCaseStudy.edges.forEach(({ node }) => {
    createPage({
      path: `/case-studies/${node.slug}`,
      component: path.resolve('./src/components/CaseStudyDetail/index.js'),
      context: {
        slug: node.slug
      }
    })
  })
}
