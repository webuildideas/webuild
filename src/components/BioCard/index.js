// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Styled Components
import * as S from './style'

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
  return (
    <S.BioCard>
      <div>
        <Img
          className="BioCard__img-wrapper"
          fluid={file.childImageSharp.fluid}
        />
      </div>
      <S.BioContent>{children}</S.BioContent>
    </S.BioCard>
  )
}

BioCard.propTypes = {
  /** The copy for the BioCard */
  children: PropTypes.node.isRequired,
}

export default BioCard
