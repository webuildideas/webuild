// Packages
import React, { useCallback, memo, useRef } from 'react'

// Components
import BookACallForm from '@modules/forms/BookACallForm'

// Hooks
import useBookACallFormModal from '@modules/forms/hooks/useBookACallFormModal'

// Icon
import CloseIcon from '@static/svgs/closeIcon.inline.svg'

// Styles
import '../styles/BookACallFormModal.css'

interface Props {
  location: string
  successButtonText?: string
  successButtonTo?: string
}

const BookACallFormModal = memo(function BookACallFormModalMemo({
  location,
  successButtonText,
  successButtonTo
}: Props) {
  const formRef = useRef<HTMLDivElement>(null)
  const { isVisible, closeModal } = useBookACallFormModal()

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
      className="BookACallFormModal"
      onClick={handleBackgroundPress}
      role="button"
    >
      <div ref={formRef} className="BookACallFormModal-form">
        <CloseIcon
          className="BookACallFormModal-close text-gray-800"
          onClick={closeModal}
        />
        <BookACallForm
          className="form"
          location={location}
          successButtonText={successButtonText}
          successButtonTo={successButtonTo}
        />
      </div>
    </div>
  ) : null
})

export default BookACallFormModal
