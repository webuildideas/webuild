// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Utils
import { rhythmUnit } from '../utils/typography'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

const WhoWeAre = ({ data }) => {
  const WhoWeAreData = data.contentfulAboutPage
  return (
    <>
      <Meta title="Who We Are" />
      <PageIntro maxWidth={860}>{WhoWeAreData.heroCopy.heroCopy}</PageIntro>
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
