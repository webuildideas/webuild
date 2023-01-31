import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Meta from '@components/Meta'
import Img from 'gatsby-image'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gsap } from 'gsap'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Draggable } from 'gsap/Draggable'
import NewFooter from '@modules/common/components/NewFooter'
// SVGS
import ArrowRight from '../../static/svgs/fancy-arrow-right.inline.svg'
import YottaBadge from '../../static/svgs/case-studies/yotta/yotta-badge.inline.svg'
import Asterisk from '../../static/svgs/asterisk.inline.svg'
import PlayIcon from '../../static/svgs/playicon.inline.svg'
import YottaLogo from '../../static/svgs/case-studies/yotta/yotta-logo.inline.svg'
import ProductIcon from '../../static/svgs/service-icons/product-icon.inline.svg'
import MarketingIcon from '../../static/svgs/service-icons/marketing-icon.inline.svg'
import DesignIcon from '../../static/svgs/service-icons/design-icon.inline.svg'
import InteractionIcon from '../../static/svgs/service-icons/interaction-icon.inline.svg'
import BrandIcon from '../../static/svgs/service-icons/brand-icon.inline.svg'

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

const services = [
  {
    name: `Product Design`,
    icon: <ProductIcon />
  },
  {
    name: `Marketing Design`,
    icon: <MarketingIcon />
  },
  {
    name: `Design Systems`,
    icon: <DesignIcon />
  },
  {
    name: `Animation + Interaction`,
    icon: <InteractionIcon />
  },
  {
    name: `Brand Design`,
    icon: <BrandIcon />
  }
]

const Yotta = ({
  location,
  data: {
    contentfulCaseStudy,
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
    adamHeadshot
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
  const scrollAppInstance = useRef(null)
  const scrollBarKnobRef = useRef(null)
  const yottaAppScrollbar = useRef(null)
  const yottaAppScreens = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(Draggable)
    const scrollMagnifier = window.innerWidth < 768 ? 3.5 : 1.75

    scrollAppInstance.current = Draggable.create(scrollBarKnobRef.current, {
      type: 'x',
      bounds: yottaAppScrollbar.current,
      throwProps: true,
      onDrag() {
        gsap.to(yottaAppScreens.current, {
          // eslint-disable-next-line react/no-this-in-sfc
          x: -this.x * scrollMagnifier,
          overwrite: true
        })
      }
    })
  }, [])

  return (
    <>
      <Meta
        description={metaDescription}
        location={location}
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
                    transformed visual <br /> identity plus a UX/ui <br />{' '}
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
                      <p className="text-caption xl:text-sm">
                        $16.6M valuation
                      </p>
                      <p className="text-caption xl:text-sm">May 2022</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg mt-8 leading-loose xl:text-xl">
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
          <section className="photo-grid bg-electricViolet py-10 px-6 mt-21 md:mx-6 md:px-10 lg:py-20 lg:px-20 max-w-screen-1536 xl:mx-auto">
            <div className="photo-grid__container">
              <Img fluid={designImgSources} />
            </div>
          </section>
          {/* STATS */}
          <section className="yotta-stats mt-4 xl:mt-6">
            <div className="w-full max-w-screen-1536 px-6 md:px-0 xl:px-6 mx-auto md:px-4 cont">
              <div className="yotta-stats__container border border-solid border-blueRibbon p-16 md:flex md:justify-between md:p-10 xl:py-16 xl:px-20">
                {stats.map((stat) => (
                  <div key={stat.stat} className="stat mb-8 md:mb-0">
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
          </section>
          {/* BEFORE & AFTER */}
          <section className="before-after">
            <div className="yotta-container yotta-container--skinny py-20 md:py-24 xl:py-35">
              <div className="">
                <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                  <Asterisk className="w-5 h-auto mr-2" /> Problem
                </h2>
                <p className="text-base leading-relaxed">
                  A weak brand identity and outdated UI zaps any chance of
                  building customer loyalty. Yotta knew this as they experienced
                  insufficient levels of customer engagement. Nothing from the
                  visual identity to the UI and UX was hitting the mark.
                </p>
                <p className="text-base leading-relaxed mt-6">
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
                <p className="text-base leading-relaxed">
                  A weak brand identity and outdated UI zaps any chance of
                  building customer loyalty. Yotta knew this as they experienced
                  insufficient levels of customer engagement. Nothing from the
                  visual identity to the UI and UX was hitting the mark.
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
                  <span className="text-lavender font-crimson italics font-extralight">
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
                <Img fluid={brandImgOne.childImageSharp.fluid} />
                <div className="caption-one flex items-center justify-center py-4 px-6 border border-solid border-gray-700 rounded-8 mt-5 md:mt-2 md:flex-col md:items-start">
                  <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:mb-2 md:-translate-x-3" />
                  <p className="font-courier text-gray-600 text-sm flex-1 leading-normal">
                    A refreshed splash screen
                  </p>
                </div>
              </div>
              <div className="yotta-brand-img-grid mt-20 md:mt-24 xl:mt-0">
                <div className="brand-img-two relative px-6 md:px-0 md:mt-24 xl:mt-0 xl:w-1/2 xl:mx-auto">
                  <Img fluid={brandImgTwo.childImageSharp.fluid} />
                  <div className="caption-one flex items-center justify-between py-4 px-6 border border-solid border-gray-700 rounded-full mt-5 md:absolute md:top-0 md:left-0 md:transform md:-translate-x-full md:-ml-2 md:mt-0 md:flex-col md:items-end md:rounded-8 md:w-30 md:px-4">
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
                  <div className="caption-one flex items-center justify-center py-4 px-6 border border-solid border-gray-700 rounded-8 mt-5 md:order-1 md:mt-0 md:mb-2 md:flex-col md:items-start">
                    <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:rotate-90 md:order-2 md:mt-2 md:transform md:-translate-x-3" />
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
            <div className="yotta-container yotta-container--skinny mt-20">
              <h2 className="text-2xl leading-normal">
                At the same time, we focused on establishing their new brand
                identity while simultaneously improving their UI on the native
                app.{' '}
              </h2>
              <p className="text-base leading-normal mt-8">
                By taking inventory of the information architecture and
                components, as well as how everything was organized, we drove
                greater design from real data. We restructured information here,
                removed unnecessary language there, and suggested better
                orientations to provide a more seamless experience for users.
              </p>
            </div>
            {/* MARKETING COMPARE */}
            <div className="yotta-container yotta-container--skinny mt-20">
              <h3 className="text-2.5xl leading-normal">
                In addition, we got extra creative to build brand affinity.
              </h3>
              <p className="mt-8 text-base leading-relaxed">
                We’re talking playful social ads to establish brand awareness
                and trust, and custom video campaigns to introduce Yotta’s key
                features. From animation work to splash videos, we told Yotta’s
                story in a fun, relatable way. A quick win was our end-of-year
                “rap up” email newsletter that rapped each user’s statistics.
                The key to compelling brand affinity was ensuring all media
                (rapped or otherwise!) emphasized the high-trust, high-autonomy
                factor Yotta needed to show off.
              </p>
              <p className="mt-8 text-base leading-relaxed">
                We also leveled up the homepage by creating a more striking
                visual identity. To do this we performed research and presented
                a range of concepts. We involved a high-production photo shoot
                in order to get intentional, unique, and high-quality visual
                assets. The result is a style that balances boldness with
                trustworthiness.{' '}
              </p>
            </div>
            <div className="yotta-compare-container bg-gray-300 py-8 px-6 max-w-screen-1536 mx-auto lg:mt-15">
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
              <p className="text-base mt-8 lg:text-xl leading-loose">
                Right now, that means diving into the *number reveal UX* - a
                critical portion of the design where a user learns what they
                have won each week. Our team is working in lockstep with Yotta
                to learn what user pain points we can solve. The biggest one? A
                desire for a more *experiential* number reveal - rather than a
                static one. When users feel more ownership over the process of
                drawing their weekly numbers, it’s a stickier experience.
              </p>
              <p className="text-base mt-8 lg:text-xl leading-loose">
                We’re still figuring out what that experience will look like -
                and our Figma files are overflowing with ideas. It’s going to
                combine the fun of fantasy sports betting, with a high sense of
                trust and clarity on a user’s savings.
              </p>
              <p className="text-base mt-8 lg:text-xl leading-loose">
                It’ll be a big project, but webuild is a team of big dreamers.
                Stay tuned!
              </p>
            </div>
          </section>
          {/* MORE APP SCREENS */}
          <section className="yotta-more-app-screens">
            <div
              ref={yottaAppScreens}
              className="yotta-container yotta-screens grid grid-cols-6 gap-x-6 md:gap-x-12 lg:pb-20"
            >
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
                <div className="flex mt-4">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto items-start" />
                  <p className="flex-1 font-courier text-xs leading-loose">
                    Engaging number reveals coupled with real-time data and
                    insights.
                  </p>
                </div>
              </div>
              <div className="">
                <Img
                  className="w-full"
                  fluid={appScreenThree.childImageSharp.fluid}
                />
                <div className="flex mt-4">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto items-start" />
                  <p className="flex-1 font-courier text-xs leading-loose">
                    Using weekly play streaks, colorful visuals, and badges for
                    a gamified experience.
                  </p>
                </div>
              </div>
              <div className="mt-23 md:mt-48">
                <Img
                  className="w-full"
                  fluid={appScreenFour.childImageSharp.fluid}
                />
              </div>
              <div className="mt-23 md:mt-68">
                <Img
                  className="w-full"
                  fluid={appScreenFive.childImageSharp.fluid}
                />
              </div>
              <div className="mt:23 md:mt-48">
                <Img
                  className="w-full"
                  fluid={appScreenSix.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="mt-13 pb-20 px-6 lg:hidden">
              <div
                ref={yottaAppScrollbar}
                className="yotta-scrollbar w-full relative md:w-1/2"
              >
                <span className="scrollbar-track block w-full border border-solid border-electricViolet rounded-full absolute top-1/2 left-0" />
                <div
                  ref={scrollBarKnobRef}
                  className="scrollbar-knob z-10 relative w-14 h-6 bg-electricViolet rounded-full flex flex-col justify-center items-center"
                >
                  <span className="block bar w-6 h-0.5 bg-lavender mb-0.5" />
                  <span className="block bar w-6 h-0.5 bg-lavender mt-0.5" />
                </div>
              </div>
            </div>
          </section>
          {/* RESULTS */}
          <section className="yotta-results bg-black lg:mt-15">
            <div className="yotta-container py-20">
              <h2 className="text-lilac text-4xl leading-none w-1/3 md:ml-16 md:w-full lg:w-9/12 lg:ml-auto">
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
          {/* TESTIMONIAL */}
          <section className="our-clients bg-beauBlue py-20 md:py-23 lg:py-28">
            <div className="our-clients__wrapper px-6 max-w-6xl mx-auto md:px-16 md:flex md:justify-start md:items-start xl:px-0">
              <h2 className="text-h2 text-blueRibbon md:mr-14 md:flex-2">
                Our clients love us
              </h2>
              <p className="font-light text-body text-blueRibbon mt-8 max-w-md md:flex-1 md:mt-0">
                Our expertise in and obsession with strategy, design, and
                optimization make us a triple threat.
              </p>
            </div>
            <div className="max-w-6xl mx-auto px-6 md:px-16 xl:px-0">
              <div className="testimonials my-14 max-w-xl mx-auto md:my-40 lg:my-40 grid place-items-center">
                <div className="testimonial">
                  <div className="flex justify-center w-1/3 mx-auto md:w-29">
                    <YottaLogo className="w-full h-auto" />
                  </div>

                  <p className="text-body text-center text-blueRibbon font-light mt-6 md:mt-10">
                    webuild has done an incredible job integrating themselves
                    into our team, understanding our company objectives, and
                    working with us to{' '}
                    <span className="font-bold">
                      develop the world-class user experience that delights our
                      customers
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:flex items-center gap-x-22 md:w-1/2 lg:w-full lg:px-35">
                <div className="people flex-1 grid">
                  <div className="person-info text-blueRibbon font-light text-center md:flex items-center justify-between md:text-left">
                    <Img
                      className="w-22 h-auto m-auto md:m-0"
                      fluid={adamHeadshot.childImageSharp.fluid}
                    />
                    <div className="hidden md:block h-px bg-blueRibbon flex-1" />
                    <div className="mt-4 md:ml-6">
                      <p className="mb-2">Adam Moelis</p>
                      <p>Yotta CEO/Co-founder</p>
                    </div>
                  </div>
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
              <div className="md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-10 md:mt-4">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="border-b border-solid pt-5 mt-6"
                  >
                    {service.icon}
                    <p className="py-6">{service.name}</p>
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
    contentfulCaseStudy(name: { eq: "Quadpay" }) {
      metaDescription {
        metaDescription
      }
      seoTitle
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
  }
`

export default Yotta
