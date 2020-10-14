import { TypeGatsbyImageFixed, TypeGatsbyImageFluid } from './GatsbyImage'

export interface TypeTestimonial {
  type?: 'Client' | 'Team Member'
  name: string
  headshot: TypeGatsbyImageFixed
  featuredHeadshot?: TypeGatsbyImageFluid
  role: string
  company: string
  testimonial: {
    testimonial: string
  }
}
