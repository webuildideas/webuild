// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated, useSpring, useTrail } from 'react-spring'

// Styled Components
import OverlayNavContainer from './OverlayNavContainer'

const OverlayNav = ({ isOpen }) => {
  const navLinks = [
    {
      title: 'Who we are',
      slug: '/who-we-are',
    },
    {
      title: 'What we do',
      slug: '/what-we-do',
    },
    {
      title: 'Case Studies',
      slug: '/case-studies',
    },
    {
      title: 'Get in touch',
      slug: '/get-in-touch',
    },
  ]

  const overlaySpring = useSpring({
    // ref: overlaySpringRef,
    left: isOpen ? '0%' : '-100%',
    config: { mass: 1, tension: 295, friction: 40 },
  })

  const linkTrail = useTrail(navLinks.length, {
    // ref: linkTrailRef,
    from: {
      opacity: 0,
      y: 100,
    },
    opacity: isOpen ? 1 : 0,
    y: 0,
    config: { mass: 1, tension: 295, friction: 40 },
    delay: 450,
  })

  // useChain([overlaySpringRef, linkTrailRef], [0, 2])
  return (
    <OverlayNavContainer isOpen={isOpen} style={overlaySpring}>
      <ul className="OverlayNavList">
        {linkTrail.map(({ y, ...rest }, index) => (
          <animated.li
            key={`navLink-${index}`}
            className="OverlayNavLink"
            style={{
              ...rest,
              // eslint-disable-next-line no-shadow
              transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
            }}
          >
            <Link to={navLinks[index].slug}>{navLinks[index].title}</Link>
          </animated.li>
        ))}
      </ul>
    </OverlayNavContainer>
  )
}

OverlayNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default OverlayNav
