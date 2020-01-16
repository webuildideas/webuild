// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// utils
import { rhythmUnit } from '../../../utils/typography'

// Components
import Testimonial from '../../Testimonial'

// Styled Components
import SiteMaxWidthContainer from '../../Shared/SiteMaxWidthContainer'

const CaseStudyFeaturedTestimonial = ({ featuredTestimonial }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  const controls = useAnimation()

  const variants = {
    visible: {
      width: '100%',
      opacity: [0.5, 0.6, 0.7, 1],
      transition: {
        duration: 1.2,
        ease: 'backInOut',
      },
    },
    hidden: {
      width: '0%',
      opacity: 0.5,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#F9F9F9',
      overflow: 'hidden',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingTop: `${rhythmUnit(4)}`,
        paddingBottom: `${rhythmUnit(4)}`,
        marginBottom: `${rhythmUnit(3.75)}`,
      }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      />
      <SiteMaxWidthContainer>
        <Testimonial
          company={featuredTestimonial.company}
          companyRole={featuredTestimonial.role}
          featuredHeadshot={featuredTestimonial.featuredHeadshot.fluid.src}
          headshot={featuredTestimonial.headshot.fixed.src}
          isFeatured={true}
          name={featuredTestimonial.name}
        >
          {featuredTestimonial.testimonial.testimonial}
        </Testimonial>
      </SiteMaxWidthContainer>
    </div>
  )
}

CaseStudyFeaturedTestimonial.propTypes = {
  featuredTestimonial: PropTypes.shape({
    company: PropTypes.string,
    featuredHeadshot: PropTypes.object,
    headshot: PropTypes.object,
    isFeatured: PropTypes.bool,
    name: PropTypes.string,
    role: PropTypes.string,
    testimonial: PropTypes.object,
  }),
}

export default CaseStudyFeaturedTestimonial
