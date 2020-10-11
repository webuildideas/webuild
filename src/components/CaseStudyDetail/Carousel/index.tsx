// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import Img from 'gatsby-image'
import 'pure-react-carousel/dist/react-carousel.es.css'

// Commons
import CarouselDotGroup from '../../../common/styledComponents/CarouselDotGroup'
import { GatsbyImageFluid } from '../../../common/types/GatsbyImage'

interface Props {
  autoplay?: boolean
  images: GatsbyImageFluid[]
}

const variants: Variants = {
  visible: (i: number) => ({
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

const renderImg = (image: GatsbyImageFluid) => {
  return <Img alt="carousel" durationFadeIn={250} fadeIn fluid={image.fluid} />
}

const Carousel = ({ images, autoplay = false }: Props) => {
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <motion.div
      ref={ref}
      animate={animationControls}
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

export default Carousel
