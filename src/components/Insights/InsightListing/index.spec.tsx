import React from 'react'
import { render } from '@testing-library/react'
import { TypeInsight } from '@common/types/Insight'
import InsightListing from '.'

const INSIGHT: TypeInsight = {
  type: 'Article',
  topics: ['clients'],
  title: 'Amazing article about design',
  slug: 'amazing-article',
  publishDate: '02-22-2021',
  content: {
    raw: 'Content of this article!',
    references: []
  },
  author: {
    name: 'Joe Rogan',
    headshot: {
      fixed: {
        width: 50,
        height: 50,
        src: 'headshot-src.jpg',
        srcSet: 'headshot-srcset.jpg'
      }
    }
  }
}

describe('<InsightListing />', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <InsightListing insight={INSIGHT} />
    )

    const title = getByText('Amazing article about design')
    const illustration = getByTestId('insightListingIllustration')

    expect(title).toBeTruthy()
    expect(illustration).toBeTruthy()
  })
})
