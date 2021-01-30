import path from 'path'
import uniq from 'lodash/uniq'

export const createPages = async ({ graphql, actions }) => {
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
            topics
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

  const topics = []
  insights.edges.map((edge) => {
    if (!edge.node.topics) {
      return
    }
    return topics.push(...edge.node.topics)
  })

  createPage({
    path: '/insights',
    component: path.resolve('./src/templates/insights.tsx'),
    context: {
      topics: uniq(topics)
    }
  })

  insights.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('./src/templates/insight.tsx'),
      context: {
        slug: node.slug,
        topics: uniq(topics)
      }
    })
  })
}

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@common': path.resolve(__dirname, 'src/common'),
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@static': path.resolve(__dirname, 'src/static'),
        '@exampleData': path.resolve(__dirname, 'src/exampleData')
      }
    }
  })
}
