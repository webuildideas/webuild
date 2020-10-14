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
  return <h1 className="text-stormGrey">{blogPost.title}</h1>
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      content {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            id
            fluid(maxWidth: 1100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
      publishDate
      readNext
      topic
    }
  }
`

export default BlogPost
