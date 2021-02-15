// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useSetRecoilState } from 'recoil'
import kebabCase from 'lodash/kebabCase'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'

// GrapQL
import { FILTER_INSIGHTS_QUERY } from '@modules/contentHub/graphql/queries'

// Atoms
import { insightPostsAtom } from '@modules/contentHub/store/atoms'

// Components
import InsightFiltersDropdown from './InsightFiltersDropdown'

// Styles
import './style.css'

interface Props {
  topics: TypeInsightTopic[]
}

const types: TypeInsightType[] = [
  'Article',
  'Event',
  'Email Course',
  'Podcast',
  'Publication',
  'Video',
  'Webinar',
  'White Paper'
]

export interface FilterState<T> {
  noFilters: boolean
  filters: T[]
}

const InsightFilters = ({ topics }: Props) => {
  const [topicsFilter, setTopicsFilter] = useState<
    FilterState<TypeInsightTopic>
  >({
    noFilters: true,
    filters: topics
  })
  const [typesFilter, setTypesFilter] = useState<FilterState<TypeInsightType>>({
    noFilters: true,
    filters: types
  })
  const setInsightPosts = useSetRecoilState(insightPostsAtom)
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
    (name: TypeInsightTopic) => () => {
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
          noFilters: hasNoFilters
        })
        getFilteredInsights()
        return
      }

      setTopicsFilter((prevState) => {
        return {
          ...prevState,
          filters: [...prevState.filters, name]
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
      setInsightPosts((prevState) => {
        return {
          ...prevState,
          loading
        }
      })
    }
  }, [loading, setInsightPosts])

  useEffect(() => {
    if (data && data?.insightCollection?.items) {
      setInsightPosts({
        items: data.insightCollection.items,
        loading: false,
        filtersApplied: true
      })
    }
  }, [data, setInsightPosts])

  return (
    <>
      <InsightFiltersDropdown
        createOnTopicClickHandler={createOnTopicClickHandler}
        createOnTypeClickHandler={createOnTypeClickHandler}
        topics={topics}
        topicsFilter={topicsFilter}
        types={types}
        typesFilter={typesFilter}
      />
      <div className="hidden xl:block">
        <div>
          <h5 className="mb-2 text-body font-extrabold uppercase">Topic</h5>
          {topics.map((topic) => {
            const handleOnClick = createOnTopicClickHandler(topic)
            const isActive =
              !topicsFilter.noFilters && topicsFilter.filters.includes(topic)
            return (
              <div
                key={kebabCase(topic)}
                className={`Insight-filters-item ${isActive && 'is-active'}`}
                onClick={handleOnClick}
                role="button"
              >
                <span className="text-page-navigation">{topic}</span>
              </div>
            )
          })}
        </div>

        <div className="mt-8">
          <h5 className="mb-2 text-body font-extrabold uppercase">Type</h5>
          {types.map((type) => {
            const handleOnClick = createOnTypeClickHandler(type)
            const isActive =
              !typesFilter.noFilters && typesFilter.filters.includes(type)
            return (
              <div
                key={kebabCase(type)}
                className={`Insight-filters-item ${isActive && 'is-active'}`}
                onClick={handleOnClick}
                role="button"
              >
                <span className="text-page-navigation">{`${type}s`}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default InsightFilters
