/* eslint-disable react/button-has-type */
// Packages
import React from 'react'

// Common
import { WithChildren, WithClassName } from '@common/types/Utilities'
import { classNames } from '@common/utils/classNames'

// Styles
import './style.css'

interface Props extends WithChildren, WithClassName {
  href?: string
  onClick?: () => void
  onSubmit?: () => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  styleType?: 'solid' | 'outline'
}

const Button = ({
  children,
  className,
  disabled = false,
  href,
  onClick,
  onSubmit,
  styleType = 'solid',
  type = 'button'
}: Props) => {
  const buttonClasses = classNames({
    Button: true,
    'Button-solid': styleType === 'solid',
    'Button-outline': styleType === 'outline',
    'text-button': true
  })
  return href ? (
    <a className={`${buttonClasses} ${className}`} href={href}>
      {children}
    </a>
  ) : (
    <button
      className={`${buttonClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
