import path from 'path'
import uniq from 'lodash/uniq'
import orderBy from 'lodash/orderBy'

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulCaseStudy {
        nodes {
          slug
        }
      }

      allContentfulService {
        nodes {
          slug
        }
      }

      allContentfulInsight(filter: { title: { ne: "PLACEHOLDER" } }) {
        nodes {
          slug
          topics
          type
        }
      }
    }
  `)

  const {
    allContentfulCaseStudy: caseStudies,
    allContentfulService: services,
    allContentfulInsight: insights
  } = result.data

  caseStudies.nodes.forEach((node) => {
    createPage({
      path: `/case-studies/${node.slug}`,
      component: path.resolve('./src/templates/case-study.tsx'),
      context: {
        slug: node.slug
      }
    })
  })

  services.nodes.forEach((node) => {
    createPage({
      path: `/what-we-do/${node.slug}`,
      component: path.resolve('./src/templates/service.tsx'),
      context: {
        slug: node.slug
      }
    })
  })

  const topics = []
  const types = []
  insights.nodes.map((node) => {
    if (node.topics) {
      topics.push(...node.topics)
    }

    if (node.type) {
      types.push(node.type)
    }
    return true
  })

  createPage({
    path: '/insights',
    component: path.resolve('./src/templates/insights.tsx'),
    context: {
      topics: uniq(topics),
      types: orderBy(uniq(types))
    }
  })

  insights.nodes.forEach((node) => {
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
