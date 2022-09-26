import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { motion, usePresence } from 'framer-motion'
import Arrow from '@static/svgs/cta-arrow.inline.svg'

import { TypeInsightTypeIconConfig } from '@modules/common/components/configs/InsightTags'
import { TypeInsightType } from '@common/types/Insight'
import Img from 'gatsby-image'

// Styles
import './styles/ListingAd.css'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

export interface TypeListingAd {
  backgroundColor: string
  ctaLink: {
    slug: string
  }
  customCtaLink?: string
  ctaText: string
  headline: string
  id: string
  image: TypeGatsbyImageFluid
  resourceType: TypeInsightType
}

interface Props {
  ad: TypeListingAd
}

const ListingAd = ({ ad }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name: typeName, icon: TypeIcon } = TypeInsightTypeIconConfig[
    ad.resourceType
  ]

  const transition = {
    type: 'tween',
    duration: 0.9,
    ease: 'easeInOut'
  }

  const [isPresent, safeToRemove] = usePresence()

  const animations = {
    layout: false,
    initial: 'out',
    animate: isPresent ? 'in' : 'out',
    variants: {
      in: { opacity: 1, delay: 0.5 },
      out: { opacity: 0, zIndex: -1 }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  }

  const link = ad?.ctaLink?.slug || ad?.customCtaLink

  const backgroundColor =
    ad.backgroundColor === 'peach'
      ? `bg-peach`
      : ad.backgroundColor === 'black'
      ? `bg-black`
      : `bg-lavenderMist`

  const tagColor =
    ad.backgroundColor === 'peach'
      ? `text-salmon`
      : ad.backgroundColor === 'black'
      ? `text-white`
      : `text-electricViolet`
  const buttonColor =
    ad.backgroundColor === 'peach'
      ? `bg-black text-white Button-solid`
      : ad.backgroundColor === 'black'
      ? `bg-white text-black hover:bg-gray-200`
      : `bg-deepViolet text-white hover:bg-lilac`
  const headlineColor =
    ad.backgroundColor === 'peach'
      ? `text-black`
      : ad.backgroundColor === `black`
      ? `text-white`
      : `text-deepViolet`
  return (
    <motion.article {...animations} className={`listing-ad ${backgroundColor}`}>
      <div className="listing-ad__content">
        <div className="listing-ad__type flex items-center">
          <TypeIcon className={`mr-2 w-5 ${tagColor}`} />
          <span className={`text-tag ${tagColor}`}>{typeName}</span>
        </div>
        <h3
          className={`text-h3 ${headlineColor}`}
          dangerouslySetInnerHTML={{ __html: ad.headline }}
        />
        <AniLink
          className={`text-button ${buttonColor} inline-flex items-center transition-all duration-200 ease-in-out Button`}
          cover
          direction="right"
          duration={1.25}
          to={`/${link}`}
        >
          <span className="mr-4 pt-1">{ad.ctaText}</span>
          <Arrow />
        </AniLink>
      </div>
      <div className="listing-ad__image">
        <AniLink cover direction="right" duration={1.25} to={`/${link}`}>
          <Img className="h-full lg:h-auto" fadeIn fluid={ad.image.fluid} />
        </AniLink>
      </div>
    </motion.article>
  )
}

export default ListingAd
