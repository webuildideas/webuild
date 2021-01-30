import React from 'react'
import { render } from '@testing-library/react'
import { INSIGHT_ARTICLE } from '@exampleData/Insight'
import InsightListing from '.'

describe('<InsightListing />', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <InsightListing insight={INSIGHT_ARTICLE} />
    )

    const title = getByText('Amazing article about design')
    const illustration = getByTestId('insightListingIllustration')

    expect(title).toBeTruthy()
    expect(illustration).toBeTruthy()
  })
})
