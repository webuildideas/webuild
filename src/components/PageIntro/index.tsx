// Packages
import React from 'react'
import { motion } from 'framer-motion'
import { Document, MARKS, BLOCKS } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../../common/styledComponents/SiteMaxWidthContainer'

interface Props {
  maxWidth?: number
  animationDelay?: number
  document: Document
}

export const getRichTextOptions = (animationDelay = 0.5): Options => {
  return {
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
}

const PageIntro = ({
  document,
  maxWidth = 1080,
  animationDelay = 0.5
}: Props) => {
  const options: Options = getRichTextOptions(animationDelay)

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
