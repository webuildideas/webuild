import { TypeContentfulAsset } from './Contentful'

export interface TypeContentUpgrade {
  title: string
  simpleFormTitle: string
  blurb: {
    blurb: string
  }
  formImage: TypeContentfulAsset
  upgradeContent: TypeContentfulAsset
}
