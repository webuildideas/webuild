// Packages
import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Commons
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import { WithChildren } from '@common/types/Utilities'

// Styles
import * as S from './style'

interface BioCardQueryResponse {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const variants: Variants = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.4
    }
  },
  hidden: {
    x: 25,
    opacity: 0
  }
}

const BioCard = ({ children }: WithChildren) => {
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })
  const { file } = useStaticQuery<BioCardQueryResponse>(
    graphql`
      query {
        file(relativePath: { eq: "evan-shoemaker.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 365) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <SiteMaxWidthContainer>
      <S.BioCard ref={ref}>
        <motion.div
          animate={animationControls}
          initial="hidden"
          variants={variants}
        >
          <Img
            className="BioCard__img-wrapper"
            fluid={file.childImageSharp.fluid}
          />
        </motion.div>
        <S.BioContent
          animate={animationControls}
          initial="hidden"
          variants={variants}
        >
          {children}
        </S.BioContent>
      </S.BioCard>
    </SiteMaxWidthContainer>
  )
}

export default BioCard
