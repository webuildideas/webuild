// Packages
import React, { useEffect, useState } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import Img from 'gatsby-image'

// Commons
import * as S from './style'

// Components
import Carousel from '../Carousel'

export type CarouselImageInitial = {
  fields: {
    file: {
      'en-US': {
        url: string
      }
    }
  }
}

export type CarouselImage = {
  src: string
  srcSet: string
}

const buildCarouselImgArray = (
  imgArr: CarouselImageInitial[]
): CarouselImage[] => {
  const carouselImgArr: CarouselImage[] = []
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

interface Props {
  document: Document
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

const CaseStudyRichText = ({ document }: Props) => {
  console.log('Document', document)
  const animationControls = useAnimation()
  const [shouldAutoplay, setAutoPlay] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
      setAutoPlay(true)
    }
  }, [animationControls, inView])

  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <motion.div
            animate={animationControls}
            custom={3}
            initial="hidden"
            variants={variants}
          >
            <Img {...node.data.target} durationFadeIn={300} fadeIn />
          </motion.div>
        )
      },
      [BLOCKS.HEADING_2]: (_, children) => (
        <motion.h2
          animate={animationControls}
          custom={1}
          initial="hidden"
          variants={variants}
        >
          {children}
        </motion.h2>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <motion.p
          animate={animationControls}
          custom={2}
          initial="hidden"
          variants={variants}
        >
          {children}
        </motion.p>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { images } = node.data.target.fields
        const imgArr = buildCarouselImgArray(images['en-US'])
        return <Carousel autoplay={shouldAutoplay} images={imgArr} />
      }
    }
  }

  return (
    <S.CaseStudyRichText>
      <div ref={ref}>{renderRichText(document, options)}</div>
    </S.CaseStudyRichText>
  )
}

export default CaseStudyRichText
