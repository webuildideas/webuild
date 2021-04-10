// Packages
import React from 'react'
import { kebabCase } from 'lodash'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

// Config
import {
  TypeInsightTypeIconConfig,
  TypeInsightTopicIconConfig
} from './configs/InsightTags'

// Styles
import './styles/InsightTags.css'

interface Props extends WithClassName {
  type: TypeInsightType
  topics?: TypeInsightTopic[]
}

const InsightTags = ({ type, topics, className }: Props) => {
  const { name: typeName, icon: TypeIcon } = TypeInsightTypeIconConfig[type]
  return (
    <div className={`InsightTags ${className}`}>
      <div className="InsightTags-type">
        <TypeIcon className="mr-2 w-5" data-testid="insightTagsTypeIcon" />
        <p className="text-caption font-extrabold uppercase">{typeName}</p>
      </div>

      {topics && topics.length > 0 && (
        <div className="InsightTags-topics">
          {topics.map((topic) => {
            const {
              icon: TopicIcon,
              name: topicName
            } = TypeInsightTopicIconConfig[topic]
            return (
              <div
                key={`topic-${kebabCase(topicName)}`}
                className="InsightTags-topic flex items-center text-electricViolet xl:text-gray-500"
              >
                <TopicIcon
                  className="mr-2 w-5"
                  data-testid="insightTagsTopicIcon"
                />
                <p className="inline-block mr-3 text-tag capitalize whitespace-nowrap">
                  {topicName}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default InsightTags
