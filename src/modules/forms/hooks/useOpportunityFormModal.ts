import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { opportunityFormModalIsVisible } from '../atoms/opportunityFormModalIsVisible'

const useOpportunityFormModal = (): {
  showModal: () => void
  closeModal: () => void
  isVisible: boolean
} => {
  const [isVisible, setIsOpportunityFormVisible] = useRecoilState(
    opportunityFormModalIsVisible
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

export default useOpportunityFormModal
