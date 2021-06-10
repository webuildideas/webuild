import React from 'react'
import { render } from '@testing-library/react'
import { INSIGHT_ARTICLE } from '@exampleData/Insight'
import ListingInsight from '../ListingInsight'

describe('<ListingInsight />', () => {
  it('renders correctly', () => {
    const { getByTestId, getAllByTestId, getByText } = render(
      <ListingInsight insight={INSIGHT_ARTICLE} />
    )

    const title = getByText('Amazing article about design')
    const illustration = getByTestId('listingInsightIllustration')
    const typeIcon = getByTestId('insightTagsTypeIcon')
    const topicIcon = getAllByTestId('insightTagsTopicIcon')

    expect(title).toBeTruthy()
    expect(illustration).toBeTruthy()
    expect(typeIcon).toBeTruthy()
    expect(topicIcon).toHaveLength(1)
  })
})
