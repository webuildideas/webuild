// Packages
import { atom } from 'recoil'

// Common
import { TypeInsight } from '@common/types/Insight'

interface filteredPostsState {
  items: TypeInsight[]
  loading: boolean
  fetched: boolean
}

export const filteredPostsAtom = atom<filteredPostsState>({
  key: 'FilteredPosts',
  default: {
    items: [],
    loading: false,
    fetched: false
  }
})
