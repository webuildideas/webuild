// Packages
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
// Styled Components
import { withKnobs, text } from '@storybook/addon-knobs'

// Component
import Testimonial from '.'

// Assets
import headshot from '../../static/images/stories/paul-lappas.png'

storiesOf('Testimonial', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const name = text('Name', 'Paul Lappas')
    return (
      <div style={{ margin: '16px 16px 0' }}>
        <Testimonial
          name={name}
          headshotSrc={headshot}
          companyRole="CEO/Co-Founder"
          company="intermix.io"
          testimonial="I've worked with dozens of agencies in my career, and hands-down WeBuild stands far above the crowd. If you're lucky enough to have the chance to work with them, don't hesitate! Just do it. You won't regret it."
        />
      </div>
    )
  })
