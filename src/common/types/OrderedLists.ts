import { TypeListItem } from '@common/types/ListItem'

export enum OrderedListTypeEnum {
  INLINE = 'INLINE',
  BLOCK_TITLE = 'BLOCK TITLE',
  BLOCK_TITLE_IMAGE = 'BLOCK TITLE IMAGE',
  STEPS = 'STEPS'
}

export interface TypeOrderedList {
  orderedListType: OrderedListTypeEnum
  listItems: TypeListItem[]
}

export function isOrderedList(value: unknown): value is TypeOrderedList {
  return (
    typeof value === 'object' &&
    value !== null &&
    'orderedListType' in value &&
    'listItems' in value
  )
}
