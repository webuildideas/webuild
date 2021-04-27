/* eslint-disable camelcase */
// Common
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

export interface TypeCarousel {
  name?: string
  images: TypeGatsbyImageFluid[]
  __typename: string
  contentful_id: string
}
