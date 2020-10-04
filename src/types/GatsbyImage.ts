import { FixedObject, FluidObject } from 'gatsby-image'

export type GatsbyImageFixed = {
  fixed: FixedObject
}

export type GatsbyImageFluid = {
  fluid: FluidObject
}

export type GatsbyImageFile = {
  file: {
    url: string
  }
}
