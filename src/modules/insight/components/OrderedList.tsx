import './styles/OrderedList.css'

// Packages
import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Common
import { OrderedListTypeEnum, TypeOrderedList } from '@common/types/OrderedList'
import { TypeListItem } from '@common/types/ListItem'
import { blocksOptions } from '@modules/insight/rich-text-options'

interface OrderedListTypeProps {
  listItems: TypeListItem[]
}

const OrderedListInline = ({ listItems }: OrderedListTypeProps) => {
  return (
    <ol className="Insight-ol-inline">
      {listItems.map((item, idx) => {
        return (
          <li key={`item-${idx}`}>
            <div className="Insight-ol-inline__content">
              {renderRichText(item.content, blocksOptions)}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

const OrderedListBlock = ({ listItems }: OrderedListTypeProps) => {
  return (
    <ol className="Insight-ol-bt">
      {listItems.map((item, idx) => {
        const { title, content, image } = item
        return (
          <li key={`item-${idx}`}>
            {image?.file.url ? (
              <img
                alt="list item"
                className="Insight-ol-bt__img"
                src={image.file.url}
              />
            ) : null}
            <div className="Insight-ol-bt__content">
              <div className="Insight-ol-bt__copy">
                {title ? (
                  <div className="Insight-ol-bt__title">
                    {renderRichText(title, blocksOptions)}
                  </div>
                ) : null}

                {renderRichText(content, blocksOptions)}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

const OrderedListSteps = ({ listItems }: OrderedListTypeProps) => {
  return (
    <ol className="Insight-ol-steps">
      {listItems.map((item, idx) => {
        const { title, content, image } = item
        return (
          <li key={`item-${idx}`}>
            {image?.file.url ? (
              <img
                alt="List item"
                className="Insight-ol-steps__img"
                src={image.file.url}
              />
            ) : null}

            {title ? (
              <div className="Insight-ol-steps__title">
                {renderRichText(title, blocksOptions)}
              </div>
            ) : null}

            {renderRichText(content, blocksOptions)}
          </li>
        )
      })}
    </ol>
  )
}

interface OrderedListProps {
  orderedList: TypeOrderedList
}

const OrderedList = ({ orderedList }: OrderedListProps) => {
  if (!orderedList.listItems || orderedList.listItems.length === 0) {
    return null
  }

  switch (orderedList.orderedListType) {
    case OrderedListTypeEnum.INLINE:
      return <OrderedListInline listItems={orderedList.listItems} />
    case OrderedListTypeEnum.BLOCK_TITLE:
      return <OrderedListBlock listItems={orderedList.listItems} />
    case OrderedListTypeEnum.STEPS:
      return <OrderedListSteps listItems={orderedList.listItems} />
    default:
      return null
  }
}

export default OrderedList
