// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'

interface Props {
  document: RenderRichTextData<never>
}

const variants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.3
    }
  }),
  hidden: {
    opacity: 0,
    x: -15
  }
}

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-body">{children}</p>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-h4 mb-5">{children}</h3>
    )
  }
}

const Result = ({ document }: Props) => {
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
    <motion.div
      ref={ref}
      animate={animationControls}
      custom={1}
      initial="hidden"
      style={{ overflow: 'hidden' }}
      variants={variants}
    >
      {renderRichText(document, renderOptions)}
    </motion.div>
  )
}

export default Result
