// Packages
import React from 'react'
import PropTypes from 'prop-types'

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
const renderMarkdownBold = md => {
  const regex = /([__]{2})/
  const formattedCopy = md.replace(regex, '<span>').replace(regex, '</span>')
  return formattedCopy
}

const PageIntro = ({ children, maxWidth }) => (
  <S.PageIntro maxWidth={maxWidth}>
    <SiteMaxWidthContainer>
      <div className="PageIntro__inner">
        {/* eslint-disable-next-line */}
        <h1 dangerouslySetInnerHTML={{ __html: renderMarkdownBold(children) }} />
      </div>
    </SiteMaxWidthContainer>
  </S.PageIntro>
)

PageIntro.propTypes = {
  /** The copy for the PageIntro */
  children: PropTypes.node.isRequired,
  /** The max width for PageIntro__inner */
  maxWidth: PropTypes.number,
}

PageIntro.defaultProps = {
  maxWidth: 1080,
}

export default PageIntro
export { renderMarkdownBold }
