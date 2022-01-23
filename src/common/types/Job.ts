import { TypeContentfulAsset } from './Contentful'

export interface TypeJob {
  isOpen: boolean
  title: string
  description?: string
  illustration?: TypeContentfulAsset
  location?: string
  applicationLink: string
}
