// Packages
import React from 'react'

// Components
import PageIntro, { renderMarkdownBold } from '.'

export default {
  title: 'PageIntro',
  component: PageIntro,
  parameters: {
    componentSubtitle: 'Page Intro Hero Text',
  },
}

export const normal = () => (
  <PageIntro>
    __Supercharge your product with results-driven design.__ We help you iterate
    and optimize without breaking stride to increase retention and attract new
    users.
  </PageIntro>
)

normal.story = {
  name: 'Default',
}
