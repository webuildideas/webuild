/* eslint-disable react/button-has-type */
// Packages
import React from 'react'
import { Link } from 'gatsby'

// Common
import { WithChildren, WithClassName } from '@common/types/Utilities'
import { classNames } from '@common/utils/classNames'

// Styles
import './styles/Button.css'

interface Props extends WithChildren, WithClassName {
  to: string
  styleType?: 'solid' | 'outline'
}

const LinkWrapper = ({
  children,
  className,
  to,
  styleType = 'solid'
}: Props) => {
  const buttonClasses = classNames({
    Button: true,
    'Button-solid': styleType === 'solid',
    'Button-outline': styleType === 'outline',
    'text-button': true
  })

  return (
    <Link className={`${buttonClasses} ${className}`} to={to}>
      {children}
    </Link>
  )
}

export default LinkWrapper
