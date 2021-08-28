import { TypeContentfulAsset } from './Contentful'

export interface TypeSEO {
  seoTitle?: string
  seoDescription?: {
    seoDescription: string
  }
  seoShareImage?: TypeContentfulAsset
}
