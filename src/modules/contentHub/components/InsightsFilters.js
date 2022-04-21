/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React from 'react'
import kebabCase from 'lodash/kebabCase'

// NEW NEW
import { navigate, Link } from 'gatsby'
import slugify from 'slugify'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'

// Components
import InsightFiltersDropdown from './InsightFiltersDropdown'

// Styles
import './styles/InsightFilters.css'

const InsightsFilters = ({
  topics,
  types,
  filters,
  queryString,
  queryParams,
  topicsFilter,
  typesFilter,
  createOnTopicClickHandler,
  createOnTypeClickHandler,
  setFilters
  // onFilterChange
}) => {
  return (
    <>
      {/* <InsightFiltersDropdown
        createOnTopicClickHandler={createOnTopicClickHandler}
        createOnTypeClickHandler={createOnTypeClickHandler}
        topics={topics}
        topicsFilter={topicsFilter}
        types={types}
        typesFilter={typesFilter}
      /> */}
      <InsightFiltersDropdown
        filters={filters}
        queryParams={queryParams}
        queryString={queryString}
        topics={topics}
        types={types}
      />
      <div className="hidden xl:block">
        <div>
          <h5 className="mb-2 text-body font-extrabold uppercase">Topic</h5>
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
                  hash: 'insights-main'
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
        {types.length > 1 ? (
          <div className="mt-8">
            <h5 className="mb-2 text-body font-extrabold uppercase">Type</h5>
            {types.map((type) => {
              const handleOnClick = (e, theType) => {
                if (filters?.types?.includes(theType)) {
                  let theFilters

                  if (filters.types.length === 1) {
                    theFilters = undefined
                  } else if (filters?.topics.length > 1) {
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
                  navigate(`?${newQuery}`, { hash: 'insights-main' })
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
                  navigate(`?${newQuery}`, { hash: 'insights-main' })
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
        ) : null}
      </div>
    </>
  )
}

export default InsightsFilters
