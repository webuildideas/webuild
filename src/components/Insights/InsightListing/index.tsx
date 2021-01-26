// Packages
import { Link } from 'gatsby'
import React from 'react'
import { kebabCase } from 'lodash'

// Commons
import { TypeInsight } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

import listingDefaultSrc from '@static/svgs/insights/default-insight-listing.svg'

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
    <article className="InsightListing mb-16">
      <Link className="InsightListing-container" to={`/${slug}`}>
        <div className="InsightListing-illustration">
          {illustrationSrc ? (
            <img
              alt="listing illustration"
              className="mb-6 w-full"
              src={illustrationSrc}
            />
          ) : (
            <img
              alt="listing illustration"
              className="mb-6 w-full"
              src={listingDefaultSrc}
            />
          )}
        </div>

        <div className="InsightListing-content">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <TypeIcon className="mr-2 w-5" />
              <p className="text-caption font-extrabold uppercase">
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
                      <TopicIcon className="text-electricViolet mr-2 w-5" />
                      <p className="inline-block mr-3 text-tag text-electricViolet capitalize">
                        {topicName}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          <h2 className="text-h3 mt-4">{title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default InsightListing
