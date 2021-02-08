// Packages
import { graphql } from 'gatsby'
import React from 'react'
import { useRecoilValue } from 'recoil'

// Common
import { TypeInsight } from '@common/types/Insight'

// Atoms
import { filteredPostsAtom } from '@modules/contentHub/store/atoms'

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
    allContentfulInsight: {
      nodes: TypeInsight[]
    }
  }
  pageContext: {
    topics: string[]
  }
}

const Insights = ({
  data: {
    contentfulContentHub: { featuredInsight },
    allContentfulInsight: { nodes: insights }
  },
  pageContext: { topics }
}: Props) => {
  const {
    items: filteredItems,
    loading: filterLoading,
    fetched: filterFetched
  } = useRecoilValue(filteredPostsAtom)

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
      <div className="grid grid-cols-12 lg:gap-8 px-8">
        <aside className="col-span-12 lg:col-span-3 mb-16">
          <InsightFilters topics={topics} />
        </aside>
        <div className="col-span-12 lg:col-span-8">
          {filterLoading ? (
            <p>Loading...</p>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((insight) => (
              <ListingInsight key={`item-${insight.slug}`} insight={insight} />
            ))
          ) : filterFetched ? (
            <p>No Items found</p>
          ) : (
            insights.map((insight) => (
              <ListingInsight key={`item-${insight.slug}`} insight={insight} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export const INSIGHTS_QUERY = graphql`
  query insightsQuery {
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
    allContentfulInsight {
      nodes {
        slug
        title
        type
        illustration {
          file {
            url
          }
        }
        publishDate
        topics
      }
    }
  }
`

export default Insights
