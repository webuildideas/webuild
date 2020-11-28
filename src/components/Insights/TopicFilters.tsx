// Packages
import React, { useCallback, useEffect, useState } from 'react'
import kebabCase from 'lodash/kebabCase'
import { gql, useQuery } from '@apollo/client'

// Commons
import { useSetRecoilState } from 'recoil'
// import { TypeTopic } from '../../common/types/Topic'

import { postsFilteredByTopic } from '../../templates/insights'

const FILTER_BY_TOPIC_QUERY = gql`
  query filterByTopicQuery($topics: [String]!) {
    topicCollection(limit: 100, where: { name_in: $topics }) {
      items {
        linkedFrom {
          blogPostCollection {
            items {
              title
            }
          }
        }
      }
    }
  }
`

interface Props {
  topics: string[]
}

const TopicFilters = ({ topics }: Props) => {
  const [topicsFilter, setTopicsFilter] = useState<string[]>([])
  const { data, refetch } = useQuery(FILTER_BY_TOPIC_QUERY, {
    variables: {
      topics: topicsFilter
    }
  })
  const setPostsState = useSetRecoilState(postsFilteredByTopic)

  const handleCreateOnFilterClick = useCallback(
    (name: string) => () => {
      if (topicsFilter.includes(name)) {
        const updatedTopics = topicsFilter.filter((topic) => topic !== name)
        setTopicsFilter(updatedTopics)
        refetch()
        return
      }

      setTopicsFilter((prev) => [...prev, name])
      refetch()
    },
    [topicsFilter, refetch]
  )

  useEffect(() => {
    if (data && data?.allContentfulBlogPost?.nodes) {
      console.log(data)
      setPostsState(data.allContentfulBlogPost.nodes)
    }
  }, [data, setPostsState])

  return (
    <div>
      {topics.map((topic) => {
        const handleOnClick = handleCreateOnFilterClick(topic)
        const selectedStyle = topicsFilter.includes(topic)
          ? 'text-bisonHide'
          : ''
        return (
          <button
            key={kebabCase(topic)}
            className={`border-none block mb-4 ${selectedStyle}`}
            onClick={handleOnClick}
            type="button"
          >
            {topic}
          </button>
        )
      })}
    </div>
  )
}

export default TopicFilters
