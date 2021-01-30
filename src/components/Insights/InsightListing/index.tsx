// Packages
import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import { kebabCase } from 'lodash'

// Commons
import { TypeInsight } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'
import useWindowSize from '@common/hooks/useWindowSize'

// Assets
import listingDefaultSrc from '@static/svgs/insights/default-insight-listing.svg'

// Components
import { insightTypeIconConfig, insightTopicIconConfig } from './config'

// Styles
import './style.css'

interface Props extends WithClassName {
  insight: TypeInsight
}

const TABLET_WINDOW_SIZE = 768

const InsightListing = ({
  insight: { title, illustration, slug, topics, type }
}: Props) => {
  const { width } = useWindowSize()
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const illustrationContainerRef = useRef<HTMLDivElement>(null)
  const [illustrationHeight, setIllustrationHeight] = useState<
    | {
        height: string
      }
    | undefined
  >()

  const { name: typeName, icon: TypeIcon } = insightTypeIconConfig[type]
  const illustrationSrc = illustration?.file?.url
    ? illustration?.file?.url
    : illustration?.url

  useEffect(() => {
    const setHeight = setTimeout(() => {
      if (
        width &&
        width >= TABLET_WINDOW_SIZE &&
        contentContainerRef?.current
      ) {
        const contentHeight = contentContainerRef.current.clientHeight
        const newIllustrationHeight = contentHeight + 32
        setIllustrationHeight({ height: `${newIllustrationHeight}px` })
      } else if (illustrationContainerRef?.current) {
        illustrationContainerRef.current.style.height = 'auto'
      }
    }, 350)

    return () => clearTimeout(setHeight)
  }, [contentContainerRef, illustrationContainerRef, width])

  return (
    <article className="InsightListing mb-16">
      <Link className="InsightListing-container" to={`/${slug}`}>
        <div
          ref={illustrationContainerRef}
          className="InsightListing-illustration"
          style={illustrationHeight && illustrationHeight}
        >
          <img
            alt="listing illustration"
            className="mb-6 md:mb-0 w-full"
            data-testid="insightListingIllustration"
            src={illustrationSrc || listingDefaultSrc}
          />
        </div>

        <div ref={contentContainerRef} className="InsightListing-content">
          <div className="InsightListing-tags">
            <div className="InsightListing-type">
              <TypeIcon
                className="mr-2 w-5"
                data-testid="insightListingTypeIcon"
              />
              <p className="text-caption font-extrabold uppercase">
                {typeName}
              </p>
            </div>

            {topics && topics.length > 0 && (
              <div className="InsightListing-topics">
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
                      <TopicIcon
                        className="text-electricViolet mr-2 w-5"
                        data-testid="insightListingTopicIcon"
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
          <h2 className="text-h3 mt-4">{title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default InsightListing
