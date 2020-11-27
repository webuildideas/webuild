import { Document } from '@contentful/rich-text-types'
import { TypeAuthor } from './Author'
// import { TypeTopic } from './Topic'

export enum InsightType {
  article = 'ARTICLE',
  whitePaper = 'WHITE_PAPER'
}

export interface TypeInsight {
  type: InsightType
  title: string
  slug: string
  content: Document
  publishDate: string
  readNext?: TypeInsight[]
  author: TypeAuthor
  hashtags?: string[]
  shareQuote?: {
    shareQuote: string
  }
}
