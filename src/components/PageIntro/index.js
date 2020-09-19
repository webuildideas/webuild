// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

/**
 * The PageIntro in some cases comes from Contentful and the field
 * uses markdown, the purpose of this function is to look for the bold symbols
 * like __this string is bold__ and replace __ with span tags to be rendered bold.
 *
 * @param {string} md the copy from contenful for PageIntro
 * @return {Object} the object to use wtih dangerosulySetInnerHTML that includes
 * the updated string with added span tag around bold copy.
 */
const renderMarkdownBold = (md) => {
  const regex = /([__]{2})/
  const formattedCopy = md.replace(regex, '<span>').replace(regex, '</span>')
  return formattedCopy
}

const PageIntro = ({ children, maxWidth, animationDelay }) => (
  <S.PageIntro maxWidth={maxWidth}>
    <SiteMaxWidthContainer>
      <div className="PageIntro__inner">
        {/* eslint-disable-next-line */}
        <motion.h1
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2.5,
              delay: animationDelay,
              ease: 'easeIn',
              type: 'spring'
            }
          }}
          dangerouslySetInnerHTML={{ __html: renderMarkdownBold(children) }}
          initial={{
            y: 30,
            opacity: 0
          }}
        />
      </div>
    </SiteMaxWidthContainer>
  </S.PageIntro>
)

PageIntro.propTypes = {
  /** The amount of ms to delay the animation by */
  animationDelay: PropTypes.number,
  /** The copy for the PageIntro */
  children: PropTypes.node.isRequired,
  /** The max width of the copy */
  maxWidth: PropTypes.number
}

PageIntro.defaultProps = {
  maxWidth: 1080,
  animationDelay: 0.5
}

export default PageIntro
export { renderMarkdownBold }
