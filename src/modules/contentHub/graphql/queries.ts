import { gql, QueryResult } from '@apollo/client'
import { TypeInsight } from '@common/types/Insight'

export interface InsightsListingData extends QueryResult {
  insightCollection: {
    items: TypeInsight[]
  }
}

export const INSIGHTS_LISTING_QUERY = gql`
  query insightsListingQuery {
    insightCollection(order: publishDate_DESC) {
      items {
        title
        topics
        slug
        type
        publishDate
        illustration {
          url
        }
      }
    }
  }
`

export const FILTER_INSIGHTS_QUERY = gql`
  query filterInsightsQuery($topics: [String]!, $types: [String]!) {
    insightCollection(
      where: { topics_contains_some: $topics, type_in: $types }
      order: publishDate_DESC
    ) {
      items {
        title
        topics
        slug
        type
        publishDate
        illustration {
          url
        }
      }
    }
  }
`
