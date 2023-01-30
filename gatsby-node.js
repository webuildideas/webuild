import path from 'path'
import uniq from 'lodash/uniq'
import orderBy from 'lodash/orderBy'

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulCaseStudy(
        filter: {
          name: { nin: ["GoSite", "Quadpay", "Tetra", "Yotta", "PLACEHOLDER"] }
        }
      ) {
        nodes {
          slug
          name
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

      allContentfulEmployee {
        nodes {
          slug
          name
          role
          illustration {
            file {
              url
            }
          }
          headshot {
            file {
              url
            }
          }
        }
      }
    }
  `)

  const {
    allContentfulCaseStudy: caseStudies,
    allContentfulService: services,
    allContentfulInsight: insights,
    allContentfulEmployee: employees
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

  let peeps
  employees.nodes.forEach((node, index) => {
    if (employees.nodes.length - (index + 1) >= 4) {
      peeps = [...employees.nodes.slice(index + 1, index + 5)]
    } else if (employees.nodes.length - (index + 1) === 3) {
      peeps = [...employees.nodes.slice(index + 1), employees.nodes[0]]
    } else if (employees.nodes.length - (index + 1) === 2) {
      peeps = [
        ...employees.nodes.slice(index + 1),
        ...employees.nodes.slice(0, 2)
      ]
    } else if (employees.nodes.length - (index + 1) === 1) {
      peeps = [
        ...employees.nodes.slice(index + 1),
        ...employees.nodes.slice(0, 3)
      ]
    } else if (employees.nodes.length === index + 1) {
      peeps = [...employees.nodes.slice(0, 4)]
    }

    createPage({
      path: `/who-we-are/${node.slug}`,
      component: path.resolve('./src/templates/employee.tsx'),
      context: {
        slug: node.slug,
        peeps
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
