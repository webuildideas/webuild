/* eslint-disable @typescript-eslint/no-var-requires */
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
      allContentfulInsight {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const {
    allContentfulCaseStudy: caseStudies,
    allContentfulInsight: insights
  } = result.data

  caseStudies.edges.forEach(({ node }) => {
    createPage({
      path: `/case-studies/${node.slug}`,
      component: path.resolve('./src/templates/case-study.tsx'),
      context: {
        slug: node.slug
      }
    })
  })

  insights.edges.forEach(({ node }) => {
    // const topics = node.topics.map((topic) => topic.name)
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('./src/templates/insight.tsx'),
      context: {
        slug: node.slug
        // topics
      }
    })
  })
}
