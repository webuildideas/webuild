// Packages
import React from 'react'

// Common
import { TypeInsight } from '@common/types/Insight'

interface Props {
  insight: TypeInsight
}

const FeaturedInsight = ({ insight }: Props) => {
  return (
    <div>
      <h1 className="text-h1">{insight.title}</h1>
    </div>
  )
}

export default FeaturedInsight
