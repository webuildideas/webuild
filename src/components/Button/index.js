// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'

const Button = ({ children, type, ...props }) => {
  const renderButtonType = () => {
    switch (type) {
      case 'primary':
        return <S.PrimaryButton {...props}>{children}</S.PrimaryButton>
      case 'secondary':
        return <S.SecondaryButton {...props}>{children}</S.SecondaryButton>
      default:
        return <S.PrimaryButton {...props}>{children}</S.PrimaryButton>
    }
  }
  return renderButtonType()
}

Button.propTypes = {
  /** The Text of the button. */
  children: PropTypes.node,
  /** Location of the button */
  href: PropTypes.string,
  /** The type of button */
  type: PropTypes.oneOf(['primary', 'secondary', 'link']),
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
