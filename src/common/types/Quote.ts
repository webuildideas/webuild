import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

export enum QuoteTypeEnum {
  DEFAULT = 'DEFAULT',
  SOURCED = 'SOURCED'
}

export interface TypeQuote {
  quoteType: QuoteTypeEnum
  quote: RenderRichTextData<never>
  source?: string
}

export function isQuote(value: unknown): value is TypeQuote {
  return (
    typeof value === 'object' &&
    value !== null &&
    'quoteType' in value &&
    'quote' in value
  )
}
