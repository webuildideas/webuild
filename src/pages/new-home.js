// Packages
import React, { useState, useRef, useEffect } from 'react'
// import { graphql, PageProps } from 'gatsby'
import Meta from '@components/Meta'
import ReactPlayer from 'react-player/file'
import { gsap } from 'gsap'
import SoundOn from '@static/svgs/sound-on.inline.svg'
import SoundOff from '@static/svgs/sound-off.inline.svg'
import ClientLogoOne from '@static/svgs/logos/clients/Client-Logos-1.inline.svg'
import ClientLogoTwo from '@static/svgs/logos/clients/Client-Logos-2.inline.svg'
import ClientLogoThree from '@static/svgs/logos/clients/Client-Logos-3.inline.svg'
import ClientLogoFour from '@static/svgs/logos/clients/Client-Logos-4.inline.svg'
import ClientLogoFive from '@static/svgs/logos/clients/Client-Logos-5.inline.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import videoSrc from '@static/videos/Showreel.mp4'

const NewHome = ({ location }) => {
  gsap.registerPlugin(ScrollTrigger)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const heroRef = useRef(null)
  const logosRef = useRef(null)

  function handleVolumeControl() {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    const hero = heroRef.current
    const intro = [...hero.querySelectorAll('h1, .we-are')]
    const curtain = hero.querySelector('.curtain')
    const line = hero.querySelector('.line')
    const soundButton = hero.querySelector('button')
    const bottomContent = hero.querySelector('.home-hero__bottom-content')
    const logos = [...hero.querySelectorAll('.logo')]
    gsap.set(logos, { opacity: 0, y: 32, skewY: 5 })

    const tl = gsap.timeline({
      delay: 0.5,
      ease: 'expo.out',
      duration: 0.5,
      onComplete: () => {
        setIsPlaying(true)
      }
    })

    tl.fromTo(intro, { opacity: 0, y: 32 }, { opacity: 1, y: 0, stagger: 0.1 })
      .to(curtain, { xPercent: 101, duration: 1.7, ease: 'expo.out' }, '>-0.3')
      .fromTo(
        line,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', duration: 1 },
        '<'
      )
      .fromTo(soundButton, { opacity: 0, y: 32 }, { opacity: 1, y: 0 }, '<')
      .fromTo(
        bottomContent,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0 },
        '>-0.1'
      )

    ScrollTrigger.create({
      trigger: logosRef.current,
      start: 'top 70%',
      onEnter: () =>
        gsap.to(logos, {
          opacity: 1,
          y: 0,
          skewY: 0,
          stagger: 0.1,
          duration: 1.3,
          ease: 'expo.out'
        })
    })
  }, [])

  return (
    <div className="home">
      <Meta location={location} title="New Home" />
      <section
        ref={heroRef}
        className="home-hero bg-newBlack text-white pt-18 pb-26 lg:pt-32"
      >
        <div className="home-hero__intro text-center max-w-lg m-auto px-6">
          <h1 className="text-5xl lg:text-7xl">
            Product design for <i className="italic">ambitious teams.</i>
          </h1>
          <p className="text-body font-light mt-5 we-are">
            We're webuild.{' '}
            <i className="block md:inline-block">
              The get-it-done product studio.
            </i>
          </p>
        </div>
        <div className="home-hero__video py-8 my-8 relative lg:pt-22 lg:my-12 lg:pb-43">
          <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
            <div className="w-px h-full bg-white origin-top line" />
          </div>
          <div className="video relative md:w-3/4 md:ml-auto overflow-hidden">
            <ReactPlayer
              className="react-player"
              controls={false}
              height="100%"
              loop={true}
              muted={isMuted}
              playing={isPlaying}
              // light={videoCover.childImageSharp.fluid.src}
              // playing={isPlaying}
              playsinline={true}
              url={videoSrc}
              width="100%"
            />
            <div className="curtain absolute top-0 left-0 w-full h-full bg-newBlack" />
          </div>
          <button
            className="m-auto border-none block mt-6 relative md:absolute md:mt-0 md:top-8 md:right-3/4 md:mr-8 lg:top-22"
            onClick={handleVolumeControl}
            type="button"
          >
            {isMuted ? <SoundOff /> : <SoundOn />}
          </button>
        </div>
        <div className="home-hero__bottom-content max-w-lg m-auto text-center px-6">
          <p className="text-body">
            webuild provides strategic product design for the world's fastest
            growing product companies.
          </p>
        </div>
        <div
          ref={logosRef}
          className="home-hero__logos flex flex-wrap justify-around items-center max-w-6xl m-auto px-6 py-8 md:py-16 lg:py-35"
        >
          <div className="logo my-4">
            <ClientLogoOne />
          </div>
          <div className="logo my-4">
            <ClientLogoTwo />
          </div>
          <div className="logo my-4">
            <ClientLogoThree />
          </div>
          <div className="logo my-4">
            <ClientLogoFour />
          </div>
          <div className="logo my-4">
            <ClientLogoFive />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewHome
