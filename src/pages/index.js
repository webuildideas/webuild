/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React, { useState, useRef, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Meta from '@components/Meta'
import ReactPlayer from 'react-player/file'
import { gsap } from 'gsap'
import SoundOn from '@static/svgs/sound-on.inline.svg'
import SoundOff from '@static/svgs/sound-off.inline.svg'
import ShareIcon from '@static/svgs/share.inline.svg'
import InstagramIcon from '@static/svgs/common/social/instagram.inline.svg'
import LinkedinIcon from '@static/svgs/common/social/linkedin.inline.svg'
import FacebookIcon from '@static/svgs/common/social/facebook.inline.svg'

import FancyArrow from '@static/svgs/fancy-arrow-right.inline.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Img from 'gatsby-image'
import TestimonialSlider from '@modules/new-home/TestimonialSlider'
import NewFooter from '@modules/common/components/NewFooter'
import { Helmet } from 'react-helmet'
import videoSrc from '@static/videos/Showreel.mp4'

import '@common/styles/pages/new-home.css'

const NEW_HOME_PAGE_QUERY = graphql`
  query query {
    allContentfulCaseStudy(filter: { name: { ne: "PLACEHOLDER" } }) {
      nodes {
        name
        tagline
        carouselImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        service {
          shortTitle
        }
      }
    }
    weTeam: file(relativePath: { eq: "we-build-team-new.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contentfulHomePage(pageTitle: { eq: "Home" }) {
      testimonials {
        company
        quoteShort {
          raw
        }
        name
        role
        bwHeadshot {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        companyLogo {
          file {
            url
            fileName
          }
        }
      }
      logos {
        file {
          url
          fileName
        }
      }
    }
  }
`

const CaseStudy = ({ data }) => {
  return (
    <div className="case-study mx-6 flex flex-shrink-0 flex-col pt-11 lg:mx-0 lg:mr-26">
      <span className="service text-blueRibbon text-base uppercase">
        {data.service ? data.service[0].shortTitle : `Branding`}
      </span>
      <div className="image my-8 w-full h-auto">
        <Img
          className="w-full h-full"
          fadeIn
          fluid={data.carouselImage.fluid}
        />
      </div>

      <h3 className="font-overpass text-blueRibbon border-solid border-b-2 border-blueRibbon pb-8 flex-1">
        {data.tagline}
      </h3>
      <svg
        className="mt-8"
        fill="none"
        height="33"
        viewBox="0 0 32 33"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.80676 32.2558L4.56039 29.6427L9.35266 22.7684L14.57 17.5422L7.61353 16.3362L0 13.7231L1.35266 9.70303L8.92754 12.3161L15.0338 15.894L13.913 8.93921V0.255798H18.087V8.93921L16.9275 15.894L23.0338 12.3161L30.6473 9.70303L32 13.7231L24.3478 16.3362L17.3913 17.5422L22.6473 22.7684L27.4396 29.6427L24.1932 32.2558L19.3237 25.301L16 18.5071L12.6763 25.301L7.80676 32.2558Z"
          fill="#2250FF"
        />
      </svg>
    </div>
  )
}

const IndexPage = ({ location }) => {
  const {
    allContentfulCaseStudy: { nodes: caseStudies },
    weTeam,
    contentfulHomePage: { testimonials, logos: theLogos }
  } = useStaticQuery(NEW_HOME_PAGE_QUERY)
  gsap.registerPlugin(ScrollTrigger)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const heroRef = useRef(null)
  const logosRef = useRef(null)
  const caseStudyRef = useRef(null)
  const agencyRef = useRef(null)
  const clientsRef = useRef(null)

  function handleVolumeControl() {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    const hero = heroRef.current
    const intro = [...hero.querySelectorAll('h1, .we-are')]
    const curtain = hero.querySelector('.curtain')
    const line = hero.querySelector('.line')
    const buttons = [...hero.querySelectorAll('button, .share')]
    const bottomContent = hero.querySelector('.home-hero__bottom-content')
    const logos = [...hero.querySelectorAll('.logo')]
    const sections = [...caseStudyRef.current.querySelectorAll('.case-study')]
    const agencyHeadline = agencyRef.current.querySelector('h2')
    const agencyLine = agencyRef.current.querySelector('.the-agency__img .line')
    let scrollLength
    let offScreen = 0
    gsap.set([logos, agencyHeadline], { opacity: 0, y: 32, skewY: 5 })

    // HERO
    const tl = gsap.timeline({
      delay: 0.5,
      ease: 'expo.out',
      duration: 0.5,
      onComplete: () => {
        setIsPlaying(true)
      }
    })

    tl.fromTo(
      intro,
      { opacity: 0, y: 32, skewY: 5 },
      { opacity: 1, y: 0, skewY: 0, stagger: 0.1 }
    )
      .to(curtain, { xPercent: 101, duration: 1.5, ease: 'expo.out' }, '>-0.3')
      .fromTo(
        line,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', duration: 1 },
        '<'
      )
      .fromTo(
        buttons,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, stagger: 0.1 },
        '<'
      )
      .fromTo(
        bottomContent,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0 },
        '>-0.1'
      )

    const logosScroll = ScrollTrigger.create({
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

    // Scroll Horizontally
    if (window.innerWidth >= 768 && window.innerWidth < 990) {
      offScreen = sections.length - 1400 / sections[0].offsetWidth
      scrollLength = sections[0].offsetWidth * offScreen
    } else if (window.innerWidth >= 990) {
      offScreen = sections.length - 1152 / sections[0].offsetWidth
      scrollLength = sections[0].offsetWidth * offScreen
    } else {
      scrollLength = sections.length * sections[0].offsetWidth
    }

    const caseStudyScroll = gsap.to(sections, {
      xPercent: -100 * (sections.length - Math.ceil(offScreen)),
      ease: 'none', // <-- IMPORTANT!
      scrollTrigger: {
        trigger: caseStudyRef.current,
        pin: true,
        scrub: 0.1,
        start: 'top 15%',
        end: `+=${scrollLength}`
        // markers: true
      }
    })

    const agencyScroll = ScrollTrigger.create({
      trigger: agencyRef.current,
      start: 'top 50%',
      onEnter: () => {
        agencyRef.current
          .querySelector('.gatsby-image-wrapper')
          .classList.add('no-clip')

        gsap.to(agencyHeadline, {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.3,
          ease: 'expo.out'
        })
        gsap.to(agencyLine, {
          scaleY: 1,
          ease: 'expo.out',
          duration: 1
        })
      }
    })

    return () => {
      logosScroll.kill()
      caseStudyScroll.kill()
      agencyScroll.kill()
    }
  }, [])

  return (
    <div className="home new-home absolute top-0 w-full overflow-hidden bg-white">
      <Meta location={location} title="New Home" />

      <section
        ref={heroRef}
        className="home-hero bg-newBlack text-white pt-18 pb-26 lg:pt-32"
      >
        <div className="home-hero__intro text-center max-w-lg m-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-light">
            Product design for{' '}
            <i className="italic font-extralight font-crimson">
              ambitious teams.
            </i>
          </h1>
          <p className="text-body font-extralight mt-5 we-are">
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
            className="m-auto border-none block mt-6 relative md:absolute md:mt-0 md:top-8 md:right-3/4 md:mr-8 lg:top-22 w-12 lg:w-20"
            onClick={handleVolumeControl}
            type="button"
          >
            {isMuted ? <SoundOff /> : <SoundOn />}
          </button>

          <div className="share hidden m-auto mt-6 relative lg:grid lg:absolute lg:right-3/4 lg:mr-8 lg:top-41 lg:w-20 lg:h-20 border border-solid rounded-full border-white origin-top overflow-hidden">
            <div className="share__wrapper absolute top-0 left-0 w-full pt-7 flex flex-col gap-10 items-center">
              <ShareIcon className="block mx-auto block mx-auto my-0 share-icon" />

              {/* <a href="/" rel="noreferrer" target="_blank">
                <InstagramIcon className="w-6 h-auto" />
              </a> */}
              <a
                href="http://www.linkedin.com/shareArticle?mini=true&url=https://webuild.io/&title=webuild&source=https://webuild.io/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedinIcon className="w-6 h-auto" />
              </a>
              <a
                href="http://www.facebook.com/sharer/sharer.php?u=https://webuild.io/&title=webuild"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon className="w-6 h-auto" />
              </a>
            </div>
          </div>
        </div>
        <div className="home-hero__bottom-content max-w-lg m-auto text-center px-6">
          <p className="text-body">
            webuild provides strategic product design for the world's fastest
            growing product companies.
          </p>
        </div>
        <div
          ref={logosRef}
          className="home-hero__logos flex flex-wrap justify-between items-center max-w-6xl m-auto px-6 py-8 md:py-16 lg:py-35 lg:px-0"
        >
          {theLogos.map((logo) => (
            <div key={logo.file.url} className="logo my-4">
              <img alt={logo.file.fileName} src={logo.file.url} />
            </div>
          ))}
        </div>
      </section>
      <section className="results my-20">
        <div className="results__content mx-6 max-w-6xl lg:mx-auto lg:flex lg:items-end lg:justify-between">
          <div className="lg:flex lg:items-center max-w-screen-md lg:justify-around">
            <h2 className="text-h2 text-4xl lg:text-5xl">
              Results you can get behind
            </h2>
            <p className="text-body mt-8 font-light flex-1">
              How does 5x revenue sound? What about 250% growth? We made it
              possible through our obsession with optimization and our tailored
              design systems.
            </p>
          </div>
          <a
            className="cta flex items-center mt-6 text-blueRibbon font-light text-lg lg:mb-3"
            href="/"
          >
            <span className="">View our work</span>
            <span className="w-6 ml-14">
              <FancyArrow />
            </span>
          </a>
        </div>
        <div
          ref={caseStudyRef}
          className="results__case-studies overflow-hidden w-screen lg:mt-14"
        >
          <div className="results-container flex flex-nowrap">
            {caseStudies.map((caseStudy) => (
              <CaseStudy key={caseStudy.name} data={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      <section ref={agencyRef} className="the-agency pt-10 lg:pt-28 lg:pb-28">
        <h2 className="text-h2 font-extralight text-blueRibbon text-center px-6 max-w-4xl mx-auto">
          We're the agency that seamlessly
          <strong className="font-medium"> becomes a part of your team</strong>
        </h2>
        <div className="the-agency__img mt-10 pt-29 relative max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
            <div className="w-px h-full bg-blueRibbon origin-top line transform scale-y-0" />
          </div>
          <Img
            className="w-full h-full"
            fadeIn
            fluid={weTeam.childImageSharp.fluid}
            imgStyle={{
              transition: `transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)`
            }}
          />
        </div>
      </section>
      <section
        ref={clientsRef}
        className="our-clients bg-beauBlue py-20 lg:py-28"
      >
        <div className="our-clients__wrapper px-6 max-w-6xl mx-auto md:flex justify-start items-center xl:px-0">
          <h2 className="text-h2 text-blueRibbon md:mr-14">
            Our clients love us
          </h2>
          <p className="font-light text-body text-blueRibbon mt-8 max-w-md md:mt-0">
            Our expertise in and obsession with strategy, design, and
            optimization make us a triple threat.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </section>
      <NewFooter />
    </div>
  )
}

export default IndexPage
