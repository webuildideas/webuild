// Packages
import React from 'react'
import { motion } from 'framer-motion'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import {
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'

// Common
import fadeInUpVariants from '@modules/common/animation/variants/fadeInUp'

import './styles/PageHeroText.css'

interface Props {
  document: RenderRichTextData<never>
}

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, copy) => (
      <motion.h1
        animate="visible"
        className="text-title-subheading"
        initial="hidden"
        variants={fadeInUpVariants}
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
