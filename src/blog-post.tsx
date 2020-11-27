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

// Components
import Meta from '../components/Meta'
import ReadNext from '../components/BlogPost/ReadNext'
import SocialShare from '../components/BlogPost/SocialShare'
import SiteMaxWidthContainer from '../common/styledComponents/SiteMaxWidthContainer'

interface Props {
  data: {
    contentfulBlogPost: TypeBlogPost
    allContentfulBlogPost: {
      nodes: TypeBlogPost[]
    }
  }
}

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <Img durationFadeIn={125} fadeIn fluid={node.data.target.fluid} />
    }
  }
}

const BlogPost = ({
  data: {
    contentfulBlogPost: blogPost,
    allContentfulBlogPost: { nodes: relatedBlogPostsByTopic }
  }
}: Props) => {
  return (
    <SiteMaxWidthContainer className="grid grid-cols-12 gap-8">
      <Meta title={blogPost.title} />
      <article className="prose mx-auto pt-16 pb-12 md:px-0 col-span-12 md:col-span-8">
        <h1 className="text-xl lg:mb-0">{blogPost.title}</h1>
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
        <SocialShare
          hashtags={blogPost.hashtags}
          shareQuote={blogPost.shareQuote?.shareQuote}
          title={blogPost.title}
        />
        {blogPost.content ? renderRichText(blogPost.content, options) : null}
      </article>
      <ReadNext
        className="col-span-12 md:col-span-3 pb-8 md:pt-16 md:pb-12"
        posts={blogPost.readNext}
        relatedPostsByTopic={relatedBlogPostsByTopic}
      />
    </SiteMaxWidthContainer>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!, $topics: [String]) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
        headshot {
          fixed(cropFocus: FACE, height: 50, width: 50) {
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
      readNext {
        title
        topics {
          name
        }
        slug
      }
      topics {
        name
      }
      hashtags
      shareQuote {
        shareQuote
      }
    }
    allContentfulBlogPost(
      filter: {
        topics: { elemMatch: { name: { in: $topics } } }
        slug: { ne: $slug }
      }
    ) {
      nodes {
        title
        slug
      }
    }
  }
`

export default BlogPost
