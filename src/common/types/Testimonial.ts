// Packages
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

// Common
import {
  TypeGatsbyImageFixed,
  TypeGatsbyImageFluid
} from '@common/types/GatsbyImage'

export interface TypeTestimonial {
  type?: 'Client' | 'Team Member'
  name: string
  headshot: any
  purpleHeadshot: any
  featuredHeadshot?: any
  mainHeadshot?: any
  role: string
  company: string
  testimonial: {
    testimonial: string
  }
  quote: RenderRichTextData<never>
  quoteShort?: RenderRichTextData<never>
}
