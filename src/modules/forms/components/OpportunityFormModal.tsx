import React, { memo } from 'react'
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
  const { isVisible, closeModal } = useOpportunityFormModal()

  return isVisible ? (
    <div className="OpportunityFormModal">
      <div className="OpportunityFormModal-form bg-foundation">
        <CloseIcon
          className="OpportunityFormModal-close text-gray-800"
          onClick={closeModal}
        />
        <OpportunityForm location={location} />
      </div>
    </div>
  ) : null
})

export default OpportunityFormModal
