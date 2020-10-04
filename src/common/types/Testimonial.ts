import { GatsbyImageFixed, GatsbyImageFluid } from './GatsbyImage'

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

export type FeaturedTestimonial = {
  comapny: string
  name: string
  role: string
  testimonial: {
    testimonial: string
  }
  featuredHeadshot: GatsbyImageFluid
  headshot: GatsbyImageFixed
}
