import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { motion } from 'framer-motion'

import { TypeEmployee } from '@common/types/Employee'

// Components
import EmployeeHero from '@modules/employee-page/components/EmployeeHero'
import EmployeeCarousel from '@modules/employee-page/components/EmployeeCarousel'
import OtherEmployees from '@modules/employee-page/components/OtherMembers'
import Footer from '@modules/common/components/Footer'
import Meta from '@components/Meta'

interface Props {
  location: PageProps['location']
  data: {
    contentfulEmployee: TypeEmployee
  }
  pageContext: {
    id: string
    peeps: any
  }
}

const employeePage = ({
  data: { contentfulEmployee: employee },
  pageContext,
  location
}: Props) => {
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
        <EmployeeCarousel
          coffeeOrTea={employee.coffeeOrTea}
          favoriteLocalMeal={employee.favoriteLocalMeal}
          favoritePlaceToTravel={employee.favoritePlaceToTravel}
          findInspiration={employee.findInspiration}
          gender={employee.gender}
          loveAboutDesign={employee.loveAboutDesign}
          secretPower={employee.secretPower}
        />
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
      loveAboutDesign {
        loveAboutDesign
      }
      favoriteLocalMeal {
        favoriteLocalMeal
      }
      favoritePlaceToTravel {
        favoritePlaceToTravel
      }
      secretPower {
        secretPower
      }
      coffeeOrTea {
        coffeeOrTea
      }
      findInspiration {
        findInspiration
      }
    }
  }
`

export default employeePage
