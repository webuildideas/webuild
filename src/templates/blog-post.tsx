// Packages
import React from 'react'
import { graphql } from 'gatsby'

const BlogPost = ({ data: { contentfulBlogPost: blogPost } }) => {
  return <h1>{blogPost.title}</h1>
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`

export default BlogPost
