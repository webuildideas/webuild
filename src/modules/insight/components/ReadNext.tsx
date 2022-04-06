import './styles/ReadNext.css'

// Packages
import React from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Common
import { TypeInsight } from '@common/types/Insight'

// Components
import InsightTags from '@modules/common/components/InsightTags'

const authorStyle = { width: '24px', height: '24px' }
const authorImgStyle = { marginTop: 0, marginBottom: 0 }
const insightStyle = { maxWidth: '350px' }

const ReadNextInsight = ({ insight }: { insight: TypeInsight }) => {
  return (
    <AniLink
      className="ReadNextInsight block bg-gray-200 p-8 mr-6"
      cover
      direction="right"
      duration={1.25}
      style={insightStyle}
      to={`/${insight.slug}/`}
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
      <p className="ReadNextInsight-read-more">Read More</p>
    </AniLink>
  )
}

interface Props {
  posts?: TypeInsight[]
  relatedPostsByTopic: TypeInsight[]
  className?: string
}

const ReadNext = ({ posts, relatedPostsByTopic, className }: Props) => {
  const hasPosts = posts && posts.length > 0
  const hasRelated = relatedPostsByTopic && relatedPostsByTopic.length > 0
  return hasPosts || hasRelated ? (
    <div className={`ReadNext ${className}`} id="ReadNext">
      <h3 className="text-h3 font-extrabold mb-6">More From The Blog</h3>
      <div className="flex flex-row flex-nowrap overflow-x-scroll">
        {posts && posts.length > 0
          ? posts.map((post: TypeInsight) => {
              return (
                <ReadNextInsight
                  key={`suggested-${post.slug}`}
                  insight={post}
                />
              )
            })
          : relatedPostsByTopic.map((post: TypeInsight) => {
              return (
                <ReadNextInsight
                  key={`suggested-${post.slug}`}
                  insight={post}
                />
              )
            })}
        <div className="spacer">spacer</div>
      </div>
    </div>
  ) : null
}

export default ReadNext
