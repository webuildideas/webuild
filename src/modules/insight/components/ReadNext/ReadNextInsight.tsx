// Packages
import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

// Common
import { TypeInsight } from '@common/types/Insight'

// Components
import InsightTags from '@modules/common/components/InsightTags'

const authorStyle = { width: '24px', height: '24px' }
const authorImgStyle = { marginTop: 0, marginBottom: 0 }

const ReadNextInsight = ({ insight }: { insight: TypeInsight }) => {
  return (
    <Link
      className="block bg-gray-200 mb-4 p-8 mr-6"
      style={{ minWidth: '300px' }}
      to={`/${insight.slug}`}
    >
      <InsightTags type={insight.type} />
      <div className="flex items-center mt-5 mb-6">
        <Img
          alt={`${insight.author.name} Headshot`}
          className="rounded-full inline-block"
          durationFadeIn={150}
          fadeIn
          fixed={insight.author.headshot.fixed}
          imgStyle={authorImgStyle}
          style={authorStyle}
        />
        <p className="text-caption ml-2">{insight.author.name}</p>
      </div>
      <h2 className="text-h3 mb-6">{insight.title}</h2>
      <p className="text-electricViolet">Read More</p>
    </Link>
  )
}

export default ReadNextInsight
