/* eslint-disable react/no-danger */
// Packages
import React, { useCallback, useEffect } from 'react'
import Img, { FixedObject, FluidObject } from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Common
import { WithClassName, WithStyle } from '@common/types/Utilities'

// Config
import { variants, featureHeadshotVariants, headshotVariants } from './config'

// Styles
import * as S from './style'

interface Props extends WithClassName, WithStyle {
  name: string
  children: string
  headshot: FixedObject
  featuredHeadshot?: FluidObject
  companyRole: string
  company: string
  isFeatured?: boolean
}

const renderMarkdownBold = (md: string) => {
  const regex = /([__]{2})/
  const formattedCopy = md.replace(regex, '<span>').replace(regex, '</span>')
  return formattedCopy
}

const Testimonial = ({
  children,
  name,
  headshot,
  featuredHeadshot,
  companyRole,
  company,
  isFeatured = false,
  ...props
}: Props) => {
  const animationControls = useAnimation()
  const featuredAnimationControls = useAnimation()
  const headshotAnimationControls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })

  const renderFeaturedHeadshot = useCallback(
    (featuredImage: FluidObject) => {
      return (
        <div className="overflow-container">
          <motion.div
            animate={featuredAnimationControls}
            className="img-container"
            initial="hidden"
            variants={featureHeadshotVariants}
          >
            <Img
              alt={`${name} Headshot`}
              durationFadeIn={100}
              fadeIn
              fluid={featuredImage}
            />
          </motion.div>
        </div>
      )
    },
    [featuredAnimationControls, name]
  )

  const renderHeadshot = useCallback(
    (headshotImage: FixedObject) => {
      return (
        <motion.div
          animate={headshotAnimationControls}
          initial="hidden"
          variants={headshotVariants}
        >
          <Img
            alt={`${name} Headshot`}
            durationFadeIn={350}
            fadeIn
            fixed={headshotImage}
          />
        </motion.div>
      )
    },
    [headshotAnimationControls, name]
  )

  const renderFeaturedTestimonial = useCallback(
    () => (
      <S.FeaturedTestimonial ref={ref} {...props}>
        <div className="Testimonial__content">
          {children ? (
            <motion.p
              animate={animationControls}
              className="Testimonial text-xl"
              custom={1}
              dangerouslySetInnerHTML={{ __html: renderMarkdownBold(children) }}
              initial="hidden"
              variants={variants}
            />
          ) : null}
          <div className="Testimonial__client">
            <div className="Testimonial__client-img">
              {renderHeadshot(headshot)}
            </div>
            <div className="Testimonial__client-details">
              <motion.p
                animate={animationControls}
                className="Testimonial__client-name"
                custom={2}
                initial="hidden"
                variants={variants}
              >
                {name}
              </motion.p>
              <motion.p
                animate={animationControls}
                className="Testimonial__client-company"
                custom={3}
                initial="hidden"
                variants={variants}
              >{`${companyRole}, ${company}`}</motion.p>
            </div>
          </div>
        </div>
        <div className="Testimonial__client-featured-img">
          {featuredHeadshot ? renderFeaturedHeadshot(featuredHeadshot) : null}
        </div>
      </S.FeaturedTestimonial>
    ),
    [
      children,
      companyRole,
      company,
      animationControls,
      featuredHeadshot,
      headshot,
      name,
      props,
      ref,
      renderFeaturedHeadshot,
      renderHeadshot
    ]
  )

  const renderTestimonial = useCallback(
    () => (
      <S.Testimonial ref={ref} {...props}>
        {children ? (
          <motion.p
            animate={animationControls}
            className="Testimonial text-xl"
            custom={1}
            dangerouslySetInnerHTML={{ __html: renderMarkdownBold(children) }}
            initial="hidden"
            variants={variants}
          />
        ) : null}
        <div className="Testimonial__client">
          <div className="Testimonial__client-img">
            {renderHeadshot(headshot)}
          </div>
          <div className="Testimonial__client-details">
            <motion.p
              animate={animationControls}
              className="Testimonial__client-name"
              custom={2}
              initial="hidden"
              variants={variants}
            >
              {name}
            </motion.p>
            <motion.p
              animate={animationControls}
              className="Testimonial__client-company"
              custom={3}
              initial="hidden"
              variants={variants}
            >{`${companyRole}, ${company}`}</motion.p>
          </div>
        </div>
      </S.Testimonial>
    ),
    [
      ref,
      props,
      animationControls,
      children,
      headshot,
      companyRole,
      company,
      name,
      renderHeadshot
    ]
  )

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
      featuredAnimationControls.start('visible')
      headshotAnimationControls.start('visible')
    }
  }, [
    animationControls,
    featuredAnimationControls,
    headshotAnimationControls,
    inView
  ])

  return isFeatured ? renderFeaturedTestimonial() : renderTestimonial()
}

export default Testimonial
