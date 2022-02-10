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

export interface TypeGatsbyChildrenImageSharpFluid {
  childrenImageSharp: {
    '0': {
      fluid: FluidObject
    }
  }
}
