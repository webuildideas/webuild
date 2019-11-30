// Packages
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import Testimonial from '.'

// Assets
import headshot from '../../static/images/stories/paul-lappas.png'
import featuredHeadshot from '../../static/images/stories/hiten-shah-large-headshot.png'

storiesOf('Testimonial', module)
  .addDecorator(story => (
    <div
      style={{
        height: '100vh',
        padding: '128px 32px 32px',
        backgroundColor: '#F9F9F9',
      }}
    >
      {story()}
    </div>
  ))
  .add('Default', () => (
    <Testimonial
      company="intermix.io"
      companyRole="CEO/Co-Founder"
      headshot={headshot}
      isStory={true}
      name="Paul Lappas"
    >
      I've worked with dozens of agencies in my career, and hands-down{' '}
      <span>WeBuild stands far above the crowd.</span> If you're lucky enough to
      have the chance to work with them, don't hesitate! Just do it. You won't
      regret it.
    </Testimonial>
  ))
  .add('Featured', () => (
    <Testimonial
      company="KISSmetrics"
      companyRole="Co-Founder"
      headshot={featuredHeadshot}
      isFeatured={true}
      isStory={true}
      name="Hiten Shah"
    >
      Working with WeBuild is awesome. They are reliable, communicate
      effectively and deliver in a timely manner. We've worked together on many
      great projects and it’s always <span>a stress-free experience</span>.
      Looking forward to many more projects together!
    </Testimonial>
  ))
