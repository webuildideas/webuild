// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'
/**
 * A Button can be rendered as a Gatsby`<Link>` or a regular `<a>` tag
 * depending on the `type` you pass to it.
 */
const Button = ({ children, type, href, ...props }) => {
  const renderButtonType = () => {
    switch (type) {
      case 'primaryLink':
        return (
          <S.PrimaryLink to={href} {...props}>
            {children}
          </S.PrimaryLink>
        )
      case 'secondaryLink':
        return (
          <S.SecondaryLink to={href} {...props}>
            {children}
          </S.SecondaryLink>
        )
      case 'primaryButton':
        return (
          <S.PrimaryButton href={href} {...props}>
            {children}
          </S.PrimaryButton>
        )
      case 'secondaryButton':
        return (
          <S.SecondaryButton href={href} {...props}>
            {children}
          </S.SecondaryButton>
        )
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
  /** The style and type of button to render, if using primaryLink or SecondaryLink then the Gatsby <Link> component will be used instead of <a> */
  type: PropTypes.oneOf([
    'primaryButton',
    'secondaryButton',
    'primaryLink',
    'secondaryLink',
  ]),
}

Button.defaultProps = {
  type: 'primaryButton',
}

export default Button
