import { TypeContentfulAsset } from '@common/types/Contentful'
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { TypeTestimonial } from '@common/types/Testimonial'
import { TypeCaseStudy } from '@common/types/CaseStudy'
import { TypeSEO } from './SEO'

export interface TypeService {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  tagline: string
  intro: RenderRichTextData<never>
  firstContentBlock: RenderRichTextData<never>
  testimonials: TypeTestimonial[]
  caseStudies: TypeCaseStudy[]
  secondContentBlock?: RenderRichTextData<never>
  illustration: TypeContentfulAsset
  listingIllustration: TypeContentfulAsset
  listingIllustrationGif: TypeContentfulAsset
  otherServicesIllustration: TypeContentfulAsset
  seo?: TypeSEO
}
