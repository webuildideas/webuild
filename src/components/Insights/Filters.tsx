// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import kebabCase from 'lodash/kebabCase'

// Common
import { filteredPostsAtom } from '@common/store/insights/atoms'
import { TypeInsightType } from '@common/types/Insight'

const FILTER_INSIGHTS_QUERY = gql`
  query filterInsightsQuery($topics: [String]!, $types: [String]!) {
    insightCollection(
      where: { topics_contains_some: $topics, type_in: $types }
    ) {
      items {
        title
        topics
        slug
        type
        publishDate
        illustration {
          url
        }
      }
    }
  }
`

interface Props {
  topics: string[]
}

const types: TypeInsightType[] = ['Article', 'White Paper']
interface filterState<T> {
  noFilters: boolean
  filters: T[]
}

const Filters = ({ topics }: Props) => {
  const [topicsFilter, setTopicsFilter] = useState<filterState<string>>({
    noFilters: true,
    filters: topics
  })
  const [typesFilter, setTypesFilter] = useState<filterState<TypeInsightType>>({
    noFilters: true,
    filters: types
  })
  const setFilteredPosts = useSetRecoilState(filteredPostsAtom)
  const [getFilteredInsights, { data, loading }] = useLazyQuery(
    FILTER_INSIGHTS_QUERY,
    {
      variables: {
        topics: topicsFilter.filters,
        types: typesFilter.filters
      }
    }
  )

  const createOnTopicClickHandler = useCallback(
    (name: string) => () => {
      if (topicsFilter.noFilters) {
        setTopicsFilter({
          filters: [name],
          noFilters: false
        })
        getFilteredInsights()
        return
      }

      if (topicsFilter.filters.includes(name)) {
        const filterWithTopicRemoved = topicsFilter.filters.filter(
          (topic) => topic !== name
        )
        const hasNoFilters = filterWithTopicRemoved.length === 0
        setTopicsFilter({
          filters: hasNoFilters ? topics : filterWithTopicRemoved,
          noFilters: !!hasNoFilters
        })
        getFilteredInsights()
        return
      }

      setTopicsFilter((prevState) => {
        return {
          filters: [...prevState.filters, name],
          noFilters: prevState.noFilters
        }
      })
      getFilteredInsights()
    },
    [topicsFilter, getFilteredInsights, topics]
  )

  const createOnTypeClickHandler = useCallback(
    (name: TypeInsightType) => () => {
      if (typesFilter.noFilters) {
        setTypesFilter({
          filters: [name],
          noFilters: false
        })
        getFilteredInsights()
        return
      }

      if (typesFilter.filters.includes(name)) {
        const filterWithTypeRemoved = typesFilter.filters.filter(
          (type) => type !== name
        )
        const hasNotFilters = filterWithTypeRemoved.length === 0
        setTypesFilter({
          filters: hasNotFilters ? types : filterWithTypeRemoved,
          noFilters: !!hasNotFilters
        })

        getFilteredInsights()
        return
      }

      setTypesFilter((prevState) => {
        return {
          filters: [...prevState.filters, name],
          noFilters: prevState.noFilters
        }
      })
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
        loading: false,
        fetched: true
      })
    }
  }, [data, setFilteredPosts])

  return (
    <>
      <div>
        <h5 className="mb-4">Filter by Topic</h5>
        {topics.map((topic) => {
          const handleOnClick = createOnTopicClickHandler(topic)
          const selectedStyle =
            !topicsFilter.noFilters && topicsFilter.filters.includes(topic)
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
            !typesFilter.noFilters && typesFilter.filters.includes(type)
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
