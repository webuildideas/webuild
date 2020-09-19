// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

// Styled Components
import CarouselDotGroup from '../../Shared/CarouselDotGroup'

const CaseStudyCarousel = ({ images, autoplay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  const controls = useAnimation()

  const variants = {
    visible: (i) => ({
      opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
      y: 0,
      transition: {
        duration: 0.75,
        delay: i * 0.25
      }
    }),
    hidden: {
      opacity: 0,
      y: 25
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const renderImg = (image) => {
    if (image.fluid) {
      return (
        <img alt="carousel" src={image.fluid.src} srcSet={image.fluid.srcSet} />
      )
    }
    return <img alt="carousel" src={image.src} srcSet={image.srcSet} />
  }
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <CarouselProvider
        infinite={true}
        isPlaying={autoplay}
        naturalSlideHeight={9}
        naturalSlideWidth={16}
        totalSlides={images.length}
        visibleSlides={1}
      >
        <Slider>
          {images.map((image, idx) => (
            <Slide key={idx} index={idx}>
              {renderImg(image)}
            </Slide>
          ))}
        </Slider>
        <CarouselDotGroup />
      </CarouselProvider>
    </motion.div>
  )
}

CaseStudyCarousel.propTypes = {
  autoplay: PropTypes.bool,
  images: PropTypes.array
}

CaseStudyCarousel.defaultProps = {
  autoplay: false
}

export default CaseStudyCarousel
