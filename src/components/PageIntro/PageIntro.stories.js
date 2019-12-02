// Packages
import React from 'react'

// Components
import PageIntro from '.'

export default {
  title: 'PageIntro',
  component: PageIntro,
  parameters: {
    componentSubtitle: 'Page Intro Hero Text',
  },
}

export const normal = () => (
  <PageIntro>
    <span>Supercharge your product with results-driven design.</span> We help
    you iterate and optimize without breaking stride to increase retention and
    attract new users.
  </PageIntro>
)

normal.story = {
  name: 'Default',
}
