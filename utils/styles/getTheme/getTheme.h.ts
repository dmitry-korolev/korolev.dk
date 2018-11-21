import { Line } from 'shevyjs'

export type Theme = {
  layout: {
    maxWidth: string
  }
  sizes: {
    h1: Line
    h2: Line
    h3: Line
    h4: Line
    h5: Line
    h6: Line
    body: { fontSize: string, lineHeight: number }
    content: Line
    bs: (n: number) => string
    lhs: (n: number) => string
  }
  font: {
    main: string
    code: string
    pre: string
    headings: string
  }
  colors: {
    text: {
      normal: string
      light: string
      transparent: string
    }
    links: {
      normal: string
      visited: string
      hover: string
    }
    bg: {
      body: string
      button: string
      pre: string
    }
  }
  animations: {
    duration: string
  }
}
