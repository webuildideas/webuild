// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { graphql } from 'gatsby'
import { useRecoilState } from 'recoil'
import ReactPaginate from 'react-paginate'

// Common
import { TypeInsight, TypeInsightTopic } from '@common/types/Insight'

// GraphQL
import {
  INSIGHTS_LISTING_QUERY,
  InsightsListingArgs,
  InsightsListingData
} from '@modules/contentHub/graphql/queries'

// Atoms
import { insightPostsAtom } from '@modules/contentHub/store/atoms'

// Components
import Meta from '@components/Meta'
import InsightFilters from '@modules/contentHub/components/InsightFilters'
import ListingInsight from '@modules/contentHub/components/ListingInsight'
import FeaturedInsight from '@modules/contentHub/components/FeaturedInsight'

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

const PAGINATION_LIMIT = 2

const Insights = ({
  data: {
    contentfulContentHub: { featuredInsight }
  },
  pageContext: { topics }
}: Props) => {
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState<number | null>(null)
  const { loading, error, data, fetchMore } = useQuery<
    InsightsListingData,
    InsightsListingArgs
  >(INSIGHTS_LISTING_QUERY, {
    variables: {
      skip,
      limit: PAGINATION_LIMIT
    }
  })
  const [
    {
      items: insights,
      loading: insightsLoading,
      filtersApplied: insightsFetched
    },
    setInsightPosts
  ] = useRecoilState(insightPostsAtom)

  const isLoading = loading || insightsLoading
  const noFilteredItems = insightsFetched && insights.length === 0
  const loadingOrNoItems = isLoading || noFilteredItems

  const fetchMoreInsights = useCallback(
    ({ selected }: { selected: number }) => {
      const newSkip = selected * PAGINATION_LIMIT
      fetchMore({
        variables: {
          skip: newSkip,
          limit: PAGINATION_LIMIT
        }
      }).then(() => setSkip(newSkip))
    },
    [fetchMore]
  )

  useEffect(() => {
    if (data && data?.insightCollection?.items) {
      setTotal(data.insightCollection.total)
      setInsightPosts({
        items: data.insightCollection.items,
        loading: false,
        filtersApplied: false
      })
    }
  }, [data, setInsightPosts])

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
      <div className="grid grid-cols-12 xl:gap-8 px-8">
        <aside className="col-span-12 xl:col-span-3 mb-16">
          <InsightFilters topics={topics} />
        </aside>
        <div className="col-span-12 xl:col-span-8">
          {loadingOrNoItems || error ? (
            <>
              {isLoading ? <p>Loading</p> : null}
              {noFilteredItems ? <p>No Insights found.</p> : null}
              {error ? (
                <p>We had trouble fetching posts, please try again.</p>
              ) : null}
            </>
          ) : (
            insights.map((insight) => (
              <ListingInsight key={`item-${insight.slug}`} insight={insight} />
            ))
          )}
          <div>
            {total ? (
              <ReactPaginate
                activeClassName="active bg-foundation text-electricViolet"
                breakClassName="break-me"
                breakLabel="..."
                containerClassName="pagination flex items-center"
                marginPagesDisplayed={2}
                nextClassName="inline-block text-page-navigation"
                nextLabel="Next"
                onPageChange={fetchMoreInsights}
                pageClassName="inline-block text-tag text-gray-700 rounded-1"
                pageCount={Math.ceil(total / PAGINATION_LIMIT)}
                pageLinkClassName="p-2 inline-block"
                pageRangeDisplayed={5}
                previousClassName="inline-block text-page-navigation"
                previousLabel="Previous"
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
