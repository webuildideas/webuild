// Packages
import React from 'react'
import { kebabCase } from 'lodash'

// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

// Config
import { TypeInsightTypeIconConfig, TypeInsightTopicIconConfig } from './config'

interface Props extends WithClassName {
  type: TypeInsightType
  topics?: TypeInsightTopic[]
}

const InsightTags = ({ type, topics, className }: Props) => {
  const { name: typeName, icon: TypeIcon } = TypeInsightTypeIconConfig[type]
  return (
    <div className={`flex flex-wrap items-center gap-y-3 ${className}`}>
      <div className="flex items-center mr-4">
        <TypeIcon className="mr-2 w-5" data-testid="insightTagsTypeIcon" />
        <p className="text-caption font-extrabold uppercase">{typeName}</p>
      </div>

      {topics && topics.length > 0 && (
        <div className="flex items-center">
          {topics.map((topic) => {
            const {
              icon: TopicIcon,
              name: topicName
            } = TypeInsightTopicIconConfig[topic]
            return (
              <div
                key={`topic-${kebabCase(topicName)}`}
                className="flex items-center"
              >
                <TopicIcon
                  className="text-electricViolet mr-2 w-5"
                  data-testid="insightTagsTopicIcon"
                />
                <p className="inline-block mr-3 text-tag text-electricViolet capitalize whitespace-nowrap">
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
