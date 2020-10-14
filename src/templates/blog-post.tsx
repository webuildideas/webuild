// Packages
import React from 'react'
import { graphql } from 'gatsby'

// Commons
import { TypeBlogPost } from '../common/types/BlogPost'

interface Props {
  data: {
    contentfulBlogPost: TypeBlogPost
  }
}

const BlogPost = ({ data: { contentfulBlogPost: blogPost } }: Props) => {
  return (
    <h1 className="text-orange-700 md:text-indigo-600">{blogPost.title}</h1>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      content
      publishDate
      readNext
      topic
    }
  }
`

export default BlogPost
