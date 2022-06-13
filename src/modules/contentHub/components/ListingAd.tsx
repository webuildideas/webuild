import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { motion, usePresence } from 'framer-motion'
import Arrow from '@static/svgs/cta-arrow.inline.svg'

import { TypeInsightTypeIconConfig } from '@modules/common/components/configs/InsightTags'
import { TypeInsightType } from '@common/types/Insight'
// import smallImg from '@static/images/home/homepage-hero-mobile.jpg'
import Img from 'gatsby-image'

// Styles
import './styles/ListingAd.css'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

export interface TypeListingAd {
  backgroundColor: string
  ctaLink: string
  ctaText: string
  headline: string
  id: string
  image: TypeGatsbyImageFluid
  resourceType: TypeInsightType
}

interface Props {
  ad: TypeListingAd
}

// interface BlurredImage {
//   image: string
// }

// export const useProgressiveImg = (
//   lowQualitySrc: string,
//   highQualitySrc: string
// ) => {
//   const [src, setSrc] = React.useState(lowQualitySrc)

//   React.useEffect(() => {
//     setSrc(lowQualitySrc)
//     const img = new Image()
//     img.src = highQualitySrc
//     img.onload = () => {
//       setSrc(highQualitySrc)
//     }
//   }, [lowQualitySrc, highQualitySrc])

//   return [src, { blur: src === lowQualitySrc }]
// }

// export const BlurredUpImage = ({ image }: BlurredImage) => {
//   const [src, { blur }] = useProgressiveImg(smallImg, image)
//   return (
//     <img
//       alt="testing"
//       className="mb-6 md:mb-0 w-full"
//       src={src}
//       style={{
//         filter: blur ? 'blur(20px)' : 'none',
//         transition: blur ? 'none' : 'filter 0.3s ease-out'
//       }}
//     />
//   )
// }

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

  const tagColor = ad.backgroundColor === 'light' ? `text-salmon` : `text-white`
  const buttonColor =
    ad.backgroundColor === 'light'
      ? `bg-black text-white Button-solid`
      : `bg-white text-black hover:bg-gray-200`
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
        <h3
          className={`text-h3 ${headlineColor}`}
          dangerouslySetInnerHTML={{ __html: ad.headline }}
        />
        <AniLink
          className={`text-button ${buttonColor} inline-flex items-center transition-all duration-200 ease-in-out Button`}
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
        <Img fadeIn fluid={ad.image.fluid} />
      </div>
    </motion.article>
  )
}

export default ListingAd
