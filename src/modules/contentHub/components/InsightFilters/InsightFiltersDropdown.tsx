// Packages
import React, { memo, useState } from 'react'
import { kebabCase } from 'lodash'

// Icons
import Arrow from '@static/svgs/common/arrow-simple-down.inline.svg'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'
import { classNames } from '@common/utils/classNames'
import { FilterState } from '../../../../templates/insights'

// Styles
import './style.css'

interface Props {
  topics: TypeInsightTopic[]
  types: TypeInsightType[]
  topicsFilter: FilterState<TypeInsightTopic>
  typesFilter: FilterState<TypeInsightType>
  createOnTopicClickHandler: (name: TypeInsightTopic) => () => void
  createOnTypeClickHandler: (name: TypeInsightType) => () => void
}

function getFilterText<T>(
  title: string,
  { filters, noFilters }: FilterState<T>
): string {
  if (noFilters) {
    return title
  }

  return filters.length === 0
    ? title
    : `Viewing ${filters.length} ${title}${filters.length > 1 ? 's' : ''}`
}

const InsightFiltersDropdown = memo(function InsightFiltersDropdownMemo({
  topics,
  types,
  topicsFilter,
  typesFilter,
  createOnTopicClickHandler,
  createOnTypeClickHandler
}: Props) {
  const [isTopicFilterOpen, setIsTopicFilterOpen] = useState(false)
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false)

  const topicFilterText = getFilterText<TypeInsightTopic>('Topic', topicsFilter)
  const typeFilterText = getFilterText<TypeInsightType>('Type', typesFilter)

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
