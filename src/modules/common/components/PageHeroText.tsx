// Packages
import React from 'react'
import { motion } from 'framer-motion'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import {
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'

import './styles/PageHeroText.css'

interface Props {
  document: RenderRichTextData<never>
}

const headingAnimationInitialConfig = {
  y: 30,
  opacity: 0.1
}

const headingAnimationConfig = {
  y: 0,
  opacity: 1,
  transition: {
    type: 'spring'
  }
}
const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, copy) => (
      <motion.h1
        animate={headingAnimationConfig}
        className="text-title-subheading"
        initial={headingAnimationInitialConfig}
      >
        {copy}
      </motion.h1>
    )
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <span className="font-black font-primary text-h1 block mb-6">{text}</span>
    )
  }
}

const PageHeroText = ({ document }: Props) => {
  return (
    <section className="PageHeroText">
      <div className="PageHeroText-inner">
        {renderRichText(document, richTextOptions)}
      </div>
    </section>
  )
}

export default PageHeroText
