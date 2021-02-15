// Packages
import { atom } from 'recoil'

// Common
import { TypeInsight } from '@common/types/Insight'

interface InsightsState {
  items: TypeInsight[]
  loading: boolean
  filtersApplied: boolean
}

export const insightPostsAtom = atom<InsightsState>({
  key: 'Insights',
  default: {
    items: [],
    loading: false,
    filtersApplied: false
  }
})
