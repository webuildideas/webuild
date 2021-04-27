/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { graphql, PageProps } from 'gatsby'

// Common
import {
  TypeInsight,
  TypeInsightTopic,
  TypeInsightType
} from '@common/types/Insight'
import '@common/styles/templates/insights.css'

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
import ListingInsightSkeleton from '@modules/contentHub/components/ListingInsightSkeleton'
import FeaturedInsight from '@modules/contentHub/components/FeaturedInsight'
import Pagination from '@modules/contentHub/components/Pagination'
import Footer from '@components/Footer'
import EmailSignUpForm from '@modules/forms/EmailSignupForm'

interface Props {
  location: PageProps['location']
  data: {
    contentfulContentHub: {
      featuredInsight: TypeInsight
    }
  }
  pageContext: {
    topics: TypeInsightTopic[]
    types: TypeInsightType[]
  }
}

export interface FilterState<T> {
  noFilters: boolean
  filters: T[]
}

const PAGINATION_LIMIT = 7

const Insights = ({
  location,
  data: {
    contentfulContentHub: { featuredInsight }
  },
  pageContext: { topics, types }
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
    filters: types
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
          filters: hasNotFilters ? types : filterWithTypeRemoved,
          noFilters: !!hasNotFilters
        })

        fetchMore({
          variables: {
            skip: 0,
            limit: PAGINATION_LIMIT,
            types: hasNotFilters ? types : filterWithTypeRemoved
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
    [typesFilter, fetchMore, setTypesFilter, types]
  )

  useEffect(() => {
    if (data && data?.insightCollection?.items) {
      setTotal(data.insightCollection.total)
    }
  }, [data])
  return (
    <div className="InsightsPage">
      <Meta location={location} title="Insights" />
      <div className="InsightsPage-header">
        <div className="InsightsPage-header-content">
          <h1 className="mb-4 text-h1">Insights & Ideas</h1>
          <p className="text-title-subheading">
            A collection of thoughts we are most proud of, from all faces of our
            diverse team.
          </p>
        </div>
      </div>
      <div className="InsightsPage-feature">
        {featuredInsight ? <FeaturedInsight insight={featuredInsight} /> : null}
      </div>

      <div className="InsightsPage-main">
        <aside className="InsightsPage-filters">
          <InsightFilters
            createOnTopicClickHandler={createOnTopicClickHandler}
            createOnTypeClickHandler={createOnTypeClickHandler}
            topics={topics}
            topicsFilter={topicsFilter}
            types={types}
            typesFilter={typesFilter}
          />
        </aside>

        <div className="InsightsPage-insights">
          {loadingOrNoItems || error ? (
            <>
              {loading ? (
                <>
                  <ListingInsightSkeleton />
                  <ListingInsightSkeleton />
                  <ListingInsightSkeleton />
                  <ListingInsightSkeleton />
                  <ListingInsightSkeleton />
                  <ListingInsightSkeleton />
                </>
              ) : null}

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
        </div>

        <div className="InsightsPage-pagination">
          {showPagination ? (
            <Pagination
              marginPagesDisplayed={1}
              onPageChange={fetchMoreInsights}
              pageCount={Math.ceil(total! / PAGINATION_LIMIT)}
              pageRangeDisplayed={5}
            />
          ) : null}
        </div>

        <aside className="InsightsPage-ctas">
          <EmailSignUpForm location={location.href} />
        </aside>
      </div>
      <Footer />
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
        featuredIllustration {
          file {
            url
          }
        }
      }
    }
  }
`

export default Insights
