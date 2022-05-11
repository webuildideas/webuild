// Packages
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React, { useRef, useState, useEffect } from 'react'
import { motion, usePresence } from 'framer-motion'

// Commons
// import { TypeInsight } from '@common/types/Insight'
// import { WithClassName } from '@common/types/Utilities'
import useWindowSize from '@common/hooks/useWindowSize'

// Components
import InsightTags from '@modules/common/components/InsightTags'

// Styles
import './styles/ListingInsight.css'

// Assets
import listingIllustrationDefaultSrc from '@static/svgs/insights/default-insight-listing.svg'
import smallImg from '@static/images/home/homepage-hero-mobile.jpg'

const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = React.useState(lowQualitySrc)

  React.useEffect(() => {
    setSrc(lowQualitySrc)
    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      setSrc(highQualitySrc)
    }
  }, [lowQualitySrc, highQualitySrc])

  return [src, { blur: src === lowQualitySrc }]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlurredUpImage = ({ image }) => {
  const [src, { blur }] = useProgressiveImg(smallImg, image)
  return (
    <img
      alt="testing"
      className="mb-6 md:mb-0 w-full"
      src={src}
      style={{
        filter: blur ? 'blur(20px)' : 'none',
        transition: blur ? 'none' : 'filter 0.3s ease-out'
      }}
    />
  )
}

const TABLET_WINDOW_SIZE = 768

const ListingInsight2 = ({
  insight: {
    title,
    mobileListingIllustration,
    listingIllustration,
    slug,
    topics,
    type
  }
}) => {
  const { width } = useWindowSize()
  const listingIllustrationSrc =
    width && width <= TABLET_WINDOW_SIZE
      ? mobileListingIllustration?.url
      : listingIllustration?.url
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const illustrationSrc =
    listingIllustrationSrc || listingIllustrationDefaultSrc
  const contentContainerRef = useRef(null)
  const illustrationContainerRef = useRef(null)
  const [illustrationHeight, setIllustrationHeight] = useState({
    height: null
  })

  useEffect(() => {
    const setHeight = setTimeout(() => {
      if (
        width &&
        width >= TABLET_WINDOW_SIZE &&
        contentContainerRef?.current
      ) {
        const contentHeight = contentContainerRef.current.clientHeight
        const newIllustrationHeight = contentHeight + 32
        setIllustrationHeight({ height: `${newIllustrationHeight}px` })
      } else if (illustrationContainerRef?.current) {
        illustrationContainerRef.current.style.height = 'auto'
      }
    }, 350)

    return () => clearTimeout(setHeight)
  }, [contentContainerRef, illustrationContainerRef, width])

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

  return (
    <motion.article
      {...animations}
      className="ListingInsight mb-16 md:mx-8 lg:mx-0"
    >
      <AniLink
        bg="#757588"
        className="ListingInsight-container"
        cover
        direction="right"
        duration={1.25}
        to={`/${slug}/`}
      >
        <div
          ref={illustrationContainerRef}
          className="ListingInsight-illustration"
          style={illustrationHeight && illustrationHeight}
        >
          <BlurredUpImage image={illustrationSrc} />
        </div>

        <div ref={contentContainerRef} className="ListingInsight-content">
          <InsightTags topics={topics} type={type} />
          <h2 className="text-h3 mt-4">{title}</h2>
        </div>
      </AniLink>
    </motion.article>
  )
}

export default ListingInsight2
