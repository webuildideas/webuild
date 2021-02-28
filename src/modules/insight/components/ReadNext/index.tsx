// Packages
import React from 'react'

// Common
import { TypeInsight } from '@common/types/Insight'

interface Props {
  posts?: TypeInsight[]
  relatedPostsByTopic: TypeInsight[]
  className?: string
}

const ReadNext = ({ posts, relatedPostsByTopic, className }: Props) => {
  const hasPosts = posts && posts.length > 0
  const hasRelated = relatedPostsByTopic && relatedPostsByTopic.length > 0
  return hasPosts || hasRelated ? (
    <div className={`${className}`}>
      <h3 className="mb-4">Relateds Posts</h3>
      <div>
        {posts && posts.length > 0
          ? posts.map((post: TypeInsight) => {
              return (
                <a
                  key={`suggested-${post.slug}`}
                  className="hover:text-stormGrey"
                  href={post.slug}
                >
                  <div>
                    <h5 className="font-medium mb-4">{post.title}</h5>
                    <p className="text-sm underline">Read Next</p>
                  </div>
                </a>
              )
            })
          : relatedPostsByTopic.map((post: TypeInsight) => {
              return (
                <a
                  key={`suggested-${post.slug}`}
                  className="hover:text-stormGrey"
                  href={post.slug}
                >
                  <div>
                    <h5 className="font-medium mb-4">{post.title}</h5>
                    <p className="text-sm underline">Read Next</p>
                  </div>
                </a>
              )
            })}
      </div>
    </div>
  ) : null
}

export default ReadNext
