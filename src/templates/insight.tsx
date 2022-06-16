import '@common/styles/templates/insight.css'

// Packages
import React, { useEffect, useRef, useState, useContext } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { useRecoilValue } from 'recoil'
import { graphql, PageProps } from 'gatsby'
import Sticky from 'react-stickynode'
import Img from 'gatsby-image'

// Common
import { classNames } from '@common/utils/classNames'
import { TypeInsight } from '@common/types/Insight'
import { getEstimatedReadingTime } from '@modules/insight/utils'
// import AdsContext from '@common/ads/AdsContext'

// Components
import Meta from '@components/Meta'
import SocialShare from '@modules/insight/components/SocialShare'
import ReadNext from '@modules/insight/components/ReadNext'
import ReadNextSidebar from '@modules/insight/components/ReadNextSidebar'
import InsightTags from '@modules/common/components/InsightTags'
import Author from '@modules/insight/components/Author'
import Footer from '@modules/common/components/Footer'
import EmailSignupForm from '@modules/forms/EmailSignupForm'
import GatedPostForm from '@modules/forms/GatedPostForm'
import ContentUpgradeForm from '@modules/forms/ContentUpgradeForm'
import MonthlyNewsletterForm from '@modules/forms/MonthlyNewsletterForm'
import Button from '@modules/common/components/Button'
import SidebarAd from '@common/ads/SidebarAd'

// Atoms
import { userGatedPostConversionsAtom } from '@modules/insight/atoms/userGatedPostConversions'
import { userContentUpgradeConversionsAtom } from '@modules/forms/atoms/userContentUpgradeConversionsAtom'

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
  const userContentUpgradeConversions = useRecoilValue(
    userContentUpgradeConversionsAtom
  )
  const userHasUnlockedPost = userGatedPostConversions.includes(insight.id)
  const isLocked = insight.isGated && !userHasUnlockedPost
  const [estReadTime, setEstReadTime] = useState<number>()
  const articleRef = useRef<HTMLDivElement>(null)
  const contentUpgradeInputRef = useRef<HTMLInputElement>(null)
  const userHasCompletedContentUpgrade = userContentUpgradeConversions.includes(
    insight.contentUpgrade ? insight.contentUpgrade.title : ''
  )
  // const { SidebarAds } = useContext(AdsContext)

  const showReadTime = !(
    insight.type === 'Resource' || insight.type === 'eBook'
  )
  const showReadNext = insight.type !== 'Resource'
  const showSidebar = insight.type !== 'Resource'

  const articleClassNames = classNames({
    'Insight-article': true,
    'Insight-article-locked': isLocked
  })

  /**
   * If there is a content upgrade and user has already completed form
   * then scroll them to that element.
   *
   * If the user has not completed form then focus on the form input.
   *
   * @returns void;
   */
  const handleOnAccessClick = () => {
    const contentUpgrade = document.getElementsByClassName(
      'ContentUpgrade-bottom'
    )[0]

    if (contentUpgrade && userHasCompletedContentUpgrade) {
      contentUpgrade.scrollIntoView({ behavior: 'smooth' })
      return
    }

    if (contentUpgradeInputRef.current) {
      contentUpgrade.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        if (contentUpgradeInputRef.current) {
          contentUpgradeInputRef.current.focus()
        }
      }, 1000)
    }
  }

  useEffect(() => {
    if (articleRef.current) {
      const wordCount = articleRef.current.innerText.trim().split(/\s+/).length
      const readTime = getEstimatedReadingTime(wordCount)
      setEstReadTime(readTime)
    }
  }, [articleRef])
  return (
    <>
      <Meta
        description={insight.shareQuote?.shareQuote}
        location={location}
        shareImage={insight.shareImage?.fixed.src}
        shareTitle={insight.title}
        title={insight.seoTitle ?? insight.title}
      />
      <div
        className={`Insight-container Insight-type-${insight.type.toLowerCase()}`}
        id="insight-container"
      >
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
              <div className="Insight-author">
                <Author
                  author={insight.author}
                  estReadTime={estReadTime}
                  publishDate={insight.publishDate}
                  showReadTime={showReadTime}
                />
                {insight.type === 'Resource' || insight.type === 'eBook' ? (
                  <Button
                    className="Insight-access-button"
                    onClick={handleOnAccessClick}
                    styleType="solid-purple"
                  >
                    Access Now
                  </Button>
                ) : null}
              </div>
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

            {!isLocked && insight.contentUpgrade ? (
              <ContentUpgradeForm
                className="mt-16 mb-8 md:mb-0 ContentUpgrade-bottom"
                contentUpgrade={insight.contentUpgrade}
                inputRef={contentUpgradeInputRef}
                isResource={insight.type === 'Resource'}
              />
            ) : null}
          </article>

          {!isLocked ? (
            <>
              <div className="Insight-share">
                <Sticky bottomBoundary="#article" enabled={true} top={150}>
                  <SocialShare
                    className="Insight-share-items"
                    hashtags={insight.hashtags}
                    shareQuote={insight.shareQuote?.shareQuote}
                    title={insight.title}
                  />
                </Sticky>
              </div>

              {showReadNext ? (
                <ReadNext
                  className="Insight-read-next"
                  posts={insight.readNext}
                  relatedPostsByTopic={relatedInsightsByTopic}
                />
              ) : null}

              {showSidebar ? (
                <div className="Insight-ctas">
                  <EmailSignupForm location={location.href} />
                  <MonthlyNewsletterForm
                    containerId="insight-container"
                    location={location.href}
                    percentTrigger={0.3}
                  />
                  <SidebarAd theAd={insight.sidebarAd || undefined} />

                  <ReadNextSidebar
                    insights={insight.readNext}
                    relatedInsightsByTopic={relatedInsightsByTopic}
                  />
                </div>
              ) : null}
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
      sidebarAd {
        id
        headline
        copy
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        ctaLink
        ctaText
      }
      content {
        raw
        references {
          __typename
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
      shareImage {
        fixed(width: 1200, height: 630) {
          src
        }
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
        resourceFormTitle
        resourceBlurb {
          resourceBlurb
        }
        upgradeContent {
          file {
            url
          }
        }
      }
      seoTitle
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
