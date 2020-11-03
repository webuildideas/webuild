// Packages
import React from 'react'

// Commons
import { TypeBlogPost } from '../../../common/types/BlogPost'

interface Props {
  posts?: TypeBlogPost[]
  relatedPostsByTopic: TypeBlogPost[]
}

const ReadNext = ({ posts, relatedPostsByTopic }: Props) => {
  const hasPosts = posts && posts.length > 0
  const hasRelated = relatedPostsByTopic && relatedPostsByTopic.length > 0
  return hasPosts || hasRelated ? (
    <div className="max-w-screen-sm m-auto mb-10">
      <h3 className="mb-4">You might also want to check out these articles</h3>
      <div className="border-solid border-2 border-concrete rounded p-6">
        {posts && posts.length > 0
          ? posts.map((post: TypeBlogPost) => {
              return (
                <div key={`suggested-${post.slug}`}>
                  <a className="hover:text-stormGrey" href={post.slug}>
                    {post.title}
                  </a>
                </div>
              )
            })
          : relatedPostsByTopic.map((post: TypeBlogPost) => {
              return (
                <div key={`suggested-${post.slug}`}>
                  <a className="hover:text-stormGrey" href={post.slug}>
                    {post.title}
                  </a>
                </div>
              )
            })}
      </div>
    </div>
  ) : null
}

export default ReadNext
