// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Utils
import { rhythmUnit } from '../utils/typography'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'
import SectionHeading from '../components/Shared/SectionHeading'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import Testimonial from '../components/Testimonial'
import TestimonialGrid from '../components/TestimonialGrid'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => {
  const homeData = data.allContentfulHomePage.edges[0].node
  console.log(homeData)
  return (
    <>
      <Meta title="Home" />
      <PageIntro>
        <h1>
          <span>Supercharge your product with results-driven design.</span> We
          help you iterate and optimize without breaking stride to increase
          retention and attract new users.
        </h1>
      </PageIntro>

      <section style={{ backgroundColor: '#F3F3F3' }}>
        <SiteMaxWidthContainer
          style={{
            paddingTop: `${rhythmUnit(3.5)}`,
            paddingBottom: `${rhythmUnit(4)}`,
          }}
        >
          <SectionHeading style={{ marginBottom: `${rhythmUnit(2.75)}` }}>
            <h1 className="SectionHeading__title">Our Partners Love Us</h1>
            <h2 className="SectionHeading__subtitle">
              When smart collaboration and remarkable
              <br /> expertise come together, magic happens.
            </h2>
          </SectionHeading>
          <Testimonial
            company={homeData.featuredTestimonial.company}
            companyRole={homeData.featuredTestimonial.role}
            headshot={homeData.featuredTestimonial.featuredHeadshot.fluid.src}
            isFeatured={true}
            name={homeData.featuredTestimonial.name}
            style={{ marginBottom: `${rhythmUnit(1)}` }}
          >
            {homeData.featuredTestimonial.testimonial.testimonial}
          </Testimonial>
          <TestimonialGrid testimonials={homeData.testimonials} />
        </SiteMaxWidthContainer>
      </section>

      <Footer />
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const HOMEPAGE_QUERY = graphql`
  query homepageQuery {
    allContentfulHomePage(filter: { pageTitle: { eq: "Home" } }) {
      edges {
        node {
          caseStudies {
            slug
            name
            tagline
            listingImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }

          featuredTestimonial {
            company
            name
            role
            testimonial {
              testimonial
            }
            featuredHeadshot {
              fluid(maxWidth: 1000) {
                src
              }
            }
            headshot {
              fixed(cropFocus: FACE, height: 100, width: 100) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }

          testimonials {
            company
            name
            role
            testimonial {
              testimonial
            }
            headshot {
              fixed(cropFocus: FACE, height: 100, width: 100) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
