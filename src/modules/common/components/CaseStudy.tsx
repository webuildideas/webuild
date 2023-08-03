import './styles/CaseStudy.css'

// Packages
import React from 'react'
import Img from 'gatsby-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Options } from '@contentful/rich-text-react-renderer'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

// Common
import { classNames } from '@common/utils/classNames'
import { TypeCaseStudy } from '@common/types/CaseStudy'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'

// Components
import MotionAniLink from '@modules/common/components/MotionAniLink'

interface Props {
  caseStudy: TypeCaseStudy
  layout: string
}

const CaseStudy = ({ caseStudy, layout }: Props) => {
  const servicesLength = caseStudy?.service?.length
  return (
    <article className="case-study-listing p-6 mb-6 lg:mb-20 md:w-3/5 m-auto lg:w-full max-w-screen-xl lg:hover:bg-newBlack transition duration-300 ease-in-out">
      <AniLink
        bg="#F3F3F3"
        className="lg:flex lg:gap-x-6"
        cover
        direction="right"
        duration={1.5}
        to={`/case-studies/${caseStudy.slug}/`}
      >
        <div className={`img lg:w-2/5 xl:w-1/3 ${layout}`}>
          <Img
            alt={`${caseStudy.name}`}
            className="lg:w-full lg:h-full lg:object-cover xl:object-contain xl:w-auto"
            fadeIn
            fluid={caseStudy.listingImage.fluid}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div className="info bg-white rounded-20 p-10 border border-solid border-black mt-6 flex flex-col lg:w-3/5 lg:mt-0 lg:p-16 xl:w-2/3">
          <div className="header flex items-center justify-between">
            <div className="flex flex-col lg:flex-row">
              {caseStudy?.service?.map(
                (service: { shortTitle: string }, index) => (
                  <span
                    key={service.shortTitle}
                    className="text-blueRibbon uppercase text-tiny leading-relaxed"
                  >
                    {service.shortTitle}
                    {servicesLength > 1 && index === 0 && <span>,&nbsp;</span>}
                  </span>
                )
              )}
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              {caseStudy?.service?.map(
                (service: { shortTitle: string; serviceGif: any }) => (
                  <img
                    key={service?.serviceGif?.file.url}
                    alt={service?.shortTitle}
                    src={service?.serviceGif?.file?.url}
                    style={{
                      width: `56px`,
                      height: `56px`,
                      objectFit: `contain`
                    }}
                  />
                )
              )}
            </div>
          </div>
          <div className="mt-12 copy xl:w-3/4 xl:mt-14">
            <h2 className="text-3xl leading-tight xl:text-5xl">
              {caseStudy.tagline}
            </h2>
            <p className="text-xl leading-loose mt-4">
              {caseStudy.successSummary.successSummary}
            </p>
          </div>
          <div className="xl:flex xl:items-center xl:justify-between xl:mt-auto">
            <div className="yotta-stats flex mt-14">
              <img alt={caseStudy.slug} src={caseStudy.badge.file.url} />
              <div className="ml-4 flex flex-col">
                <div className="">
                  {caseStudy.stats.type && (
                    <p className="text-caption text-electricViolet xl:text-sm">
                      {caseStudy.stats.type}
                    </p>
                  )}
                  {caseStudy.stats.stage && (
                    <p className="text-caption xl:text-sm">
                      {caseStudy.stats.stage}
                    </p>
                  )}
                </div>
                <div className="mt-auto">
                  {caseStudy.stats.amountRaised && (
                    <p className="text-caption xl:text-sm">
                      {caseStudy.stats.amountRaised}
                    </p>
                  )}
                  {caseStudy.stats.founded && (
                    <p className="text-caption xl:text-sm">
                      {caseStudy.stats.founded}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-full border border-blueRibbon border-solid py-6 px-10 flex items-center justify-center font-light text-lg">
              <span className="mt-1">How We Did It</span>
              <svg
                className="w-8 h-auto ml-4"
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
            </div>
          </div>
        </div>
      </AniLink>
    </article>
  )
}

export default CaseStudy
