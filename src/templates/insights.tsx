/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { graphql } from 'gatsby'

// Common
import {
  TypeInsight,
  TypeInsightTopic,
  TypeInsightType
} from '@common/types/Insight'

// GraphQL
import {
  InsightsListingArgs,
  InsightsListingData,
  FILTER_INSIGHTS_QUERY
} from '@modules/contentHub/graphql/queries'

// Components
import Meta from '@components/Meta'
import InsightFilters from '@modules/contentHub/components/InsightFilters'
import ListingInsight from '@modules/contentHub/components/ListingInsight'
import FeaturedInsight from '@modules/contentHub/components/FeaturedInsight'
import Pagination from '@modules/contentHub/components/Pagination'

interface Props {
  data: {
    contentfulContentHub: {
      featuredInsight: TypeInsight
    }
  }
  pageContext: {
    topics: TypeInsightTopic[]
  }
}

export interface FilterState<T> {
  noFilters: boolean
  filters: T[]
}

const PAGINATION_LIMIT = 2
const ALL_TYPES: TypeInsightType[] = [
  'Article',
  'Event',
  'Email Course',
  'Podcast',
  'Publication',
  'Video',
  'Webinar',
  'White Paper'
]

const Insights = ({
  data: {
    contentfulContentHub: { featuredInsight }
  },
  pageContext: { topics }
}: Props) => {
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState<number | null>(null)
  const [topicsFilter, setTopicsFilter] = useState<
    FilterState<TypeInsightTopic>
  >({
    noFilters: true,
    filters: topics
  })
  const [typesFilter, setTypesFilter] = useState<FilterState<TypeInsightType>>({
    noFilters: true,
    filters: ALL_TYPES
  })
  const { loading, error, data, fetchMore } = useQuery<
    InsightsListingData,
    InsightsListingArgs
  >(FILTER_INSIGHTS_QUERY, {
    variables: {
      skip,
      limit: PAGINATION_LIMIT,
      topics: topicsFilter.filters,
      types: typesFilter.filters
    }
  })

  const noInisights = data?.insightCollection.items.length === 0
  const loadingOrNoItems = loading || noInisights
  const showPagination = total && total > PAGINATION_LIMIT

  const fetchMoreInsights = useCallback(
    ({ selected }: { selected: number }) => {
      const newSkip = selected * PAGINATION_LIMIT
      fetchMore({
        variables: {
          skip: newSkip,
          limit: PAGINATION_LIMIT
        }
      }).then((response) => {
        setSkip(newSkip)
        setTotal(response.data.insightCollection.total)
      })
    },
    [fetchMore]
  )

  const createOnTopicClickHandler = useCallback(
    (name: TypeInsightTopic) => () => {
      if (topicsFilter.noFilters) {
        setTopicsFilter({
          filters: [name],
          noFilters: false
        })
        fetchMore({
          variables: {
            skip: 0,
            limit: PAGINATION_LIMIT,
            topics: [name]
          }
        }).then((response) => {
          setSkip(0)
          setTotal(response.data.insightCollection.total)
        })
        return
      }

      if (topicsFilter.filters.includes(name)) {
        const filterWithTopicRemoved = topicsFilter.filters.filter(
          (topic) => topic !== name
        )
        const hasNoFilters = filterWithTopicRemoved.length === 0
        setTopicsFilter({
          filters: hasNoFilters ? topics : filterWithTopicRemoved,
          noFilters: hasNoFilters
        })
        fetchMore({
          variables: {
            skip: 0,
            limit: PAGINATION_LIMIT,
            topics: hasNoFilters ? topics : filterWithTopicRemoved
          }
        }).then((response) => {
          setSkip(0)
          setTotal(response.data.insightCollection.total)
        })
        return
      }

      setTopicsFilter((prevState) => {
        return {
          ...prevState,
          filters: [...prevState.filters, name]
        }
      })
      fetchMore({
        variables: {
          skip: 0,
          limit: PAGINATION_LIMIT
        }
      }).then((response) => {
        setSkip(0)
        setTotal(response.data.insightCollection.total)
      })
    },
    [topicsFilter, fetchMore, topics, setTopicsFilter]
  )

  const createOnTypeClickHandler = useCallback(
    (name: TypeInsightType) => () => {
      if (typesFilter.noFilters) {
        setTypesFilter({
          filters: [name],
          noFilters: false
        })
        fetchMore({
          variables: {
            skip: 0,
            limit: PAGINATION_LIMIT,
            types: [name]
          }
        }).then((response) => {
          setSkip(0)
          setTotal(response.data.insightCollection.total)
        })
        return
      }

      if (typesFilter.filters.includes(name)) {
        const filterWithTypeRemoved = typesFilter.filters.filter(
          (type) => type !== name
        )
        const hasNotFilters = filterWithTypeRemoved.length === 0
        setTypesFilter({
          filters: hasNotFilters ? ALL_TYPES : filterWithTypeRemoved,
          noFilters: !!hasNotFilters
        })

        fetchMore({
          variables: {
            skip: 0,
            limit: PAGINATION_LIMIT,
            types: hasNotFilters ? ALL_TYPES : filterWithTypeRemoved
          }
        }).then((response) => {
          setSkip(0)
          setTotal(response.data.insightCollection.total)
        })
        return
      }

      setTypesFilter((prevState) => {
        return {
          filters: [...prevState.filters, name],
          noFilters: prevState.noFilters
        }
      })
      fetchMore({
        variables: {
          skip: 0,
          limit: PAGINATION_LIMIT
        }
      }).then((response) => {
        setSkip(0)
        setTotal(response.data.insightCollection.total)
      })
    },
    [typesFilter, fetchMore, setTypesFilter]
  )

  useEffect(() => {
    if (data && data?.insightCollection?.items) {
      setTotal(data.insightCollection.total)
    }
  }, [data])

  return (
    <div>
      <Meta title="Insights" />
      <div className="px-8 lg:px-11">
        <h1 className="mb-4 text-h1">Insights & Ideas</h1>
        <p className="text-title-subheading mb-8">
          A collection of thoughts we are most proud of, from all faces of our
          diverse team.
        </p>
      </div>
      <div className="pr-8 lg:px-11 mb-8 lg:mb-12">
        {featuredInsight ? <FeaturedInsight insight={featuredInsight} /> : null}
      </div>
      <div className="grid grid-cols-12 xl:gap-8 px-8 pb-30">
        <aside className="col-span-12 xl:col-span-3 mb-16">
          <InsightFilters
            createOnTopicClickHandler={createOnTopicClickHandler}
            createOnTypeClickHandler={createOnTypeClickHandler}
            topics={topics}
            topicsFilter={topicsFilter}
            types={ALL_TYPES}
            typesFilter={typesFilter}
          />
        </aside>
        <div className="col-span-12 xl:col-span-8">
          {loadingOrNoItems || error ? (
            <>
              {loading ? <p>Loading</p> : null}
              {noInisights ? (
                <p className="text-h3">
                  No insights match that search. Please try again or view all
                  insights here.
                </p>
              ) : null}
              {error ? (
                <p>We had trouble fetching posts, please try again.</p>
              ) : null}
            </>
          ) : (
            data?.insightCollection.items.map((insight) => (
              <ListingInsight key={`item-${insight.slug}`} insight={insight} />
            ))
          )}
          <div>
            {showPagination ? (
              <Pagination
                marginPagesDisplayed={1}
                onPageChange={fetchMoreInsights}
                pageCount={Math.ceil(total! / PAGINATION_LIMIT)}
                pageRangeDisplayed={5}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export const CONTENT_HUB_QUERY = graphql`
  query contentHubQuery {
    contentfulContentHub(pageTitle: { eq: "Content Hub" }) {
      featuredInsight {
        type
        topics
        title
        subtitle
        slug
        illustration {
          file {
            url
          }
        }
      }
    }
  }
`

export default Insights
