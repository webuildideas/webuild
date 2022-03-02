import { TypeContentfulAsset } from './Contentful'

export interface TypeJob {
  isOpen: boolean
  priority: number
  title: string
  description?: {
    description: string
  }
  illustration?: TypeContentfulAsset
  location?: string
  applicationLink: string
}
