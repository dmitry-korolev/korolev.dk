import React from 'react'

export type HeaderProps = React.HTMLProps<HTMLElement> & {
  title: string
  link?: string
  level?: 1 | 2
  subtitle?: string
}
