import React from 'react'
import { TypeBlogPost } from '../../../common/types/BlogPost'

interface Props {
  posts?: TypeBlogPost[]
}

const SuggestedNext = ({ posts }: Props) => {
  return (
    <div className="max-w-screen-sm m-auto mb-10">
      <h3 className="mb-4">You might also want to check out these articles</h3>
      <div className="border-solid border-2 border-concrete rounded p-6">
        {posts && posts.length > 0
          ? posts.map((post: TypeBlogPost) => {
              return (
                <div key={`suggested-${post.slug}`}>
                  <a className="hover:text-stormGrey" href={post.slug}>
                    <h4>{post.title}</h4>
                  </a>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default SuggestedNext
