import { Document } from '@contentful/rich-text-types'
import { TypeAuthor } from './Author'
import { TypeTopic } from './Topic'

export interface TypeBlogPost {
  title: string
  slug: string
  content: Document
  publishDate: string
  readNext?: TypeBlogPost[]
  topics?: TypeTopic[]
  author: TypeAuthor
  hashtags?: string[]
  shareQuote?: {
    shareQuote: string
  }
}
