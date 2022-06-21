import React, { useState } from 'react'
import Img from 'gatsby-image'
import { TypeSidebarAd } from '@common/types/Sidebar'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Arrow from '@static/svgs/cta-arrow.inline.svg'
import { useStaticQuery, graphql } from 'gatsby'
import './sidebarAd.css'

interface Props {
  theAd?: TypeSidebarAd
  excludeEbooks?: boolean
}

const SIDEBAR_QUERY = graphql`
  query SidebarQuery {
    allContentfulSidebarAd {
      nodes {
        id
        headline
        copy
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        mobileImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        customCtaLink
        ctaText
        ctaLink {
          slug
        }
        eBook
      }
    }
  }
`

export default function SidebarAd({ theAd, excludeEbooks }: Props) {
  const {
    allContentfulSidebarAd: { nodes: ads }
  } = useStaticQuery(SIDEBAR_QUERY)
  // let ad

  const [ad, setAd] = useState(setTheAd)

  function setTheAd() {
    if (theAd) {
      return theAd
    }
    if (excludeEbooks) {
      const filteredAds = ads.filter(
        (item: TypeSidebarAd) => item.eBook !== true
      )
      return filteredAds[Math.floor(Math.random() * filteredAds.length)]
    }
    return ads[Math.floor(Math.random() * ads.length)]
  }

  const mobileImg = ad?.mobileImage?.fluid || ad.image.fluid
  const imgSources = [
    mobileImg,
    {
      ...ad.image.fluid,
      media: `(min-width: 990px)`
    }
  ]

  console.log(ad.ctaLink.slug)

  return (
    <div className="sidebar-ad my-12 lg:mt-40 mx-8">
      <div className="sidebar-ad__wrapper">
        <h4 className="text-h4 my-4 text-center lg:text-left">{ad.headline}</h4>
        <div className="md:flex items-center justify-between lg:block">
          <Img className="mb-6 md:w-1/2 lg:w-full" fadeIn fluid={imgSources} />
          <div className="flex flex-col md:block md:w-2/5 lg:w-full">
            {ad.copy && <p className="text-caption">{ad.copy}</p>}
            {ad?.ctaLink?.slug && (
              <AniLink
                className="mx-auto md:mx-0 mt-6 text-button bg-black text-white inline-flex items-center transition-all duration-200 ease-in-out Button hover:bg-gray-800"
                cover
                direction="right"
                duration={1.25}
                to={`/${ad.ctaLink.slug}`}
              >
                <span className="mt-1 mr-2">{ad.ctaText}</span>
                <Arrow />
              </AniLink>
            )}

            {ad?.customCtaLink && (
              <a
                className="mx-auto md:mx-0 mt-6 text-button bg-black text-white inline-flex items-center transition-all duration-200 ease-in-out Button hover:bg-gray-800"
                href={ad.customCtaLink}
                rel="noreferrer"
                target="_blank"
              >
                {ad.ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const MemoizedSidebarAd = React.memo(SidebarAd)
