import { Document } from '@contentful/rich-text-types'
import { TypeTestimonial } from './Testimonial'
import { TypeContentfulAsset } from './Contentful'
import { TypeCarousel } from './Carousel'
import { TypeGatsbyImageFluid } from './GatsbyImage'

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
