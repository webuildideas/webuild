// Packages
import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

// Assets
import headshot from '../../../static/images/stories/paul-lappas.png'

// Component
import Testimonial from '../index'

describe('<Testimonial />', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(
      <Testimonial
        company="intermix.io"
        companyRole="CEO/Co-Founder"
        headshot={headshot}
        isStory={true}
        name="Paul Lappas"
      >
        I've worked with dozens of agencies in my career, and hands-down{' '}
        <span>WeBuild stands far above the crowd.</span> If you're lucky enough
        to have the chance to work with them, don't hesitate! Just do it. You
        won't regret it.
      </Testimonial>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders and displays client information', () => {
    const wrapper = shallow(
      <Testimonial
        company="intermix.io"
        companyRole="CEO/Co-Founder"
        headshot={headshot}
        isStory={true}
        name="Paul Lappas"
      >
        I've worked with dozens of agencies in my career, and hands-down{' '}
        <span>WeBuild stands far above the crowd.</span> If you're lucky enough
        to have the chance to work with them, don't hesitate! Just do it. You
        won't regret it.
      </Testimonial>
    )
    const clientName = wrapper.find('.Testimonial__client-name')
    expect(clientName.text()).toBe('Paul Lappas')

    const clientCompany = wrapper.find('.Testimonial__client-company')
    expect(clientCompany.text()).toBe('CEO/Co-Founder, intermix.io')
  })
})
