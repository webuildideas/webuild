// Packages
// Common
import { TypeAuthor } from '@common/types/Author'
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { TypeCarousel } from './Carousel'
import { TypeContentfulAsset } from './Contentful'

export type InsightType = 'Article' | 'White Paper'
export interface TypeInsight {
  type: InsightType
  title: string
  slug: string
  content: RenderRichTextData<TypeCarousel | TypeContentfulAsset>
  publishDate: string
  readNext?: TypeInsight[]
  author: TypeAuthor
  hashtags?: string[]
  topics?: string[]
  shareQuote?: {
    shareQuote: string
  }
}
