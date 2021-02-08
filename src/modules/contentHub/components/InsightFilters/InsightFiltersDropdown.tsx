/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'
import { kebabCase } from 'lodash'
import React, { useState } from 'react'
import { useLayer } from 'react-laag'
import { FilterState } from '.'
import './style.css'

interface Props {
  topics: TypeInsightTopic[]
  types: TypeInsightType[]
  topicsFilter: FilterState<TypeInsightTopic>
  typesFilter: FilterState<TypeInsightType>
  createOnTopicClickHandler: (name: TypeInsightTopic) => void
  createOnTypeClickHandler: (name: TypeInsightType) => void
}

const InsightFiltersDropdown = ({
  topics,
  types,
  topicsFilter,
  typesFilter,
  createOnTopicClickHandler,
  createOnTypeClickHandler
}: Props) => {
  const [isTopicFilterOpen, setIsTopicFilterOpen] = useState(false)
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false)

  const {
    triggerProps: topicTriggerProps,
    layerProps: topicLayerProps,
    renderLayer: topicRenderLayer
  } = useLayer({
    isOpen: isTopicFilterOpen,
    placement: 'bottom-center'
  })

  const {
    triggerProps: typeTriggerProps,
    layerProps: typeLayerProps,
    renderLayer: typeRenderLayer
  } = useLayer({
    isOpen: isTypeFilterOpen,
    placement: 'bottom-center'
  })

  return (
    <>
      <div>
        <p
          className="border border-solid border-gray-300 text-caption font-extrabold text-gray-600 p-2"
          onClick={() => setIsTopicFilterOpen(!isTopicFilterOpen)}
          style={{ maxWidth: '100px' }}
          {...topicTriggerProps}
        >
          Topic
        </p>
        {isTopicFilterOpen &&
          topicRenderLayer(
            <div {...topicLayerProps} className=" bg-white px-2 pt-2 pb-4">
              {topics.map((topic) => {
                const handleOnClick = createOnTopicClickHandler(topic)
                const isActive =
                  !topicsFilter.noFilters &&
                  topicsFilter.filters.includes(topic)
                return (
                  <div
                    key={kebabCase(topic)}
                    className={`Insight-filters-item ${
                      isActive && 'is-active'
                    }`}
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

      <div>
        <p
          className="border border-solid border-gray-300 text-caption font-extrabold text-gray-600 p-2"
          onClick={() => setIsTypeFilterOpen(!isTypeFilterOpen)}
          style={{ maxWidth: '100px' }}
          {...typeTriggerProps}
        >
          Type
        </p>
        {isTypeFilterOpen &&
          typeRenderLayer(
            <div {...typeLayerProps} className=" bg-white px-2 pt-2 pb-4">
              {types.map((type) => {
                const handleOnClick = createOnTypeClickHandler(type)
                const isActive =
                  !typesFilter.noFilters && typesFilter.filters.includes(type)
                return (
                  <div
                    key={kebabCase(type)}
                    className={`Insight-filters-item ${
                      isActive && 'is-active'
                    }`}
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
    </>
  )
}

export default InsightFiltersDropdown
