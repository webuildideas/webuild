// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Meta from '../components/Meta'

const CaseStudies = () => (
  <>
    <Meta title="Case Studies" />
    <MaxWidthContainer>
      <PageIntro
        heading="We help our partners solve <br> ambitious design challenges"
        blurb="We partner with inspiring entrepreneurs and values-driven companies to design and create world-class digital products, tools and experiences."
      />
    </MaxWidthContainer>
  </>
)

export default CaseStudies
