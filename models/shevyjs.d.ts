declare module 'shevyjs' {
  export default class {
    constructor (config?: {
      baseFontSize?: string
      baseLineHeight?: number
      baseFontScale?: number[] | 'majorSecond' | 'majorThird' | 'minorThird' | 'perfectFourth' | 'augmentedFourth'
      addMarginBottom?: boolean
      proximity?: boolean
      proximityFactor?: number
    })

    h1: { fontSize: string, lineHeight: number, marginBottom: string }
    h2: { fontSize: string, lineHeight: number, marginBottom: string }
    h3: { fontSize: string, lineHeight: number, marginBottom: string }
    h4: { fontSize: string, lineHeight: number, marginBottom: string }
    h5: { fontSize: string, lineHeight: number, marginBottom: string }
    h6: { fontSize: string, lineHeight: number, marginBottom: string }

    body: { fontSize: string, lineHeight: number }

    content: { fontSize: string, lineHeight: number, marginBottom: string }

    lineHeightSpacing (n?: number): string

    baseSpacing (n?: number): string
  }
}
