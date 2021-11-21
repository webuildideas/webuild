// Packages
import React from 'react'

// Common
import { TypeInsight } from '@common/types/Insight'
import { Link } from 'gatsby'

interface Props {
  insights?: TypeInsight[]
  relatedInsightsByTopic: TypeInsight[]
}

const ReadNextSidebar = ({ insights, relatedInsightsByTopic }: Props) => {
  const hasInsights = insights && insights.length > 0
  const hasRelated = relatedInsightsByTopic && relatedInsightsByTopic.length > 0

  return hasInsights || hasRelated ? (
    <div className="hidden lg:block lg:px-8 lg:mt-40">
      <div>
        <h4 className="text-h4 mb-8">Related Content</h4>
        {insights && insights.length > 0
          ? insights.map((insight: TypeInsight) => {
              return (
                <Link
                  key={insight.slug}
                  className="block mb-6 text-caption hover:text-electricViolet"
                  to={`/${insight.slug}/`}
                >
                  {insight.title}
                </Link>
              )
            })
          : relatedInsightsByTopic.map((insight: TypeInsight) => {
              return (
                <Link
                  key={insight.slug}
                  className="block mb-6 text-caption hover:text-electricViolet"
                  to={`/${insight.slug}/`}
                >
                  {insight.title}
                </Link>
              )
            })}
      </div>
    </div>
  ) : null
}

export default ReadNextSidebar
