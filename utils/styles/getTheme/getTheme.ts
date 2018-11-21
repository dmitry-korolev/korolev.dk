import Shevy from 'shevyjs'
import color from 'color'
import { Theme } from './getTheme.h'

const fontMain = `'Helvetica Neue', Helvetica, Arial, sans-serif`
const fontCode = `Menlo, Monaco, Consolas, 'Courier New', monospace`
const fontHeadings = `Verdana, sans-serif`

const colorBlack = color('#0f0f0f')
const colorLink = color('rgba(0, 0, 0, 0.99)')


export const getTheme = (): Theme => {
  const shevy = new Shevy({
    baseFontScale: 'minorThird'
  })

  return {
    layout: {
      maxWidth: shevy.baseSpacing(30)
    },
    sizes: {
      h1: shevy.h1,
      h2: shevy.h2,
      h3: shevy.h3,
      h4: shevy.h4,
      h5: shevy.h5,
      h6: shevy.h6,
      body: shevy.body,
      content: shevy.content,
      bs: shevy.baseSpacing,
      lhs: shevy.lineHeightSpacing
    },
    font: {
      main: fontMain,
      code: fontCode,
      pre: fontCode,
      headings: fontHeadings
    },
    colors: {
      text: {
        normal: colorBlack.string(),
        light: colorBlack.lighten(.75).string(),
        transparent: colorBlack.alpha(.3).string()
      },
      links: {
        normal: colorLink.string(),
        visited: colorLink.string(),
        hover: colorLink.alpha(.5).string()
      },
      bg: {
        body: 'white',
        button: '#e6e6e6',
        pre: '#eee'
      }
    },
    animations: {
      duration: '0.3s'
    }
  }
}
