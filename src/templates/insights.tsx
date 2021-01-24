// Packages
import { graphql } from 'gatsby'
import React from 'react'
import { useRecoilValue } from 'recoil'

// Common
import { TypeInsight } from '@common/types/Insight'
import { filteredPostsAtom } from '@common/store/insights/atoms'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import Meta from '@components/Meta'
import Filters from '@components/Insights/Filters'
import InsightListing from '@components/Insights/InsightListing'

interface Props {
  data: {
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
    <SiteMaxWidthContainer>
      <Meta title="Insights" />
      <h1 className="mb-4 text-h1">Insights & Ideas</h1>
      <p className="text-title-subheading mb-8">
        A collection of thoughts we are most proud of, from all faces of our
        diverse team.
      </p>
      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3">
          <Filters topics={topics} />
        </aside>
        <div className="col-span-12 md:col-span-8">
          {filterLoading ? (
            <p>Loading...</p>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((insight) => (
              <InsightListing key={`item-${insight.slug}`} insight={insight} />
            ))
          ) : filterFetched ? (
            <p>No Items found</p>
          ) : (
            insights.map((insight) => (
              <InsightListing key={`item-${insight.slug}`} insight={insight} />
            ))
          )}
        </div>
      </div>
    </SiteMaxWidthContainer>
  )
}

export const INSIGHTS_QUERY = graphql`
  query insightsQuery {
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
