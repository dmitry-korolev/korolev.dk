declare module 'shevyjs' {
  export type Line = { fontSize: string, lineHeight: number, marginBottom: string }
  export default class {
    constructor (config?: {
      baseFontSize?: string
      baseLineHeight?: number
      baseFontScale?: number[] | 'majorSecond' | 'majorThird' | 'minorThird' | 'perfectFourth' | 'augmentedFourth'
      addMarginBottom?: boolean
      proximity?: boolean
      proximityFactor?: number
    })

    baseFontSize: string
    baseLineHeight: number
    baseFontScale: number[]

    h1: Line
    h2: Line
    h3: Line
    h4: Line
    h5: Line
    h6: Line

    body: { fontSize: string, lineHeight: number }

    content: Line

    lineHeightSpacing (n?: number): string

    baseSpacing (n?: number): string
  }
}
