import React, { memo, useCallback, useRef } from 'react'
import CloseIcon from '@static/svgs/closeIcon.inline.svg'
import OpportunityForm from '../OpportunityForm'

import '../styles/OpportunityFormModal.css'
import useOpportunityFormModal from '../hooks/useOpportunityFormModal'

interface Props {
  location: string
}

const OpportunityFormModal = memo(function OpportunityFormModalMemo({
  location
}: Props) {
  const formRef = useRef<HTMLDivElement>(null)
  const { isVisible, closeModal } = useOpportunityFormModal()

  const handleBackgroundPress = useCallback(
    (event) => {
      if (
        isVisible &&
        formRef.current &&
        formRef.current.contains(event.target)
      ) {
        return
      }

      closeModal()
    },
    [isVisible, formRef, closeModal]
  )

  return isVisible ? (
    <div
      className="OpportunityFormModal"
      onClick={handleBackgroundPress}
      role="button"
    >
      <div ref={formRef} className="OpportunityFormModal-form bg-white">
        <CloseIcon
          className="OpportunityFormModal-close text-blueRibbon"
          onClick={closeModal}
        />
        <OpportunityForm location={location} />
      </div>
    </div>
  ) : null
})

export default OpportunityFormModal
