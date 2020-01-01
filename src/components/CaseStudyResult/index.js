// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components

// Styled Components

const CaseStudyResult = ({ content }) => {
  /**
   * Contentful Rich text field json responses sometimes include
   * an extra item that actually has not value or nodeType so we
   * want to filter those out.
   */
  const removeEmptyItems = () =>
    content.filter(item => item.content[0].value !== '')

  const filteredContent = removeEmptyItems()

  const renderContentToElement = (c, key) => {
    let tag = ''
    switch (c.nodeType) {
      case 'heading-3':
        tag = 'h3'
        break
      case 'paragraph':
        tag = 'p'
        break
      default:
        break
    }

    return React.createElement(tag, { key }, c.content[0].value)
  }

  return (
    <div>{filteredContent.map((c, idx) => renderContentToElement(c, idx))}</div>
  )
}

CaseStudyResult.propTypes = {
  content: PropTypes.array,
}

export default CaseStudyResult
