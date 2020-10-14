import { Document } from '@contentful/rich-text-types'

export interface TypeBlogPost {
  title: string
  slug: string
  content: Document
  publishDate: string
  readNext?: TypeBlogPost[]
  topic?: string[]
}
