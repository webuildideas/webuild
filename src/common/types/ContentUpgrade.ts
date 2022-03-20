import { TypeContentfulAsset } from './Contentful'

export interface TypeContentUpgrade {
  title: string
  simpleFormTitle: string
  blurb?: {
    blurb: string
  }
  resourceFormTitle?: string
  resourceBlurb?: {
    resourceBlurb: string
  }
  formImage?: TypeContentfulAsset
  upgradeContent: TypeContentfulAsset
}
