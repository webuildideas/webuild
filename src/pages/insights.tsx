import { graphql } from 'gatsby'
import React, { useCallback } from 'react'
import { atom, useRecoilValue } from 'recoil'

// Commons
import { kebabCase } from 'lodash'
import SiteMaxWidthContainer from '../common/styledComponents/SiteMaxWidthContainer'
import { TypeBlogPost } from '../common/types/BlogPost'
import { TypeTopic } from '../common/types/Topic'

// Components
import Meta from '../components/Meta'
import TopicFilters from '../components/Insights/TopicFilters'

interface Props {
  data: {
    allContentfulBlogPost: {
      nodes: TypeBlogPost[]
    }
    allContentfulTopic: {
      nodes: TypeTopic[]
    }
  }
}

export const postsFilteredByTopic = atom({
  key: 'PostsFilteredByTopic',
  default: []
})

const Insights = ({
  data: {
    allContentfulBlogPost: { nodes: blogPosts },
    allContentfulTopic: { nodes: topics }
  }
}: Props) => {
  const postsFiltered = useRecoilValue<TypeBlogPost[]>(postsFilteredByTopic)

  const renderBlogPosts = useCallback((posts: TypeBlogPost[]) => {
    return posts.map((post: TypeBlogPost) => (
      <article key={`item-${post.slug}`} className="mb-8">
        <h2>
          <a href={post.slug}>{post.title}</a>
        </h2>
        {post.topics && post.topics.length > 0 && (
          <div className="mt-3">
            {post.topics.map((topic) => (
              <p
                key={`topic-${kebabCase(topic.name)}`}
                className="inline-block mr-3 border-tuna text-comet border border-solid rounded-sm p-1"
              >
                {topic.name}
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
            : renderBlogPosts(blogPosts)}
        </div>
      </div>
    </SiteMaxWidthContainer>
  )
}

export const INSIGHTS_QUERY = graphql`
  query insightsQuery {
    allContentfulBlogPost {
      nodes {
        slug
        title
        publishDate
        topics {
          name
        }
      }
    }
    allContentfulTopic(sort: { fields: name, order: ASC }) {
      nodes {
        name
      }
    }
  }
`

export default Insights
