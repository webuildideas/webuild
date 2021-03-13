// Packages
import React, { useEffect, useRef, useState } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// Common
import { TypeInsight } from '@common/types/Insight'

// Components
import Meta from '@components/Meta'
import SocialShare from '@modules/insight/components/SocialShare'
import ReadNext from '@modules/insight/components/ReadNext'
import InsightTags from '@modules/common/components/InsightTags'
import { getEstimatedReadingTime } from '@modules/insight/utils'
import Author from '@modules/insight/components/Author'
import Footer from '@components/Footer'

import '@common/styles/templates/insight.css'
import EmailSignupForm from '@modules/forms/EmailSignup'

interface Props {
  location: {
    href: string
  }
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
      const caption = node.data.target.description

      return (
        <div className="Article-img">
          <Img durationFadeIn={125} fadeIn fluid={node.data.target.fluid} />
          {caption ? <p className="text-caption">{caption}</p> : null}
        </div>
      )
    },
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="Article-copy Article-h2 text-h2 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="Article-copy Article-h3 text-h3 mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="Article-copy Article-h4 text-h4 mb-6">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="Article-copy Article-paragraph text-body mb-6">
        {children}
      </p>
    ),
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <blockquote className="Article-copy Article-blockquote text-h2">
          {children}
        </blockquote>
      )
    }
  }
}

const Insight = ({
  data: {
    contentfulInsight: insight,
    allContentfulInsight: { nodes: relatedInsightsByTopic }
  },
  location
}: Props) => {
  const [estReadTime, setEstReadTime] = useState<number>()
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (articleRef.current) {
      const wordCount = articleRef.current.innerText.trim().split(/\s+/).length
      const readTime = getEstimatedReadingTime(wordCount)
      setEstReadTime(readTime)
    }
  }, [articleRef])

  return (
    <>
      {insight?.heroIllustration?.file?.url ? (
        <div
          className="Article-hero"
          style={{
            backgroundImage: `url(${insight.heroIllustration.file.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            backgroundSize: '50%',
            height: '480px'
            // backgroundColor: 'gray'
          }}
        />
      ) : null}
      <main className="Article-grid">
        <Meta title={insight.title} />
        <div className="Article-header">
          <InsightTags
            className="mb-6"
            topics={insight.topics}
            type={insight.type}
          />
          <h1 className="text-h1 mb-4">{insight.title}</h1>
          {insight.subtitle ? (
            <h2 className="text-title-subheading">{insight.subtitle}</h2>
          ) : null}
          {insight.author ? (
            <Author
              author={insight.author}
              estReadTime={estReadTime}
              publishDate={insight.publishDate}
            />
          ) : null}
        </div>
        <article ref={articleRef} className="Article" id="article">
          {insight.content ? renderRichText(insight.content, options) : null}
        </article>
        <div className="Article-share">
          <SocialShare
            className="Article-share-items"
            hashtags={insight.hashtags}
            shareQuote={insight.shareQuote?.shareQuote}
            title={insight.title}
          />
        </div>
        <ReadNext
          className="Article-read-next"
          posts={insight.readNext}
          relatedPostsByTopic={relatedInsightsByTopic}
        />

        <div className="Article-ctas">
          <EmailSignupForm location={location.href} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query insightQuery($slug: String!, $topics: [String]) {
    contentfulInsight(slug: { eq: $slug }) {
      type
      topics
      title
      subtitle
      heroIllustration {
        file {
          url
        }
      }
      author {
        name
        headshot {
          fixed(cropFocus: FACE, height: 96, width: 96) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
      content {
        raw
        references {
          __typename
          contentful_id
          ... on ContentfulAsset {
            id
            description
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
      publishDate
      hashtags
      readNext {
        type
        title
        slug
        author {
          name
          headshot {
            fixed(cropFocus: FACE, height: 48, width: 48) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
        }
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
        type
        title
        slug
        author {
          name
          headshot {
            fixed(cropFocus: FACE, height: 48, width: 48) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default Insight
