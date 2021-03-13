// Packages
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

// Common
import { TypeAuthor } from '@common/types/Author'
import { TypeCarousel } from '@common/types/Carousel'
import { TypeContentfulAsset } from '@common/types/Contentful'

export type TypeInsightType =
  | 'Article'
  | 'White Paper'
  | 'Email Course'
  | 'Event'
  | 'Podcast'
  | 'Publication'
  | 'Video'
  | 'Webinar'

export type TypeInsightTopic =
  | 'Design Strategy'
  | 'Design Systems'
  | 'Performance'
  | 'Process'
  | 'Product Design'
  | 'Tools & Trends'

export interface TypeInsight {
  type: TypeInsightType
  title: string
  subtitle?: string
  slug: string
  heroIllustration?: TypeContentfulAsset
  mobileListingIllustration?: TypeContentfulAsset
  listingIllustration?: TypeContentfulAsset
  featuredIllustration?: TypeContentfulAsset
  content: RenderRichTextData<TypeCarousel | TypeContentfulAsset>
  publishDate: string
  readNext?: TypeInsight[]
  author: TypeAuthor
  hashtags?: string[]
  topics?: TypeInsightTopic[]
  shareQuote?: {
    shareQuote: string
  }
}
