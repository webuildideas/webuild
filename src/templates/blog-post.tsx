// Packages
import React from 'react'
import dayjs from 'dayjs'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// Commons
import { TypeBlogPost } from '../common/types/BlogPost'

interface Props {
  data: {
    contentfulBlogPost: TypeBlogPost
  }
}

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <Img durationFadeIn={125} fadeIn fluid={node.data.target.fluid} />
    }
  }
}

const BlogPost = ({ data: { contentfulBlogPost: blogPost } }: Props) => {
  return (
    <article className="prose mx-auto pt-16 pb-12 px-6 md:px-0">
      <h1 className="text-xl mb-12">{blogPost.title}</h1>
      <div className="flex items-center">
        {blogPost.author ? (
          <>
            <Img
              alt={`${blogPost.author.name} Headshot`}
              className="rounded-full mr-4 inline-block"
              durationFadeIn={150}
              fadeIn
              fixed={blogPost.author.headshot.fixed}
              imgStyle={{ marginTop: 0, marginBottom: 0 }}
            />
            <p key={`${blogPost.author.name}`} className="inline">
              by {blogPost.author.name} on{' '}
              {dayjs(blogPost.publishDate).format('MMMM DD, YYYY')}
            </p>
          </>
        ) : null}
      </div>
      {blogPost.content ? renderRichText(blogPost.content, options) : null}
    </article>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
        headshot {
          fixed(cropFocus: FACE, height: 65, width: 65) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
      content {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            id
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
      publishDate
      topic
    }
  }
`

export default BlogPost
