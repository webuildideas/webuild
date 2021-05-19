import { TypeContentfulAsset } from '@common/types/Contentful'

export interface TypeService {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  tagline: string
  illustration: TypeContentfulAsset
  listingIllustration: TypeContentfulAsset
  listingIllustrationGif: TypeContentfulAsset
  otherServicesIllustration: TypeContentfulAsset
}
