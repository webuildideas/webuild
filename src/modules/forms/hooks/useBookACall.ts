// Packages
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

// Atoms
import { bookACallFormModalIsVisible } from '../atoms/bookACallFormModalIsVisible'

const useBookACall = (): {
  showBookModal: () => void
  closeModal: () => void
  isVisible: boolean
} => {
  const [isVisible, setIsOpportunityFormVisible] = useRecoilState(
    bookACallFormModalIsVisible
  )

  const showBookModal = useCallback(() => setIsOpportunityFormVisible(true), [
    setIsOpportunityFormVisible
  ])

  const closeModal = useCallback(() => setIsOpportunityFormVisible(false), [
    setIsOpportunityFormVisible
  ])

  return {
    showBookModal,
    closeModal,
    isVisible
  }
}

export default useBookACall
