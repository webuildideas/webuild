/*eslint-disable */
// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CaseStudyResult = ({ document }) => {
  return (
    <div>
      {documentToReactComponents(document)}
    </div>
  )
}

CaseStudyResult.propTypes = {
  document: PropTypes.object,
}

export default CaseStudyResult
