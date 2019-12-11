// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'

const PageIntro = ({ children }) => (
  <S.PageIntro>
    <div className="PageIntro__inner">{children}</div>
  </S.PageIntro>
)

PageIntro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageIntro
