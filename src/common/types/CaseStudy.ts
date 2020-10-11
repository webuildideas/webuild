import { Document } from '@contentful/rich-text-types'
import { GatsbyImageFluid, GatsbyImageFile } from './GatsbyImage'
import { FeaturedTestimonial } from './Testimonial'

export type CaseStudy = {
  name: string
  tagline?: string
  slug: string
  heroImage?: GatsbyImageFluid
  heroBackgroundImage?: GatsbyImageFile
  whiteLogo?: GatsbyImageFile
  logo?: GatsbyImageFile
  listingImage?: GatsbyImageFluid
  successSummary: {
    successSummary: string
  }
  solutionSummary?: {
    solutionSummary: string
  }
  challengeSummary?: {
    challengeSummary: string
  }
  designSystemCarousel?: {
    images: GatsbyImageFluid[]
  }
  resultOne?: { json: Document }
  resultTwo?: { json: Document }
  resultThree?: { json: Document }
  featuredTestimonial?: FeaturedTestimonial
  projectChallenge?: { json: Document }
  projectOutcome?: { json: Document }
  projectOverview?: { json: Document }
  projectSolution?: { json: Document }
}

export type CaseStudyDetail = {
  name: string
  tagline?: string
  slug: string
  heroImage?: GatsbyImageFluid
  heroBackgroundImage?: GatsbyImageFile
  whiteLogo?: GatsbyImageFile
  logo?: GatsbyImageFile
  successSummary: {
    successSummary: string
  }
  solutionSummary?: {
    solutionSummary: string
  }
  challengeSummary?: {
    challengeSummary: string
  }
  designSystemCarousel?: {
    images: GatsbyImageFluid[]
  }
  resultOne?: Document
  resultTwo?: Document
  resultThree?: Document
  featuredTestimonial?: FeaturedTestimonial
  projectChallenge?: Document
  projectOutcome?: Document
  projectOverview?: Document
  projectSolution?: Document
  nextCaseStudy?: CaseStudy
}
