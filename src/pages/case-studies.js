// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Contact from '../components/Contact'
import Meta from '../components/Meta'

const CaseStudies = () => (
  <>
    <Meta title="Case Studies" />
    <SiteMaxWidthContainer>
      <PageIntro
        heading="We help our partners solve <br> ambitious design challenges"
        blurb="We partner with inspiring entrepreneurs and values-driven companies to design and create world-class digital products, tools and experiences."
      />
      <Contact />
    </SiteMaxWidthContainer>
  </>
)

export default CaseStudies
