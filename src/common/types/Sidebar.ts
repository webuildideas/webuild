import { TypeGatsbyImageFluid } from './GatsbyImage'

export interface TypeSidebarAd {
  id: string
  copy?: string
  ctaLink: string
  ctaText: string
  headline: string
  image: TypeGatsbyImageFluid
  mobileImage: TypeGatsbyImageFluid
  resourceType: string
}
