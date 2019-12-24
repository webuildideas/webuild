// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated, useSpring, useTrail, config } from 'react-spring'

// Styled Components
import { OverlayNavContainer } from './style'

const OverlayNav = ({ isOpen, onContact }) => {
  const navLinks = [
    {
      title: 'Who we are',
      slug: '/who-we-are',
    },
    {
      title: 'Get in touch',
      slug: '/get-in-touch',
    },
  ]

  const overlaySpring = useSpring({
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
    delay: 550,
  })

  const fadeInSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    config: config.molasses,
    delay: 800,
  })

  const renderNavLink = link => {
    if (link.title === 'Get in touch') {
      return (
        <a href="mailto:hi@webuild.io" onClick={onContact}>
          {link.title}
        </a>
      )
    }

    return <Link to={link.slug}>{link.title}</Link>
  }

  return (
    <OverlayNavContainer style={overlaySpring}>
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
            {renderNavLink(navLinks[index])}
          </animated.li>
        ))}
      </ul>

      <div className="OverlayNav__social">
        <animated.p style={fadeInSpring}>Follow Us On</animated.p>
        <animated.a
          className="OverlayNavLink"
          href="https://www.dribbble.com/webuild/"
          rel="noopener noreferrer"
          style={fadeInSpring}
          target="_blank"
        >
          Dribbble
        </animated.a>
        <animated.a
          className="OverlayNavLink"
          href="https://www.instagram.com/webuild.io/"
          rel="noopener noreferrer"
          style={fadeInSpring}
          target="_blank"
        >
          Instagram
        </animated.a>
      </div>
    </OverlayNavContainer>
  )
}

OverlayNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onContact: PropTypes.func,
}

export default OverlayNav
