import { TypeListItem } from '@common/types/ListItem'

export enum UnorderedListTypeEnum {
  BLOCK_TITLE = 'BLOCK TITLE',
  BLOCK_TITLE_NO_STYLE = 'BLOCK TITLE NO LIST STYLE',
  NO_TITLE = 'NO TITLE'
}

export interface TypeUnorderedList {
  unorderedListType: UnorderedListTypeEnum
  listItems: TypeListItem[]
}

export function isUnorderedList(value: unknown): value is TypeUnorderedList {
  return (
    typeof value === 'object' &&
    value !== null &&
    'unorderedListType' in value &&
    'listItems' in value
  )
}
