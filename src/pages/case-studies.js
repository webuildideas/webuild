// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Page from '../components/Page'
// import SEO from '../components/SEO'

const CaseStudies = () => (
  <Page>
    {/* <SEO title="What We Do" /> */}
    <MaxWidthContainer>
      <PageIntro
        heading="We help our partners solve <br> ambitious design challenges"
        blurb="We partner with inspiring entrepreneurs and values-driven companies to design and create world-class digital products, tools and experiences."
      />
    </MaxWidthContainer>
  </Page>
)

export default CaseStudies
