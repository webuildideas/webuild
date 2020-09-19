// Packages
import React from 'react'

// Styled component
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import BioCard from '.'

const BioCardDecorator = (story) => (
  <div
    style={{
      marginTop: '64px',
      backgroundColor: '#F9F9F9',
      paddingTop: '32px',
      paddingBottom: '32px'
    }}
  >
    <SiteMaxWidthContainer>{story()}</SiteMaxWidthContainer>
  </div>
)

export default {
  title: 'BioCard',
  component: BioCard,
  parameters: {
    componentSubtitle:
      'Renders a photo and description of a person in a Card layout.'
  },
  decorators: [BioCardDecorator]
}

export const defaultState = () => (
  <BioCard>
    <h2>We've Been There, Too.</h2>
    <p>
      Meet our founder, Evan. He has bootstrapped and co-founded multiple
      companies, all while traveling to 35 countries across 4 continents.
    </p>

    <p>
      Given his experience co-founding and growing startups, Evan has intimate
      experience with building products that get results, and he’s committed to
      helping other founders do the same.
    </p>
  </BioCard>
)

defaultState.story = {
  name: 'Default'
}
