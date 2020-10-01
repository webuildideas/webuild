import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import * as S from './style'

type ButtonType =
  | 'primaryButton'
  | 'secondaryButton'
  | 'primaryLink'
  | 'secondaryLink'
  | 'primaryOutbound'
  | 'secondaryOutbound'

interface Props {
  href: string
  type?: ButtonType
  animationDelay?: number
  bg?: string
  cover?: boolean
  direction?: 'top' | 'left' | 'right' | 'bottom'
  duration?: number
  children: React.ReactNode
  className?: string
  target?: string
}

const Button = ({
  children,
  type = 'primaryButton',
  href,
  animationDelay = 0.2,
  ...props
}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })
  const controls = useAnimation()
  const textControls = useAnimation()

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: animationDelay + 0.1
      }
    },

    hidden: {
      y: 15,
      opacity: 0
    },

    textHidden: {
      opacity: 0,
      y: 100
    },
    textVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
        delay: animationDelay + 0.2
      }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      textControls.start('textVisible')
    }
  }, [controls, inView, textControls])

  const renderButtonType = () => {
    switch (type) {
      case 'primaryLink':
        return (
          <S.PrimaryLink to={href} {...props} data-testid="primaryLink">
            <motion.span
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              ref={ref}
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.PrimaryLink>
        )
      case 'secondaryLink':
        return (
          <S.SecondaryLink to={href} {...props} data-testid="secondaryLink">
            <motion.span
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              ref={ref}
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.SecondaryLink>
        )
      case 'primaryButton':
        return (
          <S.PrimaryButton href={href} {...props} data-testid="primaryButton">
            <motion.span
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              ref={ref}
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.PrimaryButton>
        )
      case 'secondaryButton':
        return (
          <S.SecondaryButton
            href={href}
            {...props}
            data-testid="secondaryButton"
          >
            <motion.span
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              ref={ref}
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.SecondaryButton>
        )
      case 'primaryOutbound':
        return (
          <S.PrimaryOutbound
            href={href}
            {...props}
            data-testid="primaryOutbound"
          >
            <motion.span
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              ref={ref}
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.PrimaryOutbound>
        )
      case 'secondaryOutbound':
        return (
          <S.SecondaryOutbound
            href={href}
            {...props}
            data-testid="secondaryOutbound"
          >
            <motion.span
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              ref={ref}
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.SecondaryOutbound>
        )
      default:
        return <S.PrimaryButton {...props}>{children}</S.PrimaryButton>
    }
  }
  return renderButtonType()
}

export default Button
