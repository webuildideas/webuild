// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Page from '../components/Page'
import SEO from '../components/Seo'

const WhatWeDo = () => (
  <Page>
    <SEO title="What We Do" />
    <MaxWidthContainer>
      <PageIntro
        heading="What We Do"
        blurb="Services Blurb will go here once it is ready"
      />
    </MaxWidthContainer>
  </Page>
)

export default WhatWeDo
