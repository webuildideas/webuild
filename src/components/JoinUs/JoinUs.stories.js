// Packages
import React from 'react'

// Components
import JoinUs from '.'

const JoinUsDecorator = (story) => (
  <div
    style={{
      marginTop: '64px'
    }}
  >
    {story()}
  </div>
)

export default {
  title: 'JoinUs',
  component: JoinUs,
  parameters: {
    componentSubtitle: 'Join Us section advertising WeBuild Jobs'
  },
  decorators: [JoinUsDecorator]
}

export const defaultState = () => <JoinUs />

defaultState.story = {
  name: 'Default'
}
