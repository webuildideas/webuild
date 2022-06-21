import { TypeGatsbyImageFluid } from './GatsbyImage'

export interface TypeSidebarAd {
  id: string
  copy?: string
  ctaLink: {
    slug: string
  }
  ctaText: string
  headline: string
  image: TypeGatsbyImageFluid
  mobileImage: TypeGatsbyImageFluid
  eBook: boolean
  customCtaLink: string
}
