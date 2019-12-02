// Packages
import React from 'react'

// Components
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'To trigger an operation',
  },
}

export const primary = () => <Button>Primary Default</Button>

export const secondary = () => (
  <Button type="secondary">Secondary Default</Button>
)
