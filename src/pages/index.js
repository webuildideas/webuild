// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import Page from '../components/Page'
import SEO from '../components/Seo'
import PageIntro from '../components/PageIntro'

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <MaxWidthContainer>
      <PageIntro
        heading="World-class product design for your startup"
        blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
      />
    </MaxWidthContainer>
  </Page>
)

export default IndexPage
