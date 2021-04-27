// Packages
import React from 'react'
import kebabCase from 'lodash/kebabCase'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'

// Components
import InsightFiltersDropdown from './InsightFiltersDropdown'
import { FilterState } from '../../../templates/insights'

// Styles
import './styles/InsightFilters.css'

interface Props {
  topics: TypeInsightTopic[]
  topicsFilter: FilterState<TypeInsightTopic>
  types: TypeInsightType[]
  typesFilter: FilterState<TypeInsightType>
  createOnTopicClickHandler: (name: TypeInsightTopic) => () => void
  createOnTypeClickHandler: (name: TypeInsightType) => () => void
}

const InsightFilters = ({
  topics,
  topicsFilter,
  types,
  typesFilter,
  createOnTopicClickHandler,
  createOnTypeClickHandler
}: Props) => {
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
        {types.length > 1 ? (
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
        ) : null}
      </div>
    </>
  )
}

export default InsightFilters
