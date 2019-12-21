// Packages
import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

// Components
import PageIntro, { renderMarkdownBold } from '../index'

describe('renderMarkdownBold', () => {
  it('replaces __copy__ with <span>copy</span>', () => {
    const copy = '__Supercharge your product with results-driven design.__'
    const expected =
      '<span>Supercharge your product with results-driven design.</span>'
    expect(renderMarkdownBold(copy)).toBe(expected)
  })
})

describe('<PageIntro />', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(
      <PageIntro>
        __Supercharge your product with results-driven design.__ We help you
        iterate and optimize without breaking stride to increase retention and
        attract new users.
      </PageIntro>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
