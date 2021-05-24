// Packages
import React, { useEffect, useMemo } from 'react'
import Img from 'gatsby-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Options } from '@contentful/rich-text-react-renderer'

// Common
import { classNames } from '@common/utils/classNames'
import { TypeCaseStudy } from '@common/types/CaseStudy'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import MotionAniLink from '@modules/common/components/MotionAniLink'

// Styles
import './styles/CaseStudy.css'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

interface Props {
  animationThreshold?: number
  caseStudy: TypeCaseStudy
  layout: 'right' | 'left'
  mobileTextFirst?: boolean
  taglineRichText?: boolean
}

const CaseStudy = ({
  animationThreshold = 0.75,
  caseStudy,
  layout,
  mobileTextFirst,
  taglineRichText = false
}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: animationThreshold
  })

  const textControls = useAnimation()
  const logoControls = useAnimation()
  const imageControls = useAnimation()
  const buttonControls = useAnimation()

  const variants = {
    visible: (i: number) => ({
      opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.25,
        type: 'spring'
      }
    }),
    hidden: {
      opacity: 0,
      y: 25
    },
    logoVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85
      }
    },
    logoHidden: {
      opacity: 0,
      y: 10
    },
    imageVisible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.15,
        ease: 'easeInOut'
      }
    },
    imageHidden: {
      x: layout === 'right' ? 70 : -70,
      y: 60,
      opacity: 0
    },
    buttonVisible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: 'easeInOut'
      }
    },
    buttonHidden: {
      y: 20,
      opacity: 0
    }
  }

  const richTextOptions: Options = useMemo(
    () => ({
      renderNode: {
        [BLOCKS.PARAGRAPH]: (_, c) => (
          <motion.h1
            animate={textControls}
            className="text-h3 font-extrabold mb-6"
            custom={0}
            initial="hidden"
            variants={variants}
          >
            {c}
          </motion.h1>
        )
      },
      renderMark: {
        [MARKS.BOLD]: (text) => (
          <span className="text-h2 font-extrabold">{text}</span>
        )
      }
    }),
    [textControls]
  )

  useEffect(() => {
    if (inView) {
      textControls.start('visible')
      logoControls.start('logoVisible')
      imageControls.start('imageVisible')
      buttonControls.start('buttonVisible')
    }
  }, [textControls, inView, buttonControls, logoControls, imageControls])

  let bgColor
  switch (caseStudy.name) {
    case 'Student Loan Hero':
      bgColor = '#41C781'
      break

    case 'Optimize':
      bgColor = '#3A7CEB'
      break

    case 'GoSite':
      bgColor = '#3A7CEB'
      break

    default:
      bgColor = '#286AFF'
      break
  }

  const caseStudyImgClasses = classNames({
    'CaseStudy-img': true,
    mobileTextFirst: mobileTextFirst === true,
    'img-left': layout === 'left',
    'img-right': layout === 'right'
  })

  const caseStudyContentClasses = classNames({
    'CaseStudy-content': true,
    mobileTextFirst: mobileTextFirst === true,
    'img-left': layout === 'left',
    'img-right': layout === 'right'
  })

  return (
    <SiteMaxWidthContainer className="CaseStudy-container">
      <article ref={ref} className="CaseStudy">
        <div className={caseStudyContentClasses}>
          <div className="CaseStudy-logo">
            <AniLink
              bg={bgColor}
              cover
              direction="top"
              duration={1.25}
              to={`/case-studies/${caseStudy.slug}`}
            >
              <motion.img
                alt={`${caseStudy.name} logo`}
                animate={logoControls}
                initial="hidden"
                src={caseStudy.logo?.file?.url}
                variants={variants}
              />
            </AniLink>
          </div>

          <AniLink
            bg={bgColor}
            cover
            direction="top"
            duration={1.25}
            to={`/case-studies/${caseStudy.slug}`}
          >
            {taglineRichText && caseStudy.taglineRichText ? (
              renderRichText(caseStudy.taglineRichText, richTextOptions)
            ) : (
              <motion.h1
                animate={textControls}
                className="text-h2 font-extrabold mb-6"
                custom={0}
                initial="hidden"
                variants={variants}
              >
                {caseStudy.tagline}
              </motion.h1>
            )}
          </AniLink>
          {caseStudy.successSummary && (
            <AniLink
              bg={bgColor}
              cover
              direction="top"
              duration={1.25}
              to={`/case-studies/${caseStudy.slug}`}
            >
              <motion.p
                animate={textControls}
                className="text-body mb-10"
                custom={1}
                initial="hidden"
                variants={variants}
              >
                {caseStudy.successSummary.successSummary}
              </motion.p>
            </AniLink>
          )}
          <MotionAniLink
            animate={buttonControls}
            bgColor={bgColor}
            cover
            direction="top"
            duration={1.25}
            initial="buttonHidden"
            styleType="solid-purple"
            to={`/case-studies/${caseStudy.slug}`}
            variants={variants}
          >
            Read Case Study
          </MotionAniLink>
        </div>
        {caseStudy?.listingImage?.fluid ? (
          <AniLink
            bg={bgColor}
            className={caseStudyImgClasses}
            cover
            direction="top"
            duration={1.25}
            to={`/case-studies/${caseStudy.slug}`}
          >
            <motion.div
              animate={imageControls}
              initial="imageHidden"
              variants={variants}
            >
              <Img
                alt={`${caseStudy.name}`}
                durationFadeIn={275}
                fadeIn
                fluid={caseStudy.listingImage.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </motion.div>
          </AniLink>
        ) : null}
      </article>
    </SiteMaxWidthContainer>
  )
}

export default CaseStudy
