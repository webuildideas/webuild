// Packages
import React, { useCallback, useEffect, useMemo } from 'react'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { TypeTestimonial } from '@common/types/Testimonial'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Common
import { WithClassName, WithStyle } from '@common/types/Utilities'

// Config
import {
  variants,
  featureHeadshotVariants,
  headshotVariants
} from './configs/Testimonial'

// Styles
import './styles/Testimonial.css'

interface Props extends WithClassName, WithStyle {
  testimonial: TypeTestimonial
  isFeatured?: boolean
}

const Testimonial = ({ isFeatured = false, testimonial, ...props }: Props) => {
  const animationControls = useAnimation()
  const featuredAnimationControls = useAnimation()
  const headshotAnimationControls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })

  const richTextOptions: Options = useMemo(
    () => ({
      renderNode: {
        [BLOCKS.PARAGRAPH]: (_, c) => (
          <motion.p
            animate={animationControls}
            className="text-body mb-8"
            custom={1}
            initial="hidden"
            variants={variants}
          >
            {c}
          </motion.p>
        )
      },
      renderMark: {
        [MARKS.BOLD]: (text) => <span className="font-extrabold">{text}</span>
      }
    }),
    [animationControls]
  )

  const renderFeaturedHeadshot = useCallback(() => {
    return testimonial.featuredHeadshot ? (
      <div className="overflow-container">
        <motion.div
          animate={featuredAnimationControls}
          className="img-container"
          initial="hidden"
          variants={featureHeadshotVariants}
        >
          <Img
            alt={`${testimonial.name} Headshot`}
            durationFadeIn={100}
            fadeIn
            fluid={testimonial?.featuredHeadshot?.fluid}
          />
        </motion.div>
      </div>
    ) : null
  }, [
    featuredAnimationControls,
    testimonial.name,
    testimonial?.featuredHeadshot
  ])

  const renderHeadshot = useCallback(() => {
    return (
      <motion.div
        animate={headshotAnimationControls}
        initial="hidden"
        variants={headshotVariants}
      >
        <Img
          alt={`${testimonial.name} Headshot`}
          durationFadeIn={350}
          fadeIn
          fixed={testimonial?.headshot.fixed}
        />
      </motion.div>
    )
  }, [headshotAnimationControls, testimonial.name, testimonial.headshot])

  const renderFeaturedTestimonial = useCallback(
    () => (
      <div
        ref={ref}
        {...props}
        className={`FeaturedTestimonial ${props.className}`}
      >
        <div className="p-8 md:p-12">
          {renderRichText(testimonial.quote, richTextOptions)}
          <div className="flex items-center">
            <div className="Testimonial-client-img">{renderHeadshot()}</div>
            <div>
              <motion.p
                animate={animationControls}
                className="text-caption font-extrabold mb-1"
                custom={2}
                initial="hidden"
                variants={variants}
              >
                {testimonial.name}
              </motion.p>
              <motion.p
                animate={animationControls}
                className="text-caption"
                custom={3}
                initial="hidden"
                variants={variants}
              >{`${testimonial.role}, ${testimonial.company}`}</motion.p>
            </div>
          </div>
        </div>
        <div className="Testimonial-client-featured-img">
          {renderFeaturedHeadshot()}
        </div>
      </div>
    ),
    [
      richTextOptions,
      animationControls,
      testimonial.name,
      testimonial.role,
      testimonial.company,
      testimonial.quote,
      props,
      ref,
      renderFeaturedHeadshot,
      renderHeadshot
    ]
  )

  const renderTestimonial = useCallback(
    () => (
      <div ref={ref} {...props} className={`Testimonial ${props.className}`}>
        {renderRichText(testimonial.quote, richTextOptions)}
        <div className="flex items-center">
          <div className="Testimonial-client-img">{renderHeadshot()}</div>
          <div>
            <motion.p
              animate={animationControls}
              className="text-caption font-extrabold mb-1"
              custom={2}
              initial="hidden"
              variants={variants}
            >
              {testimonial.name}
            </motion.p>
            <motion.p
              animate={animationControls}
              className="text-caption"
              custom={3}
              initial="hidden"
              variants={variants}
            >{`${testimonial.role}, ${testimonial.company}`}</motion.p>
          </div>
        </div>
      </div>
    ),
    [
      ref,
      richTextOptions,
      props,
      animationControls,
      testimonial.name,
      testimonial.company,
      testimonial.role,
      testimonial.quote,
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
