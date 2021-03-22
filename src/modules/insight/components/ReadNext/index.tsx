// Packages
import React from 'react'

// Common
import { TypeInsight } from '@common/types/Insight'

// Components
import ReadNextInsight from './ReadNextInsight'

interface Props {
  posts?: TypeInsight[]
  relatedPostsByTopic: TypeInsight[]
  className?: string
}

const ReadNext = ({ posts, relatedPostsByTopic, className }: Props) => {
  const hasPosts = posts && posts.length > 0
  const hasRelated = relatedPostsByTopic && relatedPostsByTopic.length > 0
  return hasPosts || hasRelated ? (
    <div className={`ReadNext ${className}`}>
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
