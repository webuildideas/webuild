import React from 'react'
import Page from '../components/Page'
import SEO from '../components/Seo'
import PageIntro from '../components/PageIntro'

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <PageIntro
      heading="World-class product design for your startup"
      blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
    />
  </Page>
)

export default IndexPage
