import { Document } from '@contentful/rich-text-types'
import { TypeAuthor } from './Author'

export interface TypeBlogPost {
  title: string
  slug: string
  content: Document
  publishDate: string
  readNext?: TypeBlogPost[]
  topic?: string[]
  author: TypeAuthor
}
