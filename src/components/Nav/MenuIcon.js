// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring, config } from 'react-spring'

const MenuIcon = ({ isOpen, ...props }) => {
  const openConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
    color: '#0E0E1B',
  }

  const closedConfig = {
    top: 'translate(7, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(7, 32) rotate(-45)',
    color: '#fff',
  }

  const { top, center, bottom, color } = useSpring({
    to: isOpen ? closedConfig : openConfig,
    config: config.stiff,
  })

  return (
    <animated.svg
      {...props}
      fill={color}
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/animated."
    >
      <animated.rect height="3" transform={top} width="40" />
      <animated.rect height="3" transform={center} width="40" />
      <animated.rect height="3" transform={bottom} width="40" />
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
