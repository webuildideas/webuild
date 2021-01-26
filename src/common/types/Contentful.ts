/* eslint-disable camelcase */
export interface TypeContentfulAsset {
  __typename: string
  contentful_id: string
  url?: string
  file: {
    url: string
    details?: {
      size?: number
      image?: {
        width?: number
        height?: number
      }
    }
    fileName?: string
  }
}
