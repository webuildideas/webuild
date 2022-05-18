// Packages
import React, { memo, useState } from 'react'
import { kebabCase } from 'lodash'
import slugify from 'slugify'
import { navigate } from 'gatsby'

// Icons
import Arrow from '@static/svgs/common/arrows/arrow-simple-down.inline.svg'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'
import { classNames } from '@common/utils/classNames'
import { FiltersType, QueryParamsType } from './InsightsFilters'
// import { FilterState } from '../../../templates/insights'

// Styles
import './styles/InsightFilters.css'

interface Props {
  topics: TypeInsightTopic[]
  types: TypeInsightType[]
  filters: FiltersType
  queryString: any
  queryParams: QueryParamsType
  insightsContainer: React.RefObject<HTMLElement> | any
}

const InsightFiltersDropdown = memo(function InsightFiltersDropdownMemo({
  topics,
  types,
  filters,
  queryString,
  queryParams,
  insightsContainer
}: Props) {
  const [isTopicFilterOpen, setIsTopicFilterOpen] = useState(false)
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false)

  const getFilterText = (title: string, filters: any) => {
    if (filters) {
      return `Viewing ${filters.length} ${title}${
        filters.length > 1 ? 's' : ''
      }`
    }
    return title
  }

  const topicFilterText = getFilterText('Topic', filters?.topics)
  const typeFilterText = getFilterText('Type', filters?.types)

  const topicDropdownClasses = classNames({
    'Insight-filters-dropdown': true,
    'is-active': isTopicFilterOpen
  })

  const typeDropdownClasses = classNames({
    'Insight-filters-dropdown': true,
    'is-active': isTypeFilterOpen
  })

  const handleToggleTopicFilter = () =>
    setIsTopicFilterOpen((prevState) => !prevState)

  const handleToggleTypeFilter = () =>
    setIsTypeFilterOpen((prevState) => !prevState)

  return (
    <div className="Insight-filters-dropdown-container mx-auto flex items-center justify-between xl:hidden">
      <div className={topicDropdownClasses}>
        <p className="text-caption" onClick={handleToggleTopicFilter}>
          <span>{topicFilterText}</span>
          <Arrow className="Insight-filters-dropdown-arrow" />
        </p>
        {isTopicFilterOpen && (
          <div className="Insight-filters-dropdown-menu">
            {topics.map((topic) => {
              const handleOnClick = (e: any, theTopic: string) => {
                if (filters?.topics?.includes(theTopic)) {
                  let theFilters

                  if (filters.topics.length === 1) {
                    theFilters = undefined
                  } else if (filters?.topics.length > 1) {
                    theFilters = queryParams.topics.filter(
                      (item) => item !== e.target.dataset.filter
                    )
                  }

                  const newQuery = queryString.stringify(
                    {
                      topics: theFilters,
                      types: queryParams.types
                    },
                    { arrayFormat: 'comma' }
                  )
                  setIsTopicFilterOpen((prevState) => !prevState)
                  navigate(`?${newQuery}`, {
                    state: {
                      disableScrollUpdate: true
                    }
                  })
                  setTimeout(() => {
                    insightsContainer.current.scrollIntoView({
                      block: 'center'
                    })
                  }, 400)
                } else {
                  const theFilters = [e.target.dataset.filter]

                  if (typeof queryParams.topics === `string`) {
                    theFilters.push(queryParams.topics)
                  }

                  if (typeof queryParams.topics === `object`) {
                    theFilters.push(...queryParams.topics)
                  }

                  const newQuery = queryString.stringify(
                    {
                      topics: theFilters,
                      types: queryParams.types
                    },
                    { arrayFormat: 'comma' }
                  )
                  setIsTopicFilterOpen((prevState) => !prevState)
                  navigate(`?${newQuery}`, {
                    state: {
                      disableScrollUpdate: true
                    }
                  })
                  setTimeout(() => {
                    insightsContainer.current.scrollIntoView({
                      block: 'center'
                    })
                  }, 400)
                }
              }
              const isActive = filters?.topics?.includes(topic)
              return (
                <div
                  key={kebabCase(topic)}
                  className={`Insight-filters-item ${isActive && 'is-active'}`}
                  data-filter={slugify(topic, { lower: true })}
                  onClick={(e) => handleOnClick(e, topic)}
                  role="button"
                >
                  <span className="text-page-navigation pointer-events-none">
                    {topic}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className={typeDropdownClasses}>
        <p className="text-caption" onClick={handleToggleTypeFilter}>
          <span>{typeFilterText}</span>
          <Arrow className="Insight-filters-dropdown-arrow" />
        </p>
        {isTypeFilterOpen && (
          <div className="Insight-filters-dropdown-menu">
            {types.map((type) => {
              const handleOnClick = (e: any, theType: string) => {
                if (filters?.types?.includes(theType)) {
                  let theFilters

                  if (filters.types.length === 1) {
                    theFilters = undefined
                  } else if (filters?.types.length > 1) {
                    theFilters = queryParams.types.filter(
                      (item) => item !== e.target.dataset.filter
                    )
                  }

                  const newQuery = queryString.stringify(
                    {
                      topics: queryParams.topics,
                      types: theFilters
                    },
                    { arrayFormat: 'comma' }
                  )
                  navigate(`?${newQuery}`, {
                    state: {
                      disableScrollUpdate: true
                    }
                  })
                  setIsTypeFilterOpen((prevState) => !prevState)
                  setTimeout(() => {
                    insightsContainer.current.scrollIntoView({
                      block: 'center'
                    })
                  }, 400)
                } else {
                  const theFilters = [e.target.dataset.filter]

                  if (typeof queryParams.types === `string`) {
                    theFilters.push(queryParams.types)
                  }

                  if (typeof queryParams.types === `object`) {
                    theFilters.push(...queryParams.types)
                  }

                  const newQuery = queryString.stringify(
                    {
                      topics: queryParams.topics,
                      types: theFilters
                    },
                    { arrayFormat: 'comma' }
                  )
                  setIsTypeFilterOpen((prevState) => !prevState)
                  navigate(`?${newQuery}`, {
                    state: {
                      disableScrollUpdate: true
                    }
                  })
                  setTimeout(() => {
                    insightsContainer.current.scrollIntoView({
                      block: 'center'
                    })
                  }, 400)
                }
              }
              const isActive = filters?.types?.includes(type)
              return (
                <div
                  key={kebabCase(type)}
                  className={`Insight-filters-item ${isActive && 'is-active'}`}
                  data-filter={slugify(type, { lower: true })}
                  onClick={(e) => handleOnClick(e, type)}
                  role="button"
                >
                  <span className="text-page-navigation pointer-events-none">{`${type}s`}</span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
})

export default InsightFiltersDropdown
