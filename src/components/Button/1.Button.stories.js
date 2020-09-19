// Packages
import React from 'react'

// Components
import Button from '.'

const buttonDecorator = (story) => (
  <div
    style={{
      padding: '20% 0',
      maxWidth: '400px',
      margin: '0 auto'
    }}
  >
    {story()}
  </div>
)

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Render a Button component'
  },
  decorators: [buttonDecorator]
}

export const primary = () => (
  <Button href="https://www.webuild.io" type="primaryButton">
    Primary Default
  </Button>
)

export const secondary = () => (
  <Button href="https://www.webuild.io" type="secondaryButton">
    Secondary Default
  </Button>
)
