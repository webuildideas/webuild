// Packages
import React from 'react'
import { Link } from 'gatsby'

// Common
import { TypeInsight } from '@common/types/Insight'

// Components
import InsightTags from '@modules/contentHub/components/InsightTags'

interface Props {
  insight: TypeInsight
}

const FeaturedInsight = ({ insight }: Props) => {
  return (
    <article className="bg-foundation lg:bg-white lg:shadow-md rounded-tr-4">
      <Link className="md:flex md:items-center" to={`/${insight.slug}`}>
        <div className="mb-6 pt-4 pr-6 pl-8 md:pl-5 md:p-0">
          <img
            alt="Article Illustration"
            src={insight.illustration?.file.url}
          />
        </div>
        <div className="pl-8 pr-6 pb-8 md:pt-8 md:pr-8 md:pb-10 md:pl-4">
          <InsightTags
            className="mb-4 lg:mb-7"
            topics={insight.topics}
            type={insight.type}
          />
          <h2 className="text-h2 mb-2">{insight.title}</h2>
          {insight.subtitle ? (
            <p className="text-body mb-4">{insight.subtitle}</p>
          ) : null}
        </div>
      </Link>
    </article>
  )
}

export default FeaturedInsight
