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
import { FilterState } from '../../../templates/insights'

// Styles
import './styles/InsightFilters.css'

interface Props {
  topics: TypeInsightTopic[]
  types: TypeInsightType[]
  topicsFilter: FilterState<TypeInsightTopic>
  typesFilter: FilterState<TypeInsightType>
  createOnTopicClickHandler: (name: TypeInsightTopic) => () => void
  createOnTypeClickHandler: (name: TypeInsightType) => () => void
  queryString: any
  queryParams: any
  filters: any
}

// function getFilterText<T>(
//   title: string,
//   { filters, noFilters }: FilterState<T>
// ): string {
//   if (noFilters) {
//     return title
//   }

//   return filters.length === 0
//     ? title
//     : `Viewing ${filters.length} ${title}${filters.length > 1 ? 's' : ''}`
// }

const InsightFiltersDropdown = memo(function InsightFiltersDropdownMemo({
  topics,
  types,
  filters,
  queryString,
  queryParams
}: // topicsFilter,
// typesFilter,
// createOnTopicClickHandler,
// createOnTypeClickHandler
Props) {
  const [isTopicFilterOpen, setIsTopicFilterOpen] = useState(false)
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false)

  const getFilterText = (title, filters) => {
    if (filters) {
      return `Viewing ${filters.length} ${title}${
        filters.length > 1 ? 's' : ''
      }`
    } else {
      return title
    }
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
              const handleOnClick = (e, theTopic) => {
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
                  navigate(`?${newQuery}`, {
                    hash: '#insights-main'
                  })
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
                  navigate(`?${newQuery}`, { hash: 'insights-main' })
                }
              }
              const isActive = filters?.topics?.includes(topic)
              return (
                <div
                  key={kebabCase(topic)}
                  className={`Insight-filters-item ${isActive && 'is-active'}`}
                  onClick={(e) => handleOnClick(e, topic)}
                  data-filter={slugify(topic, { lower: true })}
                  role="button"
                >
                  <span className="text-page-navigation">{topic}</span>
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
                  <span className="text-page-navigation">{type}</span>
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
