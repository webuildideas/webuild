// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Styled Components
import * as S from './style'

/**
 * Use the `Testimonial` component to display client testimonials
 * and display either in a grid view or as full width "featured".
 */
const Testimonial = ({
  children,
  name,
  headshot,
  featuredHeadshot,
  companyRole,
  company,
  isStory,
  isFeatured,
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true,
  })

  const controls = useAnimation()
  const featuredHeadshotControls = useAnimation()
  const headshotControls = useAnimation()

  const variants = {
    visible: i => ({
      opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
      y: 0,
      transition: {
        duration: 0.75,
        delay: i * 0.25,
      },
    }),
    hidden: {
      opacity: 0,
      y: 25,
    },
  }

  const featureHeadshotVariants = {
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        ease: 'easeInOut',
        duration: 0.9,
      },
    },
    hidden: {
      opacity: 0.75,
      y: '100%',
    },
  }

  const headshotVariants = {
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
        delay: 0.75,
      },
    },
    hidden: {
      opacity: 0,
      width: '100%',
      height: '100%',
    },
  }

  const renderMarkdownBold = md => {
    const regex = /([__]{2})/
    const formattedCopy = md.replace(regex, '<span>').replace(regex, '</span>')
    return formattedCopy
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      featuredHeadshotControls.start('visible')
      headshotControls.start('visible')
    }
  }, [controls, featuredHeadshotControls, headshotControls, inView])

  /**
   * If isStory is true the component is being rendered in Storybook
   * Storybook currently has errors with gatsby-img due to GraphQL queries
   */
  const renderHeadshot = headshotSrc => {
    if (isStory || isFeatured) {
      return (
        <div className="img-container">
          <motion.img
            alt={`${name} Headshot`}
            animate={featuredHeadshotControls}
            initial="hidden"
            src={headshotSrc}
            variants={featureHeadshotVariants}
          />
        </div>
      )
    }

    return (
      <motion.div
        animate={headshotControls}
        initial="hidden"
        variants={headshotVariants}
      >
        <Img
          alt={`${name} Headshot`}
          fixed={headshotSrc}
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>
    )
  }

  const renderTestimonialType = () => {
    if (isFeatured) {
      return (
        <S.FeaturedTestimonial ref={ref} {...props}>
          <div className="Testimonial__content">
            <motion.p
              animate={controls}
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
                  animate={controls}
                  className="Testimonial__client-name"
                  custom={2}
                  initial="hidden"
                  variants={variants}
                >
                  {name}
                </motion.p>
                <motion.p
                  animate={controls}
                  className="Testimonial__client-company"
                  custom={3}
                  initial="hidden"
                  variants={variants}
                >{`${companyRole}, ${company}`}</motion.p>
              </div>
            </div>
          </div>
          <div className="Testimonial__client-featured-img">
            {renderHeadshot(featuredHeadshot)}
          </div>
        </S.FeaturedTestimonial>
      )
    }

    return (
      <S.Testimonial ref={ref} {...props}>
        <motion.p
          animate={controls}
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
              animate={controls}
              className="Testimonial__client-name"
              custom={2}
              initial="hidden"
              variants={variants}
            >
              {name}
            </motion.p>
            <motion.p
              animate={controls}
              className="Testimonial__client-company"
              custom={3}
              initial="hidden"
              variants={variants}
            >{`${companyRole}, ${company}`}</motion.p>
          </div>
        </div>
      </S.Testimonial>
    )
  }

  return renderTestimonialType()
}

Testimonial.propTypes = {
  /** The actual copy for testimonial */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The company the client represents */
  company: PropTypes.string.isRequired,
  /** The role of the client */
  companyRole: PropTypes.string.isRequired,
  /** The headshot to show when in the featured version */
  featuredHeadshot: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The headshot of the client */
  headshot: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Whether the testimonial is the featured type */
  isFeatured: PropTypes.bool,
  /** Whether it is displaying in storybook (does not use gatsby-image when true) */
  isStory: PropTypes.bool,
  /** The name of the client */
  name: PropTypes.string.isRequired,
}

Testimonial.defaultProps = {
  isFeatured: false,
  isStory: false,
}

export default Testimonial
