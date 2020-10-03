// Packages
import React from 'react'
import { motion } from 'framer-motion'
import { Document, BLOCKS, MARKS } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

interface Props {
  maxWidth?: number
  animationDelay?: number
  document: Document
}

const PageIntro = ({
  document,
  maxWidth = 1080,
  animationDelay = 0.5
}: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, copy) => (
        <motion.h1
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: animationDelay,
              type: 'spring'
            }
          }}
          initial={{
            y: 30,
            opacity: 0
          }}
        >
          {copy}
        </motion.h1>
      )
    },
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <span>{text}</span>
    }
  }

  return (
    <S.PageIntro maxWidth={maxWidth}>
      <SiteMaxWidthContainer>
        <div className="PageIntro__inner">
          {documentToReactComponents(document, options)}
        </div>
      </SiteMaxWidthContainer>
    </S.PageIntro>
  )
}

export default PageIntro
