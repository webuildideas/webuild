// Packages
import React from 'react'

// Components
import JoinUs from '.'

export default {
  title: 'JoinUs',
  component: JoinUs,
  parameters: {
    componentSubtitle: 'Join Us section advertising WeBuild Jobs',
  },
}

export const defaultState = () => <JoinUs />

defaultState.story = {
  name: 'Default',
}
