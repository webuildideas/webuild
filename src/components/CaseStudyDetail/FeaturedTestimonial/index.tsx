// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Commons
import { rhythmUnit } from '../../../common/utils/typography'
import SiteMaxWidthContainer from '../../../common/styledComponents/SiteMaxWidthContainer'
import { FeaturedTestimonial } from '../../../common/types/Testimonial'

// Components
import Testimonial from '../../Testimonial'

interface Props {
  featuredTestimonial: FeaturedTestimonial
}

const variants: Variants = {
  visible: {
    width: '100%',
    opacity: [0.5, 0.6, 0.7, 1],
    transition: {
      duration: 1.2,
      ease: 'backInOut'
    }
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
    zIndex: -1
  }
}

const CaseStudyFeaturedTestimonial = ({ featuredTestimonial }: Props) => {
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingTop: `${rhythmUnit(4)}`,
        paddingBottom: `${rhythmUnit(4)}`,
        marginBottom: `${rhythmUnit(3.75)}`
      }}
    >
      <motion.div
        ref={ref}
        animate={animationControls}
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

export default CaseStudyFeaturedTestimonial
