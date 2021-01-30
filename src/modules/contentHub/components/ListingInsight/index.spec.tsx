import React from 'react'
import { render } from '@testing-library/react'
import { INSIGHT_ARTICLE } from '@exampleData/Insight'
import ListingInsight from '.'

describe('<ListingInsight />', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <ListingInsight insight={INSIGHT_ARTICLE} />
    )

    const title = getByText('Amazing article about design')
    const illustration = getByTestId('listingInsightIllustration')

    expect(title).toBeTruthy()
    expect(illustration).toBeTruthy()
  })
})
