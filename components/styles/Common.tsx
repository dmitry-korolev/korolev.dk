import { createGlobalStyle } from 'styled-components'
import { Theme } from '../../utils/styles/getTheme/getTheme.h'

export const Common = createGlobalStyle<{ theme: Theme }>`  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.font.main};
    font-size: ${props => props.theme.sizes.body};
    -webkit-font-smoothing: antialiased;
  }
  
  ul,
  ol {
    margin-top: var(--size__leading);
    margin-bottom: var(--size__leading);
  
    & li {
      line-height: var(--size__leading);
    }
  
    & ul,
    & ol {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  
  blockquote {
    line-height: var(--size__leading);
    margin-top: var(--size__leading);
    margin-bottom: var(--size__leading);
  }
`
