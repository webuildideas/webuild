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
import './styles/NewFooter.css'

export default function NewFooter() {
  const footerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const fadeInElems = [...footerRef.current.querySelectorAll('.fade-in')]

    gsap.set(fadeInElems, { autoAlpha: 0, y: 32 })

    setTimeout(() => {
      gsap.to(fadeInElems, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: `top 65%`
        },
        autoAlpha: 1,
        y: 0,
        duration: 1.3,
        ease: 'expo.out',
        stagger: 0.15
      })
    }, 2000)
  }, [])

  return (
    <footer ref={footerRef} className="bg-newBlack pt-26 pb-8">
      <div className="footer__wrapper px-6 max-w-screen-1536 m-auto text-white pb-30 s1440:px-30 s1536:px-52">
        <h2 className="text-h2 font-light w-1/2 fade-in">
          Ready to <i className="font-crimson italic">get started?</i>
        </h2>
        <p className="font-light text-base w-11/12 mt-8 leading-relaxed fade-in">
          Take your product efforts to the next level. Drop us a line.
        </p>
        <a
          className="fade-in inline-flex items-center border border-solid rounded-full font-light px-10 py-7 mt-12 text-gray-100"
          href="mailto:hello@webuild.io"
        >
          Let's go!
          <svg
            className="w-8 h-auto ml-25"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M24.2753 7.33331C24.2753 11.6662 27.7337 15.1787 32 15.1787V15.4583V15.7379V16.2621V16.5416V16.8212C27.7338 16.8212 24.2753 20.3337 24.2753 24.6666H23.2086C23.2086 21.0582 25.3163 17.9497 28.3495 16.5416L0 16.5416V15.4583L28.3495 15.4583C25.3163 14.0503 23.2086 10.9418 23.2086 7.33331H24.2753Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="secondary-footer px-6 pt-8 border-solid border-t border-gray-700">
        <div className="secondary-footer__wrapper m-auto md:flex md:items-center md:justify-between max-w-screen-1536">
          <AniLink
            bg="#F3F3F3"
            // className="block text-white text-base font-extralight hover:font-bold transition ease-in-out duration-300"
            cover
            direction="right"
            duration={1.5}
            to="/"
          >
            <Logo className="text-white w-25 h-auto" />
          </AniLink>
          <nav className="grid grid-cols-2 mt-10 gap-y-4 md:grid-cols-4 md:mt-0 md:gap-x-10 footer-nav">
            <AniLink
              bg="#F3F3F3"
              className="block text-white text-base font-extralight hover:font-bold transition-all ease-in-out duration-300"
              cover
              direction="right"
              duration={1.5}
              to="/case-studies/"
            >
              our <span className="font-crimson text-xl italic">work</span>
            </AniLink>
            <AniLink
              bg="#F3F3F3"
              className="block text-white font-extralight hover:font-bold transition-all ease-in-out duration-300"
              cover
              direction="right"
              duration={1.5}
              to="/what-we-do/"
            >
              our <span className="font-crimson text-xl italic">services</span>
            </AniLink>
            {/* <AniLink
              bg="#F3F3F3"
              className="block text-white font-extralight hover:font-bold transition-all ease-in-out duration-300"
              cover
              direction="right"
              duration={1.5}
              to="/who-we-are/"
            >
              our <span className="font-crimson text-xl italic">team</span>
            </AniLink> */}
            <AniLink
              bg="#F3F3F3"
              className="block text-white font-extralight hover:font-bold transition-all ease-in-out duration-300"
              cover
              direction="right"
              duration={1.5}
              to="/insights"
            >
              our <span className="font-crimson text-xl italic">thoughts</span>
            </AniLink>
          </nav>
          <div className="social flex items-center gap-6 my-10">
            <a
              className="footer-social-link dribbble"
              href="https://www.dribbble.com/webuild/"
              rel="noreferrer"
              target="_blank"
            >
              <DribbbleIcon className="w-6 h-auto" />
            </a>
            <a
              className="footer-social-link ig"
              href="https://www.instagram.com/wearewebuild/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="w-6 h-auto footer-social-icon ig" />
              <InstagramGradient className="footer-social-icon ig-gradient" />
            </a>
            <a
              className="footer-social-link linkedin"
              href="https://www.linkedin.com/company/wearewebuild/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinIcon className="w-6 h-auto" />
            </a>
          </div>
          <AniLink
            bg="#0E0E1B"
            className="text-base text-white"
            cover
            direction="top"
            hex="#0E0E1B"
            to="/privacy/"
          >
            privacy
          </AniLink>
        </div>
      </div>
    </footer>
  )
}
