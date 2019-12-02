// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'

const Button = ({ children, type, ...rest }) => {
  const renderButtonType = () => {
    switch (type) {
      case 'primary':
        return <S.PrimaryButton {...rest}>{children}</S.PrimaryButton>
      case 'secondary':
        return <S.SecondaryButton {...rest}>{children}</S.SecondaryButton>
      default:
        return <S.PrimaryButton {...rest}>{children}</S.PrimaryButton>
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
