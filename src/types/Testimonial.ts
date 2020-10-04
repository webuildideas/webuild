import { GatsbyImageFixed } from './GatsbyImage'

export type Testimonial = {
  company: string
  headshot: GatsbyImageFixed
  name: string
  role: string
  testimonial: {
    testimonial: string
  }
}

export type Testimonials = Testimonial[]
