import React from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'

// Components
import EmployeeHero from '@modules/employee-page/EmployeeHero/index'
import EmployeeCarousel from '@modules/employee-page/EmployeeCarousel/index'
import OtherEmployees from '@modules/employee-page/OtherMembers/index'
import Footer from '@modules/common/components/Footer'
import Meta from '@components/Meta'

const employeePage = ({
  data: { contentfulEmployee: employee },
  pageContext,
  location
}) => {
  const { peeps } = pageContext
  const initial = { opacity: 0 }
  const animateTo = { opacity: 1 }
  return (
    <>
      <Meta location={location} title={`Who We Are | ${employee.name}`} />
      <motion.main
        animate={animateTo}
        className="WhoWeAre"
        initial={initial}
        transition={{ delay: 1 }}
      >
        <EmployeeHero
          background={employee.employeeBioHeroBackground}
          headshot={employee.headshot}
          illustration={employee?.heroIllustration?.file?.url}
          location={employee.location}
          name={employee.name}
          role={employee.role}
        />
        <EmployeeCarousel gender={employee.gender} qna={employee.children} />
        <OtherEmployees peeps={peeps} />
        <Footer />
      </motion.main>
    </>
  )
}

export const EMPLOYEE_PAGE_QUERY = graphql`
  query employeePageQuery($slug: String!) {
    contentfulEmployee(slug: { eq: $slug }) {
      id
      name
      role
      location
      headshot {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      employeeBioHeroBackground
      heroIllustration {
        file {
          url
        }
      }
      gender
      children {
        ... on contentfulEmployeeLoveAboutDesignTextNode {
          id
          internal {
            content
          }
        }
        ... on contentfulEmployeeFavoriteLocalMealTextNode {
          id
          internal {
            content
          }
        }
        ... on contentfulEmployeeFavoritePlaceToTravelTextNode {
          id
          internal {
            content
          }
        }
        ... on contentfulEmployeeSecretPowerTextNode {
          id
          internal {
            content
          }
        }
        ... on contentfulEmployeeCoffeeOrTeaTextNode {
          id
          internal {
            content
          }
        }
        ... on contentfulEmployeeFindInspirationTextNode {
          id
          internal {
            content
          }
        }
      }
    }
  }
`

export default employeePage
