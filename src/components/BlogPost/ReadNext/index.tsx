// Packages
import React from 'react'

// Commons
import { TypeBlogPost } from '../../../common/types/BlogPost'

interface Props {
  posts?: TypeBlogPost[]
  relatedPostsByTopic: TypeBlogPost[]
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
          ? posts.map((post: TypeBlogPost) => {
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
          : relatedPostsByTopic.map((post: TypeBlogPost) => {
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
