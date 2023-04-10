/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useCallback, useState } from 'react'
import { graphql, Link } from 'gatsby'
import Meta from '@components/Meta'
import Img from 'gatsby-image'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'
import { useLongPress } from 'use-long-press'
import useWindowSize from '@common/hooks/useWindowSize'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gsap } from 'gsap'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Draggable } from 'gsap/Draggable'
import NewFooter from '@modules/common/components/NewFooter'
import ReactPlayer from 'react-player'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// SVGS
import videoSrc from '@static/videos/yotta/yotta-splash-screen.mp4'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import ArrowRight from '../../static/svgs/fancy-arrow-right.inline.svg'
import YottaBadge from '../../static/svgs/case-studies/yotta/yotta-badge.inline.svg'
import Asterisk from '../../static/svgs/asterisk.inline.svg'
import PlayIcon from '../../static/svgs/playicon.inline.svg'
import YottaLogo from '../../static/svgs/case-studies/yotta/yotta-logo.inline.svg'
import TapIcon from '../../static/svgs/tap-icon.inline.svg'
import CloseIcon from '../../static/svgs/closeIcon.inline.svg'
import QuoteIcon from '../../static/svgs/quote-icon.inline.svg'

// eslint-disable-next-line
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '../../common/styles/pages/yotta.css'

const stats = [
  {
    stat: `100%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Conversions`
  },
  {
    stat: `100%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Conversions`
  },
  {
    stat: `100%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Conversions`
  },
  {
    stat: `100%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Conversions`
  }
]

const Yotta = ({
  location,
  data: {
    contentfulCaseStudy,
    socialShare,
    yottaHeroImg,
    yottaDesignsDesktop,
    yottaDesignsMobile,
    brandImgOne,
    brandImgTwo,
    brandImgThree,
    brandImgFour,
    compareImgNew,
    compareImgOld,
    appScreenOne,
    appScreenTwo,
    appScreenThree,
    appScreenFour,
    appScreenFive,
    appScreenSix,
    adamHeadshot,
    yottaOldOne,
    yottaOldTwo,
    yottaOldThree,
    yottaNewOne,
    yottaNewTwo,
    yottaNewThree,
    productGif,
    marketingGif,
    designGif,
    brandingGif,
    animationGif
  }
}) => {
  const {
    seoTitle,
    metaDescription: { metaDescription }
  } = contentfulCaseStudy
  const designImgSources = [
    yottaDesignsMobile.childImageSharp.fluid,
    {
      ...yottaDesignsDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`
    }
  ]

  const [oldImgClasses, setOldImgClasses] = useState([
    'opacity-0 z-0 pointer-events-none',
    'opacity-0 z-0 pointer-events-none',
    'opacity-0 z-0 pointer-events-none'
  ])

  const [modalClasses, setModalClasses] = useState(
    'z-0 pointer-events-none opacity-0'
  )
  const [vimeoUrl, setVimeoUrl] = useState('https://vimeo.com/799586294')
  const [isVimeoPlaying, setIsVimeoPlaying] = useState(false)
  const [modalVideoWidth, setModalVideoWidth] = useState('100%')

  const { width } = useWindowSize()
  const isMobile = width && width < 768
  const isTablet = width && width < 1024
  const isDesktop = width && width >= 1024

  const beforeAndAfter = [
    {
      title: `A data-driven summary page`,
      caption: `Our refreshed summary page tackled the recurring problem of displaying data and information in an easily digestible and on-brand manner.`,
      beforeImage: yottaOldOne.childImageSharp.fluid,
      afterImage: yottaNewOne.childImageSharp.fluid
    },
    {
      title: `An overhauled interactive winning number reveal`,
      caption: `From repetitive, outdated animations to an interactive game, number reveals were transformed into an engaging experience that highlights Yotta’s unique spin on the industry.`,
      beforeImage: yottaOldTwo.childImageSharp.fluid,
      afterImage: yottaNewTwo.childImageSharp.fluid
    },
    {
      title: `A gamified and bold Play tab`,
      caption: `The Play tab encompasses Yotta’s main selling point: gamifying banking by pairing lottery with savings. The redesign transforms a data-intensive UI into an intuitive, engaging experience.`,
      beforeImage: yottaOldThree.childImageSharp.fluid,
      afterImage: yottaNewThree.childImageSharp.fluid
    }
  ]

  const services = [
    {
      name: `Product Design`,
      img: productGif.publicURL,
      link: `/what-we-do/digital-product-strategy-and-design/`
    },
    {
      name: `Marketing Design`,
      img: marketingGif.publicURL,
      link: `/what-we-do/marketing-design/`
    },
    {
      name: `Design Systems`,
      img: designGif.publicURL,
      link: `/what-we-do/design-systems/`
    },
    {
      name: `Animation + Interaction`,
      img: brandingGif.publicURL,
      link: `/what-we-do/animation-and-interaction/`
    },
    {
      name: `Brand Design`,
      img: animationGif.publicURL,
      link: `/what-we-do/brand-strategy-and-design/`
    }
  ]

  const showOldImage = (index) => {
    const newArr = [...oldImgClasses]
    newArr[index] = `opacity-100 z-50`
    setOldImgClasses(newArr)
  }

  const hideOldImage = (index) => {
    const newArr = [...oldImgClasses]
    newArr[index] = `opacity-0 z-0`
    setOldImgClasses(newArr)
  }

  const lpCallback = useCallback((event) => {
    const { index } = event.target.dataset
    showOldImage(index)
  }, [])

  const bind = useLongPress(lpCallback, {
    // eslint-disable-next-line no-undef
    onFinish: (event) => hideOldImage(event.target.dataset.index)
  })

  const showOldImageOnHover = (index, e) => {
    if (isDesktop) {
      e.target.classList.remove(`bg-electricViolet`)
      showOldImage(index)
    }
  }

  const hideOldImageOnHover = (index, e) => {
    if (isDesktop) {
      e.target.classList.add(`bg-electricViolet`)
      hideOldImage(index)
    }
  }

  const handleShowModal = (url, square = false) => {
    setModalClasses('z-50 opacity-100 pointer-events-auto')
    setVimeoUrl(url)

    if (square && isDesktop) {
      setModalVideoWidth('50%')
    } else {
      setModalVideoWidth('100%')
    }

    setTimeout(() => {
      setIsVimeoPlaying(!isVimeoPlaying)
    }, 300)
  }

  const handleHideModal = () => {
    setModalClasses('z-0 opacity-0 pointer-events-none')
    setIsVimeoPlaying(!isVimeoPlaying)
  }

  return (
    <>
      <Meta
        description={metaDescription}
        location={location}
        shareImage={socialShare.publicURL}
        title={seoTitle}
      />
      <div
        className="yotta absolute top-0 w-full overflow-hidden"
        id="yotta-container"
      >
        <main>
          <section className="yotta-hero bg-newBlack w-screen">
            <div className="yotta-container pt-44 lg:flex lg:items-center gap-10 lg:pb-20">
              <div className="content">
                <h1 className="text-white font-primary font-light text-center lg:text-left">
                  A{' '}
                  <span className="text-lilac font-crimson italic font-extralight">
                    transformed visual <br /> identity plus a UX/UI <br />{' '}
                    overhaul
                  </span>{' '}
                  Gave This <br /> Fintech Startup New Life
                </h1>
              </div>
              <div className="img mt-11 w-full transform translate-y-9 md:translate-y-18 md:mt-2 lg:transform-none">
                <Img fluid={yottaHeroImg.childImageSharp.fluid} />
              </div>
            </div>
          </section>
          {/* TESTIMONIAL */}
          <section className="our-clients bg-beauBlue pt-30 pb-20 md:pt-45 md:pb-30 lg:py-45">
            <div className="mx-auto px-6 md:px-16 lg:px-0 lg:max-w-3xl">
              <div className="testimonials mb-14 mx-auto md:mb-20 lg:mb-40 grid place-items-center">
                <div className="testimonial md:pl-26 relative">
                  <QuoteIcon className="w-18 h-auto md:absolute md:top-0 md:left-0 " />
                  <p className="text-primary text-left text-blueRibbon font-medium text-4xl leading-normal mt-6 md:mt-0">
                    “webuild has done an incredible job integrating themselves
                    into our team, understanding our company objectives, and
                    working with us to{' '}
                    <span className="font-crimson font-font-extralight italic text-5xl">
                      develop the world-class user experience that delights our
                      customers”
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:flex items-center gap-x-22 md:max-w-xs m-auto">
                <div className="people flex-1 grid">
                  <div className="person-info text-blueRibbon font-light flex items-center justify-between">
                    <Img
                      className="w-22 h-auto m-auto md:m-0"
                      fluid={adamHeadshot.childImageSharp.fluid}
                    />
                    <div className="block h-px bg-blueRibbon flex-1" />
                    <div className="ml-6">
                      <YottaLogo className="w-18 h-auto" />
                      <p className="my-4">Adam Moelis</p>
                      <p>Yotta CEO/Co-founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* INTRO SECTION */}
          <section className="yotta-intro">
            <div className="yotta-container yotta-container--skinny">
              <div className="pt-28 md:pt-40">
                <p className="intro-p text-4xl text-center lg:text-left lg:text-5xl">
                  A robust design system and prototype empowered this dev team
                  to create a best-in-class product experience
                </p>
                <ArrowRight className="w-12 transform rotate-90 mx-auto mt-10 lg:ml-0" />
              </div>
              <div className="relative">
                <div className="yotta-stats flex mt-14 xl:absolute xl:top-0 xl:left-0 xl:transform xl:-translate-x-full xl:flex-col xl:mt-0 xl:pr-20">
                  <YottaBadge className="mr-4 xl:mr-0 xl:mb-4" />
                  <div className="">
                    <div className="">
                      <p className="text-caption text-electricViolet xl:text-sm">
                        fintech Startup
                      </p>
                      <p className="text-caption xl:text-sm">series A</p>
                    </div>
                    <div className="mt-5">
                      <p className="text-caption xl:text-sm">$30M raised</p>
                      <p className="text-caption xl:text-sm">Founded 2019</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg mt-8 leading-loose lg:mt-21 xl:text-xl">
                  <span className="font-bold">
                    Born out of a mission to make financial stability fun,
                  </span>{' '}
                  this digital product pools together a portion of the interest
                  users accumulate from high-value banks. Then, they offer that
                  interest via prizes through weekly number draws (or lotteries)
                  where users have the chance to win big. Yotta also takes a
                  portion and pays it to you - no matter what. Save with Yotta
                  and get rewarded. It’s a safe, easy, and fun way to build
                  financial security.
                </p>
              </div>
            </div>
          </section>
          {/* PHOTO GRID */}
          <section className="photo-grid bg-electricViolet py-10 px-6 mt-21 md:mx-6 md:px-10 lg:py-20 lg:px-20 max-w-screen-1536">
            <div className="photo-grid__container">
              <Img fluid={designImgSources} />
            </div>
          </section>
          {/* STATS */}
          {/* <section className="yotta-stats mt-4 xl:mt-6">
            <div className="w-full max-w-screen-1536 px-6 md:px-0 xl:px-6 mx-auto md:px-4 cont">
              <div className="yotta-stats__container border border-solid border-blueRibbon p-16 md:flex md:justify-between md:p-10 xl:py-16 xl:px-20">
                {stats.map((stat, i) => (
                  <div key={i} className="stat mb-8 md:mb-0">
                    <span className="flex items-start">
                      <h3 className="font-semibold text-blueRibbon text-8xl md:text-5xl xl:text-8xl xl:font-normal">
                        {stat.stat}
                      </h3>
                      {stat.arrow}
                    </span>
                    <p className="font-courier text-tiny text-blueRibbon mt-2 md:text-sm xl:text-tiny">
                      {stat.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section> */}
          {/* BEFORE & AFTER */}
          <section className="before-after">
            <div className="yotta-container yotta-container--skinny py-20 md:py-24 xl:py-35">
              <div className="">
                <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                  <Asterisk className="w-5 h-auto mr-2" /> Problem
                </h2>
                <p className="text-base leading-relaxed lg:text-lg">
                  A weak brand identity and outdated UI zaps any chance of
                  building customer loyalty. Yotta knew this as they experienced
                  insufficient levels of customer engagement. Nothing from the
                  visual identity to the UI and UX was hitting the mark.
                </p>
                <p className="text-base leading-relaxed mt-6 lg:text-lg">
                  In order to turn things around, Yotta needed to update their
                  visual identity to attract their target audience and find ways
                  to reach them in an authentic and engaging way. In short, they
                  needed a stronger, more trustworthy brand. That’s where
                  webuild came in.
                </p>
              </div>
              <div className="mt-15">
                <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                  <Asterisk className="w-5 h-auto mr-2" /> Solution
                </h2>
                <p className="text-base leading-relaxed lg:text-lg">
                  To make this happen, we revamped the brand’s visual identity
                  and gave its customer experience a lot of TLC. With a
                  completely new look and feel, plus an overhaul of the UX and
                  UI, the customer experience went from drab to dynamic. Now,
                  there’s no doubt that Yotta’s brand is alive.
                </p>
              </div>
            </div>
          </section>
          {/* Brand Images */}
          <section className="yottta-brand-product bg-black py-15 px-6">
            <div className="yotta-brand-product-grid max-w-screen-1536 mx-auto xl:pt-20 xl:pb-10">
              <div className="yotta-brand-product-content text-white md:pr-10">
                <h1 className="text-4xl leading-tight">
                  From Brand and Product Design to Animation and Marketing
                  Design,{' '}
                  <span className="text-lavender font-crimson italic font-extralight">
                    webuild tackled it all
                  </span>
                </h1>
                <p className="mt-16 text-base leading-normal md:mt-8 xl:text-lg">
                  Yotta started off as a native app. The rub was that users were
                  only able to access their accounts in the app - making it hard
                  to engage on other platforms, or through web usage.To
                  eliminate this common frustration, we designed a web version.
                </p>
                <p className="mt-6 text-base leading-normal xl:text-lg">
                  We subtly restructured the UX to display information in a more
                  intuitive, easily digestible way, taking the most important
                  information from the mobile app and translating it to web.
                </p>
              </div>
              <div className="brand-img-one px-6 mt-10 md:mt-0 md:px-0 md:pr-20 md:mt-0">
                {/* <Img fluid={brandImgOne.childImageSharp.fluid} /> */}
                <ReactPlayer
                  className="react-player"
                  controls={false}
                  height="auto"
                  loop={true}
                  muted={true}
                  playing={true}
                  playsinline={true}
                  type="mp4"
                  url={videoSrc}
                  width="100%"
                />
                <div className="caption-one flex items-center justify-center py-4 px-6 border border-solid border-gray-700 rounded-8 mt-5 md:mt-2 md:flex-col md:items-start">
                  <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:mb-2 md:-translate-x-3" />
                  <p className="font-courier text-gray-600 text-sm flex-1 leading-normal">
                    A refreshed splash screen
                  </p>
                </div>
              </div>
              <div className="yotta-brand-img-grid mt-20 md:mt-24 xl:mt-0">
                <div className="brand-img-two relative px-6 md:px-0 md:mt-24 xl:mt-0 xl:w-1/2 xl:mx-auto">
                  {/* <Img fluid={brandImgTwo.childImageSharp.fluid} /> */}
                  <ReactPlayer
                    config={{
                      vimeo: {
                        playerOptions: {
                          controls: false,
                          responsive: true,
                          playsinline: true,
                          autoplay: true,
                          muted: true
                        }
                      }
                    }}
                    controls={false}
                    height="auto"
                    loop={true}
                    muted={true}
                    playing={true}
                    playsinline={true}
                    url="https://vimeo.com/799178998"
                    // onPlay={() => screenfull.request()}
                    width="100%"
                  />
                  <div
                    className={`fixed top-0 left-0 w-full h-full bg-black transition ease-in-out grid place-items-center ${modalClasses}`}
                  >
                    <span
                      className="absolute top-6 right-6 text-blueRibbon z-50 cursor-pointer"
                      onClick={() => handleHideModal()}
                    >
                      <CloseIcon className="" />
                    </span>
                    <ReactPlayer
                      config={{
                        vimeo: {
                          playerOptions: {
                            controls: false,
                            responsive: true,
                            playsinline: false,
                            autoplay: false,
                            muted: false
                          }
                        }
                      }}
                      height="auto"
                      playing={isVimeoPlaying}
                      url={vimeoUrl}
                      width={modalVideoWidth}
                    />
                  </div>
                  <div
                    className="caption-one flex items-center justify-between py-4 px-6 border border-solid border-gray-700 rounded-full mt-5 md:absolute md:top-0 md:left-0 md:transform md:-translate-x-full md:-ml-2 md:mt-0 md:flex-col md:items-end md:rounded-8 md:w-30 md:px-4 cursor-pointer"
                    onClick={() =>
                      handleShowModal('https://vimeo.com/799178998')
                    }
                  >
                    <p className="font-courier text-gray-600 text-sm leading-normal md:order-2 md:text-right md:mt-2">
                      The Yotta hero video
                    </p>
                    <PlayIcon className="md:order-1" />
                  </div>
                </div>
                <div className="brand-img-three px-6 mt-25 md:px-0 md:mt-0 xl:w-3/5 xl:mx-auto xl:self-end">
                  <Img fluid={brandImgThree.childImageSharp.fluid} />
                  <div className="caption-one flex items-center justify-center py-4 px-6 border border-solid border-gray-700 rounded-8 mt-5 md:mt-2 md:flex-col md:items-start">
                    <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:mb-2 md:-translate-x-3" />
                    <p className="font-courier text-gray-600 text-sm flex-1 leading-normal">
                      Unique branding elements that elevate the brand
                    </p>
                  </div>
                </div>
                <div className="brand-img-four px-6 mt-25 md:px-0 md:ml-auto md:flex md:flex-col md:mt-0 xl:w-3/5 xl:ml-auto">
                  <Img
                    className="md:order-2"
                    fluid={brandImgFour.childImageSharp.fluid}
                  />
                  <div
                    className="caption-one flex items-center justify-center py-4 px-6 border border-solid border-gray-700 rounded-8 mt-5 md:order-1 md:mt-0 md:mb-2 md:flex-col md:items-start cursor-pointer"
                    onClick={() =>
                      handleShowModal('https://vimeo.com/799586294', true)
                    }
                  >
                    <PlayIcon className="md:order-5 mr-4" />
                    <p className="font-courier text-gray-600 text-sm flex-1 leading-normal md:order-1">
                      Engaging social media ads
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* YOTTA COMPARE */}
          <section className="yotta-app-screens">
            {/* APP COMPARE */}
            <div className="mt-20">
              <div className="yotta-container yotta-container--skinny">
                <h2 className="text-2xl leading-normal">
                  At the same time, we focused on establishing their new brand
                  identity while simultaneously improving their UI on the native
                  app.{' '}
                </h2>
                <p className="text-base leading-normal mt-8 lg:text-lg">
                  By taking inventory of the information architecture and
                  components, as well as how everything was organized, we drove
                  greater design from real data. We restructured information
                  here, removed unnecessary language there, and suggested better
                  orientations to provide a more seamless experience for users.
                </p>
              </div>
              <div className="yotta-old-new yotta-container mt-10 xl:mt-25 max-w-screen-1536 mx-auto">
                <Splide
                  options={{
                    fixedWidth: 'calc(90%)',
                    arrows: false,
                    gap: 0,
                    mediaQuery: 'min',
                    breakpoints: {
                      743: {
                        destroy: true
                      }
                    }
                  }}
                >
                  {beforeAndAfter.map((item, index) => (
                    <SplideSlide key={item.title} className="screen">
                      <div key={item.title}>
                        <div className="md:grid md:grid-cols-2">
                          <div
                            className="yotta-old-new__caption text-white py-6 px-6 grid bg-electricViolet rounded-8 relative md:px-4 md:items-start md:content-between md:order-3 lg:py-8 lg:px-5 lg:rounded-10 transition ease-in-out duration-300"
                            onMouseEnter={(e) => showOldImageOnHover(index, e)}
                            onMouseLeave={(e) => hideOldImageOnHover(index, e)}
                          >
                            <p className="old-new-title text-2.5xl leading-normal font-light text-center md:text-left md:text-xl lg:text-2.5xl lg:w-3/4">
                              {item.title}
                            </p>
                            <div className="old-image-container relative my-6 md:absolute md:px-0 md:top-0 md:left-0 md:w-full md:h-full md:my-0 pointer-events-none">
                              <div className="relative z-10 md:hidden">
                                <Img fluid={item.afterImage} />
                              </div>
                              <div
                                className={`absolute top-0 left-0 w-full h-auto md:relative transition ease-in-out duration-300 ${oldImgClasses[index]}`}
                              >
                                <Img className="" fluid={item.beforeImage} />
                              </div>
                            </div>
                            {isTablet ? (
                              <button
                                className="old-new-action border-none z-10"
                                data-index={index}
                                {...bind()}
                              >
                                <p className="flex font-light pointer-events-none md:flex-col md:text-left md:text-tiny md:w-3/4 lg:text-base leading-snug">
                                  <TapIcon className="mr-2 md:mb-2" />
                                  Tap and hold to reveal old design
                                </p>
                              </button>
                            ) : (
                              <p className="flex font-light pointer-events-none md:flex-col md:text-left md:text-tiny md:w-3/4 lg:text-base leading-snug">
                                <TapIcon className="mr-2 md:mb-2" />
                                Hover to reveal old design
                              </p>
                            )}
                          </div>
                          <div className="hidden md:block">
                            <Img fluid={item.afterImage} />
                          </div>
                        </div>
                        <div className="caption flex items-center mt-6 md:mt-4 lg:w-3/4">
                          <ArrowRight className="transform -rotate-90 mr-2 w-12 pointer-events-none" />
                          <p className="flex-1 font-courier text-sm leading-tight pointer-events-none md:text-xs lg:leading-normal">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
            {/* MARKETING COMPARE */}
            <div className="yotta-container yotta-container--skinny pb-20 md:pb-15 mt-20 xl:mt-31">
              <h3 className="text-2.5xl leading-normal">
                In addition, we got extra creative to build brand affinity.
              </h3>
              <p className="mt-8 text-base leading-relaxed lg:text-lg">
                We’re talking playful social ads to establish brand awareness
                and trust, and custom video campaigns to introduce Yotta’s key
                features. From animation work to splash videos, we told Yotta’s
                story in a fun, relatable way. A quick win was our end-of-year
                “rap up” email newsletter that rapped each user’s statistics.
                The key to compelling brand affinity was ensuring all media
                (rapped or otherwise!) emphasized the high-trust, high-autonomy
                factor Yotta needed to show off.
              </p>
              <p className="mt-8 text-base leading-relaxed lg:text-lg">
                We also leveled up the homepage by creating a more striking
                visual identity. To do this we performed research and presented
                a range of concepts. We involved a high-production photo shoot
                in order to get intentional, unique, and high-quality visual
                assets. The result is a style that balances boldness with
                trustworthiness.{' '}
              </p>
            </div>
            <div className="yotta-compare-container bg-gray-300 py-8 px-6 max-w-screen-1536 mx-auto md:py-12">
              <div className="relative max-w-screen-md mx-auto">
                <div className="yotta-ba flex justify-around align-center md:justify-between lg:absolute lg:top-2/4 lg:right-0 lg:-left-25">
                  <span className="text-base text-blueRibbon">Before</span>
                  <span className="text-base text-blueRibbon">After</span>
                </div>
                <div className="rounded-2 overflow-hidden mt-6 md:mt-2 lg:rounded-4">
                  <ReactCompareSlider
                    handle={
                      <div
                        style={{
                          display: 'grid',
                          placeContent: 'center',
                          height: '100%'
                        }}
                      >
                        <div className="w-0.5 h-full bg-lilac absolute top-0 left-1/2 transform -translate-x-1/2" />
                        <div
                          className="baf-handle relative flex justify-around items-center w-4 h-7 rounded-1 cursor-ew-resize hover:cursor-ew-resize px-1 z-10"
                          style={{
                            background: '#8900FF',
                            borderRadius: '3px'
                          }}
                        >
                          <span className="w-px h-4 bg-lavender z-10" />
                          <span className="w-px h-4 bg-lavender z-10" />
                        </div>
                      </div>
                    }
                    itemOne={
                      <ReactCompareSliderImage
                        alt="Image one"
                        src={compareImgOld.childImageSharp.fluid.src}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        alt="Image two"
                        src={compareImgNew.childImageSharp.fluid.src}
                      />
                    }
                    onlyHandleDraggable={true}
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
              </div>
              <div className="mt-8 md:mt-2 max-w-screen-md mx-auto">
                <div className="md:w-58 flex flex-start md:ml-auto ">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto" />
                  <p className="font-courier text-sm leading-relaxed flex-1 md:text-xs">
                    A hero update that recharged the brand and focused on key
                    messaging and visuals.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* FINE TUNING */}
          <section className="yotta-tuning py-20">
            <div className="yotta-container yotta-container--skinny">
              <h2 className="text-2.5xl leading-normal">
                The fun doesn’t stop here. Our team is constantly fine-tuning
                designs based on user feedback and business priorities.
              </h2>
              <p className="text-base mt-8 lg:text-lg leading-loose">
                Right now, that means diving into the{' '}
                <span className="font-bold">number reveal UX</span> - a critical
                portion of the design where a user learns what they have won
                each week. Our team is working in lockstep with Yotta to learn
                what user pain points we can solve. The biggest one? A desire
                for a more <span className="font-bold">experiential</span>{' '}
                number reveal - rather than a static one. When users feel more
                ownership over the process of drawing their weekly numbers, it’s
                a stickier experience.
              </p>
              <p className="text-base mt-8 lg:text-lg leading-loose">
                We’re still figuring out what that experience will look like -
                and our Figma files are overflowing with ideas. It’s going to
                combine the fun of fantasy sports betting, with a high sense of
                trust and clarity on a user’s savings.
              </p>
              <p className="text-base mt-8 lg:text-lg leading-loose">
                It’ll be a big project, but webuild is a team of big dreamers.
                Stay tuned!
              </p>
            </div>
          </section>
          {/* MORE APP SCREENS */}
          <section className="yotta-more-app-screens">
            <div className="yotta-container yotta-screens grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 md:gap-x-12 lg:pb-20">
              <div className="mt-23 md:mt-48">
                <Img
                  className="w-full"
                  fluid={appScreenOne.childImageSharp.fluid}
                />
              </div>
              <div className="mt-4 md:mt-24">
                <Img
                  className="w-full"
                  fluid={appScreenTwo.childImageSharp.fluid}
                />
                <div className="flex mt-4 items-start">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                  <p className="flex-1 font-courier text-xs leading-loose">
                    Engaging number reveals coupled with real-time data and
                    insights.
                  </p>
                </div>
              </div>
              <div className="order-5 md:order-3 mt-16 md:mt-0">
                <Img
                  className="w-full"
                  fluid={appScreenThree.childImageSharp.fluid}
                />
                <div className="flex items-start mt-4">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                  <p className="flex-1 font-courier text-xs leading-loose">
                    Using weekly play streaks, colorful visuals, and badges for
                    a gamified experience.
                  </p>
                </div>
              </div>
              <div className="order-6 md:order-4 mt-42 md:mt-20">
                <Img
                  className="w-full"
                  fluid={appScreenFour.childImageSharp.fluid}
                />
              </div>
              <div className="order-3 md:order-5 mt-16 md:mt-44">
                <Img
                  className="w-full"
                  fluid={appScreenFive.childImageSharp.fluid}
                />
              </div>
              <div className="order-4 mt-16 md:order-6 md:mt-20">
                <Img
                  className="w-full"
                  fluid={appScreenSix.childImageSharp.fluid}
                />
              </div>
            </div>
          </section>
          {/* RESULTS */}
          <section className="yotta-results bg-black mt-16">
            <div className="yotta-container py-20">
              <h2 className="text-lilac text-4xl leading-none w-2/3 md:ml-16 md:w-full lg:w-9/12 lg:ml-auto">
                Our work's results{' '}
                <span className="italic font-crimson text-5xl">so far</span>
              </h2>
              <div className="text-gray-400 mt-14 md:grid md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
                <div className="result-card">
                  <p className="text-5xl mr-6 mt-0.5">01</p>
                  <p className="text-xl leading-snug font-light">
                    Increased brand trust and legitimacy.
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">02</p>
                  <p className="text-xl leading-snug font-light">
                    Built and strengthened brand identity.
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">03</p>
                  <p className="text-xl leading-snug font-light">
                    Built a full web app to maximize ease of access
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">04</p>
                  <p className="text-xl leading-snug font-light">
                    Improved the UX and UI for the native app
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">05</p>
                  <p className="text-xl leading-snug font-light">
                    Elevated the brand experience across web, emails, and mobile
                    app with a unified design language.
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">06</p>
                  <p className="text-xl leading-snug font-light">
                    Introduced a formal design process and inspired the team to
                    embrace a design-thinking culture.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* SERVICES */}
          <section className="webuild-services py-24">
            <div className="yotta-container">
              <h2 className="text-4xl leading-none w-3/4 md:w-full md:ml-16">
                webuild Services{' '}
                <span className="italic font-crimson font-light text-5xl">
                  put to the test
                </span>
              </h2>
              <div className="md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-10 md:mt-4 lg:grid-cols-5 xl:gap-x-26">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="border-b border-solid pt-5 mt-6"
                  >
                    <AniLink
                      cover
                      direction="right"
                      duration={1.5}
                      to={service.link}
                    >
                      <img
                        alt={service.name}
                        src={service.img}
                        style={{ width: `auto`, height: `64px` }}
                      />
                      <p className="py-6">{service.name}</p>
                    </AniLink>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <NewFooter />
        </main>
      </div>
    </>
  )
}

export const YOTTA_QUERY = graphql`
  query yottaQuery {
    contentfulCaseStudy(name: { eq: "Yotta" }) {
      metaDescription {
        metaDescription
      }
      seoTitle
    }
    socialShare: file(
      relativePath: { eq: "case-studies/yotta/social-share-yotta.jpg" }
    ) {
      publicURL
    }
    yottaHeroImg: file(
      relativePath: { eq: "case-studies/yotta/yotta-hero.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaDesignsDesktop: file(
      relativePath: { eq: "case-studies/yotta/yotta-designs-desktop.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaDesignsMobile: file(
      relativePath: { eq: "case-studies/yotta/yotta-designs-mobile.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    brandImgOne: file(
      relativePath: { eq: "case-studies/yotta/yotta-brand-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    brandImgTwo: file(
      relativePath: { eq: "case-studies/yotta/yotta-brand-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    brandImgThree: file(
      relativePath: { eq: "case-studies/yotta/yotta-brand-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    brandImgFour: file(
      relativePath: { eq: "case-studies/yotta/yotta-brand-four.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    compareImgOld: file(
      relativePath: { eq: "case-studies/yotta/yotta-compare-old.jpg" }
    ) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    compareImgNew: file(
      relativePath: { eq: "case-studies/yotta/yotta-compare-new.jpg" }
    ) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    appScreenOne: file(
      relativePath: { eq: "case-studies/yotta/app-screen-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    appScreenTwo: file(
      relativePath: { eq: "case-studies/yotta/app-screen-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    appScreenThree: file(
      relativePath: { eq: "case-studies/yotta/app-screen-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    appScreenFour: file(
      relativePath: { eq: "case-studies/yotta/app-screen-four.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    appScreenFive: file(
      relativePath: { eq: "case-studies/yotta/app-screen-five.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    appScreenSix: file(
      relativePath: { eq: "case-studies/yotta/app-screen-six.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    adamHeadshot: file(
      relativePath: { eq: "case-studies/yotta/yotta-headshot.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaNewOne: file(
      relativePath: { eq: "case-studies/yotta/yotta-new-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaNewTwo: file(
      relativePath: { eq: "case-studies/yotta/yotta-new-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaNewThree: file(
      relativePath: { eq: "case-studies/yotta/yotta-new-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaOldOne: file(
      relativePath: { eq: "case-studies/yotta/yotta-old-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaOldTwo: file(
      relativePath: { eq: "case-studies/yotta/yotta-old-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yottaOldThree: file(
      relativePath: { eq: "case-studies/yotta/yotta-old-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    productGif: file(relativePath: { eq: "service-gifs/product-design.gif" }) {
      publicURL
    }
    marketingGif: file(relativePath: { eq: "service-gifs/marketing.gif" }) {
      publicURL
    }
    designGif: file(relativePath: { eq: "service-gifs/design.gif" }) {
      publicURL
    }
    brandingGif: file(relativePath: { eq: "service-gifs/branding.gif" }) {
      publicURL
    }
    animationGif: file(relativePath: { eq: "service-gifs/animation.gif" }) {
      publicURL
    }
  }
`

export default Yotta
