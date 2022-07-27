/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Commons
import { TypeService } from '@common/types/Service'
import { TypeCaseStudy } from '@common/types/CaseStudy'

// Components
import CaseStudyHero from '@modules/case-studies/components/CaseStudyHero'
import CaseStudyIntro from '@modules/case-studies/components/CaseStudyIntro'
import CaseStudyBeforeAndAfter from '@modules/case-studies/components/CaseStudyBeforeAndAfter'
import ChallengeSolution from '@modules/case-studies/components/ChallengeSolution'
import CaseStudyLargeImage from '@modules/case-studies/components/CaseStudyLargeImage'
import CaseStudyContent from '@modules/case-studies/components/CaseStudyContent'
import CaseStudyXLargeImage from '@modules/case-studies/components/CaseStudyXLargeImage'
import CaseStudyTestimonial from '@modules/case-studies/components/CaseStudyTestimonial'

import Footer from '@modules/common/components/Footer'
import OtherServices from '@modules/service/components/OtherServices'
// import OpportunityForm from '@modules/forms/OpportunityForm'
import Meta from '@components/Meta'
import RelatedCaseStudies from '@modules/case-studies/components/NextCaseStudies'

// SVGs
import DesignSystems from '@static/svgs/service/circle/design-systems-circle.inline.svg'
import ProductDesign from '@static/svgs/service/circle/product-strategy-circle.inline.svg'

// Styles
import '../../common/styles/pages/quadpay.css'
import HeroIllustration from '@static/svgs/case-studies/tetra/tetra-hero.inline.svg'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'
import OpportunityForm from '@modules/forms/OpportunityForm'

interface TetraQueryResponse {
  contentfulCaseStudy: TypeCaseStudy
  allContentfulService: {
    nodes: TypeService[]
  }
  logo: TypeGatsbyImageFluid
  beforeImage: {
    publicURL: string
  }
  afterImage: {
    publicURL: string
  }
  sketches: TypeGatsbyImageFluid
  pmImage: TypeGatsbyImageFluid
  dsImage: TypeGatsbyImageFluid
  dsGridImage: TypeGatsbyImageFluid
  gridImage: TypeGatsbyImageFluid
  wexler: TypeGatsbyImageFluid
  flowImage: TypeGatsbyImageFluid
}

interface Props {
  data: TetraQueryResponse
  location: PageProps['location']
}

// data
const Challenge = () => (
  <p className="text-body">
    Iterating and executing are musts for any product that wants to succeed and
    scale. But Tetra didn’t have the right pieces in place. Developers were
    strapped for time and resources, and they couldn’t get ahead enough to
    overhaul their UX and UI like they needed to.
  </p>
)

const Solution = () => (
  <p className="text-body">
    To get any job done right, you need the right tools. We defined a new IA
    model incorporating newfound pain points, created low-fi workflows and
    explored new UI concepts to define the new product, built upon and enhanced
    their existing design system, and created a robust library of prototypes for
    developers to use.
  </p>
)

const projectMappingText = `
<p class="text-body">But Tetra was stuck. They were having trouble iterating on what they already had built and they were facing barriers when it came to executing anything new. The lack of the right tech and design foundation wasn’t helping.</p>

<p class="text-body"> To turn a corner, Tetra knew they needed a refreshed UI design, a complete overhaul of their core UX, and the design infrastructure to make it all happen. They called on webuild to help.</p>
`

const designSystemsText = `
  <h2 class="text-h2 font-extrabold lg:text-4xl">An Enhanced Design System and Comprehensive Prototypes For a Brand New UX and UI</h2>
  <p class="text-body">Our first task was to define the current information architecture (IA) model and come up with a new one, taking into account the known pain points.</p>
  <p class="text-body">The next step was defining the new product. We tackled this by creating low-fi workflows and exploring new UI concepts.</p>
`
const designSystemButton = [
  {
    icon: DesignSystems,
    service: 'Design Systems'
  }
]
const designSystemTextTwo = `
  <p class="text-body">Next up? The <span class="text-electricViolet">design system</span> — the foundation of an efficient team, cohesive product, and strong brand. While Tetra had one already, it was not as built up as it needed to be. And therefore, Tetra’s developers were doing a lot of unnecessary rework. We dug in.</p>
  <p class="text-body">As we improved and added to the design system, we started working through the UX for core product pages. We refined low-fidelity flows by identifying subflows and edge cases, which allowed us to have a mockup for almost any instance of the app.</p>
  <p class="text-body">We ultimately came up with a massive and incredibly thorough prototype that covered all possible use cases and edge cases for the product. Everything from pre-onboarding to the new user experience, to global navigation updates to core product features and functionality.</p>
`
const productDesignButton = [
  {
    icon: ProductDesign,
    service: 'Product Design'
  }
]
const productDesignText = `
  <h2 class="text-h3 font-extrabold">A Supercharged Development Team Equipped and Empowered to Ship Better Features Faster</h2>
  <p class="text-body">With consistency and continuity across all teams thanks to a robust design system, Tetra has saved time and money. The development team has a single source of truth, slashing unnecessary rework and wasted time, and leaving more room for increased speed and velocity of shipping new features.</p>
  <p class="text-body">With Tetra’s drastically improved UX and enhanced UI, users will experience a best-in-class product experience — and the team will have a solid foundation to build upon. Not to mention more efficient workflows moving forward, and product managers enabled to create designs on their own.</p>
`

const servicesTest = `
  <h2 class="text-h3 font-extrabold">webuild Services Put to the Test:</h2>
  <ul class="text-body">
    <li>
      <a class="text-electricViolet" href="https://webuild.io/what-we-do/digital-product-strategy-and-design/">Product strategy and design</a>
      <ul>
        <li>User experience design</li>
        <li>User interface & visual design</li>
      </ul>
    </li>
    <li>
      <a class="text-electricViolet" href="https://webuild.io/what-we-do/design-systems/">Design systems</a>
    </li>
  </ul>
`

const Tetra = ({
  data: {
    allContentfulService,
    contentfulCaseStudy,
    logo,
    beforeImage,
    afterImage,
    sketches,
    pmImage,
    dsImage,
    dsGridImage,
    gridImage,
    wexler,
    flowImage
  },
  location
}: Props) => {
  const {
    nextCaseStudies,
    seoTitle,
    metaDescription: { metaDescription }
  } = contentfulCaseStudy
  const { nodes: services } = allContentfulService
  const testimonial = {
    quote: `<p>webuild has supercharged our design and development through a robust and flexible design system. Their organization and execution have allowed us to move so much faster. <span class="font-extrabold">The thing I value most is their ability to form a partnership with us. I have never experienced anything quite like it working with countless others.</span> They take feedback and always make sure they’re doing it right. I truly recommend webuild to anyone who asks.</p>`,
    personInfo: {
      name: `Josh Wexler`,
      title: `CEO/Founder`,
      company: `Tetra Insights`
    },
    image: wexler
  }
  return (
    <>
      <Meta
        description={metaDescription}
        location={location}
        title={seoTitle}
      />
      <div className="tetra" id="tetra-container">
        <main>
          <CaseStudyHero
            illustration={<HeroIllustration className="w-full h-auto" />}
          />
          <CaseStudyIntro
            headline="A Solid Design Foundation Boosted Velocity & Slashed Inefficiency for this User Research Platform."
            logo={logo}
            subheadline="A robust design system and prototype empowered this dev team to create a best-in-class product experience"
          />
          <CaseStudyBeforeAndAfter
            afterImage={afterImage.publicURL}
            beforeImage={beforeImage.publicURL}
            description={`<p class='text-body'><a class='text-electricViolet' target='_blank' href='https://www.tetrainsights.com/'>Tetra Insights</a> is a user research platform that helps organizations manage all aspects of the qualitative research process from customer interviews to insight analysis — at scale. Want to automate your research ops, streamline your qualitative data analysis, and be an insights-driven organization? Tetra is calling your name.</p>`}
          />
          <ChallengeSolution
            bgColor="foundation"
            challenge={<Challenge />}
            solution={<Solution />}
          />
          <div
            className=""
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(233, 234, 235, 0.21) 100%)`
            }}
          >
            <CaseStudyLargeImage
              containerClasses="max-w-screen-xl pt-18 md:px-14"
              image={sketches}
            />
            <CaseStudyContent
              content={projectMappingText}
              contentClasses="pt-8 lg:max-w-4xl"
            />
            <CaseStudyLargeImage
              containerClasses="max-w-screen-xl px-5 mt-12 md:px-14"
              image={pmImage}
            />
          </div>
          <CaseStudyContent
            buttons={designSystemButton}
            content={designSystemsText}
            contentClasses="pt-0 lg:max-w-4xl"
            sectionClasses="md:mt-24 md:w-10/12 md:pb-16 mx-auto"
          />
          <CaseStudyXLargeImage
            image={dsImage}
            imageClasses="transform translate-x-3/20"
          />
          <CaseStudyContent
            content={designSystemTextTwo}
            sectionClasses="my-8 md:w-10/12 mx-auto md:my-16 lg:my-20 xl:24"
          />
          <CaseStudyLargeImage
            bgClasses="bg-gray-200 top-0 left-0 h-5/6"
            containerClasses="md:w-9/12 lg:w-auto max-w-screen-xl px-5 mt-0 py-6 md:pt-18 md:px-14"
            image={dsGridImage}
          />
          <CaseStudyContent
            buttons={productDesignButton}
            content={productDesignText}
            contentClasses="px-0 lg:max-w-4xl"
            sectionClasses="md:my-16 md:w-10/12 mx-auto"
          />
          <CaseStudyXLargeImage bgColor="" image={gridImage} />
          <CaseStudyTestimonial testimonial={testimonial} />
          <CaseStudyLargeImage
            containerClasses="mt-12 md:mt-16 min1900:max-w-screen-xl"
            image={flowImage}
          />
          <CaseStudyContent
            content={servicesTest}
            sectionClasses="py-8 md:py-16 md:w-10/12 mx-auto"
          />
        </main>
        <div className="Quadpay-opportunity-form lg:pt-10 lg:pb-16">
          <OpportunityForm
            buttonText="Let's Meet"
            location={location.href}
            title="Set up a meeting - we'd love to chat"
          />
        </div>

        <OtherServices
          bgColor="bg-white"
          services={services}
          title="How We Got There"
        />
        <RelatedCaseStudies caseStudies={nextCaseStudies} />
        <Footer />
      </div>
    </>
  )
}

export const TETRA_QUERY = graphql`
  query tetraQuery {
    contentfulCaseStudy(name: { eq: "Tetra" }) {
      nextCaseStudies {
        logo {
          file {
            url
          }
        }
        name
        slug
        tagline
      }

      metaDescription {
        metaDescription
      }
      seoTitle
    }

    logo: file(relativePath: { eq: "case-studies/tetra/tetra-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    beforeImage: file(
      relativePath: { eq: "case-studies/tetra/before-image.png" }
    ) {
      publicURL
    }
    afterImage: file(
      relativePath: { eq: "case-studies/tetra/after-image.png" }
    ) {
      publicURL
    }

    sketches: file(
      relativePath: { eq: "case-studies/tetra/tetra-sketches.png" }
    ) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    pmImage: file(
      relativePath: { eq: "case-studies/tetra/tetra-project-mapping-image.png" }
    ) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    dsImage: file(
      relativePath: { eq: "case-studies/tetra/tetra-ds-image.png" }
    ) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    dsGridImage: file(
      relativePath: { eq: "case-studies/tetra/tetra-design-system-grid.png" }
    ) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    gridImage: file(
      relativePath: { eq: "case-studies/tetra/tetra-image-on-grid.png" }
    ) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    wexler: file(relativePath: { eq: "case-studies/tetra/josh-wexler.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    flowImage: file(relativePath: { eq: "case-studies/tetra/flow-image.png" }) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    allContentfulService(
      filter: { shortTitle: { in: ["Product Design", "Design Systems"] } }
    ) {
      nodes {
        shortTitle
        slug
        otherServicesIllustration {
          file {
            url
          }
        }
        otherServicesGif {
          file {
            url
          }
        }
      }
    }
  }
`

export default Tetra
