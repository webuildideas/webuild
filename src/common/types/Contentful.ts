export interface TypeContentfulAsset {
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
