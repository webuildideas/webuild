import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { motion, usePresence } from 'framer-motion'
import Img from 'gatsby-image'
import Arrow from '@static/svgs/cta-arrow.inline.svg'
// import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

import { TypeInsightTypeIconConfig } from '@modules/common/components/configs/InsightTags'

import './styles/ListingAd.css'

const ListingAd = ({ ad }) => {
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

  const tagColor = ad.backgroundColor === 'light' ? `text-salmon` : `text-white`
  const buttonColor =
    ad.backgroundColor === 'light'
      ? `bg-black text-white hover:text-black`
      : `bg-white text-black hover:text-white`
  const headlineColor =
    ad.backgroundColor === 'light' ? `text-black` : `text-white`
  return (
    <motion.article
      {...animations}
      className={`listing-ad ${ad.backgroundColor}`}
    >
      <div className="listing-ad__content">
        <div className="listing-ad__type flex items-center">
          <TypeIcon className={`mr-2 w-5 ${tagColor}`} />
          <span className={`text-tag ${tagColor}`}>{typeName}</span>
        </div>
        <h3 className={`text-h3 ${headlineColor}`}>{ad.headline}</h3>
        <AniLink
          className={`text-button ${buttonColor} inline-flex items-center transition-all duration-200 ease-in-out`}
          cover
          direction="right"
          duration={1.25}
          to={`${ad.ctaLink}`}
        >
          <span className="mr-4 pt-1">{ad.ctaText}</span>
          <Arrow />
        </AniLink>
      </div>
      <div className="listing-ad__image">
        <Img fluid={ad.image.fluid} imgStyle={{ objectFit: 'contain' }} />
      </div>
    </motion.article>
  )
}

export default ListingAd
