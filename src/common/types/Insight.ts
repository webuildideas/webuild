// Packages
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

// Common
import { TypeAuthor } from '@common/types/Author'
import { TypeCarousel } from '@common/types/Carousel'
import { TypeContentfulAsset } from '@common/types/Contentful'

export type InsightType =
  | 'Article'
  | 'White Paper'
  | 'Email Course'
  | 'Event'
  | 'Podcast'
  | 'Publication'
  | 'Video'
  | 'Webinar'

export type InsightTopic =
  | 'clients'
  | 'design'
  | 'digital'
  | 'expertise'
  | 'growth'
  | 'management'
  | 'marketing'
  | 'processes'
  | 'roles'
  | 'team'

export interface TypeInsight {
  type: InsightType
  title: string
  slug: string
  illustration?: TypeContentfulAsset
  content: RenderRichTextData<TypeCarousel | TypeContentfulAsset>
  publishDate: string
  readNext?: TypeInsight[]
  author: TypeAuthor
  hashtags?: string[]
  topics?: InsightTopic[]
  shareQuote?: {
    shareQuote: string
  }
}
