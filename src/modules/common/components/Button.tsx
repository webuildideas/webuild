/* eslint-disable react/button-has-type */
// Packages
import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Common
import { WithChildren, WithClassName } from '@common/types/Utilities'
import { classNames } from '@common/utils/classNames'

// Styles
import './styles/Button.css'

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
  type = 'button',
  ...props
}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })
  const animationControls = useAnimation()

  const variants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    },
    hidden: {
      y: 15,
      opacity: 0
    }
  }

  const buttonClasses = classNames({
    Button: true,
    'Button-solid': styleType === 'solid',
    'Button-outline': styleType === 'outline',
    'text-button': true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return href ? (
    <motion.a
      ref={ref}
      animate={animationControls}
      className={`${buttonClasses} ${className}`}
      href={href}
      initial="hidden"
      variants={variants}
      {...props}
    >
      {children}
    </motion.a>
  ) : (
    <motion.button
      ref={ref}
      animate={animationControls}
      className={`${buttonClasses} ${className}`}
      disabled={disabled}
      initial="hidden"
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      variants={variants}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
