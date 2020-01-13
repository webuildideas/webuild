// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Styled Components
import * as S from './style'
/**
 * A Button can be rendered as a Gatsby`<Link>` or a regular `<a>` tag
 * depending on the `type` you pass to it.
 */
const Button = ({ children, type, href, animationDelay, ...props }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  const controls = useAnimation()
  const textControls = useAnimation()

  const variants = {
    visible: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
        type: 'spring',
        delay: animationDelay + 0.1,
      },
    },

    hidden: {
      width: '0%',
      opacity: 0,
    },

    textHidden: {
      opacity: 0,
    },
    textVisible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
        type: 'spring',
        delay: animationDelay + 0.2,
      },
    },
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
          <S.PrimaryLink to={href} {...props}>
            <motion.span
              ref={ref}
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
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
          <S.SecondaryLink ref={ref} to={href} {...props}>
            <motion.span
              ref={ref}
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
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
          <S.PrimaryButton href={href} {...props}>
            <motion.span
              ref={ref}
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
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
          <S.SecondaryButton href={href} {...props}>
            <motion.span
              ref={ref}
              animate={controls}
              className="border"
              initial="hidden"
              variants={variants}
            />
            <motion.span
              animate={textControls}
              className="text"
              initial="textHidden"
              variants={variants}
            >
              {children}
            </motion.span>
          </S.SecondaryButton>
        )
      default:
        return <S.PrimaryButton {...props}>{children}</S.PrimaryButton>
    }
  }
  return renderButtonType()
}

Button.propTypes = {
  animationDelay: PropTypes.number,
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
  animationDelay: 0.2,
}

export default Button
