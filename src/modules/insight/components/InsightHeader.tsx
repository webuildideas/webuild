// Packages
import React from 'react'

// Commons
import { TypeInsight, TypeInsightType } from '@common/types/Insight'

// Components
import Author from '@modules/insight/components/Author'
import InsightTags from '@modules/common/components/InsightTags'

interface Props {
  insight: TypeInsight
  insightType: TypeInsightType
  estReadTime?: number
}

const InsightHeader = ({ insight, insightType, estReadTime }: Props) => {
  return (
    <div className="Insight-header">
      <InsightTags
        className="mb-6"
        topics={insight.topics}
        type={insight.type}
      />
      <h1 className="text-h1 mb-4 mt-6">{insight.title}</h1>
      {insight.subtitle ? (
        <h2 className="text-title-subheading">{insight.subtitle}</h2>
      ) : null}
      {insight.author ? (
        <Author
          author={insight.author}
          estReadTime={estReadTime}
          publishDate={insight.publishDate}
        />
      ) : null}
    </div>
  )
}

export default InsightHeader
