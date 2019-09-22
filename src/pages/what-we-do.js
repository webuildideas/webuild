// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'

const WhatWeDo = () => (
  <>
    <Meta title="What We Do" />
    <SiteMaxWidthContainer>
      <PageIntro
        heading="We deliver results for startups <br /> through user-driven design"
        blurb="We combine our deep expertise in product design and strategy to accelerate business growth for industry leaders and fast-growing startups."
      />
    </SiteMaxWidthContainer>
  </>
)

export default WhatWeDo
