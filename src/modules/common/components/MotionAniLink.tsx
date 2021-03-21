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
  styleType?: 'solid' | 'outline'
  cover?: boolean
  duration?: number
  bgColor?: string
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
      bgColor = '#525761'
    },
    ref
  ) => {
    const buttonClasses = classNames({
      Button: true,
      'Button-solid': styleType === 'solid',
      'Button-outline': styleType === 'outline',
      'text-button': true
    })
    return (
      <span ref={ref} className="block">
        <AniLink
          bg={bgColor}
          className={`${buttonClasses} ${className}`}
          cover={cover}
          direction={direction}
          duration={duration}
          hex={bgColor}
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
