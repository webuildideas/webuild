// Packages
import React from 'react'

// Styled Components
import ContentMaxWidthContainer from '../Shared/ContentMaxWidthContainer'
import ServicesHeroContainer from './ServicesHeroContainer'

const ServicesHero = () => (
  <ServicesHeroContainer>
    <ContentMaxWidthContainer>
      <h1>
        We deliver results for startups <br /> through user-driven design
      </h1>
      <h2 className="h5">
        We combine our deep expertise in product design and strategy to
        accelerate business growth for industry leaders and fast-growing
        startups.
      </h2>
    </ContentMaxWidthContainer>
  </ServicesHeroContainer>
)

export default ServicesHero
