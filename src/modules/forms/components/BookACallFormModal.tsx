// Packages
import React, { memo } from 'react'
import CloseIcon from '@static/svgs/closeIcon.inline.svg'

// Components
import BookACallForm from '@modules/forms/BookACallForm'

// Hooks
import useBookACallFormModal from '@modules/forms/hooks/useBookACallFormModal'

// Styles
import '../styles/BookACallFormModal.css'

interface Props {
  location: string
}

const BookACallFormModal = memo(function BookACallFormModalMemo({
  location
}: Props) {
  const { isVisible, closeModal } = useBookACallFormModal()

  return isVisible ? (
    <div className="BookACallFormModal">
      <div className="BookACallFormModal-form bg-foundation">
        <CloseIcon
          className="BookACallFormModal-close text-gray-800"
          onClick={closeModal}
        />
        <BookACallForm className="form" location={location} />
      </div>
    </div>
  ) : null
})

export default BookACallFormModal
