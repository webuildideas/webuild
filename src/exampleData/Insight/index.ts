import { TypeInsight } from '@common/types/Insight'
import { AUTHOR } from '../Author'

export const INSIGHT_ARTICLE: TypeInsight = {
  type: 'Article',
  topics: ['clients'],
  title: 'Amazing article about design',
  slug: 'amazing-article',
  publishDate: '02-22-2021',
  content: {
    raw: 'Content of this article!',
    references: []
  },
  author: AUTHOR
}
