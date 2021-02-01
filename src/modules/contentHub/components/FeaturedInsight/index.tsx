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
    <article className="bg-foundation rounded-tr-lg p-4">
      <Link to={`/${insight.slug}`}>
        <img
          alt="Article Illustration"
          className="mb-6"
          src={insight.illustration?.file.url}
        />
        <InsightTags
          className="mb-4"
          topics={insight.topics}
          type={insight.type}
        />
        <h2 className="text-h2 mb-2">{insight.title}</h2>
        <p className="text-body mb-4">
          Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Integer
          enim.
        </p>
      </Link>
    </article>
  )
}

export default FeaturedInsight
