// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import Footer from '../components/Footer'

const WhoWeAre = ({ data }) => {
  const WhoWeAreData = data.contentfulAboutPage
  console.log(data)
  return (
    <>
      <Meta title="Who We Are" />
      <SiteMaxWidthContainer>
        <PageIntro maxWidth={860}>{WhoWeAreData.heroCopy.heroCopy}</PageIntro>
      </SiteMaxWidthContainer>
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
