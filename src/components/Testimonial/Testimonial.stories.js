// Packages
import React from 'react'

// Component
import Testimonial from '.'

// Assets
import headshot from '../../static/images/stories/paul-lappas.png'
import featuredHeadshot from '../../static/images/stories/hiten-shah-large-headshot.png'

export default {
  title: 'Testimonial',
  component: Testimonial,
  parameters: {
    componentSubtitle: 'Display Client Testimonials',
  },
}

const normalDecorator = story => (
  <div
    style={{
      backgroundColor: '#F9F9F9',
      padding: '32px',
    }}
  >
    {story()}
  </div>
)

export const normal = () => (
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
)

normal.story = {
  name: 'Default',
  decorators: [normalDecorator],
}

const featuredDecorator = story => (
  <div
    style={{
      backgroundColor: '#F9F9F9',
      padding: '128px 32px',
    }}
  >
    {story()}
  </div>
)

export const featured = () => (
  <Testimonial
    company="KISSmetrics"
    companyRole="Co-Founder"
    featuredHeadshot={featuredHeadshot}
    headshot={headshot}
    isFeatured={true}
    isStory={true}
    name="Hiten Shah"
  >
    Working with WeBuild is awesome. They are reliable, communicate effectively
    and deliver in a timely manner. We've worked together on many great projects
    and it’s always <span>a stress-free experience</span>. Looking forward to
    many more projects together!
  </Testimonial>
)

featured.story = {
  decorators: [featuredDecorator],
}
