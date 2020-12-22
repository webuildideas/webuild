// Packages
import { atom } from 'recoil'

// Common
import { TypeInsight } from '@common/types/Insight'

interface FilteredPostsState {
  items: TypeInsight[]
  loading: boolean
  fetched: boolean
}

export const filteredPostsAtom = atom<FilteredPostsState>({
  key: 'FilteredPosts',
  default: {
    items: [],
    loading: false,
    fetched: false
  }
})
