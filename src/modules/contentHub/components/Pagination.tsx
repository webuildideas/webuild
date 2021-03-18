/* eslint-disable react/jsx-no-bind */
// Packages
import React, { useState, useCallback, useEffect } from 'react'

// Common
import { classNames } from '@common/utils/classNames'

// Components
import ArrowRight from '@static/svgs/common/arrows/arrow-simple-right.inline.svg'
import ArrowLeft from '@static/svgs/common/arrows/arrow-simple-left.inline.svg'
import PaginationPageView from './PaginationPageView'
import PaginationBreakView from './PaginationBreakView'

// Styles
import './styles/Pagination.css'

interface Props {
  pageCount: number
  pageRangeDisplayed: number
  marginPagesDisplayed: number
  onPageChange: (selectedItem: { selected: number }) => void
  initialPage?: number
  forcePage?: number
}

const Pagination = ({
  pageCount = 10,
  pageRangeDisplayed = 2,
  marginPagesDisplayed = 3,
  onPageChange,
  initialPage,
  forcePage
}: Props) => {
  const initialSelected = initialPage || forcePage || 0
  const [selected, setSelected] = useState(initialSelected)

  const callCallback = useCallback(
    (selectedItem) => {
      onPageChange({ selected: selectedItem })
    },
    [onPageChange]
  )

  const handlePageSelected = useCallback(
    (newSelected, evt) => {
      evt.preventDefault()
      if (selected === newSelected) {
        return
      }
      setSelected(newSelected)
      callCallback(newSelected)
    },
    [callCallback, selected]
  )

  const handlePreviousPage = useCallback(
    (evt) => {
      evt.preventDefault()
      if (selected > 0) {
        handlePageSelected(selected - 1, evt)
      }
    },
    [handlePageSelected, selected]
  )

  const handleNextPage = useCallback(
    (evt) => {
      evt.preventDefault()
      if (selected < pageCount - 1) {
        handlePageSelected(selected + 1, evt)
      }
    },
    [handlePageSelected, pageCount, selected]
  )

  const getForwardJump = useCallback(() => {
    const forwardJump = selected + pageRangeDisplayed
    return forwardJump >= pageCount ? pageCount - 1 : forwardJump
  }, [pageCount, pageRangeDisplayed, selected])

  const getBackwardJump = useCallback(() => {
    const backwardJump = selected - pageRangeDisplayed
    return backwardJump < 0 ? 0 : backwardJump
  }, [pageRangeDisplayed, selected])

  const handleBreakClick = useCallback(
    (index, evt) => {
      evt.preventDefault()
      handlePageSelected(
        selected < index ? getForwardJump() : getBackwardJump(),
        evt
      )
    },
    [handlePageSelected, getForwardJump, getBackwardJump, selected]
  )

  const getPageElement = useCallback(
    (index: number) => {
      return (
        <PaginationPageView
          key={index}
          page={index + 1}
          pageSelectedHandler={handlePageSelected.bind(null, index)}
          selected={selected === index}
        />
      )
    },
    [handlePageSelected, selected]
  )

  const pagination = useCallback(() => {
    const items = []

    if (pageCount <= pageRangeDisplayed) {
      for (let index = 0; index < pageCount; index += 1) {
        items.push(getPageElement(index))
      }
    } else {
      let leftSide = pageRangeDisplayed / 2
      let rightSide = pageRangeDisplayed - leftSide

      // If the selected page index is on the default right side of the pagination,
      // we consider that the new right side is made up of it (= only one break element).
      // If the selected page index is on the default left side of the pagination,
      // we consider that the new left side is made up of it (= only one break element).
      if (selected > pageCount - pageRangeDisplayed / 2) {
        rightSide = pageCount - selected
        leftSide = pageRangeDisplayed - rightSide
      } else if (selected < pageRangeDisplayed / 2) {
        leftSide = selected
        rightSide = pageRangeDisplayed - leftSide
      }

      let index
      let page
      let breakView
      const createPageView = (idx: number) => getPageElement(idx)

      for (index = 0; index < pageCount; index += 1) {
        page = index + 1

        // If the page index is lower than the margin defined,
        // the page has to be displayed on the left side of
        // the pagination.
        if (page <= marginPagesDisplayed) {
          items.push(createPageView(index))
        }

        // If the page index is greater than the page count
        // minus the margin defined, the page has to be
        // displayed on the right side of the pagination.
        if (page > pageCount - marginPagesDisplayed) {
          items.push(createPageView(index))
        }

        // If the page index is near the selected page index
        // and inside the defined range (pageRangeDisplayed)
        // we have to display it (it will create the center
        // part of the pagination).
        if (index >= selected - leftSide && index <= selected + rightSide) {
          items.push(createPageView(index))
        }

        // If the page index doesn't meet any of the conditions above,
        // we check if the last item of the current "items" array
        // is a break element. If not, we add a break element, else,
        // we do nothing (because we don't want to display the page).
        if (items[items.length - 1] !== breakView) {
          breakView = (
            <PaginationBreakView
              key={index}
              breakHandler={handleBreakClick.bind(null, index)}
            />
          )
          items.push(breakView)
        }
      }
    }

    return items
  }, [
    handleBreakClick,
    getPageElement,
    marginPagesDisplayed,
    pageCount,
    pageRangeDisplayed,
    selected
  ])

  useEffect(() => {
    if (initialPage) {
      callCallback(initialPage)
    }
  }, [initialPage, callCallback])

  const prevClasses = classNames({
    'Pagination-prev': true,
    'text-page-navigation': true
  })

  const prevButtonClasses = classNames({
    hidden: selected === 0
  })

  const nextClasses = classNames({
    'Pagination-next': true,
    'text-page-navigation': true
  })

  const nextButtonClasses = classNames({
    hidden: selected === pageCount - 1
  })

  return (
    <div className="Pagination">
      <div className={prevClasses}>
        <button
          className={prevButtonClasses}
          onClick={handlePreviousPage}
          type="button"
        >
          <span className="hidden lg:inline-block">Previous</span>
          <ArrowLeft className="lg:hidden" />
        </button>
      </div>

      <div>{pagination()}</div>

      <div className={nextClasses}>
        <button
          className={nextButtonClasses}
          onClick={handleNextPage}
          type="button"
        >
          <span className="hidden lg:inline-block">Next</span>
          <ArrowRight className="lg:hidden" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
