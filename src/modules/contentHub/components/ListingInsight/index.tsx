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
import { TypeInsightTypeIconConfig, TypeInsightTopicIconConfig } from './config'

// Styles
import './style.css'

interface Props extends WithClassName {
  insight: TypeInsight
}

const TABLET_WINDOW_SIZE = 768

const ListingInsight = ({
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

  const { name: typeName, icon: TypeIcon } = TypeInsightTypeIconConfig[type]

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
    <article className="ListingInsight mb-16">
      <Link className="ListingInsight-container" to={`/${slug}`}>
        <div
          ref={illustrationContainerRef}
          className="ListingInsight-illustration"
          style={illustrationHeight && illustrationHeight}
        >
          <img
            alt="listing illustration"
            className="mb-6 md:mb-0 w-full"
            data-testid="listingInsightIllustration"
            src={illustration?.file.url || listingDefaultSrc}
          />
        </div>

        <div ref={contentContainerRef} className="ListingInsight-content">
          <div className="ListingInsight-tags">
            <div className="ListingInsight-type">
              <TypeIcon
                className="mr-2 w-5"
                data-testid="listingTypeInsightTypeIcon"
              />
              <p className="text-caption font-extrabold uppercase">
                {typeName}
              </p>
            </div>

            {topics && topics.length > 0 && (
              <div className="ListingInsight-topics">
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
                        data-testid="listingTypeInsightTopicIcon"
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

export default ListingInsight
