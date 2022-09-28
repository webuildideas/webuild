import { GatsbyImage } from "gatsby-plugin-image";

export interface TypeGatsbyImageFixed {
  fixed: GatsbyImage
}

export interface TypeGatsbyImageFluid {
  childImageSharp: any
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
