// Packages
import React, { useCallback } from 'react'
import { Link } from 'gatsby'
import { animated, useSpring, useTrail, config } from 'react-spring'
import { useRecoilState } from 'recoil'

// Common
import { isOverlayNavOpenAtom } from '@common/store/userInterface/atoms'

// Styles
import { OverlayNavContainer } from './styles/OverlayNav'

interface NavLink {
  title: string
  slug: string
}

const navLinks: NavLink[] = [
  {
    title: 'Work',
    slug: '/'
  },
  {
    title: 'Who we are',
    slug: '/who-we-are'
  },
  {
    title: 'Insights',
    slug: '/insights'
  },
  {
    title: 'Get in touch',
    slug: '/get-in-touch'
  }
]

const OverlayNav = () => {
  const [isOverlayNavOpen, setIsOverlayNavOpen] = useRecoilState(
    isOverlayNavOpenAtom
  )

  const overlaySpring = useSpring({
    left: isOverlayNavOpen ? '0%' : '-100%',
    config: { mass: 1, tension: 295, friction: 40 }
  })

  const linkTrail = useTrail(navLinks.length, {
    from: {
      opacity: 0,
      y: 100
    },
    opacity: isOverlayNavOpen ? 1 : 0,
    y: 0,
    config: { mass: 1, tension: 295, friction: 40 },
    delay: 550
  })

  const fadeInSpring = useSpring({
    opacity: isOverlayNavOpen ? 1 : 0,
    config: config.molasses,
    delay: 800
  })

  const handleCloseOverlayNav = useCallback(() => setIsOverlayNavOpen(false), [
    setIsOverlayNavOpen
  ])

  const renderNavLink = useCallback(
    (link: NavLink) => {
      if (link.title === 'Get in touch') {
        return (
          <a href="mailto:hi@webuild.io" onClick={handleCloseOverlayNav}>
            {link.title}
          </a>
        )
      }

      return <Link to={link.slug}>{link.title}</Link>
    },
    [handleCloseOverlayNav]
  )

  return (
    <OverlayNavContainer style={overlaySpring}>
      <ul className="OverlayNavList">
        {linkTrail.map(({ y, ...rest }, index: number) => (
          <animated.li
            key={`navLink-${index}`}
            className="OverlayNavLink"
            onClick={handleCloseOverlayNav}
            style={{
              ...rest,
              transform: y.interpolate(
                (yVal: number) => `translate3d(0,${yVal}px,0)`
              )
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
          href="https://www.instagram.com/wearewebuild/"
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

export default OverlayNav
