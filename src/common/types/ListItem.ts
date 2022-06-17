import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

import { TypeContentfulAsset } from '@common/types/Contentful'

export interface TypeListItem {
  image?: TypeContentfulAsset
  title?: RenderRichTextData<never>
  content: RenderRichTextData<never>
}
