/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useCallback, useState } from 'react'
import useWindowSize from '@common/hooks/useWindowSize'
import { graphql, Link } from 'gatsby'
import Meta from '@components/Meta'
import Img from 'gatsby-image'
import NewFooter from '@modules/common/components/NewFooter'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ReactPlayer from 'react-player'
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'
import { useLongPress } from 'use-long-press'
import TapIcon from '../../static/svgs/tap-icon.inline.svg'
import PlayIcon from '../../static/svgs/play-icon-large.inline.svg'
import edgeVideo from '../../static/videos/quadpay/microsoft-edge.mp4'
import trainingVideo from '../../static/videos/quadpay/training.mp4'
import chromeVideo from '../../static/videos/quadpay/quadpay-chrome.mp4'
import CloseIcon from '../../static/svgs/closeIcon.inline.svg'

import { CaseStudyContainer, CaseStudyTextContainer } from './clickup'

// SVGS
import ArrowRight from '../../static/svgs/fancy-arrow-right.inline.svg'
import Asterisk from '../../static/svgs/asterisk.inline.svg'
import QuoteIcon from '../../static/svgs/quote-icon.inline.svg'
import QuadpayLogo from '../../static/svgs/case-studies/quadpay/quadpay-logo.inline.svg'
import QuadpayBadge from '../../static/svgs/case-studies/quadpay/quadpay-badge.inline.svg'

import '../../common/styles/pages/neon.css'

const stats = [
  {
    stat: `10%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Conversions`
  },
  {
    stat: `12.5%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Activation`
  },
  {
    stat: `7.5%`,
    arrow: (
      <ArrowRight className="transform -rotate-90 w-12 h-auto md:w-8 xl:w-12" />
    ),
    copy: `Invites`
  }
]

const Quadpay = ({
  location,
  data: {
    contentfulCaseStudy,
    socialShare,
    HeroImg,
    photoGridMobile,
    photoGridDesktop,
    brandColorsImg,
    originalIconsImg,
    logoGridImg,
    identityGridMobile,
    identityGridDesktop,
    screenOne,
    screenTwo,
    screenThree,
    screenFour,
    screenFive,
    dealsImg,
    walkthroughImg,
    paymentOneImg,
    paymentTwoImg,
    beforeImg,
    afterImg,
    edgeCover,
    chromeCover,
    trainingCover,
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

  const photoGridSources = [
    photoGridMobile.childImageSharp.fluid,
    {
      ...photoGridDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`
    }
  ]

  const identityGridSources = [
    identityGridMobile.childImageSharp.fluid,
    {
      ...identityGridDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`
    }
  ]

  const { width } = useWindowSize()
  const isMobile = width && width < 768
  const isTablet = width && width < 1024
  const isDesktop = width && width >= 1024

  const bnaBgRef = useRef(null)
  const [oldImgClasses, setOldImgClasses] = useState(
    'opacity-0 z-0 pointer-events-none'
  )

  const showOldImage = () => {
    // const newArr = [...oldImgClasses]
    // newArr[index] = `opacity-100 z-50`
    setOldImgClasses(`opacity-100 z-50`)
  }

  const hideOldImage = () => {
    // const newArr = [...oldImgClasses]
    // newArr[index] = `opacity-0 z-0`
    setOldImgClasses(`opacity-0 z-0`)
  }

  const lpCallback = useCallback((event) => {
    showOldImage()
  }, [])

  const bind = useLongPress(lpCallback, {
    // eslint-disable-next-line no-undef
    onFinish: () => hideOldImage()
  })

  const showOldImageOnHover = (index, e) => {
    if (isDesktop) {
      bnaBgRef.current.classList.remove(`bg-electricViolet`)
      showOldImage()
    }
  }

  const hideOldImageOnHover = (index, e) => {
    if (isDesktop) {
      bnaBgRef.current.classList.add(`bg-electricViolet`)
      hideOldImage()
    }
  }

  const videos = [
    {
      coverImg: edgeCover,
      video: edgeVideo
    },
    {
      coverImg: chromeCover,
      video: chromeVideo
    },
    {
      coverImg: trainingCover,
      video: trainingVideo
    }
  ]

  const thumbContainer = useRef(null)
  const coverContainer = useRef(null)
  const [videoUrl, setVideoUrl] = useState(videos[0].video)
  const [thumbs, setThumbs] = useState()
  const [covers, setCovers] = useState()
  const [modalClasses, setModalClasses] = useState(
    'z-0 pointer-events-none opacity-0'
  )
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [modalVideoWidth, setModalVideoWidth] = useState('100%')

  useEffect(() => {
    setThumbs([...thumbContainer.current.querySelectorAll('[data-thumb]')])
    setCovers([...coverContainer.current.querySelectorAll('.cover-img-slide')])
  }, [])

  const handleThumbClick = (e) => {
    const thumbIndex = +e.target.dataset.thumb
    thumbs.forEach((t) => {
      t.classList.remove('active')
    })
    covers.forEach((t) => {
      t.classList.remove('active')
    })
    thumbs[thumbIndex].classList.add('active')
    covers[thumbIndex].classList.add('active')
    setVideoUrl(videos[thumbIndex].video)
  }

  const handleShowModal = (url, square = false) => {
    setModalClasses('z-50 opacity-100 pointer-events-auto')

    if (square && isDesktop) {
      setModalVideoWidth('50%')
    } else {
      setModalVideoWidth('100%')
    }

    setTimeout(() => {
      setIsVideoPlaying(!isVideoPlaying)
    }, 300)
  }

  const handleHideModal = () => {
    setModalClasses('z-0 opacity-0 pointer-events-none')
    setIsVideoPlaying(!isVideoPlaying)
  }

  const { showModal } = useOpportunityFormModal()

  return (
    <>
      <Meta
        description={metaDescription}
        location={location}
        shareImage={socialShare.publicURL}
        title={seoTitle}
      />
      <div
        className="clickup absolute top-0 w-full overflow-hidden"
        id="click-container"
      >
        <main>
          <section className="yotta-hero bg-newBlack w-screen pt-40 md:pt-36">
            <CaseStudyContainer className="xl:flex xl:items-center xl:gap-10 xl:pb-20 s1536:gap-x-30">
              <div className="content">
                <h1 className="text-white font-primary font-light text-center xl:text-left">
                  How UX/UI Upgrades & Brand Strategy took this fintech app{' '}
                  <span className="text-lilac font-crimson italic font-extralight">
                    from startup to acquisition
                  </span>
                </h1>
              </div>
              <div className="img mt-11 w-full transform translate-y-9 md:mt-2 xl:transform-none">
                <Img fluid={HeroImg.childImageSharp.fluid} />
              </div>
            </CaseStudyContainer>
          </section>
          {/* TESTIMONIAL */}
          <section className="our-clients bg-beauBlue pt-30 pb-20 md:pt-45 md:pb-30 lg:py-45">
            <div className="mx-auto px-6 md:px-16 lg:px-0 lg:max-w-3xl">
              <div className="testimonials mb-14 mx-auto md:mb-20 lg:mb-40 grid place-items-center">
                <div className="testimonial md:pl-26 relative text-blueRibbon">
                  <QuoteIcon className="w-18 h-auto md:absolute md:top-0 md:left-0 " />
                  <p className="text-primary text-left text-blueRibbon font-medium text-4xl leading-normal mt-6 md:mt-0">
                    “We have been blown away by the capability and experience of
                    the webuild team. Over time webuild has become an extension
                    of our team,
                    <span className="font-crimson font-font-extralight italic text-5xl">
                      taking ownership of all product and UX design requirements
                      of Quadpay.{' '}
                    </span>
                    ”
                  </p>
                </div>
              </div>
              <div className="md:flex items-center gap-x-22 md:max-w-xs m-auto">
                <div className="people flex-1 grid">
                  <div className="person-info text-blueRibbon font-light flex items-center justify-between">
                    <div className="block h-px bg-blueRibbon flex-1" />
                    <div className="ml-6">
                      <QuadpayLogo className="w-18 h-auto" />
                      <p className="my-4">Brad Lindenberg</p>
                      <p className="my-4">CEO/Co-founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* INTRO SECTION */}
          <section className="yotta-intro">
            <CaseStudyContainer className="pb-21 md:pb-0">
              <CaseStudyTextContainer>
                <div className="pt-28 md:pt-40">
                  <p className="intro-p text-4xl text-center lg:text-left lg:text-5xl">
                    4.8 App Star rating & 2+ million users thanks to stand-alone
                    strategy and design
                  </p>
                  <ArrowRight className="w-12 transform rotate-90 mx-auto mt-10 lg:ml-0 text-blueRibbon" />
                </div>
                <div className="relative">
                  <div className="yotta-stats flex mt-14 xl:absolute xl:top-0 xl:left-0 xl:transform xl:-translate-x-full xl:flex-col xl:mt-0 xl:pr-20">
                    <QuadpayBadge className="mr-4 xl:mr-0 xl:mb-4" />
                    <div className="">
                      <div className="">
                        <p className="text-caption text-electricViolet xl:text-sm">
                          Fintech BNPL tool
                        </p>
                        <p className="text-caption xl:text-sm">Post-IPO</p>
                      </div>
                      <div className="mt-5">
                        <p className="text-caption xl:text-sm">
                          $893.6M raised
                        </p>
                        <p className="text-caption xl:text-sm">founded 2013</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg mt-8 leading-loose">
                    <span className="font-bold">
                      Zip (formerly Quadpay) is a Fintech app that allows
                      payments to be split into four installments.
                    </span>{' '}
                    They're part of a larger "buy now, pay later" movement
                    (BNPL) that's an alternative to credit cards.
                  </p>
                  <p className="text-lg mt-8 leading-loose">
                    No credit impact, no interest as long as you pay your
                    installments on time. As recently as 2020, 37% of consumers
                    report using a BNPL service.
                  </p>
                </div>
              </CaseStudyTextContainer>
              <div className="border border-electricViolet border-solid rounded-16 p-10 mt-10 lg:mt-25 xl:mx-20">
                <h3 className="text-h3 text-electricViolet">A Note</h3>
                <p className="text-xl leading-relaxed">
                  We started working with the Quadpay team in 2020. They were
                  later acquired by Zip in 2021, so you’ll see work from both
                  brands represented below.
                </p>
              </div>
            </CaseStudyContainer>
          </section>
          {/* PHOTO GRID */}
          <section className="mx-auto px-4 md:px-6 lg:px-12 mt-20 s1440:mt-35">
            <div className="w-full">
              <Img className="w-full" fluid={photoGridSources} />
            </div>
            <div className="flex mt-6">
              <svg
                fill="none"
                height="25"
                viewBox="0 0 24 25"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6129 0.232086C11.6129 6.64572 6.41363 11.845 0 11.845"
                  stroke="#2250FF"
                />
                <path
                  d="M12.3871 0.232666C12.3871 6.6463 17.5864 11.8456 24 11.8456"
                  stroke="#2250FF"
                />
                <line
                  stroke="#2250FF"
                  x1="12.1133"
                  x2="12.1133"
                  y1="0.232666"
                  y2="24.2327"
                />
              </svg>
              <p className="font-courier text-xs text-gray-700 ml-3">
                Quadpay product family.
              </p>
            </div>
          </section>
          {/* PROBLEM & SOLUTION */}
          <section className="before-after py-20 xl:pb-35">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <div className="text-base leading-relaxed lg:text-lg">
                  <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                    <Asterisk className="w-5 h-auto mr-2" /> Problem
                  </h2>

                  <p className="text-base leading-relaxed lg:text-lg">
                    Quadpay came to us for help with their product and marketing
                    design. They specifically requested UX/UI upgrades that
                    would help them stand out against competitors like Afterpay,
                    Affirm, Klarna, and Sezzle. As we worked together, it became
                    apparent that we got along pretty great, and what started as
                    a singular, specific ask morphed into more opportunities to
                    iterate and optimize, well, everything.
                  </p>
                </div>
                <div className="mt-15">
                  <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                    <Asterisk className="w-5 h-auto mr-2" /> Solution
                  </h2>

                  <p className="text-base leading-relaxed lg:text-lg">
                    After combining their vision and existing product with our
                    design and brand strategy expertise, Quadpay has seen
                    tremendous growth. Over two million users have downloaded
                    their apps and use their consumer products. They have a 4.8
                    App Star rating. Not to mention, they’ve been acquired by
                    Zip, an Australian-based fintech company of the same nature.
                    More on that later!
                  </p>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>
          {/* COMBINING UX/UI */}
          <section className="bg-black py-15 px-6 md:py-20">
            <div className="max-w-screen-1536 exp-services-wrapper mx-auto xl:pt-20 xl:pb-10 xl:grid s1440:px-30 s1536:px-52">
              <div className="exp-services-container md:grid md:grid-cols-2 md:items-start">
                <div className="exp-services-content text-white md:pr-10 md:order-2">
                  <h2 className="text-4xl leading-tight">
                    How Combining UX/UI Expertise & Brand Strategy{' '}
                    <span className="text-lavender font-crimson italic font-extralight">
                      <br className="hidden lg:inline" /> made this product{' '}
                      <br className="hidden lg:inline" /> acquisition-ready
                    </span>
                  </h2>
                  <p className="mt-16 text-base leading-normal md:mt-8 md:text-lg md:mt-28">
                    To get to that point, Quadpay not only needed to up their
                    UX/UI game; they quickly realized they needed to totally
                    adapt their brand, too. They knew it was crucial they
                    started speaking more directly to their two core audiences:
                    “lifestyle optimizers” (consumers) and “momentum brands”
                    (retailers). They didn’t know where to start.
                  </p>
                  <p className="mt-6 text-base leading-normal md:text-lg">
                    We gladly jumped in and implemented our specialized
                    marketing strategies to help them elevate and adapt their
                    brand. It was important that the brand better fit their
                    target audiences, so we helped them explore a wide range of
                    branding options that would help them achieve that goal.
                    From typography to color palettes, brand voice to icons and
                    graphics, nothing was off the table.
                  </p>
                </div>
                <div className="exp-services-img-one mt-10 md:order-1 md:pr-30 md:pl-0 md:mt-0 xl:pr-20">
                  <Img fluid={brandColorsImg.childImageSharp.fluid} />
                  <div className="caption-one py-4 px-6 border border-solid border-gray-700 rounded-8 mt-4 md:mt-2">
                    <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:mb-2 -translate-x-2 text-blueRibbon" />
                    <p className="font-courier text-gray-600 text-xs flex-1 leading-normal mt-2">
                      Re-defining the Quadpay brand for their new stage of
                      growth meant helping them fit in with their younger,
                      fashion-forward consumer through elevated, rounded, and
                      softer brand assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp-services-container md:grid md:grid-cols-2 md:items-start single">
                <div className="relative exp-services-img-two mt-20 md:order-4 md:mt-0 md:pr-16 lg:w-3/5 lg:ml-auto xl:order-1 xl:pr-0">
                  <Img fluid={originalIconsImg.childImageSharp.fluid} />
                  <div className="caption-one py-4 px-6 border border-solid border-gray-700 rounded-8 mt-4 md:absolute md:top-0 md:w-30 md:right-full md:text-right md:mt-0 md:mr-2">
                    <ArrowRight className="text-blueRibbon transform -rotate-90 w-11 h-auto mr-4 md:mb-2 -translate-x-2 md:rotate-0 md:mr-0 md:ml-auto" />
                    <p className="font-courier text-gray-600 text-xs flex-1 leading-normal mt-2">
                      Original icon design to match Quadpay’s empathetic
                      approach.
                    </p>
                  </div>
                </div>
                <div className="exp-services-img-three mt-20 md:order-3 md:pr-30 md:pl-10 xl:pr-0 xl:pl-0 xl:w-10/12 xl:ml-auto">
                  <div className="caption-one py-4 px-6 border border-solid border-gray-700 rounded-8 mb-4 md:mb-2 xl:w-1/2 xl:ml-auto">
                    <p className="font-courier text-gray-600 text-xs flex-1 leading-normal mt-2">
                      We delivered 4 distinct brand directions with different
                      options for logo, icon, color, marketing, and other
                      collateral.
                    </p>
                    <ArrowRight className="text-blueRibbon transform rotate-90 w-11 h-auto mr-4 md:mt-2 -translate-x-2" />
                  </div>
                  <Img fluid={logoGridImg.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </section>
          {/* LEVELING UP */}
          <section className="py-20 xl:py-35">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <h2 className="text-2xl font-bold mb-6 xl:text-2.5xl">
                  Creating a relevant identity
                </h2>
                <p className="text-base leading-loose xl:text-lg">
                  Ultimately, Quadpay ended up needing an entire brand refresh;
                  a trendier, fashion-forward, and relevant identity. Working
                  with them to get everything just right positioned Quadpay in
                  an area of the market where they became widely recognized.
                  Cohesiveness and collaboration settled in place, giving
                  everyone a little more stability.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Next on the list was catapulting their brand recognition. The
                  key to turning things around in this area came through product
                  enhancements and updating and releasing new features. In order
                  for Quadpay to grow, it was critical that they offer new and
                  exciting differentiators.
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>
          {/* IDENTITY GUIDELINES PHOTO GRID */}
          <section className="mx-auto px-4 md:px-6 lg:px-12">
            <div className="w-full">
              <Img className="w-full" fluid={identityGridSources} />
            </div>
            <div className="flex mt-6">
              <svg
                fill="none"
                height="25"
                viewBox="0 0 24 25"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6129 0.232086C11.6129 6.64572 6.41363 11.845 0 11.845"
                  stroke="#2250FF"
                />
                <path
                  d="M12.3871 0.232666C12.3871 6.6463 17.5864 11.8456 24 11.8456"
                  stroke="#2250FF"
                />
                <line
                  stroke="#2250FF"
                  x1="12.1133"
                  x2="12.1133"
                  y1="0.232666"
                  y2="24.2327"
                />
              </svg>
              <p className="font-courier text-xs text-gray-700 ml-3">
                Quadpay identity guidelines.
              </p>
            </div>
          </section>
          {/* STAIR STEP SCREENS */}
          <section className="mt-20 lg:mt-35 mb-20">
            <CaseStudyContainer>
              <CaseStudyTextContainer className="mt-20">
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  We utilized and leveraged data to help them shape and define
                  what these new features would do, then helped release them
                  into the world. Our tried-and-true method was applied: test,
                  learn, and rapidly iterate and optimize. And we had fun doing
                  it. 💪
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
            <CaseStudyContainer className="flex flex-wrap justify-center lg:flex-nowrap mt-20 lg:mt-35 mb-10">
              <div className="w-1/2 pr-4 mt-37 md:w-1/3 md:pl-6 md:pr-6 md:mt-48">
                <Img fluid={screenOne.childImageSharp.fluid} />
              </div>
              <div className="w-1/2 pl-4 md:w-1/3 md:pl-6 md:pr-6 md:mt-24">
                <Img fluid={screenTwo.childImageSharp.fluid} />
                <div className="flex mt-4 items-start">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    A clear plan shows users how to efficiently pay their
                    quarterly charges.
                  </p>
                </div>
              </div>
              <div className="w-1/2 pr-4 mt-16 md:w-1/3 md:pl-6 md:pr-6 md:mt-0">
                <Img fluid={screenThree.childImageSharp.fluid} />
                <div className="flex mt-4 items-start">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    During onboarding, users are asked simple, non-judgmental
                    questions.
                  </p>
                </div>
              </div>
              <div className="w-1/2 pl-4 mt-34 md:w-1/3 md:pr-6 md:pl-0 md:mt-20">
                <Img fluid={screenFour.childImageSharp.fluid} />
              </div>
              <div className="w-1/2 mt-16 md:w-1/3 md:pl-6 md:mt-40">
                <Img fluid={screenFive.childImageSharp.fluid} />
              </div>
            </CaseStudyContainer>
            <CaseStudyContainer>
              <CaseStudyTextContainer className="mt-20">
                <h2 className="text-2xl leading-snug font-bold">
                  Getting acquired
                </h2>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  A great design refresh (and of course, the incredible product
                  machine and deep thinking of the Quadpay team), brought
                  Quadpay to the next level. In August, 2020, shortly after our
                  work finished with them, they hit a major milestone. Monthly
                  transaction volume exceeded $70 million (or 600% increase on
                  July, 2019).
                </p>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  Those numbers were hard for other market players to ignore. In
                  September, 2020, Australian fintech giant Zip acquired Quadpay
                  for $296 million. Quadpay became a key part of their North
                  American Strategy.
                </p>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  Within the year, Quadpay fully merged into the Zip brand. Zip
                  continues to reach new heights within their new American
                  market. By May, 2023 Zip had a $1.5b valuation, and reached
                  their Series C round of funding (like our client ClickUp,
                  hyperlink the case study here).
                </p>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  We’re proud of the role webuild played in this journey, and
                  can’t wait to see Zip continue to thrive.
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          <section className="max-w-screen-s1536 mx-auto s1440:px-30 s1536:px-52 no-scroll-bar">
            <div className="whitespace-nowrap overflow-auto lg:whitespace-normal p-6 md:flex lg:px-12">
              <div className="store-front-scrollz pb-12 ">
                <div className="grid grid-cols-3 gap-x-4 md:flex md:gap-x-0">
                  <Img
                    className="md:flex-1 md:mr-4"
                    fluid={dealsImg.childImageSharp.fluid}
                  />
                  <Img
                    className="md:flex-1 md:mr-4"
                    fluid={walkthroughImg.childImageSharp.fluid}
                  />
                  <Img
                    className="md:flex-1 md:mr-4"
                    fluid={paymentOneImg.childImageSharp.fluid}
                  />
                  <div className="hidden md:block relative md:flex-1 md:ml-6 lg:ml-20 xl:ml-26">
                    <Img fluid={paymentTwoImg.childImageSharp.fluid} />
                    <div className="flex items-start mt-4 whitespace-normal absolute left-0 -bottom-4 transform translate-y-full ">
                      <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                      <p className="font-courier text-xs flex-1 leading-normal">
                        By putting ownership and autonomy in the hands of users
                        through spend calculation features, we encouraged user
                        independence and further purchasing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-4 whitespace-normal w-68 md:w-2/3 md:max-w-xl">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    Incentives for users to continue to utilize Quadpay
                    post-onboarding were embedded at organic points throughout
                    the app. This included time-bound deals (left screen), clear
                    user education on tool functionality and features (middle
                    screen), and clear order summaries that illustrated the
                    value proposition of BNPL (right screen). These screens also
                    demonstrate the evolution from Quadpay to Zip UI, a fun
                    challenge which our team was proud to kickoff
                    post-acquisition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 xl:mt-20">
            <CaseStudyContainer>
              <div className="xl:flex">
                <div className="xl:w-4/5 xl:mr-10">
                  <div
                    ref={coverContainer}
                    className="relative cover-imgs grid h-87 rounded-4 overflow-hidden border border-gray-400 border-solid"
                  >
                    {videos.map((video, index) => {
                      const initialClasses = index === 0 ? `active` : ``

                      return (
                        <div
                          key={video.video}
                          className={`cover-img-slide w-full h-full ${initialClasses}`}
                          data-index={index}
                        >
                          <Img
                            className="w-full h-full"
                            fluid={video.coverImg.childImageSharp.fluid}
                            imgStyle=""
                          />
                        </div>
                      )
                    })}
                    <button
                      className="play-btn absolute cursor-pointer border-none"
                      onClick={() => handleShowModal()}
                    >
                      <PlayIcon className="pointer-events-none" />
                    </button>
                  </div>
                  <div className="flex items-start mt-4 whitespace-normal w-68 md:mt-10 md:mb-10 md:w-2/3 md:max-w-md md:mx-auto xl:hidden">
                    <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                    <p className="font-courier text-xs flex-1 leading-normal">
                      Partnership programs like Zip for Microsoft Edge continued
                      to bolster this tool’s footprint in the marketplace.
                    </p>
                  </div>
                </div>
                <div
                  ref={thumbContainer}
                  className="thumbnails grid grid-cols-3 gap-x-4 mt-4 xl:w-1/5 xl:grid-cols-1 xl:gap-y-4 xl:mt-0"
                >
                  {videos.map((video, index) => {
                    const initialClasses = index === 0 ? `active` : ``
                    return (
                      <div
                        key={index}
                        className={`thumb h-18 rounded-4 overflow-hidden border-solid cursor-pointer ${initialClasses} md:h-auto`}
                        data-thumb={index}
                        onClick={(e) => handleThumbClick(e)}
                      >
                        <Img
                          className="w-full h-full pointer-events-none"
                          fluid={video.coverImg.childImageSharp.fluid}
                        />
                      </div>
                    )
                  })}
                </div>
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
                      youtube: {
                        playerVars: {
                          controls: 0,
                          playsinline: 0,
                          autoplay: 0
                        }
                      }
                    }}
                    height="auto"
                    playing={isVideoPlaying}
                    url={videoUrl}
                    width={modalVideoWidth}
                  />
                </div>
              </div>
              <div className="hidden items-start mt-4 whitespace-normal w-68 md:mt-10 md:mb-10 md:w-2/3 md:max-w-md md:mx-auto xl:flex xl:mt-4 xl:mb-0">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  Partnership programs like Zip for Microsoft Edge continued to
                  bolster this tool’s footprint in the marketplace.
                </p>
              </div>
            </CaseStudyContainer>
          </section>

          {/* BEFORE & AFTER */}
          <section className="mt-20 xl:mt-35 xl:mb-35">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  While Quadpay/Zip is firstly a D2C fintech experience, B2B
                  partnerships were a core component of their product growth
                  strategy. No one knows better than our team that if you want
                  to pitch your product to the big fish, your design needs to be
                  top-notch. Slick partnership videos, like the ones we created
                  above, helped paint the vision for future profitable
                  collaborations.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Beyond B2B video assets, our videography and animation team
                  faced an even greater go-to-market challenge.{' '}
                  <strong>
                    How would consumers know how to use Quadpay/Zip?
                  </strong>
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  We took digital design into the real world with these training
                  videos, which played on repeat on tablet devices in stores
                  which supported Zip payments.
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
            <CaseStudyContainer className="mt-30">
              <CaseStudyTextContainer>
                <div>
                  <div className="md:grid md:grid-cols-2">
                    <div
                      ref={bnaBgRef}
                      className="yotta-old-new__caption text-white border border-solid border-electricViolet py-6 px-6 grid bg-electricViolet rounded-8 relative md:px-4 md:items-start md:content-between md:order-3 lg:py-8 lg:px-5 lg:rounded-10 transition ease-in-out duration-300"
                      onMouseEnter={(e) => showOldImageOnHover()}
                      onMouseLeave={(e) => hideOldImageOnHover()}
                    >
                      <p className="old-new-title text-2.5xl leading-normal font-light text-center md:text-left md:text-xl lg:text-2.5xl lg:w-3/4">
                        A revamped Zip Branded Design
                      </p>
                      <div className="old-image-container relative my-6 md:absolute md:px-0 md:top-0 md:left-0 md:w-full md:h-full md:my-0 pointer-events-none">
                        <div className="relative z-10 md:hidden">
                          <Img fluid={beforeImg.childImageSharp.fluid} />
                        </div>
                        <div
                          className={`absolute p-px top-0 left-0 w-full h-auto md:relative transition ease-in-out duration-300 ${oldImgClasses}`}
                        >
                          <Img
                            className=""
                            fluid={afterImg.childImageSharp.fluid}
                          />
                        </div>
                      </div>
                      {isTablet ? (
                        <button
                          className="old-new-action border-none z-10"
                          {...bind()}
                        >
                          <p className="flex font-light pointer-events-none md:flex-col md:text-left md:text-tiny md:w-3/4 lg:text-base leading-snug">
                            <TapIcon className="mr-2 md:mb-2" />
                            Tap and hold to reveal new design
                          </p>
                        </button>
                      ) : (
                        <p className="flex font-light pointer-events-none md:flex-col md:text-left md:text-tiny md:w-3/4 lg:text-base leading-snug">
                          <TapIcon className="mr-2 md:mb-2" />
                          Hover to reveal new design
                        </p>
                      )}
                    </div>
                    <div className="hidden p-px md:block">
                      <Img fluid={beforeImg.childImageSharp.fluid} />
                    </div>
                  </div>
                  <div className="caption flex items-center mt-6 md:mt-4 lg:w-3/4">
                    <ArrowRight className="transform -rotate-90 mr-2 w-12 pointer-events-none" />
                    <p className="flex-1 font-courier text-sm leading-tight pointer-events-none md:text-xs lg:leading-normal">
                      This digital tool had to function in the real world. Easy,
                      In-Store cards within a user’s digital wallet made that
                      happen. See how we took that tool from one brand identity
                      to the next post-acquisition
                    </p>
                  </div>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          {/* RESULTS */}
          <section className="yotta-results bg-black mt-16">
            <CaseStudyContainer className="py-20">
              <h2 className="text-lilac text-4xl leading-none w-2/3 md:ml-16 md:w-full lg:w-9/12 lg:ml-auto">
                Our work's results{' '}
                <span className="italic font-crimson text-5xl">so far</span>
              </h2>
              <div className="text-gray-400 mt-14 md:grid md:grid-cols-2 xl:grid-cols-6 lg:mt-20">
                <div className="result-card xl:col-span-3">
                  <p className="text-5xl mr-6 mt-0.5">01</p>
                  <p className="text-xl leading-snug font-light">
                    Brought in a friendly, fresh, and refined brand that made
                    fintech accessible and nonjudgemental
                  </p>
                </div>
                <div className=" result-card xl:col-span-3">
                  <p className="text-5xl mr-6 mt-0.5">02</p>
                  <p className="text-xl leading-snug font-light">
                    Turned a brand concept into reality with UX+UI refinements
                    across the app
                  </p>
                </div>
                <div className=" result-card xl:col-span-2">
                  <p className="text-5xl mr-6 mt-0.5">03</p>
                  <p className="text-xl leading-snug font-light">
                    Acquired new users via video and static ad assets
                  </p>
                </div>
                <div className=" result-card xl:col-span-2">
                  <p className="text-5xl mr-6 mt-0.5">04</p>
                  <p className="text-xl leading-snug font-light">
                    Developed parter branded experiences for top-tier retailers
                  </p>
                </div>
                <div className=" result-card md:col-span-full xl:col-span-2">
                  <p className="text-5xl mr-6 mt-0.5">05</p>
                  <p className="text-xl leading-snug font-light">
                    Helped land a $296 million acquisition by Zip
                  </p>
                </div>
              </div>
            </CaseStudyContainer>
          </section>

          {/* SERVICES */}
          <section className="webuild-services py-24">
            <CaseStudyContainer>
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
            </CaseStudyContainer>
          </section>
          <NewFooter wrapperClassNames="s1536:px-0" />
        </main>
      </div>
    </>
  )
}

export const QUADPAY_QUERY = graphql`
  query quadpayQuery {
    contentfulCaseStudy(name: { eq: "Quadpay" }) {
      metaDescription {
        metaDescription
      }
      seoTitle
    }
    socialShare: file(
      relativePath: { eq: "case-studies/neon/social-share-neon.jpg" }
    ) {
      publicURL
    }
    HeroImg: file(
      relativePath: { eq: "case-studies/quadpay/quadpay-hero-img.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    photoGridMobile: file(
      relativePath: { eq: "case-studies/quadpay/qp-photogrid-mobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    photoGridDesktop: file(
      relativePath: { eq: "case-studies/quadpay/qp-photogrid-desktop.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    brandColorsImg: file(
      relativePath: { eq: "case-studies/quadpay/brand-colors.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    identityGridMobile: file(
      relativePath: { eq: "case-studies/quadpay/identity-grid-mobile.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    identityGridDesktop: file(
      relativePath: { eq: "case-studies/quadpay/identity-grid-desktop.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenOne: file(
      relativePath: { eq: "case-studies/quadpay/screen-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenTwo: file(
      relativePath: { eq: "case-studies/quadpay/screen-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenThree: file(
      relativePath: { eq: "case-studies/quadpay/screen-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenFour: file(
      relativePath: { eq: "case-studies/quadpay/screen-four.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenFive: file(
      relativePath: { eq: "case-studies/quadpay/screen-five.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    dealsImg: file(relativePath: { eq: "case-studies/quadpay/deals.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    walkthroughImg: file(
      relativePath: { eq: "case-studies/quadpay/walkthrough.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    paymentOneImg: file(
      relativePath: { eq: "case-studies/quadpay/payment-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    paymentTwoImg: file(
      relativePath: { eq: "case-studies/quadpay/payment-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    originalIconsImg: file(
      relativePath: { eq: "case-studies/quadpay/original-icons.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    logoGridImg: file(
      relativePath: { eq: "case-studies/quadpay/logo-grid.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    beforeImg: file(
      relativePath: { eq: "case-studies/quadpay/before-img.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    afterImg: file(relativePath: { eq: "case-studies/quadpay/after-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    edgeCover: file(
      relativePath: { eq: "case-studies/quadpay/edge-cover.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    chromeCover: file(
      relativePath: { eq: "case-studies/quadpay/chrome-cover.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    trainingCover: file(
      relativePath: { eq: "case-studies/quadpay/training-cover.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
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

export default Quadpay
