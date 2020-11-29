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
  const [topicsFilter, setTopicsFilter] = useState<string[]>(topics)
  const [typesFilter, setTypesFilter] = useState<InsightType[]>(types)
  const [firstTopicFilter, setFirstTopicFilter] = useState(true)
  const [firstTypeFilter, setFirstTypeFilter] = useState(true)
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
      if (firstTopicFilter) {
        setTopicsFilter([name])
        setFirstTopicFilter(false)
        getFilteredInsights()
        return
      }

      if (topicsFilter.includes(name)) {
        const filterWithTopicRemoved = topicsFilter.filter(
          (topic) => topic !== name
        )
        if (filterWithTopicRemoved.length === 0) {
          setTopicsFilter(topics)
          setFirstTopicFilter(true)
        } else {
          setTopicsFilter(filterWithTopicRemoved)
        }
        getFilteredInsights()
        return
      }

      setTopicsFilter((prevFilter) => [...prevFilter, name])
      getFilteredInsights()
    },
    [topicsFilter, getFilteredInsights, firstTopicFilter, topics]
  )

  const createOnTypeClickHandler = useCallback(
    (name: InsightType) => () => {
      if (firstTypeFilter) {
        setTypesFilter([name])
        setFirstTypeFilter(false)
        getFilteredInsights()
        return
      }
      if (typesFilter.includes(name)) {
        const filterWithTypeRemoved = typesFilter.filter(
          (type) => type !== name
        )

        if (filterWithTypeRemoved.length === 0) {
          setTypesFilter(types)
          setFirstTypeFilter(true)
        } else {
          setTypesFilter(filterWithTypeRemoved)
        }
        getFilteredInsights()
        return
      }

      setTypesFilter((prevFilter) => [...prevFilter, name])
      getFilteredInsights()
    },
    [typesFilter, getFilteredInsights, firstTypeFilter]
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

  console.log('topicsFilter', topicsFilter)
  console.log('typesFilter', typesFilter)

  return (
    <>
      <div>
        <h5 className="mb-4">Filter by Topic</h5>
        {topics.map((topic) => {
          const handleOnClick = createOnTopicClickHandler(topic)
          const selectedStyle =
            !firstTopicFilter && topicsFilter.includes(topic)
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
          const selectedStyle =
            !firstTypeFilter && typesFilter.includes(type)
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
