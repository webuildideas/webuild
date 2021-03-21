// Packages
import React, { memo } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Common
import { TypeInsight } from '@common/types/Insight'

// Components
import InsightTags from '@modules/common/components/InsightTags'

// Styles
import './styles/FeaturedInsight.css'

interface Props {
  insight: TypeInsight
}

const FeaturedInsight = memo(function FeaturedInsightMemo({ insight }: Props) {
  return (
    <article className="FeaturedInsight">
      <AniLink
        bg="#757588"
        className="FeaturedInsight-container"
        cover
        direction="right"
        duration={1.25}
        to={`/${insight.slug}`}
      >
        <div className="FeaturedInsight-img">
          <img
            alt="Article Illustration"
            src={insight.featuredIllustration?.file.url}
          />
        </div>
        <div className="FeaturedInsight-content">
          <InsightTags
            className="mb-4 lg:mb-7"
            topics={insight.topics}
            type={insight.type}
          />
          <h2 className="text-h2 mb-2">{insight.title}</h2>
          {insight.subtitle ? (
            <p className="text-body mb-4 md:mb-0">{insight.subtitle}</p>
          ) : null}
        </div>
      </AniLink>
    </article>
  )
})

export default FeaturedInsight
