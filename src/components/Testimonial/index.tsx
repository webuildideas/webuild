// Packages
import React, { useCallback, useEffect } from 'react'
import Img, { FixedObject } from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Properties as CSSProperties } from 'csstype'

// Config
import { variants, featureHeadshotVariants, headshotVariants } from './config'

// Styled Components
import * as S from './style'

type Headshot = FixedObject | string
interface Props {
  children: string
  name: string
  headshot: Headshot
  featuredHeadshot?: Headshot
  companyRole: string
  company: string
  isFeatured?: boolean
  style?: CSSProperties
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
    (featuredImage: Headshot) => {
      if (typeof featuredImage !== 'string') {
        return false
      }

      return (
        <div className="img-container">
          <motion.img
            alt={`${name} Headshot`}
            animate={featuredAnimationControls}
            initial="hidden"
            src={featuredImage}
            variants={featureHeadshotVariants}
          />
        </div>
      )
    },
    [featuredAnimationControls, name]
  )

  const renderHeadshot = useCallback(
    (headshotImage: Headshot) => {
      if (typeof headshotImage === 'string') {
        return false
      }

      return (
        <motion.div
          animate={headshotAnimationControls}
          initial="hidden"
          variants={headshotVariants}
        >
          <Img
            alt={`${name} Headshot`}
            fixed={headshotImage}
            style={{ width: '100%', height: '100%' }}
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
          <motion.p
            animate={animationControls}
            className="Testimonial"
            custom={1}
            dangerouslySetInnerHTML={{ __html: renderMarkdownBold(children) }}
            initial="hidden"
            variants={variants}
          />
          <div className="Testimonial__client">
            <div className="Testimonial__client-img">
              {renderFeaturedHeadshot(headshot)}
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
      renderFeaturedHeadshot
    ]
  )

  const renderTestimonial = useCallback(
    () => (
      <S.Testimonial ref={ref} {...props}>
        <motion.p
          animate={animationControls}
          className="Testimonial"
          custom={1}
          dangerouslySetInnerHTML={{ __html: renderMarkdownBold(children) }}
          initial="hidden"
          variants={variants}
        />
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
