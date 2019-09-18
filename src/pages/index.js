import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageIntro from '../components/PageIntro'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageIntro
      heading="World-class product design for your startup"
      blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
    />
  </Layout>
)

export default IndexPage
