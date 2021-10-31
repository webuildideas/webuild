import { TypeInsight } from '@common/types/Insight'
import { AUTHOR } from '../Author'

export const INSIGHT_ARTICLE: TypeInsight = {
  id: 'insight-article',
  type: 'Article',
  topics: ['Design Strategy'],
  title: 'Amazing article about design',
  isGated: false,
  slug: 'amazing-article',
  publishDate: '02-22-2021',
  content: {
    raw: 'Content of this article!',
    references: []
  },
  author: AUTHOR
}
