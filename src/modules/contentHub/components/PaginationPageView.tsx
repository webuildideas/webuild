// Packages
import React, { MouseEvent } from 'react'

// Common
import { classNames } from '@common/utils/classNames'

interface Props {
  pageSelectedHandler: (evt: MouseEvent<HTMLElement>) => void
  selected: boolean
  page: number
}

const PageView = ({ pageSelectedHandler, selected, page }: Props) => {
  const pageClasses = classNames({
    'Pagination-page': true,
    'text-tag': true,
    'is-active': selected
  })

  return (
    <div className={pageClasses}>
      <button onClick={pageSelectedHandler} type="button">
        {page}
      </button>
    </div>
  )
}

export default PageView
