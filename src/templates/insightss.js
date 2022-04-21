/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { graphql, PageProps, navigate } from 'gatsby'

// NEW NEW
import slugify from 'slugify'
import { unslugify } from 'unslugify'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

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
import InsightsFilters from '@modules/contentHub/components/InsightsFilters'
import ListingInsight from '@modules/contentHub/components/ListingInsight'
import ListingInsightSkeleton from '@modules/contentHub/components/ListingInsightSkeleton'
import FeaturedInsight from '@modules/contentHub/components/FeaturedInsight'
import Pagination from '@modules/contentHub/components/Paginations'
import Footer from '@modules/common/components/Footer'
import EmailSignUpForm from '@modules/forms/EmailSignupForm'
import MonthlyNewsletterForm from '@modules/forms/MonthlyNewsletterForm'

const PAGINATION_LIMIT = 12

const Insights = ({
  location,
  data: {
    contentfulContentHub: { featuredInsight }
  },
  pageContext: { topics, types }
}) => {
  // NEW
  const unslugifyParams = (theFilters) => {
    if (typeof theFilters === `string`) {
      const arr = []
      arr.push(unslugify(theFilters))
      return arr
    }

    if (typeof theFilters === `object`) {
      return theFilters.map((filter) => unslugify(filter))
    }
  }

  const queryParams = queryString.parse(location.search, {
    arrayFormat: 'comma'
  })
  const [skip, setSkip] = useState(queryParams.page || 0)
  const [total, setTotal] = useState(null)
  const [filters, setFilters] = useState({
    topics: unslugifyParams(queryParams.topics),
    types: unslugifyParams(queryParams.types)
  })

  const { loading, error, data, fetchMore } = useQuery(FILTER_INSIGHTS_QUERY, {
    variables: {
      // skip,
      skip: skip * PAGINATION_LIMIT,
      limit: PAGINATION_LIMIT,
      topics: unslugifyParams(queryParams.topics) || topics,
      types: unslugifyParams(queryParams.types) || types
    }
  })

  const noInisights = data?.insightCollection.items.length === 0
  const loadingOrNoItems = loading || noInisights
  const showPagination = total && total > PAGINATION_LIMIT

  const fetchMoreInsights = useCallback(
    ({ selected }) => {
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

  const onPageChange = ({ selected }) => {
    const newQuery = queryString.stringify(
      {
        topics: queryParams.topics,
        types: queryParams.types,
        page: selected === 0 ? undefined : selected + 1
      },
      { arrayFormat: 'comma' }
    )
    navigate(`?${newQuery}`, { hash: 'insights-main' })
  }

  useEffect(() => {
    if (data && data?.insightCollection?.items) {
      setTotal(data.insightCollection.total)
    }
  }, [data])

  useEffect(() => {
    const newQueryParams = queryString.parse(location.search, {
      arrayFormat: 'comma'
    })
    setFilters((prevState) => {
      return {
        ...prevState,
        topics: unslugifyParams(newQueryParams.topics),
        types: unslugifyParams(newQueryParams.types),
        page: newQueryParams.page || 0
      }
    })

    setSkip(newQueryParams.page - 1 || 0)
  }, [location])

  return (
    <div className="InsightsPage" id="insights-container">
      <Meta location={location} title="Insights" />
      <div className="InsightsPage-header">
        <div className="InsightsPage-header-content">
          <h1 className="mb-4 text-h1">Insights & Ideas</h1>
          <p className="text-title-subheading">
            Dive into our thoughts and expertise on product strategy & design.
          </p>
        </div>
      </div>
      <div className="InsightsPage-feature" id="insights-feature">
        {featuredInsight ? <FeaturedInsight insight={featuredInsight} /> : null}
      </div>

      <div className="InsightsPage-main" id="insights-main">
        <aside className="InsightsPage-filters">
          <InsightsFilters
            filters={filters}
            queryParams={queryParams}
            queryString={queryString}
            setFilters={setFilters}
            topics={topics}
            types={types}
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
              onPageChange={onPageChange}
              pageCount={Math.ceil(total / PAGINATION_LIMIT)}
              pageRangeDisplayed={5}
            />
          ) : null}
        </div>

        <aside className="InsightsPage-ctas">
          <EmailSignUpForm location={location.href} />
          <MonthlyNewsletterForm
            containerId="insights-container"
            location={location.href}
          />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export const CONTENT_HUB_QUERYY = graphql`
  query contentHubQueryy {
    contentfulContentHub(pageTitle: { eq: "Content Hub" }) {
      featuredInsight {
        type
        topics
        title
        subtitle
        slug
        metaDescription {
          metaDescription
        }
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
