// Packages
import React from 'react'
import dayjs from 'dayjs'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// Common
import { TypeInsight } from '@common/types/Insight'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import Meta from '@components/Meta'
import SocialShare from '@components/Insight/SocialShare'
import ReadNext from '@components/Insight/ReadNext'

interface Props {
  data: {
    contentfulInsight: TypeInsight
    allContentfulInsight: {
      nodes: TypeInsight[]
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

const Insight = ({
  data: {
    contentfulInsight: insight,
    allContentfulInsight: { nodes: relatedInsightsByTopic }
  }
}: Props) => {
  return (
    <SiteMaxWidthContainer className="grid grid-cols-12 gap-8">
      <Meta title={insight.title} />
      <article className="prose mx-auto pt-16 pb-12 md:px-0 col-span-12 md:col-span-8">
        <h1 className="text-xl lg:mb-0">{insight.title}</h1>
        <div className="flex items-center">
          {insight.author ? (
            <>
              <Img
                alt={`${insight.author.name} Headshot`}
                className="rounded-full mr-4 inline-block"
                durationFadeIn={150}
                fadeIn
                fixed={insight.author.headshot.fixed}
                imgStyle={{ marginTop: 0, marginBottom: 0 }}
              />
              <p key={`${insight.author.name}`} className="inline">
                by {insight.author.name} on{' '}
                {dayjs(insight.publishDate).format('MMMM DD, YYYY')}
              </p>
            </>
          ) : null}
        </div>
        <SocialShare
          hashtags={insight.hashtags}
          shareQuote={insight.shareQuote?.shareQuote}
          title={insight.title}
        />
        {insight.content ? renderRichText(insight.content, options) : null}
      </article>
      <ReadNext
        className="col-span-12 md:col-span-3 pb-8 md:pt-16 md:pb-12"
        posts={insight.readNext}
        relatedPostsByTopic={relatedInsightsByTopic}
      />
    </SiteMaxWidthContainer>
  )
}

export const query = graphql`
  query insightQuery($slug: String!, $topics: [String]) {
    contentfulInsight(slug: { eq: $slug }) {
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
      hashtags
      readNext {
        title
        slug
        topics
      }
      shareQuote {
        shareQuote
      }
    }
    allContentfulInsight(
      filter: { topics: { in: $topics }, slug: { ne: $slug } }
      limit: 5
    ) {
      nodes {
        title
        slug
      }
    }
  }
`

export default Insight
