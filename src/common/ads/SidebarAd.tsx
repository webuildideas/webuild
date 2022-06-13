import React from 'react'
import Img from 'gatsby-image'
import { TypeSidebarAd } from '@common/types/Sidebar'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Arrow from '@static/svgs/cta-arrow.inline.svg'
import './sidebarAd.css'

interface Props {
  ad: TypeSidebarAd
}

export default function SidebarAd({ ad }: Props) {
  return (
    <div className="sidebar-ad my-12 lg:mt-40 mx-8">
      <div className="sidebar-ad__wrapper">
        <h4 className="text-h4 my-4 text-center lg:text-left">{ad.headline}</h4>
        <div className="md:flex items-center justify-between lg:block">
          <Img
            className="mb-6 md:w-1/2 lg:w-full"
            fadeIn
            fluid={ad.image.fluid}
          />
          <div className="flex flex-col md:block md:w-2/5 lg:w-full">
            {ad.copy && <p className="text-caption">{ad.copy}</p>}
            <AniLink
              className="mx-auto md:mx-0 mt-6 text-button bg-black text-white inline-flex items-center transition-all duration-200 ease-in-out Button hover:bg-gray-800"
              cover
              direction="right"
              duration={1.25}
              to={`${ad.ctaLink}`}
            >
              <span className="mt-1 mr-2">{ad.ctaText}</span>
              <Arrow />
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MemoizedSidebarAd = React.memo(SidebarAd)
