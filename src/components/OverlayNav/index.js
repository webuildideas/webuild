// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated, useSpring, useTrail } from 'react-spring'

// Styled Components
import OverlayNavContainer from './OverlayNavContainer'

const OverlayNav = ({ isOpen }) => {
  const overlayProps = useSpring({
    x: isOpen ? '0' : '-100',
    config: { mass: 1, tension: 295, friction: 40 },
  })

  const overlayNavLinks = [
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

  const linkTrial = useTrail(overlayNavLinks.length, {
    config: { mass: 1, tension: 295, friction: 40 },
    from: {
      opacity: 0,
      y: 100,
    },
    opacity: isOpen ? 1 : 0,
    y: 0,
    delay: 450,
  })

  return (
    <OverlayNavContainer
      isOpen={isOpen}
      style={{
        ...overlayProps,
        // eslint-disable-next-line no-shadow
        transform: overlayProps.x.interpolate(x => `translate3d(${x}%, 0,0)`),
      }}
    >
      <ul className="OverlayNavList">
        {linkTrial.map(({ y, ...rest }, index) => (
          <animated.li
            key={`navLink-${index}`}
            className="OverlayNavLink"
            style={{
              ...rest,
              // eslint-disable-next-line no-shadow
              transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
            }}
          >
            <Link to={overlayNavLinks[index].slug}>
              {overlayNavLinks[index].title}
            </Link>
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
