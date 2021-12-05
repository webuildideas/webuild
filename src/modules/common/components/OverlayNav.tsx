// Packages
import React, { useCallback } from 'react'
import { Link } from 'gatsby'
import { animated, useSpring, useTrail, config } from 'react-spring'
import { useRecoilState } from 'recoil'

// Common
import { isOverlayNavOpenAtom } from '@common/store/userInterface/atoms'

// Styles
// import { OverlayNavContainer } from './styles/OverlayNav'
import './styles/OverlayNav.css'

interface NavLink {
  title: string
  slug: string
}

const navLinks: NavLink[] = [
  {
    title: 'Our Work',
    slug: '/case-studies/'
  },
  {
    title: 'Who we are',
    slug: '/who-we-are/'
  },
  {
    title: 'What we do',
    slug: '/what-we-do/'
  },
  {
    title: 'Insights',
    slug: '/insights/'
  },
  {
    title: 'Get in touch',
    slug: '/contact/'
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

  const renderNavLink = useCallback((link: NavLink) => {
    return <Link to={link.slug}>{link.title}</Link>
  }, [])

  return (
    <animated.nav className="OverlayNav" style={overlaySpring}>
      <div className="OverlayNav-inner">
        <ul className="OverlayNav-list">
          {linkTrail.map(({ y, ...rest }, index: number) => (
            <animated.li
              key={`navLink-${index}`}
              className="OverlayNav-link text-h2"
              onClick={handleCloseOverlayNav}
              style={{
                ...rest,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                transform: y.interpolate(
                  (yVal: number) => `translate3d(0,${yVal}px,0)`
                )
              }}
            >
              {renderNavLink(navLinks[index])}
            </animated.li>
          ))}
        </ul>

        <div className="OverlayNav-social">
          <animated.p className="text-h4" style={fadeInSpring}>
            Follow Us On
          </animated.p>
          <animated.a
            className="OverlayNav-link text-h2"
            href="https://www.dribbble.com/webuild/"
            rel="noopener noreferrer"
            style={fadeInSpring}
            target="_blank"
          >
            Dribbble
          </animated.a>
          <animated.a
            className="OverlayNav-link text-h2"
            href="https://www.instagram.com/wearewebuild/"
            rel="noopener noreferrer"
            style={fadeInSpring}
            target="_blank"
          >
            Instagram
          </animated.a>
        </div>
      </div>
    </animated.nav>
  )
}

export default OverlayNav
