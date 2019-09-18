import React from 'react'
// Components
import PageIntro from '../components/PageIntro'
import Page from '../components/Page'
import SEO from '../components/Seo'

const CaseStudies = () => (
  <Page>
    <SEO title="What We Do" />
    <PageIntro
      heading="We deliver results for startups through user-driven design"
      blurb="We help founders and their teams design amazing digital products that drive growth, increase engagement & decrease churn."
    />
  </Page>
)

export default CaseStudies
