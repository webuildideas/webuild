// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import kebabCase from 'lodash/kebabCase'

// Commons
import { filteredPostsAtom } from '../../common/store/insights/atoms'

const FILTER_INSIGHTS_QUERY = gql`
  query filterInsightsQuery($topics: [String]!) {
    insightCollection(where: { topics_contains_some: $topics }) {
      items {
        title
        topics
        slug
        publishDate
      }
    }
  }
`

interface Props {
  topics: string[]
}

const TopicFilters = ({ topics }: Props) => {
  const [topicsFilter, setTopicsFilter] = useState<string[]>([])
  const setFilteredPosts = useSetRecoilState(filteredPostsAtom)
  const { data, loading, refetch } = useQuery(FILTER_INSIGHTS_QUERY, {
    variables: {
      topics: topicsFilter
    }
  })

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
    if (loading) {
      setFilteredPosts((prevState) => {
        return {
          ...prevState,
          loading
        }
      })
    }
  }, [loading, setFilteredPosts])

  useEffect(() => {
    if (data && data?.insightCollection?.items) {
      setFilteredPosts({
        items: data.insightCollection.items,
        loading: false
      })
    }
  }, [data, setFilteredPosts])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        topics.map((topic) => {
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
        })
      )}
    </div>
  )
}

export default TopicFilters
