// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Utils
import { rhythmUnit } from '../utils/typography'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TeamMap from '../components/TeamMap'
import BioCard from '../components/BioCard'
import JoinUs from '../components/JoinUs'
import PhotoGrid from '../components/PhotoGrid'
import TestimonialSlider from '../components/TestimonialSlider'
import Footer from '../components/Footer'

const WhoWeAre = ({ data }) => {
  const pageData = data.contentfulAboutPage
  return (
    <>
      <Meta title="Who We Are" />

      <PageIntro maxWidth={860}>{pageData.heroCopy.heroCopy}</PageIntro>

      <div
        style={{
          marginTop: `${rhythmUnit(7)}`,
          marginBottom: `${rhythmUnit(3)}`,
        }}
      >
        <PhotoGrid photos={pageData.photoGrid} />
      </div>

      <TeamMap />

      <div
        style={{
          backgroundColor: '#F9F9F9',
          padding: `${rhythmUnit(3)} 0`,
        }}
      >
        <BioCard>
          <h2>We've Been There, Too.</h2>
          <p>
            Meet our founder, Evan. He has bootstrapped and co-founded multiple
            companies, all while traveling to 35 countries across 4 continents.
          </p>

          <p>
            Given his experience co-founding and growing startups, Evan has
            intimate experience with building products that get results, and
            he’s committed to helping other founders do the same.
          </p>
        </BioCard>
      </div>

      <div
        style={{
          padding: `${rhythmUnit(3)} 0`,
        }}
      >
        <JoinUs />
      </div>

      <Footer />
    </>
  )
}

WhoWeAre.propTypes = {
  data: PropTypes.object.isRequired,
}

export const WHO_WE_ARE_QUERY = graphql`
  query whoWeAreQuery {
    contentfulAboutPage(pageTitle: { eq: "Who We Are" }) {
      heroCopy {
        heroCopy
      }
      photoGrid {
        fluid {
          srcSet
          src
        }
      }
    }
  }
`

export default WhoWeAre
