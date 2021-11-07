// Packages
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

// Atoms
import { bookACallFormModalIsVisible } from '../atoms/bookACallFormModalIsVisible'

const useBookACallFormModal = (): {
  showModal: () => void
  closeModal: () => void
  isVisible: boolean
} => {
  const [isVisible, setIsOpportunityFormVisible] = useRecoilState(
    bookACallFormModalIsVisible
  )

  const showModal = useCallback(() => setIsOpportunityFormVisible(true), [
    setIsOpportunityFormVisible
  ])

  const closeModal = useCallback(() => setIsOpportunityFormVisible(false), [
    setIsOpportunityFormVisible
  ])

  return {
    showModal,
    closeModal,
    isVisible
  }
}

export default useBookACallFormModal
