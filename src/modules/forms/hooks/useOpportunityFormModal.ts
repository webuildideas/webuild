import { useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { opportunityFormModalEmail } from '../atoms/opportunityFormModalEmail'
import { opportunityFormModalIsVisible } from '../atoms/opportunityFormModalIsVisible'

const useOpportunityFormModal = (): {
  showModal: () => void
  closeModal: () => void
  setFormEmail: (email: string) => void
  isVisible: boolean
} => {
  const [isVisible, setIsOpportunityFormVisible] = useRecoilState(
    opportunityFormModalIsVisible
  )
  const setEmail = useSetRecoilState(opportunityFormModalEmail)

  const showModal = useCallback(() => setIsOpportunityFormVisible(true), [
    setIsOpportunityFormVisible
  ])

  const closeModal = useCallback(() => setIsOpportunityFormVisible(false), [
    setIsOpportunityFormVisible
  ])

  const setFormEmail = useCallback(
    (email: string) => {
      setEmail(email)
    },
    [setEmail]
  )

  return {
    showModal,
    closeModal,
    setFormEmail,
    isVisible
  }
}

export default useOpportunityFormModal
