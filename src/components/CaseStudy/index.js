// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import Button from '../Button'

const CaseStudy = ({
  animationThreshold,
  caseStudy,
  layout,
  mobileTextFirst,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: animationThreshold,
  })

  const textControls = useAnimation()
  const logoControls = useAnimation()
  const imageControls = useAnimation()

  const variants = {
    visible: i => ({
      opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.25,
        type: 'spring',
      },
    }),
    hidden: {
      opacity: 0,
      y: 25,
    },
    logoVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
      },
    },
    logoHidden: {
      opacity: 0,
      y: 10,
    },
    imageVisible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.15,
        ease: 'easeInOut',
      },
    },
    imageHidden: {
      x: layout === 'right' ? 70 : -70,
      y: 60,
      opacity: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      textControls.start('visible')
      logoControls.start('logoVisible')
      imageControls.start('imageVisible')
    }
  }, [textControls, inView, logoControls, imageControls])

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

  return (
    <SiteMaxWidthContainer className="CaseStudy">
      <S.CaseStudy ref={ref} layout={layout} mobileTextFirst={mobileTextFirst}>
        <div className="CaseStudy__content">
          <div className="CaseStudy__logo">
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
                src={caseStudy.logo.file.url}
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
            <motion.h1
              animate={textControls}
              className="CaseStudy__tagline"
              custom={0}
              initial="hidden"
              variants={variants}
            >
              {caseStudy.tagline}
            </motion.h1>
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
                className="CaseStudy__summary"
                custom={1}
                initial="hidden"
                variants={variants}
              >
                {caseStudy.successSummary.successSummary}
              </motion.p>
            </AniLink>
          )}
          <Button
            animationDelay={0.1}
            bg={bgColor}
            cover
            direction="top"
            duration={1.25}
            href={`/case-studies/${caseStudy.slug}`}
            type="primaryLink"
          >
            Read Case Study
          </Button>
        </div>
        <AniLink
          bg={bgColor}
          className="CaseStudy__img"
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
              fluid={caseStudy.listingImage.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </motion.div>
        </AniLink>
      </S.CaseStudy>
    </SiteMaxWidthContainer>
  )
}

CaseStudy.defaultProps = {
  animationThreshold: 0.75,
}

CaseStudy.propTypes = {
  /** Case Study Object */
  animationThreshold: PropTypes.number,
  /** Which side do you want the image to be on. */
  caseStudy: PropTypes.shape({
    /** The listing image for the case study */
    listingImage: PropTypes.object,
    /** The logo of the client */
    logo: PropTypes.object.isRequired,
    /** The name of the client */
    name: PropTypes.string.isRequired,
    /** The slug for the case study detail page */
    slug: PropTypes.string.isRequired,
    /** Short summary of the success of the case study. */
    successSummary: PropTypes.object,
    /** The tagline of the Case Study */
    tagline: PropTypes.string.isRequired,
  }),
  /** To show the text before or after the image on mobile. */
  layout: PropTypes.oneOf(['right', 'left']),
  /** The percentage of the case study to be in view before triggering animation. */
  mobileTextFirst: PropTypes.bool,
}

export default CaseStudy
