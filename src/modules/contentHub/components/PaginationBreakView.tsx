// Packages
import React, { MouseEvent } from 'react'

interface Props {
  breakHandler: (evt: MouseEvent<HTMLElement>) => void
}
const BreakView = ({ breakHandler }: Props) => {
  return (
    <div className="Pagination-break">
      <button onClick={breakHandler} type="button">
        ...
      </button>
    </div>
  )
}

export default BreakView
