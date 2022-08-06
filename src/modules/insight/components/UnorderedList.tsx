// Packages
import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Commons
import { TypeListItem } from '@common/types/ListItem'
import { blocksOptions } from '@modules/insight/rich-text-options'
import {
  TypeUnorderedList,
  UnorderedListTypeEnum
} from '@common/types/UnorderedList'

interface UnorderedListTypeProps {
  listItems: TypeListItem[]
}

const UlBlockTitle = ({ listItems }: UnorderedListTypeProps) => {
  return (
    <ul className="Insight-ul-bt">
      {listItems.map((item, idx) => {
        const { title, content, image } = item
        return (
          <li key={`item-${idx}`}>
            {image?.file.url ? (
              <img
                alt="list item"
                className="Insight-ul-bt__img"
                src={image.file.url}
              />
            ) : null}

            {title ? (
              <div className="Insight-ul-btns__title">
                {renderRichText(title, blocksOptions)}
              </div>
            ) : null}

            {renderRichText(content, blocksOptions)}
          </li>
        )
      })}
    </ul>
  )
}

const UlBlockTitleNoStyle = ({ listItems }: UnorderedListTypeProps) => {
  return (
    <ul className="Insight-ul-btns">
      {listItems.map((item, idx) => {
        const { title, content, image } = item
        return (
          <li key={`item-${idx}`}>
            {image?.file.url ? (
              <img
                alt="List Item"
                className="Insight-ul-btns__img"
                src={image.file.url}
              />
            ) : null}

            {title ? (
              <div className="Insight-ul-btns__title">
                {renderRichText(title, blocksOptions)}
              </div>
            ) : null}

            {renderRichText(content, blocksOptions)}
          </li>
        )
      })}
    </ul>
  )
}

interface UnorderedListProps {
  unorderedList: TypeUnorderedList
}

const UnorderedList = ({ unorderedList }: UnorderedListProps) => {
  if (!unorderedList.listItems || unorderedList.listItems.length === 0) {
    return null
  }

  switch (unorderedList.unorderedListType) {
    case UnorderedListTypeEnum.BLOCK_TITLE:
      return <UlBlockTitle listItems={unorderedList.listItems} />
    case UnorderedListTypeEnum.BLOCK_TITLE_NO_STYLE:
      return <UlBlockTitleNoStyle listItems={unorderedList.listItems} />
    default:
      return null
  }
}

export default UnorderedList
