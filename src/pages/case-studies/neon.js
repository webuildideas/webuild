/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useCallback, useState } from 'react'
import { graphql, Link } from 'gatsby'
import Meta from '@components/Meta'
import Img from 'gatsby-image'
import useWindowSize from '@common/hooks/useWindowSize'
import NewFooter from '@modules/common/components/NewFooter'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ReactPlayer from 'react-player'
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'

import { CaseStudyContainer, CaseStudyTextContainer } from './clickup'

// SVGS
import ArrowRight from '../../static/svgs/fancy-arrow-right.inline.svg'
import Asterisk from '../../static/svgs/asterisk.inline.svg'
import QuoteIcon from '../../static/svgs/quote-icon.inline.svg'
import NeonLogo from '../../static/svgs/case-studies/neon/neon-logo.inline.svg'
import NeonBadge from '../../static/svgs/case-studies/neon/neon-badge.inline.svg'

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

const Neon = ({
  location,
  data: {
    contentfulCaseStudy,
    socialShare,
    HeroImg,
    payScreens,
    orderSummaryImg,
    whyNeonImg,
    walletSummaryImg,
    marketResearchImg,
    wishlistOneImg,
    wishlistTwoImg,
    webstoreOneImg,
    webstoreTwoImg,
    figJamOne,
    figJamTwo,
    figJamThree,
    fasterCheckoutImg,
    orderSumTwoImg,
    guestCheckoutImg,
    blOneImg,
    blTwoImg,
    blThreeImg,
    blFourImg,
    elementsImg,
    purchaseVideo,
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
                  We Took This FinTech Gaming Startup{' '}
                  <span className="text-lilac font-crimson italic font-extralight">
                    from level 0 to the top of the leaderboard
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
                    <span className="font-crimson font-font-extralight italic text-5xl">
                      “webuild's thoroughness and level of detail in their work
                      makes them a wonderful collaborator.{' '}
                    </span>
                    Their designs are incredibly organized, which allowed our
                    weekly discussions to be efficient and focused.”
                  </p>
                </div>
              </div>
              <div className="md:flex items-center gap-x-22 md:max-w-xs m-auto">
                <div className="people flex-1 grid">
                  <div className="person-info text-blueRibbon font-light flex items-center justify-between">
                    <div className="block h-px bg-blueRibbon flex-1" />
                    <div className="ml-6">
                      <NeonLogo className="w-18 h-auto" />
                      <p className="my-4">Neon VC Stakeholder</p>
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
                    Neon is only recently out of stealth mode, but we’ve been
                    working with them since 2022.
                  </p>
                  <ArrowRight className="w-12 transform rotate-90 mx-auto mt-10 lg:ml-0" />
                </div>
                <div className="relative">
                  <div className="yotta-stats flex mt-14 xl:absolute xl:top-0 xl:left-0 xl:transform xl:-translate-x-full xl:flex-col xl:mt-0 xl:pr-20">
                    <NeonBadge className="mr-4 xl:mr-0 xl:mb-4" />
                    <div className="">
                      <div className="">
                        <p className="text-caption text-electricViolet xl:text-sm">
                          fintech Startup
                        </p>
                        <p className="text-caption xl:text-sm">seed stage</p>
                      </div>
                      <div className="mt-5">
                        <p className="text-caption xl:text-sm">founded 2022</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg mt-8 leading-loose">
                    <span className="font-bold">
                      They grew with lightning speed from an idea to a fully
                      fledged reality.
                    </span>{' '}
                    Their goal is to disrupt the gaming industry, making mobile
                    game development more accessible and creating a future which
                    is more fun for gamers overall.
                  </p>
                  <p className="text-lg mt-8 leading-loose">
                    That’s an ambitious goal, but achievable when you combine a
                    genius team from some of the best tech giants in the
                    industry — and partner with webuild for all your design
                    needs!
                  </p>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>
          {/* PHOTO GRID */}
          <section className="max-w-screen-s1536 mx-auto no-scroll-bar">
            <div
              className="px-6 py-20 md:mt-20 md:mx-6 md:px-10 lg:mx-12 xl:px-20 s1440:mx-30 s1536:mx-52 overflow-auto whitespace-nowrap no-scroll-bar"
              style={{ background: '#75FB81' }}
            >
              <div className="horz-scroll-container">
                <Img
                  className="w-full"
                  fluid={payScreens.childImageSharp.fluid}
                />
              </div>
            </div>
          </section>
          {/* BEFORE & AFTER */}
          <section className="before-after py-20">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <div className="text-base leading-relaxed lg:text-lg">
                  <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                    <Asterisk className="w-5 h-auto mr-2" /> Start Game
                  </h2>

                  <p className="text-base leading-relaxed lg:text-lg">
                    Neon’s plan to transform mobile gaming looks like an
                    umbrella of services, including a payment system (NPay) and
                    ecommerce — which became their MVP.
                  </p>
                  <p className="text-base leading-relaxed lg:text-lg mt-8">
                    The Neon umbrella features management support services for
                    game developers, including a CRM, capital & cash flow
                    management, analytics services, and more.
                  </p>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>
          {/* EXPANDING SERVICES */}
          <section className="bg-black py-15 px-6 md:py-20">
            <div className="max-w-screen-1536 exp-services-wrapper mx-auto xl:pt-20 xl:pb-10 xl:grid s1440:px-30 s1536:px-52">
              <div className="exp-services-container md:grid md:grid-cols-2 md:items-start">
                <div className="exp-services-content text-white md:pr-10 md:order-2">
                  <h1 className="text-4xl leading-tight">
                    Taking their work to the players themselves,{' '}
                    <span className="text-lavender font-crimson italic font-extralight">
                      Neon is also developing expanded services for gamers
                      through their direct-to-consumer Super App.
                    </span>
                  </h1>
                  <p className="mt-16 text-base leading-normal md:mt-8 md:text-lg md:mt-28">
                    The app integrates data and gameplay experience across
                    multiple mobile games for players. They can play in P2P
                    challenges, get custom rewards, view their aggregated game
                    balances, stats, and achievements, discover new games, and
                    even set parental controls for little gamers.
                  </p>
                  <p className="mt-6 text-base leading-normal md:text-lg">
                    Like many other hypergrowth, early-stage startups we have
                    worked with, Neon was sharp, ambitious, hardworking — and
                    drowning in great ideas. Our job as their agency partner was
                    to make those dreams real, without sacrificing quality or
                    integrity for speed.
                  </p>
                </div>
                <div className="exp-services-img-one mt-10 md:order-1 md:pr-30 md:pl-10 md:mt-0 xl:pr-20">
                  <Img fluid={orderSummaryImg.childImageSharp.fluid} />
                  <div className="caption-one py-4 px-6 border border-solid border-gray-700 rounded-8 mt-4 md:mt-2">
                    <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:mb-2 -translate-x-2" />
                    <p className="font-courier text-gray-600 text-xs flex-1 leading-normal mt-2">
                      Order summary screens become more simplified when users
                      check out with NPay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp-services-container md:grid md:grid-cols-2 md:items-start single">
                <div className="relative exp-services-img-two mt-20 md:order-4 md:mt-0 md:pr-16 lg:w-3/5 lg:ml-auto xl:order-1 xl:pr-0">
                  <Img fluid={whyNeonImg.childImageSharp.fluid} />
                  <div className="caption-one py-4 px-6 border border-solid border-gray-700 rounded-8 mt-4 md:absolute md:top-0 md:w-30 md:right-full md:text-right md:mt-0 md:mr-2">
                    <ArrowRight className="transform -rotate-90 w-11 h-auto mr-4 md:mb-2 -translate-x-2 md:rotate-0 md:mr-0 md:ml-auto" />
                    <p className="font-courier text-gray-600 text-xs flex-1 leading-normal mt-2">
                      Bright marketing to catch interest.
                    </p>
                  </div>
                </div>
                <div className="exp-services-img-three mt-20 md:order-3 md:pr-30 md:pl-10 xl:pr-0 xl:pl-0 xl:w-1/3 xl:mr-10 xl:ml-auto">
                  <div className="caption-one py-4 px-6 border border-solid border-gray-700 rounded-8 mb-4 md:mb-2">
                    <p className="font-courier text-gray-600 text-xs flex-1 leading-normal mt-2">
                      Clear UI helps users quickly fund their wallets.
                    </p>
                    <ArrowRight className="transform rotate-90 w-11 h-auto mr-4 md:mt-2 -translate-x-2" />
                  </div>
                  <Img fluid={walletSummaryImg.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </section>
          {/* LEVELING UP */}
          <section className="py-20">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <h2 className="text-2xl mb-6 xl:text-2.5xl">Leveling Up</h2>
                <p className="text-base leading-loose xl:text-lg">
                  We started with the MVP launch of Neon, NPay. It needed to
                  include:{' '}
                  <ul className="mt-8 list-disc pl-6">
                    <li className="mt-8">
                      Storefront of game items and bundles for a mobile game,
                      which could easily be customized to the tone and SKUs of
                      any game type
                    </li>
                    <li>
                      Way to pay which felt safe, fast, and helped educate users
                      sign-up for Neon easily
                    </li>
                    <li>
                      Clear reason to use Neon, instead of a competitor payment
                      system We began that process with a research-first
                      approach and collaborative workshops with the client to
                      determine their needs.
                    </li>
                  </ul>
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  We began that process with a research-first approach and
                  collaborative workshops with the client to determine their
                  needs.
                </p>
                <h3 className="text-2xl mb-6 xl:text-2.5xl mt-10">
                  UX/UI Market Research
                </h3>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  In order to execute on the three goals above, we explored best
                  practices across the three markets which NPay would span:
                  fintech, B2B SaaS, and (the most fun) mobile gaming. We needed
                  to identify how mobile gamers interacted with their devices,
                  when they were incentivized to purchase, and data points which
                  they cared about when evaluating whether to complete a
                  purchase.
                </p>
                <div className="mt-20 max-w-xl mx-auto">
                  <Img fluid={marketResearchImg.childImageSharp.fluid} />
                  <div className="flex items-start mt-10 md:mx-auto md:w-2/3">
                    <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                    <p className="font-courier text-xs flex-1 leading-normal">
                      Evaluating fintech, B2B SaaS markets, and mobile gaming
                      helped us identify how mobile gamers were interacting with
                      their devices and which data points they cared about when
                      deciding on whether or not to purchase.
                    </p>
                  </div>
                </div>
                <p className="text-base leading-loose xl:text-lg mt-20">
                  We evaluated top mobile games on the marketplace, ran through
                  their gameplay (not a bad way to spend a Monday morning), and
                  explored payment prompts, checkout flows, and pay confirmation
                  experiences. We learned a lot, and it inspired a game
                  addiction in our researchers — the sounds of Candy Crush still
                  echo in our Zoom calls.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  However, payment and shopping experiences in mobile
                  gaming…aren’t great. Poor UX, glitchy dev, and inaccessible UI
                  meant we needed to look elsewhere for inspiration on effective
                  mobile payment solutions.
                </p>
              </CaseStudyTextContainer>

              {/* <div className="mt-14 lg:pr-2 xl:pr-9">
                  <Img fluid={blOneImg.childImageSharp.fluid} />
                  <div className="flex items-start mt-4 mx-auto whitespace-normal">
                    <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                    <p className="font-courier text-xs flex-1 leading-normal">
                      Our refreshed summary page tackled the recurring problem
                      of displaying data and information in an easily digestible
                      and on-brand manner.
                    </p>
                  </div>
                </div>
                <Img
                  className="lg:px-2 xl:px-9"
                  fluid={blThreeImg.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                />
                <Img
                  className="mt-32 lg:pl-2 xl:pl-9"
                  fluid={blFourImg.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain', objectPosition: 'right' }}
                /> */}
            </CaseStudyContainer>
          </section>

          <section className="max-w-screen-s1536 mx-auto s1440:px-30 s1536:px-52 no-scroll-bar">
            <div className="whitespace-nowrap overflow-auto lg:whitespace-normal p-6 md:flex lg:px-12">
              <div className="store-front-scrollz pb-12 ">
                <div className="grid grid-cols-3 gap-x-4 md:flex md:gap-x-0">
                  {/* <Img
                    className="md:flex-1 md:mr-4"
                    fluid={wishlistOneImg.childImageSharp.fluid}
                  /> */}
                  <div
                    className="md:flex-1 md:mr-4 rounded-7 overflow-hidden border-2 border-solid"
                    style={{ borderColor: '#F8C7B8' }}
                  >
                    <ReactPlayer
                      className="react-player"
                      controls={false}
                      height="100%"
                      loop={true}
                      muted={true}
                      playing={true}
                      playsinline={true}
                      type="mp4"
                      url={purchaseVideo.publicURL}
                      width="100%"
                    />
                  </div>
                  <Img
                    className="md:flex-1 md:mr-4"
                    fluid={wishlistTwoImg.childImageSharp.fluid}
                  />
                  <Img
                    className="md:flex-1 md:mr-4"
                    fluid={webstoreOneImg.childImageSharp.fluid}
                  />
                  <div className="hidden md:block relative md:flex-1 md:ml-6 lg:ml-20 xl:ml-26">
                    <Img
                      className=""
                      fluid={webstoreTwoImg.childImageSharp.fluid}
                    />
                    <div className="flex items-start mt-4 whitespace-normal absolute left-0 -bottom-4 transform translate-y-full ">
                      <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                      <p className="font-courier text-xs flex-1 leading-normal">
                        We created intuitive PDP screens, where a user could tap
                        in and scroll through a carousel to explore bundle
                        contents.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-4 whitespace-normal w-68 md:w-2/3 md:max-w-xl">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    The tone of the storefront needed to fit - regardless if the
                    game felt more ‘Animal Crossing’ or ‘League of Legends’. It
                    also needed a consistent format which a user could navigate
                    regardless of what they were playing. We found a balance
                    through customizable color palettes, fonts, shapes, and
                    light mode.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-60 md:w-auto relative px-6 md:hidden">
              <Img fluid={webstoreTwoImg.childImageSharp.fluid} />
              <div className="flex items-start mt-4 whitespace-normal ">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  We created intuitive PDP screens, where a user could tap in
                  and scroll through a carousel to explore bundle contents.
                </p>
              </div>
            </div>
          </section>

          <section>
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Our team’s industry knowledge in fintech came in handy. We
                  were able to access past repositories of payment research, as
                  well as our own designs for other checkout experiences. We
                  considered what could be applicable to mobile gamers (high
                  security and speedy experiences) and which might not (too many
                  bells and whistles crypto purchasing, limited payment plan
                  ability, vertical-only orientations, etc).
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Finally, we brought payments and gaming together with our
                  experience with other startups dealing with
                  business-to-business software, such as payment administration.
                  For questions on how to manage payment disputes, navigate
                  digital wallets, and technically plug into a games existing
                  design, we learned a lot from app designs before us.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  All of this design was rolled into best practices
                  recommendation and brought to the Neon team for their
                  evaluation and consideration.
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          <section className="figjam">
            <div className="px-6 lg:px-12 max-w-screen-s1536 mx-auto">
              <div className="bg-gray-200 p-6 mt-20 rounded-10 xl:mt-32 xl:grid xl:grid-cols-3 xl:gap-x-5 xl:px-20">
                <div className="xl:col-span-2">
                  <Img fluid={figJamOne.childImageSharp.fluid} />
                </div>
                <div className="mt-6 grid items-start gap-y-6 md:grid-cols-2 md:gap-x-5 lg:w-4/5 lg:mx-auto xl:col-span-1 xl:grid-cols-1 xl:grid-rows-2 xl:mt-0 xl:w-full">
                  <Img fluid={figJamTwo.childImageSharp.fluid} />
                  <Img
                    fluid={figJamThree.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex items-end mt-4 max-w-xs mx-auto xl:mb-32">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  Our FigJam that helped us align with Neon on style & tone for
                  NPay.
                </p>
              </div>
            </div>
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <h3 className="text-2xl mb-6 xl:text-2.5xl mt-10">Workshops</h3>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  We hate useless meetings — though, who doesn't? And while we
                  were able to accomplish much of our work asynchronously, we
                  arrived at the point where we needed to collab in real time.
                  This critical stage is exciting! We take the bucket of
                  research and turn it into viable MVP design.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Our producer ran a series of workshops to review research,
                  align on style and tone, and critically assess the scope and
                  needs of each portion of NPay to influence the shape of the
                  design.
                </p>
                <h3 className="text-2xl mb-6 xl:text-2.5xl mt-16">
                  Multiplayer Mode
                </h3>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Now that we had a strategy in place, it was time to get to
                  designing. At webuild, we never design in a silo. Our
                  designers met continuously in huddles, video walkthroughs, and
                  live weekly meetings with the Neon leadership and the
                  development team to create a design which was functional,
                  buildable, and matched their goals. Over 4 months, we created
                  a pretty great MVP. We’re designers, so we’ll let the screens
                  speak for themselves.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8 italic">
                  *Note: These screens were designed as prototypes and are not
                  yet real representations of game partners.
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          {/* COMPARISONS */}
          <section className="max-w-screen-s1536 mx-auto mt-20 no-scroll-bar">
            <div className="px-6 pb-12 max-w-lg mx-auto overflow-auto whitespace-nowrap">
              <div className="horz-scroll-container horz-scroll-container--two">
                <Img
                  className="w-full"
                  fluid={fasterCheckoutImg.childImageSharp.fluid}
                />
              </div>
              <div className="flex items-start mt-4 mx-auto whitespace-normal md:w-4/5 md:mx-0">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  You’ve made a great purchase! It might help you win that next
                  level! Celebrate that win with a happy order confirmation
                  which is clear and joyous.
                </p>
              </div>
            </div>
            <div className="md:mt-12 xl:grid xl:grid-cols-2 xl:gap-x-53 xl:px-12 s1440:max-w-6xl s1440:mx-auto no-scroll-bar">
              <div className="px-6 pb-12 max-w-lg mx-auto overflow-auto whitespace-nowrap xl:max-w-none xl:px-0">
                <div className="horz-scroll-container horz-scroll-container--two">
                  <Img
                    className="w-full"
                    fluid={orderSumTwoImg.childImageSharp.fluid}
                  />
                </div>
                <div className="flex items-start mt-4 mx-auto whitespace-normal md:w-4/5 md:mx-0">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    You’ve made a great purchase! It might help you win that
                    next level! Celebrate that win with a happy order
                    confirmation which is clear and joyous.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-12 max-w-lg mx-auto md:mt-4 overflow-auto whitespace-nowrap xl:max-w-none xl:px-0 xl:mt-0">
                <div className="horz-scroll-container horz-scroll-container--two">
                  <Img
                    className="w-full"
                    fluid={guestCheckoutImg.childImageSharp.fluid}
                  />
                </div>
                <div className="flex items-start mt-4 mx-auto whitespace-normal md:w-4/5 md:mx-0">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    Who doesn’t love a “try before you buy?” By allowing users
                    to complete a Neon purchase, learn about the platform along
                    the way, and experience for themselves how easy it is, we
                    see higher success rates. That's where sign-ups are the way
                    to go. They are a simple way to communicate, "You're done!
                    Now just save your details."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DOESN'T STOP */}
          <section className="py-20">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <h2 className="text-2xl mb-6 xl:text-2.5xl">
                  And it doesn't stop in-app
                </h2>
                <p className="text-base leading-loose xl:text-lg">
                  We designed partner emails and marketing assets like the ones
                  below to remind the user that their next easy purchase (and
                  victory) is just a click away.
                </p>
                <h3 className="text-2xl mb-6 xl:text-2.5xl mt-10 md:mt-16">
                  The Next Boss Level
                </h3>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  We’ve been Neon’s agency partner for over five months now, and
                  seen them grow from a team of 4 to hiring their first product
                  manager, in-house designer, and locking in customer #1 for
                  NPay. We’re in awe of what they have accomplished — and are
                  sure that you are as well.
                </p>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  So what’s next for Neon? Well, the Super App is in design, the
                  next iteration of the MVP is in development, the design system
                  is getting buttoned up, and the future of Neon (and mobile
                  gaming) is looking bright.
                </p>
              </CaseStudyTextContainer>
              <div className="px-6 pb-12 grid grid-cols-4 gap-x-4 boss-level-container items-start whitespace-nowrap overflow-auto mt-20 lg:whitespace-normal lg:gap-x-0 no-scroll-bar">
                <div className="mt-14 lg:pr-2 xl:pr-9">
                  <Img fluid={blOneImg.childImageSharp.fluid} />
                  <div className="flex items-start mt-4 mx-auto whitespace-normal">
                    <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2 text-blueRibbon" />
                    <p className="font-courier text-xs flex-1 leading-normal">
                      Our refreshed summary page tackled the recurring problem
                      of displaying data and information in an easily digestible
                      and on-brand manner.
                    </p>
                  </div>
                </div>
                <Img
                  className="lg:px-2 xl:px-9"
                  fluid={blTwoImg.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                />
                <Img
                  className="lg:px-2 xl:px-9"
                  fluid={blThreeImg.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                />
                <Img
                  className="mt-32 lg:pl-2 xl:pl-9"
                  fluid={blFourImg.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain', objectPosition: 'right' }}
                />
              </div>
            </CaseStudyContainer>
            <div className="md:px-6 lg:px-12 max-w-screen-s1536 mx-auto s1440:px-30 s1536:px-52">
              <div className="bg-gray-300 p-3 mt-12 md:px-6 lg:px-33 xl:px-4 s1536:py-17 s1536:px-10">
                <Img fluid={elementsImg.childImageSharp.fluid} />
              </div>
            </div>
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <h3 className="text-2xl mb-6 xl:text-2.5xl mt-10 md:mt-16">
                  Game Starting in 3... 2... 1...
                </h3>
                <p className="text-base leading-loose xl:text-lg mt-8">
                  Inspired to play around in the great world of product design
                  with webuild? Get in touch.
                </p>
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
                    Led workshops on product and brand strategy to align on spec
                    and scope
                  </p>
                </div>
                <div className=" result-card xl:col-span-3">
                  <p className="text-5xl mr-6 mt-0.5">02</p>
                  <p className="text-xl leading-snug font-light">
                    Built a robust design system from the ground up, helping
                    developers launch quickly
                  </p>
                </div>
                <div className=" result-card xl:col-span-2">
                  <p className="text-5xl mr-6 mt-0.5">03</p>
                  <p className="text-xl leading-snug font-light">
                    Built a comprehensive MVP in 3 months
                  </p>
                </div>
                <div className=" result-card xl:col-span-2">
                  <p className="text-5xl mr-6 mt-0.5">04</p>
                  <p className="text-xl leading-snug font-light">
                    Helped land first key customers with tailored designs
                  </p>
                </div>
                <div className=" result-card md:col-span-full xl:col-span-2">
                  <p className="text-5xl mr-6 mt-0.5">05</p>
                  <p className="text-xl leading-snug font-light">
                    Contributed to strengthening Neon’s team by running user
                    tests and onboarding internal design members
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

export const CLICKUP_QUERY = graphql`
  query neonQuery {
    contentfulCaseStudy(name: { eq: "Neon" }) {
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
    HeroImg: file(relativePath: { eq: "case-studies/neon/neon-hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    payScreens: file(
      relativePath: { eq: "case-studies/neon/neon-pay-screens.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    orderSummaryImg: file(
      relativePath: { eq: "case-studies/neon/order-summary.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    marketResearchImg: file(
      relativePath: { eq: "case-studies/neon/market-research-graphic.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    wishlistOneImg: file(
      relativePath: { eq: "case-studies/neon/wishlist-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    wishlistTwoImg: file(
      relativePath: { eq: "case-studies/neon/wishlist-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    webstoreOneImg: file(
      relativePath: { eq: "case-studies/neon/webstore-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    webstoreTwoImg: file(
      relativePath: { eq: "case-studies/neon/webstore-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    whyNeonImg: file(relativePath: { eq: "case-studies/neon/why-neon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    walletSummaryImg: file(
      relativePath: { eq: "case-studies/neon/wallet-summary.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    figJamOne: file(relativePath: { eq: "case-studies/neon/fig-jam-one.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    figJamTwo: file(relativePath: { eq: "case-studies/neon/fig-jam-two.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    figJamThree: file(
      relativePath: { eq: "case-studies/neon/fig-jam-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    fasterCheckoutImg: file(
      relativePath: { eq: "case-studies/neon/faster-checkout.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    orderSumTwoImg: file(
      relativePath: { eq: "case-studies/neon/order-summary-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    guestCheckoutImg: file(
      relativePath: { eq: "case-studies/neon/guest-checkout.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    blOneImg: file(relativePath: { eq: "case-studies/neon/bl-one.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    blTwoImg: file(relativePath: { eq: "case-studies/neon/bl-two.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    blThreeImg: file(relativePath: { eq: "case-studies/neon/bl-three.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    blFourImg: file(relativePath: { eq: "case-studies/neon/bl-four.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    elementsImg: file(relativePath: { eq: "case-studies/neon/elements.png" }) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    purchaseVideo: file(relativePath: { eq: "neon/neon-purchase.mp4" }) {
      publicURL
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

export default Neon
