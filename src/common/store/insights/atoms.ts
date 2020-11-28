import { atom } from 'recoil'
import { TypeInsight } from '../../types/Insight'

interface filteredPostsState {
  items: TypeInsight[]
  loading: boolean
}

export const filteredPostsAtom = atom<filteredPostsState>({
  key: 'FilteredPosts',
  default: {
    items: [],
    loading: false
  }
})
