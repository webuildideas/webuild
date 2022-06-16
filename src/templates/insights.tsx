/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useContext
} from 'react'
import { useQuery } from '@apollo/client'
import { graphql, PageProps, navigate, Link, useStaticQuery } from 'gatsby'

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
// import AdsContext from '@common/ads/AdsContext'

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
import ListingAd, {
  TypeListingAd
} from '@modules/contentHub/components/ListingAd'
import FeaturedInsight from '@modules/contentHub/components/FeaturedInsight'
import Pagination from '@modules/contentHub/components/Paginations'
import Footer from '@modules/common/components/Footer'
import EmailSignUpForm from '@modules/forms/EmailSignupForm'
import MonthlyNewsletterForm from '@modules/forms/MonthlyNewsletterForm'

import SidebarAd, { MemoizedSidebarAd } from '@common/ads/SidebarAd'

interface Props {
  location: PageProps['location']
  data: {
    contentfulContentHub: {
      featuredInsight: TypeInsight
    }
    allContentfulInterstitialAds: {
      nodes: {
        node: TypeListingAd
      }
    }
  }
  pageContext: {
    topics: TypeInsightTopic[]
    types: TypeInsightType[]
  }
}

interface Filters {
  topics: string[]
  types: string[]
}

const PAGINATION_LIMIT = 12

const Insights = ({
  location,
  data: {
    contentfulContentHub: { featuredInsight },
    allContentfulInterstitialAds: { nodes: insightsHubAds }
  },
  pageContext: { topics, types }
}: Props) => {
  // NEW
  const unslugifyParams = (theFilters: any) => {
    if (typeof theFilters === `string`) {
      const arr = []
      const unSlug = unslugify(theFilters)
      arr.push(unSlug.replace('And', '&').replace('Ebook', 'eBook'))
      return arr
    }

    if (typeof theFilters === `object`) {
      return theFilters.map((filter: string) =>
        unslugify(filter).replace('And', '&').replace('Ebook', 'eBook')
      )
    }
  }

  const queryParams = queryString.parse(location.search, {
    arrayFormat: 'comma'
  })
  const [skip, setSkip] = useState(queryParams.page || 0)
  const [total, setTotal] = useState<number | null>(null)
  const [filters, setFilters] = useState<Filters>({
    topics: unslugifyParams(queryParams.topics),
    types: unslugifyParams(queryParams.types)
  })
  const insightsContainer = useRef<HTMLElement>(null)
  const insightsWrapper = useRef<HTMLElement>(null)
  // const { SidebarAds, insightsHubAds } = useContext(AdsContext)

  const { loading, error, data, refetch } = useQuery<
    InsightsListingData,
    InsightsListingArgs
  >(FILTER_INSIGHTS_QUERY, {
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

  const refetchInsights = useCallback(
    (params) => {
      const newSkip = skip * PAGINATION_LIMIT
      refetch({
        variables: {
          skip: newSkip,
          limit: PAGINATION_LIMIT,
          topics: unslugifyParams(params.topics) || topics,
          types: unslugifyParams(params.types) || types
        }
      }).then((response) => {
        setFilters((prevState) => {
          return {
            ...prevState,
            topics: unslugifyParams(params.topics),
            types: unslugifyParams(params.types),
            page: params.page || 0
          }
        })
        setSkip(params.page - 1 || 0)
      })
    },
    [refetch, skip, topics, types]
  )

  const onPageChange = ({ selected }: { selected: any }) => {
    const newQuery = queryString.stringify(
      {
        topics: queryParams.topics,
        types: queryParams.types,
        page: selected === 0 ? undefined : selected + 1
      },
      { arrayFormat: 'comma' }
    )
    insightsContainer.current.scrollIntoView({ block: 'center' })
    setTimeout(() => {
      navigate(`?${newQuery}`, {
        state: {
          disableScrollUpdate: true
        }
      })
    }, 800)
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
    refetchInsights(newQueryParams)
  }, [location, refetchInsights])

  const splitInsightsUp = (insights: any, numberOfAds: number) => {
    const theAds = insightsHubAds
    if (numberOfAds >= 2) {
      return (
        <>
          {insights.slice(0, 3).map((insight) => (
            <ListingInsight key={`item-${insight.slug}`} insight={insight} />
          ))}
          {theAds.slice(0, 1).map((ad) => (
            <ListingAd key={`item-${ad.id}`} ad={ad} />
          ))}
          {insights.slice(4, 8).map((insight) => (
            <ListingInsight key={`item-${insight.slug}`} insight={insight} />
          ))}
          {theAds.slice(1, 2).map((ad) => (
            <ListingAd key={`item-${ad.id}`} ad={ad} />
          ))}
          {insights.slice(8, 12).map((insight) => (
            <ListingInsight key={`item-${insight.slug}`} insight={insight} />
          ))}
        </>
      )
    }

    return (
      <>
        {insights.slice(0, 3).map((insight) => (
          <ListingInsight key={`item-${insight.slug}`} insight={insight} />
        ))}
        {theAds.slice(0, 1).map((ad) => (
          <ListingAd key={`item-${ad.id}`} ad={ad} />
        ))}
        {insights.slice(4).map((insight) => (
          <ListingInsight key={`item-${insight.slug}`} insight={insight} />
        ))}
      </>
    )
  }

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
        <div className="wrap">
          {featuredInsight ? (
            <FeaturedInsight insight={featuredInsight} />
          ) : null}
        </div>
      </div>

      <div className="InsightsPage-main" id="test">
        <aside
          ref={insightsContainer}
          className="InsightsPage-filters self-start"
        >
          <InsightsFilters
            filters={filters}
            insightsContainer={insightsContainer}
            queryParams={queryParams}
            queryString={queryString}
            setFilters={setFilters}
            topics={topics}
            types={types}
          />
        </aside>

        <div
          ref={insightsWrapper}
          className={`InsightsPage-insights transition-opacity duration-200 min-h-screen `}
        >
          {loadingOrNoItems || error ? (
            <>
              {noInisights ? (
                <p className="text-h3">
                  No insights match that search. Please try again or view all
                  insights{' '}
                  <Link className="text-electricViolet" to="/insights">
                    here.
                  </Link>
                </p>
              ) : null}

              {error ? (
                <p>We had trouble fetching posts, please try again.</p>
              ) : null}
            </>
          ) : (
            <>
              {data?.insightCollection.items.length < 4
                ? data?.insightCollection.items.map((insight: any) => (
                    <ListingInsight
                      key={`item-${insight.slug}`}
                      insight={insight}
                    />
                  ))
                : null}

              {data?.insightCollection.items.length > 4 &&
              data?.insightCollection.items.length <= 8
                ? splitInsightsUp(data?.insightCollection.items, 1)
                : null}

              {data?.insightCollection.items.length > 8
                ? splitInsightsUp(data?.insightCollection.items, 2)
                : null}
            </>
          )}
        </div>

        <div className="InsightsPage-pagination">
          {showPagination ? (
            <Pagination
              forcePage={skip}
              marginPagesDisplayed={1}
              onPageChange={onPageChange}
              pageCount={Math.ceil(total / PAGINATION_LIMIT)}
              pageRangeDisplayed={5}
              skip={skip}
            />
          ) : null}
        </div>

        <aside className="InsightsPage-ctas">
          <EmailSignUpForm location={location.href} />
          <MonthlyNewsletterForm
            containerId="insights-container"
            location={location.href}
          />
          <MemoizedSidebarAd excludeEbooks />
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
    allContentfulInterstitialAds {
      nodes {
        headline
        id
        resourceType
        ctaText
        ctaLink
        backgroundColor
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default Insights
