// Common
import { InsightType } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

// Assets
import Article from '@static/svgs/type/article.inline.svg'
import WhitePaper from '@static/svgs/type/white-paper.inline.svg'

type InsightTypeIconPayload = {
  icon: React.FC<WithClassName>
  name: string
}

type InsightTypeIconConfig = Record<InsightType, InsightTypeIconPayload>

export const insightTypeIconConfig: InsightTypeIconConfig = {
  Article: {
    icon: Article,
    name: 'Article'
  },
  'White Paper': {
    icon: WhitePaper,
    name: 'White Paper'
  }
}
