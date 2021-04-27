// Packages
import { CSSProperties, ReactNode } from 'react'

export type ObjectValues<T> = T[keyof T]

export interface WithChildren {
  children?: ReactNode
}

export interface WithClassName {
  className?: string
}

export interface WithStyle {
  style?: CSSProperties
}
