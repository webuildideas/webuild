// Packages
import { Link } from 'gatsby'
import React from 'react'
import { kebabCase } from 'lodash'

// Commons
import { TypeInsight } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

// Components

import { insightTypeIconConfig, insightTopicIconConfig } from './config'

interface Props extends WithClassName {
  insight: TypeInsight
}

const InsightListing = ({
  insight: { title, illustration, slug, topics, type }
}: Props) => {
  const { name: typeName, icon: TypeIcon } = insightTypeIconConfig[type]
  const illustrationSrc = illustration?.file?.url
    ? illustration?.file?.url
    : illustration?.url
  return (
    <article className="mb-16">
      {illustrationSrc ? (
        <img
          alt="listing illustration"
          className="mb-6"
          src={illustrationSrc}
        />
      ) : null}
      <div className="flex items-center">
        <div className="flex items-center">
          <TypeIcon className="mr-2" />
          <p className="text-caption font-extrabold uppercase mr-4">
            {typeName}
          </p>
        </div>
        {topics && topics.length > 0 && (
          <div className="flex items-center">
            {topics.map((topic) => {
              const {
                icon: TopicIcon,
                name: topicName
              } = insightTopicIconConfig[topic]
              return (
                <div
                  key={`topic-${kebabCase(topicName)}`}
                  className="flex items-center"
                >
                  <TopicIcon className="text-electricViolet mr-2" />
                  <p className="inline-block mr-3 text-tag text-electricViolet capitalize">
                    {topicName}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <h2 className="text-h3 mt-4">
        <Link to={`/${slug}`}>{title}</Link>
      </h2>
    </article>
  )
}

export default InsightListing
