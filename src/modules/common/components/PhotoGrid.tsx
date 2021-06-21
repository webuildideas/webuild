// Packages
import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import { useAnimation, Variants, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Common
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

// Styles
import './styles/PhotoGrid.css'

interface Props {
  photos: TypeGatsbyImageFluid[]
}

const variants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.3
    }
  }),

  image1Hidden: {
    opacity: 0,
    x: -15,
    y: -20
  },

  image2Hidden: {
    opacity: 0,
    y: -35
  },

  image3Hidden: {
    opacity: 0,
    x: 35,
    y: 10
  },

  image4Hidden: {
    opacity: 0,
    x: -25,
    y: 20
  },

  image5Hidden: {
    opacity: 0,
    x: 35,
    y: 20
  },

  image6Hidden: {
    opacity: 0,
    x: -25,
    y: 40
  },

  image7Hidden: {
    opacity: 0,
    y: 40
  }
}

const PhotoGrid = ({ photos }: Props) => {
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  })

  return (
    <div ref={ref} className="PhotoGrid">
      {photos.map((photo, idx) => (
        <motion.div
          key={`photo-${idx}`}
          animate={animationControls}
          className="PhotoGrid-item"
          custom={idx + 2}
          data-photo={idx + 1}
          initial={`image${idx + 1}Hidden`}
          variants={variants}
        >
          <Img
            alt="webuild Team photos"
            durationFadeIn={275}
            fadeIn
            fluid={photo.fluid}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default PhotoGrid
