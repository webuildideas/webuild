// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Page from '../components/Page'
import SEO from '../components/SEO'

const WhatWeDo = () => (
  <Page>
    <SEO title="What We Do" />
    <MaxWidthContainer>
      <PageIntro
        heading="We deliver results for startups <br /> through user-driven design"
        blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
      />
    </MaxWidthContainer>
  </Page>
)

export default WhatWeDo
