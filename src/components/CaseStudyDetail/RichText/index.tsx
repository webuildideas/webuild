// Packages
import React, { useEffect, useState } from 'react'
import {
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import Img from 'gatsby-image'

// Commons
import { TypeCarousel } from '@common/types/Carousel'
import { TypeContentfulAsset } from '@common/types/Contentful'

// Components
import Carousel from '@components/CaseStudyDetail/Carousel'

// Styles
import * as S from './style'

interface Props {
  document: RenderRichTextData<TypeCarousel | TypeContentfulAsset>
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
        if (!node.data.target) {
          return
        }
        return (
          <Carousel
            autoplay={shouldAutoplay}
            images={node.data.target.images}
          />
        )
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
