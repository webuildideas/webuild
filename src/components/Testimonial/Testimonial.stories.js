// Packages
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// Component
import Testimonial from '.'

// Assets
import headshot from '../../static/stories/paul-lappas.png'

storiesOf('Testimonial', module).add('Default', () => (
  <div style={{ margin: '16px 16px 0' }}>
    <Testimonial
      name="Paul Lappas"
      imageUrl={headshot}
      companyRole="CEO/Co-Founder"
      company="intermix.io"
      testimonial="I've worked with dozens of agencies in my career, and hands-down WeBuild stands far above the crowd. If you're lucky enough to have the chance to work with them, don't hesitate! Just do it. You won't regret it."
    />
  </div>
))
