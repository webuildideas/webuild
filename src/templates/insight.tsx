// Packages
import React, { useEffect, useRef, useState } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { useRecoilValue } from 'recoil'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'

// Common
import { classNames } from '@common/utils/classNames'
import { TypeInsight } from '@common/types/Insight'

// Components
import Meta from '@components/Meta'
import SocialShare from '@modules/insight/components/SocialShare'
import ReadNext from '@modules/insight/components/ReadNext'
import ReadNextSidebar from '@modules/insight/components/ReadNextSidebar'
import InsightTags from '@modules/common/components/InsightTags'
import { getEstimatedReadingTime } from '@modules/insight/utils'
import Author from '@modules/insight/components/Author'
import Footer from '@components/Footer'
import EmailSignupForm from '@modules/forms/EmailSignupForm'
import GatedPostForm from '@modules/forms/GatedPostForm'
import ContentUpgradeForm from '@modules/forms/ContentUpgradeForm'

// Atoms
import { userGatedPostConversionsAtom } from '@modules/insight/atoms/userGatedPostConversions'

// Styles
import '@common/styles/templates/insight.css'

interface Props {
  location: PageProps['location']
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
        <div className="Insight-img">
          <Img durationFadeIn={125} fadeIn fluid={node.data.target.fluid} />
          {caption ? <p className="text-caption">{caption}</p> : null}
        </div>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (!node.data.target) {
        return
      }

      if (node.data.target.__typename === 'ContentfulImage') {
        return (
          <div className="Insight-img">
            <Img
              alt={node.data.target.altText}
              className={
                node.data.target.imageType
                  ? node.data.target.imageType.join(' ')
                  : undefined
              }
              durationFadeIn={125}
              fadeIn
              fluid={node.data.target.asset.fluid}
            />
            {node.data.target.caption ? (
              <p className="text-caption">{node.data.target.caption}</p>
            ) : null}
          </div>
        )
      }

      if (node.data.target.__typename === 'ContentfulContentUpgrade') {
        return (
          <ContentUpgradeForm
            className="mt-16 mb-8 md:mb-0"
            contentUpgrade={node.data.target}
            isSimple
          />
        )
      }

      return null
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (!node.data.target) {
        return
      }

      return (
        <span className="Insight-img-inline mt-12 md:mt-18 block">
          <img
            alt={node.data.target.altText}
            className={`Insight-img-inline ${
              node.data.target.imageType
                ? node.data.target.imageType.join(' ')
                : undefined
            }`}
            src={node.data.target.asset.fluid.src}
          />
          {node.data.target.caption ? (
            <p className="text-caption">{node.data.target.caption}</p>
          ) : null}
        </span>
      )
    },
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="Insight-copy Insight-h2 text-h2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="Insight-copy Insight-h3 text-h3 font-extrabold">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="Insight-copy Insight-h4 text-h4">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="Insight-copy Insight-paragraph text-body">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_, children) => {
      return (
        <blockquote className="Insight-copy Insight-blockquote text-h2">
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
  const userGatedPostConversions = useRecoilValue(userGatedPostConversionsAtom)
  const userHasUnlockedPost = userGatedPostConversions.includes(insight.id)
  const isLocked = insight.isGated && !userHasUnlockedPost
  const [estReadTime, setEstReadTime] = useState<number>()
  const articleRef = useRef<HTMLDivElement>(null)

  const articleClassNames = classNames({
    'Insight-article': true,
    'Insight-article-locked': isLocked
  })

  useEffect(() => {
    if (articleRef.current) {
      const wordCount = articleRef.current.innerText.trim().split(/\s+/).length
      const readTime = getEstimatedReadingTime(wordCount)
      setEstReadTime(readTime)
    }
  }, [articleRef])
  return (
    <>
      <Meta location={location} title={insight.title} />
      <div className="Insight-container">
        {insight?.heroIllustration?.file?.url ? (
          <div className="Insight-hero">
            <img
              alt="Insight Hero illustration"
              src={insight.heroIllustration.file.url}
            />
          </div>
        ) : null}
        <main className="Insight-grid">
          <div className="Insight-header">
            <InsightTags
              className="mb-6"
              topics={insight.topics}
              type={insight.type}
            />
            <h1 className="text-h1 mb-4 mt-6">{insight.title}</h1>
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
          <article ref={articleRef} className="Insight" id="article">
            <div className={articleClassNames}>
              {insight.content
                ? renderRichText(insight.content, options)
                : null}
            </div>
            {insight.isGated ? (
              <div className="pr-6 md:pr-8 lg:pr-0">
                <GatedPostForm
                  className="mt-12 mb-14"
                  postId={insight.id}
                  postTitle={insight.title}
                />
              </div>
            ) : null}
            {insight.contentUpgrade ? (
              <ContentUpgradeForm
                className="mt-16 mb-8 md:mb-0"
                contentUpgrade={insight.contentUpgrade}
              />
            ) : null}
          </article>
          {!isLocked ? (
            <>
              <div className="Insight-share">
                <SocialShare
                  className="Insight-share-items"
                  hashtags={insight.hashtags}
                  shareQuote={insight.shareQuote?.shareQuote}
                  title={insight.title}
                />
              </div>

              <ReadNext
                className="Insight-read-next"
                posts={insight.readNext}
                relatedPostsByTopic={relatedInsightsByTopic}
              />

              <div className="Insight-ctas">
                <EmailSignupForm location={location.href} />
                <ReadNextSidebar
                  insights={insight.readNext}
                  relatedInsightsByTopic={relatedInsightsByTopic}
                />
              </div>
            </>
          ) : null}
        </main>
        <Footer />
      </div>
    </>
  )
}

export const query = graphql`
  query insightQuery($slug: String!, $topics: [String]) {
    contentfulInsight(slug: { eq: $slug }) {
      id
      isGated
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
          ... on ContentfulAsset {
            contentful_id
            id
            description
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          ... on ContentfulContentUpgrade {
            contentful_id
            id
            blurb {
              blurb
            }
            formImage {
              file {
                url
              }
            }
            simpleFormTitle
            title
            upgradeContent {
              file {
                url
              }
            }
          }
          ... on ContentfulImage {
            id
            contentful_id
            caption
            altText
            imageType
            asset {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
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
      contentUpgrade {
        blurb {
          blurb
        }
        formImage {
          file {
            url
          }
        }
        simpleFormTitle
        title
        upgradeContent {
          file {
            url
          }
        }
      }
    }

    allContentfulInsight(
      filter: {
        topics: { in: $topics }
        slug: { ne: $slug }
        title: { ne: "PLACEHOLDER" }
      }
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
