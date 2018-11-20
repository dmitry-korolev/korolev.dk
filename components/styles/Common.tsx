import { createGlobalStyle } from 'styled-components'
import { MainTheme } from '../../utils/styles/getTheme/getTheme.h'

export const Common = createGlobalStyle<{ theme: MainTheme }>`  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: ${props => props.theme.sizes.body};
    -webkit-font-smoothing: antialiased;
  }
  
  p {
    line-height: var(--size__leading);
    margin-top: var(--size__leading);
    margin-bottom: 0;
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
  
  /* Tables */
  table {
    margin-top: var(--size__leading);
    border-spacing: 0;
    border-collapse: collapse;
  
    td,
    th {
      padding: 0;
      line-height: calc(var(--size__base-line-height) * var(--size__base-font) * 1px);
    }
  }
  
  /* Code blocks */
  code {
    vertical-align: bottom;
  }

`
