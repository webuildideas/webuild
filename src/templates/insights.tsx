// Packages
import { graphql } from 'gatsby'
import React from 'react'
import { useRecoilValue } from 'recoil'

// Common
import { InsightTopic, InsightType, TypeInsight } from '@common/types/Insight'
import { filteredPostsAtom } from '@common/store/insights/atoms'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import Meta from '@components/Meta'
import Filters from '@components/Insights/Filters'
import ListingInsight from '@modules/contentHub/components/ListingInsight'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface Props {
  data: {
    contentfulContentHub: {
      featuredInsight: {
        type: InsightType
        topics: InsightTopic[]
        title: string
        slug: string
        illustration?: TypeGatsbyImageFluid
      }
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
  // eslint-disable-next-line no-console
  console.log('Featured Insight', featuredInsight)
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
      <div className="grid grid-cols-12 lg:gap-8">
        <aside className="col-span-12 lg:col-span-3">
          <Filters topics={topics} />
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
    </SiteMaxWidthContainer>
  )
}

export const INSIGHTS_QUERY = graphql`
  query insightsQuery {
    contentfulContentHub(pageTitle: { eq: "Content Hub" }) {
      featuredInsight {
        type
        topics
        title
        slug
        illustration {
          fluid(maxWidth: 1100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
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
