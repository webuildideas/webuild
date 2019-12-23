// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Utils
import { rhythmUnit } from '../utils/typography'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import JoinUs from '../components/JoinUs'
import BioCard from '../components/BioCard'
import Footer from '../components/Footer'

const WhoWeAre = ({ data }) => {
  const WhoWeAreData = data.contentfulAboutPage
  return (
    <>
      <Meta title="Who We Are" />
      <PageIntro maxWidth={860}>{WhoWeAreData.heroCopy.heroCopy}</PageIntro>
      <div
        style={{
          backgroundColor: '#F9F9F9',
          padding: `${rhythmUnit(3)} 0`,
        }}
      >
        <SiteMaxWidthContainer>
          <BioCard>
            <h2>We've Been There, Too.</h2>
            <p>
              Meet our founder, Evan. He has bootstrapped and co-founded
              multiple companies, all while traveling to 35 countries across 4
              continents.
            </p>

            <p>
              Given his experience co-founding and growing startups, Evan has
              intimate experience with building products that get results, and
              he’s committed to helping other founders do the same.
            </p>
          </BioCard>
        </SiteMaxWidthContainer>
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
    }
  }
`

export default WhoWeAre
