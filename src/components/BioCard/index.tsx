// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

const BioCard = ({ children }) => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "evan-shoemaker.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  })

  const controls = useAnimation()

  const variants = {
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

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <SiteMaxWidthContainer>
      <S.BioCard ref={ref}>
        <motion.div animate={controls} initial="hidden" variants={variants}>
          <Img
            className="BioCard__img-wrapper"
            fluid={file.childImageSharp.fluid}
          />
        </motion.div>
        <S.BioContent animate={controls} initial="hidden" variants={variants}>
          {children}
        </S.BioContent>
      </S.BioCard>
    </SiteMaxWidthContainer>
  )
}

BioCard.propTypes = {
  /** The copy for the BioCard */
  children: PropTypes.node.isRequired
}

export default BioCard
