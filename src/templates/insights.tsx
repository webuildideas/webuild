import { graphql, Link } from 'gatsby'
import React, { useCallback } from 'react'
import { atom, useRecoilValue } from 'recoil'
import { kebabCase } from 'lodash'

// Commons
import SiteMaxWidthContainer from '../common/styledComponents/SiteMaxWidthContainer'
import { TypeInsight } from '../common/types/Insight'

// Components
import Meta from '../components/Meta'
import TopicFilters from '../components/Insights/TopicFilters'

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

export const postsFilteredByTopic = atom({
  key: 'PostsFilteredByTopic',
  default: []
})

const Insights = ({
  data: {
    allContentfulInsight: { nodes: insights }
  },
  pageContext: { topics }
}: Props) => {
  const postsFiltered = useRecoilValue<TypeInsight[]>(postsFilteredByTopic)

  const renderBlogPosts = useCallback((posts: TypeInsight[]) => {
    return posts.map((post: TypeInsight) => (
      <article key={`item-${post.slug}`} className="mb-8">
        <h2>
          <Link to={`/${post.slug}`}>{post.title}</Link>
        </h2>
        {post.topics && post.topics.length > 0 && (
          <div className="mt-3">
            {post.topics.map((topic) => (
              <p
                key={`topic-${kebabCase(topic)}`}
                className="inline-block mr-3 border-tuna text-comet border border-solid rounded-sm p-1"
              >
                {topic}
              </p>
            ))}
          </div>
        )}
      </article>
    ))
  }, [])

  return (
    <SiteMaxWidthContainer>
      <Meta title="Insights" />
      <h1 className="mb-12">Articles & Insights</h1>
      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3">
          <h5 className="mb-4">Filter by Topic</h5>
          <TopicFilters topics={topics} />
        </aside>
        <div className="col-span-12 md:col-span-8">
          {postsFiltered.length > 0
            ? renderBlogPosts(postsFiltered)
            : renderBlogPosts(insights)}
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
        publishDate
        topics
      }
    }
  }
`

export default Insights
