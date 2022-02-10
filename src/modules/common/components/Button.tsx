import './styles/Button.css'

/* eslint-disable react/button-has-type */
// Packages
import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Common
import { WithChildren, WithClassName } from '@common/types/Utilities'
import { classNames } from '@common/utils/classNames'

// Styles
import { useLoading, Oval } from '@agney/react-loading'

interface Props extends WithChildren, WithClassName {
  animate?: boolean
  href?: string
  onClick?: () => void
  onSubmit?: () => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  styleType?:
    | 'solid'
    | 'solid-purple'
    | 'outline'
    | 'outline-purple'
    | 'solid-salmon'
  loading?: boolean
  download?: boolean
  target?: string
}

const Button = ({
  animate = true,
  children,
  className,
  href,
  disabled = false,
  loading = false,
  download = false,
  target,
  onClick,
  onSubmit,
  styleType = 'solid',
  type = 'button',
  ...props
}: Props) => {
  const { indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width={25} />
  })
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
    'Button-solid-purple': styleType === 'solid-purple',
    'Button-solid-salmon': styleType === 'solid-salmon',
    'Button-outline': styleType === 'outline',
    'Button-outline-purple': styleType === 'outline-purple',
    'Button-loading': loading,
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
      animate={animate ? animationControls : {}}
      className={`${buttonClasses} ${className}`}
      download={download}
      href={href}
      initial={animate ? 'hidden' : ''}
      target={target}
      variants={variants}
      {...props}
    >
      {children}
    </motion.a>
  ) : (
    <motion.button
      ref={ref}
      animate={animate ? animationControls : {}}
      className={`${buttonClasses} ${className}`}
      disabled={disabled}
      initial={animate ? 'hidden' : ''}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      variants={variants}
      {...props}
    >
      {loading ? indicatorEl : children}
    </motion.button>
  )
}

export default Button
