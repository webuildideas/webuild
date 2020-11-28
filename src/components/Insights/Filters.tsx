// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import kebabCase from 'lodash/kebabCase'

// Commons
import { filteredPostsAtom } from '../../common/store/insights/atoms'
import { InsightType } from '../../common/types/Insight'

const FILTER_INSIGHTS_QUERY = gql`
  query filterInsightsQuery($topics: [String]!, $types: [String]!) {
    insightCollection(
      where: { topics_contains_some: $topics, type_in: $types }
    ) {
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

const types: InsightType[] = ['Article', 'White Paper']

const Filters = ({ topics }: Props) => {
  const [topicsFilter, setTopicsFilter] = useState<string[]>([])
  const [typesFilter, setTypesFilter] = useState<InsightType[]>([])
  const setFilteredPosts = useSetRecoilState(filteredPostsAtom)
  const [getFilteredInsights, { data, loading }] = useLazyQuery(
    FILTER_INSIGHTS_QUERY,
    {
      variables: {
        topics: topicsFilter,
        types: typesFilter
      }
    }
  )

  const createOnTopicClickHandler = useCallback(
    (name: string) => () => {
      if (topicsFilter.includes(name)) {
        const filterWithTopicRemoved = topicsFilter.filter(
          (topic) => topic !== name
        )
        setTopicsFilter(filterWithTopicRemoved)
        getFilteredInsights()
        return
      }

      setTopicsFilter((prevFilter) => [...prevFilter, name])
      getFilteredInsights()
    },
    [topicsFilter, getFilteredInsights]
  )

  const createOnTypeClickHandler = useCallback(
    (name: InsightType) => () => {
      if (typesFilter.includes(name)) {
        const filterWithTypeRemoved = typesFilter.filter(
          (type) => type !== name
        )
        setTypesFilter(filterWithTypeRemoved)
        getFilteredInsights()
        return
      }

      setTypesFilter((prevFilter) => [...prevFilter, name])
      getFilteredInsights()
    },
    [typesFilter, getFilteredInsights]
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
    <>
      <div>
        <h5 className="mb-4">Filter by Topic</h5>
        {topics.map((topic) => {
          const handleOnClick = createOnTopicClickHandler(topic)
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

      <div className="mt-8">
        <h5 className="mb-4">Filter by Type</h5>
        {types.map((type) => {
          const handleOnClick = createOnTypeClickHandler(type)
          const selectedStyle = typesFilter.includes(type)
            ? 'text-bisonHide'
            : ''
          return (
            <button
              key={kebabCase(type)}
              className={`border-none block mb-4 ${selectedStyle}`}
              onClick={handleOnClick}
              type="button"
            >
              {type}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default Filters
