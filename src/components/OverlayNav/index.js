// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated, useSpring, config } from 'react-spring'

// Styled Components
import OverlayNavContainer from './OverlayNavContainer'

const OverlayNav = ({ isOpen }) => {
  const animationStyles = useSpring({
    opacity: isOpen ? 1 : 0,
    bottom: isOpen ? '0px' : '-10px',
    delay: 200,
    config: config.slow,
  })

  const overlayNavContainerAnimation = useSpring({
    left: isOpen ? '0' : '-100%',
  })

  return (
    <OverlayNavContainer isOpen={isOpen} style={overlayNavContainerAnimation}>
      <ul className="OverlayNavList">
        <animated.li className="OverlayNavLink" style={animationStyles}>
          <Link to="/who-we-are">Who we are</Link>
        </animated.li>
        <animated.li className="OverlayNavLink" style={animationStyles}>
          <Link to="/what-we-do">What we do</Link>
        </animated.li>
        <animated.li className="OverlayNavLink" style={animationStyles}>
          <Link to="/case-studies">Case Studies</Link>
        </animated.li>
        <animated.li className="OverlayNavLink" style={animationStyles}>
          <Link to="/case-studies">Get in touch</Link>
        </animated.li>
      </ul>
    </OverlayNavContainer>
  )
}

OverlayNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default OverlayNav
