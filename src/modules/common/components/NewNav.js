/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React, { useEffect, useRef } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from '@static/svgs/logo.inline.svg'
import InstagramIcon from '@static/svgs/common/social/instagram.inline.svg'
import LinkedinIcon from '@static/svgs/common/social/linkedin.inline.svg'
import DribbbleIcon from '@static/svgs/common/social/dribbble.inline.svg'
import InstagramGradient from '@static/svgs/common/social/instagram-gradient.inline.svg'
// Forms
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'
import './styles/NewNav.css'

export default function NewNav() {
  const { showModal } = useOpportunityFormModal()
  const burgerLineOneRef = useRef(null)
  const burgerLineTwoRef = useRef(null)
  const navRef = useRef(null)
  const burgerTl = useRef(null)
  const dropContainerRef = useRef(null)
  const navWrapperRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const navLinks = [...navRef.current.querySelectorAll('.nav-link')]
    const contactThings = [...contactRef.current.querySelectorAll('.fade-in')]
    function menuAnimation() {
      const menuTl = gsap.timeline()
      menuTl
        .to(navRef.current, {
          transform: 'none',
          ease: 'expo.out',
          duration: 0.7
        })
        .fromTo(
          navLinks,
          { autoAlpha: 0, y: 32, skewY: 5 },
          {
            autoAlpha: 1,
            y: 0,
            skewY: 0,
            stagger: 0.1,
            duration: 0.9,
            ease: 'expo.out'
          }
        )
        .fromTo(
          contactThings,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.65,
            ease: 'expo.out'
          },
          '<'
        )

      return menuTl
    }

    burgerTl.current = gsap.timeline({
      ease: 'expo.out',
      duration: 0.1,
      paused: true
    })
    burgerTl.current
      .to([burgerLineOneRef.current, burgerLineTwoRef.current], {
        transform: 'none'
      })
      .addLabel('rotate', '>')
      .to(burgerLineOneRef.current, { rotation: 45 }, 'rotate')
      .to(burgerLineTwoRef.current, { rotation: -45 }, 'rotate')
      .add(menuAnimation(), 'rotate')
      .reverse()
  }, [])
  // Burger TL

  function handleBurgerClick(e) {
    if (burgerTl.current.reversed()) {
      burgerTl.current.timeScale(1.5).play()
    } else {
      burgerTl.current.timeScale(2).reverse()
    }
  }

  function toggleAccordion(e) {
    const container = e.target.nextElementSibling
    if (window.innerWidth < 990) {
      if (e.target.classList.contains('open')) {
        container.style.maxHeight = `0px`
        e.target.classList.remove('open')
      } else {
        container.style.maxHeight = `${container.scrollHeight}px`
        e.target.classList.add('open')
      }
    }
  }

  function handleSubMenuMouseEnter(e) {
    dropContainerRef.current.style.opacity = `1`
  }
  function handleAllElseMouseEnters(e) {
    dropContainerRef.current.style.opacity = `0`
  }

  return (
    <>
      <header className="new-nav fixed top-0 left-0 w-full z-50 py-4 px-6">
        <div className="header__wrapper text-white flex justify-between items-center max-w-screen-2xl mx-auto xl:py-18 xl:px-32">
          <AniLink
            bg="#F3F3F3"
            className=""
            cover
            direction="right"
            duration={1.5}
            onClick={() => {
              if (!burgerTl.current.reversed()) {
                burgerTl.current.timeScale(2).reverse()
              }
            }}
            onMouseEnter={(e) => handleAllElseMouseEnters(e)}
            to="/"
          >
            <Logo className="w-25 h-auto" />
          </AniLink>
          <div
            className="burger grid w-6 h-6 items-center"
            onClick={(e) => handleBurgerClick(e)}
            role="button"
          >
            <span
              ref={burgerLineOneRef}
              className="block filter line w-5 h-0.5 bg-white rounded-full pointer-events-none"
            />
            <span
              ref={burgerLineTwoRef}
              className="block filter line w-5 h-0.5 bg-white rounded-full pointer-events-none"
            />
          </div>
        </div>
      </header>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-screen h-screen bg-brightBlue z-40 nav flex flex-col justify-between"
      >
        <div
          ref={navWrapperRef}
          className="nav__wrapper w-full flex flex-col px-6 pt-32 mx-auto lg:px-22 lg:pt-27 xl:px-44 xl:pt-54"
        >
          <AniLink
            bg="#F3F3F3"
            className="block nav-link nav-link-1 font-extralight text-5xl md:text-7xl group mb-6"
            cover
            direction="right"
            duration={1.5}
            onClick={handleBurgerClick}
            onMouseEnter={(e) => handleAllElseMouseEnters(e)}
            to="/case-studies/"
          >
            Our{' '}
            <span className="font-crimson italic lg:group-hover:font-bold">
              work
            </span>
          </AniLink>

          <p
            className="drop block nav-link nav-link-2 font-extralight text-5xl md:text-7xl group mb-6"
            onClick={(e) => toggleAccordion(e)}
            onMouseEnter={(e) => handleSubMenuMouseEnter(e)}
          >
            Our{' '}
            <span className="font-crimson italic pointer-events-none lg:group-hover:font-bold">
              services
            </span>
          </p>
          <div ref={dropContainerRef} className="drop-container">
            <div className="drop-container__wrapper flex flex-col gap-y-5 pl-7 pb-6 lg:h-full lg:justify-center lg:text-lg">
              <AniLink
                bg="#F3F3F3"
                className="block"
                cover
                direction="right"
                duration={1.5}
                onClick={handleBurgerClick}
                to="/digital-product-strategy-and-design/"
              >
                Product Design
              </AniLink>
              <AniLink
                bg="#F3F3F3"
                className="block"
                cover
                direction="right"
                duration={1.5}
                onClick={handleBurgerClick}
                to="/marketing-design/"
              >
                Marketing Design
              </AniLink>
              <AniLink
                bg="#F3F3F3"
                className="block"
                cover
                direction="right"
                duration={1.5}
                onClick={handleBurgerClick}
                to="/design-systems/"
              >
                Design Systems
              </AniLink>
              <AniLink
                bg="#F3F3F3"
                className="block"
                cover
                direction="right"
                duration={1.5}
                onClick={handleBurgerClick}
                to="/animation-and-interaction/"
              >
                Animation and Interaction
              </AniLink>
            </div>
          </div>

          <AniLink
            bg="#F3F3F3"
            className="block nav-link nav-link-3 font-extralight text-5xl md:text-7xl group mb-6"
            cover
            direction="right"
            duration={1.5}
            onClick={handleBurgerClick}
            onMouseEnter={(e) => handleAllElseMouseEnters(e)}
            to="/who-we-are/"
          >
            Our{' '}
            <span className="font-crimson italic lg:group-hover:font-bold">
              team
            </span>
          </AniLink>
          <AniLink
            bg="#F3F3F3"
            className="block nav-link nav-link-4 font-extralight text-5xl md:text-7xl group mb-6"
            cover
            direction="right"
            duration={1.5}
            onClick={handleBurgerClick}
            onMouseEnter={(e) => handleAllElseMouseEnters(e)}
            to="/insights"
          >
            Our{' '}
            <span className="font-crimson italic lg:group-hover:font-bold">
              thoughts
            </span>
          </AniLink>
        </div>
        <div
          ref={contactRef}
          className="nav-contact w-full flex flex-col px-6 mx-auto lg:flex-row lg:justify-between lg:items-center"
        >
          <p
            className="fade-in font-light flex items-center text-2xl lg:order-2"
            onClick={showModal}
          >
            Get in touch
            <svg
              className="w-8 h-auto ml-25"
              fill="none"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24.2753 7.33331C24.2753 11.6662 27.7337 15.1787 32 15.1787V15.4583V15.7379V16.2621V16.5416V16.8212C27.7338 16.8212 24.2753 20.3337 24.2753 24.6666H23.2086C23.2086 21.0582 25.3163 17.9497 28.3495 16.5416L0 16.5416V15.4583L28.3495 15.4583C25.3163 14.0503 23.2086 10.9418 23.2086 7.33331H24.2753Z"
                fill="#000000"
                fillRule="evenodd"
              />
            </svg>
          </p>
          <div className="social flex items-center gap-6 my-10">
            <a
              className="nav-social-link dribbble fade-in"
              href="https://www.dribbble.com/webuild/"
              rel="noreferrer"
              target="_blank"
            >
              <DribbbleIcon className="w-6 h-auto" />
            </a>
            <a
              className="nav-social-link ig fade-in"
              href="https://www.instagram.com/wearewebuild/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="w-6 h-auto nav-social-icon ig" />
              <InstagramGradient className="nav-social-icon ig-gradient" />
            </a>
            <a
              className="nav-social-link linkedin fade-in"
              href="https://www.linkedin.com/company/wearewebuild/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinIcon className="w-6 h-auto" />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
