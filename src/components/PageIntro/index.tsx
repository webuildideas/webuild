// Packages
import React from 'react'
import { motion } from 'framer-motion'
import { Document, MARKS, BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'

// Commons
import SiteMaxWidthContainer from '../../common/styledComponents/SiteMaxWidthContainer'

interface Props {
  maxWidth?: number
  animationDelay?: number
  document: Document
}

export const getRichTextOptions = (animationDelay = 0.5): Options => {
  const headingInitial = {
    y: 30,
    opacity: 0
  }
  const headingAnimate = {
    y: 0,
    opacity: 1,
    transition: {
      delay: animationDelay,
      type: 'spring'
    }
  }
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, copy) => (
        <motion.h1
          animate={headingAnimate}
          className="font-normal text-xl leading-tight"
          initial={headingInitial}
        >
          {copy}
        </motion.h1>
      )
    },
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <span className="font-black">{text}</span>
      )
    }
  }
}

const PageIntro = ({
  document,
  maxWidth = 1080,
  animationDelay = 0.5
}: Props) => {
  const options: Options = getRichTextOptions(animationDelay)
  const maxWidthStyle = { maxWidth }
  return (
    <section className="pt-16">
      <SiteMaxWidthContainer>
        <div style={maxWidthStyle}>{renderRichText(document, options)}</div>
      </SiteMaxWidthContainer>
    </section>
  )
}

export default PageIntro
