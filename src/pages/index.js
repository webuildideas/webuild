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

// Icons
import Investigate from '../static/svgs/investigate.inline.svg'
import Ideate from '../static/svgs/ideate.inline.svg'
import Iterate from '../static/svgs/iterate.inline.svg'

const IndexPage = ({ data }) => {
  const homeData = data.allContentfulHomePage.edges[0].node
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

      <section>
        <SiteMaxWidthContainer
          style={{
            paddingTop: `${rhythmUnit(3.5)}`,
            paddingBottom: `${rhythmUnit(4)}`,
          }}
        >
          <h1>The only design partner you’ll ever need.</h1>
          <p>
            We’ll handle all things design so you can focus on what you do best.
            Think of us as an integrated part of your team — we’ll help you
            discover opportunities and combine strategy with tactical product
            design to deliver results.
          </p>
          <div>
            <div>
              <Investigate />
              <h3>Investigate</h3>
              <p>
                We don’t jump into design and try to dazzle you with cool
                concepts. We start by understanding your goals, your market,
                your users and what’s next for your business.
              </p>
            </div>
            <div>
              <Ideate />
              <h3>Ideate</h3>
              <p>
                Every design decision starts with the user in mind. Whether you
                need design for your new app or need strategic direction, our
                talented team of UX/UI product designers will help you level up.
              </p>
            </div>
            <div>
              <Iterate />
              <h3>Iterate</h3>
              <p>
                No design ends with a deliverable. We constantly learn and
                optimize our designs, leveraging analytics to surface user
                behavior while running A/B tests to drive performance.
              </p>
            </div>
          </div>
        </SiteMaxWidthContainer>
      </section>

      <section style={{ backgroundColor: '#F9F9F9' }}>
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
