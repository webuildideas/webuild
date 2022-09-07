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

export function isContentUpgrade(value: unknown): value is TypeContentUpgrade {
  return (
    typeof value === 'object' &&
    value !== null &&
    'title' in value &&
    'simpleFormTitle' in value &&
    'upgradeContent' in value
  )
}
