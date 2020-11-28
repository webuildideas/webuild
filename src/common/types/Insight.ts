import { Document } from '@contentful/rich-text-types'
import { TypeAuthor } from './Author'
// import { TypeTopic } from './Topic'

export type InsightType = 'Article' | 'White Paper'
export interface TypeInsight {
  type: InsightType
  title: string
  slug: string
  content: Document
  publishDate: string
  readNext?: TypeInsight[]
  author: TypeAuthor
  hashtags?: string[]
  topics?: string[]
  shareQuote?: {
    shareQuote: string
  }
}
