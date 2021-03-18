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
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

interface Props {
  maxWidth?: number
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
        className="text-h2"
        initial={headingAnimationInitialConfig}
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

const PageIntro = ({ document, maxWidth = 1080 }: Props) => {
  const maxWidthStyle = { maxWidth }
  return (
    <section className="pt-16">
      <SiteMaxWidthContainer>
        <div style={maxWidthStyle}>
          {renderRichText(document, richTextOptions)}
        </div>
      </SiteMaxWidthContainer>
    </section>
  )
}

export default PageIntro
