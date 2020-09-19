// Packages
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Styled Components
import * as S from './style'

// Components
import CaseStudyCarousel from '../CaseStudyCarousel'

const buildCarouselImgArray = (imgArr) => {
  // console.log(imgArr)
  const carouselImgArr = []
  imgArr.map((i) => {
    const {
      fields: { file }
    } = i
    return carouselImgArr.push({
      src: file['en-US'].url,
      // TODO: Build out the srcSet sizes using query params
      srcSet: file['en-US'].url
    })
  })
  return carouselImgArr
}

const CaseStudyRichText = ({ document }) => {
  const [shouldAutoplay, setAutoPlay] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25
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
      setAutoPlay(true)
    }
  }, [controls, inView])

  const options = {
    renderNode: {
      // eslint-disable-next-line
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file, title } = node.data.target.fields
        return (
          <motion.img
            alt={title}
            animate={controls}
            custom={3}
            initial="hidden"
            src={file['en-US'].url}
            variants={variants}
          />
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => (
        <motion.h2
          animate={controls}
          custom={1}
          initial="hidden"
          variants={variants}
        >
          {children}
        </motion.h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <motion.p
          animate={controls}
          custom={2}
          initial="hidden"
          variants={variants}
        >
          {children}
        </motion.p>
      ),
      // eslint-disable-next-line
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { images } = node.data.target.fields
        const imgArr = buildCarouselImgArray(images['en-US'])
        return <CaseStudyCarousel autoplay={shouldAutoplay} images={imgArr} />
      }
    }
  }

  return (
    <S.CaseStudyRichText>
      <div ref={ref}>{documentToReactComponents(document, options)}</div>
    </S.CaseStudyRichText>
  )
}

CaseStudyRichText.propTypes = {
  document: PropTypes.object
}

export default CaseStudyRichText
