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
// SVGS
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'
import ArrowRight from '../../static/svgs/fancy-arrow-right.inline.svg'
import Asterisk from '../../static/svgs/asterisk.inline.svg'
import QuoteIcon from '../../static/svgs/quote-icon.inline.svg'
import ClickupLogo from '../../static/svgs/case-studies/clickup/clickup-logo.inline.svg'
import ClickupBadge from '../../static/svgs/case-studies/clickup/clickup-badge.inline.svg'

import '../../common/styles/pages/clickup.css'

export const CaseStudyContainer = ({ children, className = '' }) => {
  return (
    <div
      className={`px-6 lg:px-12 xl:px-10 s1440:px-30 s1536:px-52 max-w-screen-s1536 mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export const CaseStudyTextContainer = ({ children, className = '' }) => {
  return (
    <div className={`md:mx-10 lg:mx-28 xl:mx-68 ${className}`}>{children}</div>
  )
}

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

const ClickUp = ({
  location,
  data: {
    contentfulCaseStudy,
    socialShare,
    HeroImg,
    sepHeadshot,
    designsDesktop,
    designsMobile,
    productGif,
    marketingGif,
    designGif,
    brandingGif,
    animationGif,
    acqImg,
    emailCardOne,
    emailCardTwo,
    emailCardThree,
    emailDiagram,
    screenOne,
    screenTwo,
    screenThree,
    screenFour,
    screenFive,
    otherShotOne,
    otherShotTwo,
    otherShotThree,
    otherShotFour,
    otherShotFive,
    acqVideo
  }
}) => {
  const {
    seoTitle,
    metaDescription: { metaDescription }
  } = contentfulCaseStudy

  const designImgSources = [
    designsMobile.childImageSharp.fluid,
    {
      ...designsDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`
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
                  A{' '}
                  <span className="text-lilac font-crimson italic font-extralight">
                    data based approach to design{' '}
                  </span>
                  Brought Growth Hacking To The Next Level
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
                    “We found webuild in the early days of spinning up our
                    product growth org. They think outside the box, are
                    adaptable & responsive and, above-all, are great people to
                    work with.{' '}
                    <span className="font-crimson font-font-extralight italic text-5xl">
                      Not only is their design top-notch, they’ve also enabled
                      our engineering teams to move quickly.”
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:flex items-center gap-x-22 md:max-w-xs m-auto">
                <div className="people flex-1 grid">
                  <div className="person-info text-blueRibbon font-light flex items-center justify-between">
                    <Img
                      className="w-22 h-auto m-auto md:m-0"
                      fluid={sepHeadshot.childImageSharp.fluid}
                    />
                    <div className="block h-px bg-blueRibbon flex-1" />
                    <div className="ml-6">
                      <ClickupLogo className="w-18 h-auto" />
                      <p className="my-4">Sep Norouzi</p>
                      <p>Product Lead</p>
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
                    You’ve likely seen their billboards on your morning commute.
                    The “one app to replace them all,”{' '}
                    <a
                      className="text-electricViolet"
                      href="https://clickup.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      ClickUp
                    </a>{' '}
                    is a fast-growing company in the very competitive
                    productivity landscape, alongside tools like Asana, Trello,
                    Monday, or ToDoist. They recently raised a $400M Series C
                    because they aren't just another project management tool.
                  </p>
                  <ArrowRight className="w-12 transform rotate-90 mx-auto mt-10 lg:ml-0" />
                </div>
                <div className="relative">
                  <div className="yotta-stats flex mt-14 xl:absolute xl:top-0 xl:left-0 xl:transform xl:-translate-x-full xl:flex-col xl:mt-0 xl:pr-20">
                    <ClickupBadge className="mr-4 xl:mr-0 xl:mb-4" />
                    <div className="">
                      <div className="">
                        <p className="text-caption text-electricViolet xl:text-sm">
                          Productivity SaaS
                        </p>
                        <p className="text-caption xl:text-sm">series C</p>
                      </div>
                      <div className="mt-5">
                        <p className="text-caption xl:text-sm">
                          $537.5M raised
                        </p>
                        <p className="text-caption xl:text-sm">founded 2017</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg mt-8 leading-loose">
                    <span className="font-bold">
                      “You can plan, track, and collaborate on any project
                    </span>{' '}
                    build the perfect workflow for you and your team, create
                    marketing campaigns, manage development sprints, and more
                    all in one platform!”
                    <a
                      className="text-electricViolet"
                      href="https://clickup.com/blog/12-benefits-that-make-clickup-unique/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      –ClickUp
                    </a>
                  </p>
                  <p className="text-lg mt-8 leading-loose">
                    Whether you’re a startup, agency, freelance creative, or
                    even a parent trying to manage your kid’s schedules,
                    ClickUp’s many features like views, tasks, assignments,
                    docs, chat, and integrations are all at your fingertips.
                    Users enjoy an array of customizations including
                    personalized dashboards, fields for displaying relevant
                    data, sorting, and filter options.
                  </p>
                  <blockquote className="mt-9">
                    <QuoteIcon className="w-17 h-auto text-black" />
                    <cite className="text-primary font-medium text-4xl leading-normal">
                      <span className="text-blueRibbon font-crimson font-font-extralight italic text-5xl">
                        “You can plan, track, and collaborate on any project,
                      </span>{' '}
                      build the perfect workflow for you and your team, create
                      marketing campaigns, manage development sprints, and more
                      all in one platform!”
                    </cite>
                  </blockquote>
                  <p className="text-lg mt-8 leading-loose">
                    ClickUp cuts through the competition with powerful features
                    and integrations for virtually every situation and every
                    team. They’re known for customer-obsessed, product-led
                    growth. We’re known for killer designs grounded in both. It
                    was a great match.
                  </p>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>
          {/* PHOTO GRID */}
          <section className="max-w-screen-s1536 mx-auto">
            <div className="bg-newBlack px-6 py-10 md:mt-20 md:mx-6 md:px-10 lg:mx-12 xl:px-20 xl:py-20 s1440:mx-30 s1536:mx-52">
              <Img fluid={designImgSources} />
            </div>
          </section>
          {/* STATS */}
          <section className="yotta-stats mt-4 xl:mt-6">
            <CaseStudyContainer className="w-full">
              <div className="yotta-stats__container border border-solid border-blueRibbon p-14 md:flex md:justify-between md:p-10 xl:py-16 xl:px-20">
                {stats.map((stat, i) => (
                  <div key={i} className="stat mb-8 md:mb-0">
                    <span className="flex items-start justify-between">
                      <h3 className="font-normal text-blueRibbon text-7xl md:text-5xl xl:text-8xl">
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
            </CaseStudyContainer>
          </section>
          {/* BEFORE & AFTER */}
          <section className="before-after py-20">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <div className="text-base leading-relaxed lg:text-lg">
                  <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                    <Asterisk className="w-5 h-auto mr-2" /> Problem
                  </h2>

                  <p className="text-base leading-relaxed lg:text-lg">
                    When ClickUp came to us, they needed a design partner
                    dedicated to Product Growth Hacking. Just like us, ClickUp
                    never leaves an opportunity on the table. They knew there
                    was potential to increase both their user base and their
                    user growth through design and education. They trusted
                    webuild to lead them in finding out. We were tasked with
                    gaining ClickUp:
                  </p>
                  <ul className="list-disc pl-7 mt-6">
                    <li>more account upgrades</li>
                    <li>
                      improved activation and usage of ClickUp beyond the
                      onboarding stage
                    </li>
                    <li>greater user retention</li>
                    <li>
                      increased organic growth through user-to-user invitations
                      and referrals
                    </li>
                  </ul>
                </div>
                <div className="mt-15">
                  <h2 className="text-electricViolet text-3xl flex items-start mb-6 xl:text-4xl">
                    <Asterisk className="w-5 h-auto mr-2" /> Solution
                  </h2>
                  <p className="text-base leading-relaxed lg:text-lg">
                    We assessed the product as a whole by running numerous
                    growth experiments that ultimately led us to create an
                    experimentation engine within ClickUp. This allowed us to
                    rapidly test, learn, and iterate new designs to see what
                    drove the most meaningful results. We also analyzed their
                    existing metrics to have visibility on quantitative data to
                    benchmark our success. With those insights, we developed a
                    three-pronged approach, focusing on different stages of the
                    user journey: acquisition, retention, and expansion.
                  </p>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>
          {/* ACQUISITION */}
          <section className="py-15 bg-gray-200">
            <CaseStudyContainer>
              <div className="rounded-10 overflow-hidden">
                {/* <Img fluid={acqImg.childImageSharp.fluid} /> */}
                <ReactPlayer
                  className="react-player"
                  controls={false}
                  height="auto"
                  loop={true}
                  muted={true}
                  playing={true}
                  playsinline={true}
                  type="mp4"
                  url={acqVideo.publicURL}
                  width="100%"
                />
              </div>
              <div className="flex items-end mt-6 leading-normal md:max-w-md">
                <ArrowRight className="transform -rotate-90 w-12 h-auto" />
                <p className="font-courier text-xs flex-1">
                  We designed a growth checklist that simplified the educational
                  curve for new users by educating them on key actions most
                  relevant to their ClickUp experience.
                </p>
              </div>
              <CaseStudyTextContainer className="mt-24">
                <h2 className="text-2xl leading-snug w-2/3">
                  Acquisition through simplification
                </h2>
                <div className="text-base leading-relaxed lg:text-lg">
                  <p className="mt-8">
                    Our research showed a major growth opportunity - potential
                    new customers needed simplicity, and weren’t getting it.
                  </p>
                  <p className="mt-8">
                    It was clear that users were having trouble quickly
                    identifying what an initial exposure point into Clickup,
                    whether a doc share, task tag, or invite email was about and
                    what they were being asked to accomplish. Not a great first
                    impression from a productivity app.
                  </p>
                  <p className="mt-8">
                    We turned things around, utilizing our UX skills to create
                    entry points that made sense for all possible entrances.
                  </p>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          <section className="py-20">
            <CaseStudyContainer>
              <CaseStudyTextContainer>
                <p className="text-base leading-relaxed lg:text-lg">
                  For emails, we built a simplified email experience, using our
                  UI chops to make that clean and accessible, and employing our
                  copywriters to make it pop. We created all potential
                  invitation flows, including a plain invitation email,
                  task-related emails that drove users (through @ mentions) back
                  to the app to take action or comment directly via email, and
                  follow-up emails that tailored invitations and reminders to
                  sign up for ClickUp.
                </p>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  Those designs were great, but they weren’t going to be the end
                  of the users’ onboarding journey, or ours. We created flows
                  and designs for when the invite needed to be nudged, and when
                  it was successful (AKA a user joined ClickUp), supporting the
                  initial inviter on a timed schedule to add them to a task, get
                  them involved, and be the force behind their onboarding. That
                  meant a more human, personal, and effective acquisition - just
                  through a few emails.
                </p>
              </CaseStudyTextContainer>
              <div className="flex mt-10 max-w-xs md:ml-auto md:pl-10 xl:pl-0 xl:pr-10 xl:max-w-sm">
                <ArrowRight className="transform rotate-90 w-12 h-auto -ml-2" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  A few designs from our comprehensive email overhaul that
                  distilled important notifications and information directly in
                  the user’s inbox.
                </p>
              </div>
              <div className="mt-10 md:flex md:flex-wrap md:justify-center md:gap-x-8 xl:flex-nowrap xl:mt-0">
                <div className="mt-4 md:w-5/12 xl:w-full xl:mt-8">
                  <Img fluid={emailCardOne.childImageSharp.fluid} />
                </div>
                <div className="mt-4 md:w-5/12 xl:w-full xl:mt-40">
                  <Img fluid={emailCardTwo.childImageSharp.fluid} />
                </div>
                <div className="mt-4 md:w-5/12 xl:w-full xl:mt-16">
                  <Img fluid={emailCardThree.childImageSharp.fluid} />
                </div>
              </div>
              <div className="rounded-10 overflow-hidden mt-10 lg:mt-15">
                <Img fluid={emailDiagram.childImageSharp.fluid} />
              </div>
              <div className="flex mt-10 max-w-xs md:mx-auto md:pl-10 xl:pl-0 xl:pr-10 xl:max-w-sm">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  To account for all possible triggers for sending an email, we
                  diagrammed ClickUp’s notification experience.
                </p>
              </div>
              <CaseStudyTextContainer className="mt-24">
                <h2 className="text-2xl leading-snug">
                  Retention: Keeping users coming back
                </h2>
                <div className="text-base leading-relaxed lg:text-lg">
                  <p className="mt-8">
                    Keeping users engaged with your product is always a
                    challenge, no matter your landscape. The very differentiator
                    that makes ClickUp the unicorn it is (a project management
                    app that does it all) unfortunately also makes the product
                    susceptible to user drop-off. The sheer volume of features
                    was overwhelming users. Our next order of business was
                    ensuring users onboarded effectively and stuck around. We
                    solved this by approaching things from a few directions:
                  </p>
                  <ol className="list-decimal pl-7 mt-6">
                    <li>
                      <span className="font-bold">
                        Simplified the onboarding experience,
                      </span>{' '}
                      making it frictionless and seamless. We tested out
                      different patterns for how best to onboard users into the
                      app and applied our findings to new flows. We learned that
                      users were much more likely to finish signing up if they
                      had an indicator for how long the process would take, so
                      we added a subtle progress bar that helped the user track
                      just that. We added “Space Creation” to onboarding so that
                      users would have a place to land in after signup. The
                      creation process asks users to choose from a set of
                      templates and claim what they’re using the space for,
                      which gives ClickUp valuable information into their user
                      base. Minor details, big impact.
                    </li>
                    <li>
                      <span className="font-bold">
                        Strategically added clear CTAs.
                      </span>{' '}
                      A “Give Feedback” button beckons users to get in touch
                      with ClickUp if frustrated or stuck. We also added links
                      to download the desktop app, for a better experience
                      earlier in their journey.
                    </li>
                    <li>
                      <span className="font-bold">
                        Came up with ways to educate users,
                      </span>{' '}
                      even after onboarding. This includes a new user experience
                      exploration, with a guided step-by-step tour showing users
                      what to do next. In addition, growth checklists give users
                      tangible tasks to complete so they feel empowered to
                      continue using the product.
                    </li>
                    <li>
                      <span className="font-bold">
                        Iterated on all of the above after user feedback and
                        testing,
                      </span>{' '}
                      to create a constantly better experience.
                    </li>
                  </ol>
                </div>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          <section>
            <CaseStudyContainer className="flex flex-wrap justify-center lg:flex-nowrap">
              <div className="w-1/2 pr-4 mt-37 md:w-1/3 md:pl-6 md:pr-6 md:mt-48">
                <Img fluid={screenOne.childImageSharp.fluid} />
              </div>
              <div className="w-1/2 pl-4 md:w-1/3 md:pl-6 md:pr-6 md:mt-24">
                <Img fluid={screenTwo.childImageSharp.fluid} />
                <div className="flex mt-4 items-start">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    Collecting information on tools that would allow ClickUp to
                    better understand their users.
                  </p>
                </div>
              </div>
              <div className="w-1/2 pr-4 mt-16 md:w-1/3 md:pl-6 md:pr-6 md:mt-0">
                <Img fluid={screenThree.childImageSharp.fluid} />
                <div className="flex mt-4 items-start">
                  <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                  <p className="font-courier text-xs flex-1 leading-normal">
                    By obtaining this information, ClickUp could create a
                    tailored onboarding state for their dashboard.
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
                <h2 className="text-2xl leading-snug">
                  Expansion is the name of the game
                </h2>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  To ensure our client was benefitting from the value they were
                  giving their users, we also spent time focusing on payment. We
                  designed higher-conversion upgrade CTAs, a streamlined
                  checkout experience to encourage more users all the way to the
                  finish line of sales, and overhauled ClickUp’s paywalls and
                  pricing designs.
                </p>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  ClickUp’s many paywalls and inconsistent designs were
                  transformed into 3 main paywall types with a streamlined
                  design across the set, so users would always recognize a
                  paywall when it hit them. After doing diligent research into
                  competitors and auditing current designs we identified a core
                  pain point. Pricing page experiences were disorganized,
                  difficult for users to quickly read and scan - and the
                  features on different plans were unclear. Users simply
                  couldn’t see what great opportunities lie in front of them. We
                  improved pricing tables, page designs, CRO, social proof, and
                  more by focusing on alignment, organization, and accessibility
                  for the user.
                </p>
              </CaseStudyTextContainer>
            </CaseStudyContainer>
          </section>

          {/* Other screen shots */}
          <section className="other-shots max-w-screen-s1536 mx-auto">
            <div className="bg-gray-300 px-6 py-10 md:mt-20 md:px-6 lg:mx-12 lg:px-12 lg:pb-20 xl:px-8 xl:pt-10 s1440:mx-30 s1536:mx-52 s1536:px-12">
              <div className="bg-gray-400 rounded-8 p-6 grid gap-6 md:grid-cols-3 xl:gap-12 xl:p-10">
                <div className="rounded-10 overflow-hidden border border-solid border-gray-500">
                  <Img fluid={otherShotOne.childImageSharp.fluid} />
                </div>
                <div className="rounded-10 overflow-hidden border border-solid border-gray-500">
                  <Img fluid={otherShotThree.childImageSharp.fluid} />
                </div>
                <div className="rounded-10 overflow-hidden border border-solid border-gray-500">
                  <Img fluid={otherShotTwo.childImageSharp.fluid} />
                </div>
              </div>
              <div className="flex mt-4 items-start md:w-1/2 md:px-10 xl:max-w-sm">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  Before we redesigned them, ClickUp’s paywalls were
                  inconsistent and disorganized.
                </p>
              </div>
              <div className="grid place-items-center my-8">
                <ArrowRight className="transform rotate-90 w-20 h-auto" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:px-18 s1536:px-6">
                <div className="rounded-10 overflow-hidden border border-solid border-electricIndigo">
                  <Img
                    className="h-full"
                    fluid={otherShotFour.childImageSharp.fluid}
                  />
                </div>

                <div className="rounded-10 overflow-hidden border border-solid border-electricIndigo xl:ml-10">
                  <Img
                    className="w-full"
                    fluid={otherShotFive.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="flex mt-4 items-start md:w-1/2 md:pr-8 xl:px-18 xl:max-w-sm xl:pr-0 s1536:px-6">
                <ArrowRight className="transform -rotate-90 w-12 h-auto -ml-2" />
                <p className="font-courier text-xs flex-1 leading-normal">
                  Transforming the paywall experience. After conducting an audit
                  on all paywalls across the product, we identified the most
                  active paywalls and overhauled the UX/UI to improve
                  conversions.
                </p>
              </div>
            </div>
            <CaseStudyContainer>
              <CaseStudyTextContainer className="mt-20">
                <h2 className="text-2xl leading-snug">And that’s not all!</h2>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  While our priority was growth marketing, we also improved the
                  existing app by updating and simplifying empty state
                  notifications to benefit user experience. Pulling from
                  ClickUp’s colorful palette, we also spent time adding verified
                  profile badge designs to their brand package. For a client as
                  big and swift moving as this one, the beauty - and the real
                  ROI for Growth Hacking - lay in details like these.
                </p>
                <h3 className="text-2xl leading-snug mt-8">
                  Patience is a virtue
                </h3>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  Work is currently being pushed into production, so only time
                  will tell how our designs perform, but early metrics from A/B
                  testing and user data indicate great success. We can’t wait to
                  continue helping Clickup. Given our holistic and effective
                  approach, maybe we can even call ourselves the one agency that
                  replaces them all?
                </p>
                <p className="text-base leading-relaxed lg:text-lg mt-8">
                  Want to see how design, user testing, and research can lead to
                  greater growth for you too?{' '}
                  <span
                    className="text-electricViolet cursor-pointer"
                    onClick={showModal}
                  >
                    Contact us today!
                  </span>
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
              <div className="text-gray-400 mt-14 md:grid md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
                <div className="result-card">
                  <p className="text-5xl mr-6 mt-0.5">01</p>
                  <p className="text-xl leading-snug font-light">
                    Created an experimentation engine to rapidly test, learn,
                    and iterate new designs
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">02</p>
                  <p className="text-xl leading-snug font-light">
                    Simplified & personalized email experience which boosted
                    onboarding & retention
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">03</p>
                  <p className="text-xl leading-snug font-light">
                    Maintained & updated ClickUp’s design system to ensure
                    global product consistency
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">04</p>
                  <p className="text-xl leading-snug font-light">
                    Added progress indicators and space creation to make user
                    onboarding more successful
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">05</p>
                  <p className="text-xl leading-snug font-light">
                    Strategically designed customer service CTAs and app links
                    to boost user comfortability
                  </p>
                </div>
                <div className=" result-card">
                  <p className="text-5xl mr-6 mt-0.5">06</p>
                  <p className="text-xl leading-snug font-light">
                    Increased conversions 5-10%, activation rate 5-15%, and
                    invites 5-10%
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
          <NewFooter />
        </main>
      </div>
    </>
  )
}

export const CLICKUP_QUERY = graphql`
  query clickupQuery {
    contentfulCaseStudy(name: { eq: "ClickUp" }) {
      metaDescription {
        metaDescription
      }
      seoTitle
    }
    socialShare: file(
      relativePath: { eq: "case-studies/clickup/social-share-clickup.jpg" }
    ) {
      publicURL
    }
    HeroImg: file(
      relativePath: { eq: "case-studies/clickup/clickup-hero.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    designsDesktop: file(
      relativePath: { eq: "case-studies/clickup/clickup-designs-desktop.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    designsMobile: file(
      relativePath: { eq: "case-studies/clickup/clickup-designs-mobile.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    sepHeadshot: file(
      relativePath: { eq: "case-studies/clickup/clickup-headshot.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    acqImg: file(relativePath: { eq: "case-studies/clickup/acq-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    acqVideo: file(relativePath: { eq: "clickup/acq-video.mp4" }) {
      publicURL
    }
    emailCardOne: file(
      relativePath: { eq: "case-studies/clickup/card-1.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    emailCardTwo: file(
      relativePath: { eq: "case-studies/clickup/card-2.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    emailCardThree: file(
      relativePath: { eq: "case-studies/clickup/card-3.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    emailDiagram: file(
      relativePath: { eq: "case-studies/clickup/diagram.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenOne: file(
      relativePath: { eq: "case-studies/clickup/screen-one.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenTwo: file(
      relativePath: { eq: "case-studies/clickup/screen-two.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenThree: file(
      relativePath: { eq: "case-studies/clickup/screen-three.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenFour: file(
      relativePath: { eq: "case-studies/clickup/screen-four.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    screenFive: file(
      relativePath: { eq: "case-studies/clickup/screen-five.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otherShotOne: file(
      relativePath: { eq: "case-studies/clickup/other-shot-one.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otherShotTwo: file(
      relativePath: { eq: "case-studies/clickup/other-shot-two.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otherShotThree: file(
      relativePath: { eq: "case-studies/clickup/other-shot-three.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otherShotFour: file(
      relativePath: { eq: "case-studies/clickup/other-shot-four.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otherShotFive: file(
      relativePath: { eq: "case-studies/clickup/other-shot-five.jpg" }
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

export default ClickUp
