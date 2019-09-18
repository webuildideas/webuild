// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Page from '../components/Page'
import SEO from '../components/Seo'

const CaseStudies = () => (
  <Page>
    <SEO title="What We Do" />
    <MaxWidthContainer>
      <PageIntro
        heading="We deliver results for startups through user-driven design"
        blurb="We help founders and their teams design amazing digital products that drive growth, increase engagement & decrease churn."
      />
    </MaxWidthContainer>
  </Page>
)

export default CaseStudies
