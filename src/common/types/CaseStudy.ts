// Packages
import { Document } from '@contentful/rich-text-types'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'
import { TypeContentfulAsset } from '@common/types/Contentful'
import { TypeCarousel } from '@common/types/Carousel'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

export interface TypeCaseStudy {
  name: string
  slug?: string
  logo: TypeContentfulAsset
  whiteLogo?: TypeContentfulAsset
  heroBackgroundImage?: TypeContentfulAsset
  heroImage?: TypeGatsbyImageFluid
  listingImage: TypeGatsbyImageFluid
  tagline: string
  successSummary: {
    successSummary: string
  }
  challengeSummary?: {
    challengeSummary: string
  }
  solutionSummary?: {
    solutionSummary: string
  }
  designSystemCarousel?: TypeCarousel
  resultOne?: Document
  resultTwo?: Document
  resultThree?: Document
  featuredTestimonial?: TypeTestimonial
  projectOverview?: Document
  projectChallenge?: Document
  projectSolution?: Document
  projectOutcome?: Document
  nextCaseStudy?: TypeCaseStudy
}
