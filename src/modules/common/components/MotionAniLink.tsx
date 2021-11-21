/* eslint-disable react/button-has-type */
// Packages
import React, { forwardRef } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { motion } from 'framer-motion'

// Common
import { WithChildren, WithClassName } from '@common/types/Utilities'
import { classNames } from '@common/utils/classNames'

// Styles
import './styles/Button.css'

interface Props extends WithChildren, WithClassName {
  to: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  styleType?: 'solid' | 'solid-purple' | 'outline' | 'link'
  cover?: boolean
  duration?: number
  bgColor?: string
  onClick?: () => void
}

const Link = forwardRef<any, Props>(
  (
    {
      children,
      className,
      direction = 'right',
      to,
      styleType = 'solid',
      cover = true,
      duration = 1.25,
      bgColor = '#0E0E1B',
      onClick
    },
    ref
  ) => {
    const linkStyle = styleType === 'link'
    const buttonClasses = classNames({
      Button: !linkStyle,
      'Button-solid': styleType === 'solid',
      'Button-outline': styleType === 'outline',
      'Button-solid-purple': styleType === 'solid-purple',
      'Button-link': linkStyle,
      'text-button': !linkStyle
    })
    return (
      <span ref={ref} className={linkStyle ? 'inline-block' : 'block'}>
        <AniLink
          bg={bgColor}
          className={`${buttonClasses} ${className}`}
          cover={cover}
          direction={direction}
          duration={duration}
          hex={bgColor}
          onClick={onClick}
          to={to}
        >
          {children}
        </AniLink>
      </span>
    )
  }
)

const MotionAniLink = motion.custom(Link)

export default MotionAniLink
