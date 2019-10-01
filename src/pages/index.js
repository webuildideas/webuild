// Packages
import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Context
import { AppContext } from '../components/AppProvider'

// Utils
import { rhythmUnit } from '../utils/typography'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'
import GradientBackground from '../components/Shared/GradientBackground'

// Components
import Meta from '../components/Meta'
import HomeHero from '../components/HomeHero'
import TestimonialGrid from '../components/TestimonialGrid'
import CaseStudyGrid from '../components/CaseStudyGrid'
import StyledButton from '../components/Button'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SectionHeading = styled.h5`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${() => rhythmUnit(1.5)};
`

const IndexPage = ({ data }) => {
  const { setNavColorTheme } = useContext(AppContext)

  useEffect(() => {
    setNavColorTheme('dark')
  }, [setNavColorTheme])

  return (
    <>
      <Meta title="Home" />
      <HomeHero />

      <SiteMaxWidthContainer padding={`${rhythmUnit(3.5)} 0 0`}>
        <SectionHeading>Case Studies</SectionHeading>
        <CaseStudyGrid caseStudies={data.allContentfulCaseStudy.edges} />
        <div
          style={{
            textAlign: 'center',
            marginTop: rhythmUnit(2),
            marginBottom: rhythmUnit(2.5),
          }}
        >
          <StyledButton to="/case-studies">See More Case Studies</StyledButton>
        </div>
      </SiteMaxWidthContainer>

      <GradientBackground gradient="linear-gradient(161.81deg, #F5F5FF -26.24%, rgba(250, 250, 251, 0) 85.41%);">
        <SiteMaxWidthContainer padding={`${rhythmUnit(3.5)} 0 0`}>
          <SectionHeading> Why our partners love us</SectionHeading>
          <TestimonialGrid testimonials={data.allContentfulTestimonial.edges} />
          <div
            style={{
              textAlign: 'center',
              marginTop: rhythmUnit(2),
              marginBottom: rhythmUnit(2.5),
            }}
          >
            <StyledButton to="/testimonials">See More Kind Words </StyledButton>
          </div>
        </SiteMaxWidthContainer>
      </GradientBackground>

      <Contact />
      <Footer />
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const HOMEPAGE_QUERY = graphql`
  query homepageQuery {
    allContentfulTestimonial(
      limit: 4
      sort: { order: ASC, fields: createdAt }
    ) {
      edges {
        node {
          company
          name
          role
          testimonial {
            testimonial
          }
          headshot {
            fixed(cropFocus: FACE, height: 100, width: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
    allContentfulCaseStudy(limit: 4, sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          url
          name
          tagline
          listingImage {
            fluid {
              srcSet
              src
              sizes
            }
          }
        }
      }
    }
  }
`

export default IndexPage
