import { gql, QueryResult } from '@apollo/client'
import {
  TypeInsight,
  TypeInsightTopic,
  TypeInsightType
} from '@common/types/Insight'

export interface InsightsListingArgs {
  skip: number
  limit: number
  topics: TypeInsightTopic[]
  types: TypeInsightType[]
}

export interface InsightsListingData extends QueryResult {
  insightCollection: {
    total: number
    skip: number
    limit: number
    items: TypeInsight[]
  }
}

export const INSIGHTS_LISTING_QUERY = gql`
  query insightsListingQuery($skip: Int!, $limit: Int!) {
    insightCollection(skip: $skip, limit: $limit, order: publishDate_DESC) {
      total
      skip
      limit
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
  query filterInsightsQuery(
    $skip: Int!
    $limit: Int!
    $topics: [String]!
    $types: [String]!
  ) {
    insightCollection(
      skip: $skip
      limit: $limit
      where: { topics_contains_some: $topics, type_in: $types }
      order: publishDate_DESC
    ) {
      total
      skip
      limit
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
