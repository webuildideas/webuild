import { TypeContentfulAsset } from '@common/types/Contentful'
import { TypeGatsbyImageFluid } from './GatsbyImage'

export enum ImageStylingEnum {
  FULL_WIDTH = 'FULL WIDTH',
  LEFT_ALIGNED = 'LEFT ALIGNED',
  CENTER_ALIGNED = 'CENTER ALIGNED'
}

export interface TypeImage {
  asset: TypeGatsbyImageFluid | TypeContentfulAsset
  altText?: string
  caption?: string
  imageStyling?: ImageStylingEnum
  imageType?: string[]
}

export function isWebuildImage(value: unknown): value is TypeImage {
  return (
    typeof value === 'object' &&
    value !== null &&
    'asset' in value &&
    'caption' in value &&
    'imageStyling' in value
  )
}
