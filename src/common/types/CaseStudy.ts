// Common
import { TypeTestimonial } from '@common/types/Testimonial'
import { TypeContentfulAsset } from '@common/types/Contentful'
import { TypeCarousel } from '@common/types/Carousel'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

export interface TypeCaseStudy {
  name: string
  slug?: string
  listingImage: TypeGatsbyImageFluid
  tagline: string
  taglineRichText?: RenderRichTextData<never>
  seoTitle: string
  metaDescription: string
  nextCaseStudies: TypeCaseStudy[]
  logo: TypeContentfulAsset // Deprecated
  whiteLogo?: TypeContentfulAsset // Deprecated
  heroBackgroundImage?: TypeContentfulAsset // Deprecated
  heroImage?: TypeGatsbyImageFluid // Deprecated
  successSummary: {
    // Deprecated
    successSummary: string
  }
  challengeSummary?: {
    // Deprecated
    challengeSummary: string
  }
  solutionSummary?: {
    // Deprecated
    solutionSummary: string
  }
  designSystemCarousel?: TypeCarousel // Deprecated
  resultOne?: RenderRichTextData<never> // Deprecated
  resultTwo?: RenderRichTextData<never> // Deprecated
  resultThree?: RenderRichTextData<never> // Deprecated
  featuredTestimonial?: TypeTestimonial // Deprecated
  projectOverview?: RenderRichTextData<TypeCarousel | TypeContentfulAsset> // Deprecated
  projectChallenge?: RenderRichTextData<TypeCarousel | TypeContentfulAsset> // Deprecated
  projectSolution?: RenderRichTextData<TypeCarousel | TypeContentfulAsset> // Deprecated
  projectOutcome?: RenderRichTextData<TypeCarousel | TypeContentfulAsset> // Deprecated
  nextCaseStudy?: TypeCaseStudy // Deprecated
}
