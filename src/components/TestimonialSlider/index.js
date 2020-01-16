// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider } from 'pure-react-carousel'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Styles
import 'pure-react-carousel/dist/react-carousel.es.css'

// Styled Components
import * as S from './style'

// Components
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

const TestimonialSlide = ({ index, children }) => (
  <S.TestimonialSlide index={index}>
    <S.Testimonial>“{children}”</S.Testimonial>
  </S.TestimonialSlide>
)

TestimonialSlide.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
}

const TestimonialDot = ({ slide, name, position, img }) => (
  <S.TestimonialDot slide={slide}>
    <div className="Testimonial__client-headshot">
      <Img
        alt={`${name} headshot`}
        fixed={img}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
    <div className="Testimonial__client-details">
      <h5>{name}</h5>
      <p>{position}</p>
    </div>
  </S.TestimonialDot>
)

TestimonialDot.propTypes = {
  img: PropTypes.object,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  slide: PropTypes.number.isRequired,
}

const TestimonialSlider = ({ testimonials }) => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  })

  const controls = useAnimation()

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.252,
      },
    },
    hidden: {
      y: 35,
      opacity: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <SiteMaxWidthContainer ref={ref}>
      <motion.div animate={controls} initial="hidden" variants={variants}>
        <CarouselProvider
          infinite={true}
          naturalSlideHeight={20}
          naturalSlideWidth={10}
          totalSlides={testimonials.length}
        >
          <S.TestimonialSlider>
            {testimonials.map((t, idx) => (
              <TestimonialSlide key={`t-${t.name}`} index={idx}>
                {t.testimonial.testimonial}
              </TestimonialSlide>
            ))}
          </S.TestimonialSlider>

          <S.TestimonialDots>
            {testimonials.map((t, idx) => (
              <TestimonialDot
                key={`tdot-${t.name}`}
                img={t.headshot.fixed}
                name={t.name}
                position={t.role}
                slide={idx}
              />
            ))}
          </S.TestimonialDots>

          <S.TestimonialDotGroup />
        </CarouselProvider>
      </motion.div>
    </SiteMaxWidthContainer>
  )
}

TestimonialSlider.propTypes = {
  /** An array of Testimonials to render in the slider. */
  testimonials: PropTypes.arrayOf(
    /** The Testimonial Object */
    PropTypes.shape({
      headshot: PropTypes.shape({
        fixed: PropTypes.shape({
          base64: PropTypes.string,
          height: PropTypes.number,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
          srcWebp: PropTypes.string,
          width: PropTypes.number,
        }),
      }),
      /** The name of the person giving testimonial */
      name: PropTypes.string,
      /** The role of the person giving the testimonial */
      role: PropTypes.string,
      /** The object containing the content of the testimonial */
      testimonial: PropTypes.shape({
        /** The testimonial the person gave. */
        testimonial: PropTypes.string,
      }),
    })
  ),
}

export default TestimonialSlider
