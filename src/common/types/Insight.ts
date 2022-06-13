// Packages
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

// Common
import { TypeAuthor } from '@common/types/Author'
import { TypeCarousel } from '@common/types/Carousel'
import { TypeContentfulAsset } from '@common/types/Contentful'
import { TypeSidebarAd } from './Sidebar'
import { TypeContentUpgrade } from './ContentUpgrade'
import { TypeGatsbyImageFixed } from './GatsbyImage'

export type TypeInsightType =
  | 'Article'
  | 'White Paper'
  | 'eBook'
  | 'Email Course'
  | 'Event'
  | 'Podcast'
  | 'Publication'
  | 'Resource'
  | 'Video'
  | 'Webinar'

export type TypeInsightTopic =
  | 'Design Strategy'
  | 'Design Systems'
  | 'Performance'
  | 'Process'
  | 'Product Design'
  | 'Tools & Trends'
  | 'Product Marketing'

export interface TypeInsight {
  id: string
  isGated: boolean
  type: TypeInsightType
  title: string
  subtitle?: string
  slug: string
  heroIllustration?: TypeContentfulAsset
  listingIllustration?: TypeContentfulAsset
  mobileListingIllustration?: TypeContentfulAsset
  featuredIllustration?: TypeContentfulAsset
  content: RenderRichTextData<TypeCarousel | TypeContentfulAsset>
  publishDate: string
  readNext?: TypeInsight[]
  author: TypeAuthor
  hashtags?: string[]
  contentUpgrade?: TypeContentUpgrade
  topics?: TypeInsightTopic[]
  shareImage?: TypeGatsbyImageFixed
  metaDescription?: {
    metaDescription: string
  }
  shareQuote?: {
    shareQuote: string
  }
  seoTitle?: string
  sidebarAd?: TypeSidebarAd
}
