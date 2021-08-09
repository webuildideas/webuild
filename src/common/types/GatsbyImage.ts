/* eslint-disable camelcase */
// Packages
import { FixedObject, FluidObject } from 'gatsby-image'

export interface TypeGatsbyImageFixed {
  fixed: FixedObject
}

export interface TypeGatsbyImageFluid {
  fluid: FluidObject
}

export interface TypeGatsbyChildImageSharpFluid {
  childImageSharp: {
    fluid: FluidObject
  }
}
