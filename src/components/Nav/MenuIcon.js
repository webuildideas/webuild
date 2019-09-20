// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring, config } from 'react-spring'

const MenuIcon = ({ isOpen, ...props }) => {
  const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
    color: '#2386FE',
  }

  const closedTransformationConfig = {
    top: 'translate(7, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(7, 32) rotate(-45)',
    color: '#fff',
  }

  const { top, center, bottom, color } = useSpring({
    to: isOpen ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff,
  })

  return (
    <animated.svg
      {...props}
      fill={color}
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/animated."
    >
      <animated.rect width="40" height="3" transform={top} />
      <animated.rect width="40" height="3" transform={center} />
      <animated.rect width="40" height="3" transform={bottom} />
    </animated.svg>
  )
}

MenuIcon.propTypes = {
  isOpen: PropTypes.bool,
}

MenuIcon.defaultProps = {
  isOpen: false,
}

export default MenuIcon
