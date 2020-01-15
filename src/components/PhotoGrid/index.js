// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styled Components
import * as S from './style'

const PhotoGrid = ({ photos }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const controls = useAnimation()

  const variants = {
    visible: i => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        delay: i * 0.3,
      },
    }),

    image1Hidden: {
      opacity: 0,
      x: -15,
      y: -20,
    },

    image2Hidden: {
      opacity: 0,
      y: -35,
    },

    image3Hidden: {
      opacity: 0,
      x: 35,
      y: 10,
    },

    image4Hidden: {
      opacity: 0,
      x: -25,
      y: 20,
    },

    image5Hidden: {
      opacity: 0,
      x: 35,
      y: 20,
    },

    image6Hidden: {
      opacity: 0,
      x: -25,
      y: 40,
    },

    image7Hidden: {
      opacity: 0,
      y: 40,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  })

  return (
    <S.PhotoGrid ref={ref}>
      {photos.map((photo, idx) => (
        <S.PhotoItem
          key={`photo-${idx}`}
          alt="WeBuild Team"
          animate={controls}
          custom={idx}
          data-photo={idx + 1}
          initial={`image${idx + 1}Hidden`}
          src={photo.fluid.src}
          srcSet={photo.fluid.srcSet}
          variants={variants}
        />
      ))}
    </S.PhotoGrid>
  )
}

PhotoGrid.propTypes = {
  photos: PropTypes.array,
}

export default PhotoGrid
