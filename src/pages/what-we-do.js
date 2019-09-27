// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import Contact from '../components/Contact'
import PageIntro from '../components/PageIntro'
import Footer from '../components/Footer'

const WhatWeDo = () => (
  <>
    <Meta title="What We Do" />
    <SiteMaxWidthContainer>
      <PageIntro
        heading="We deliver results for startups <br /> through user-driven design"
        blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
      />
      <Contact />
    </SiteMaxWidthContainer>
    <Footer />
  </>
)

export default WhatWeDo
