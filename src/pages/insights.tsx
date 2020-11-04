import { graphql } from 'gatsby'
import React from 'react'
import SiteMaxWidthContainer from '../common/styledComponents/SiteMaxWidthContainer'
import { TypeBlogPost } from '../common/types/BlogPost'

interface Props {
  data: {
    allContentfulBlogPost: {
      nodes: TypeBlogPost[]
    }
  }
}
const Insights = ({
  data: {
    allContentfulBlogPost: { nodes: blogPosts }
  }
}: Props) => {
  return (
    <SiteMaxWidthContainer>
      <h1 className="mb-12">Articles & Insights</h1>
      {blogPosts.map((post: TypeBlogPost) => (
        <div key={`item-${post.slug}`} className="mb-8">
          <a href={post.slug}>
            <h2>{post.title}</h2>
          </a>
        </div>
      ))}
    </SiteMaxWidthContainer>
  )
}

export const INSIGHTS_QUERY = graphql`
  query insightsQuery {
    allContentfulBlogPost {
      nodes {
        slug
        title
        publishDate
      }
    }
  }
`

export default Insights
