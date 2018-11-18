import { createGlobalStyle } from 'styled-components'

export const Variables = createGlobalStyle`
  :root {
    /* Sizes */
    --size__base-font: 16;
    --size__base-line-height: 1.5; /* 24 */
    --size__leading: calc(var(--size__base-line-height) * 1rem);
    --size__scale: 1.414;
    --size__gutter: 8px;
    --size__base-column-width: 66.666px;
    --size__column-width: calc(var(--size__base-column-width) + var(--size__gutter) * 2);
    --size__site-width: calc(var(--size__column-width) * 8 - var(--size__gutter) * 2);
  
    /* Fonts */
    --font__main: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font__code: Menlo, Monaco, Consolas, 'Courier New', monospace;
    --font__pre: var(--font__code);
    --font__headings: 'Comfortaa', Georgia, serif;
  
    /* Colors */
    --color__Black: #0f0f0f;
    --color__Gray: color(var(--color__Black) lightness(50%));
    --color__LightGray: color(var(--color__Black) lightness(75%));
    --color__SemiTransparentBlack: color(var(--color__Black) alpha(30%));
    --color__SemiTransparentWhite: color(white alpha(30%));
    --color__Blue: #3d58a8;
    --color__Red: #d70a16;
    --color__Green: #159776;
    --color__Yellow: #fddc43;
    --color__background-body: white;
    --color__background-screen: #f1f1f1;
    --color__background-hr: #ccc;
    --color__background-button: #e6e6e6;
    --color__background-pre: #eee;
    --color__background-ins: #fff9c0;
    --color__text-screen: #21759b;
    --color__text-input: #666;
    --color__text-input-focus: #111;
    --color__link: rgba(0, 0, 0, 0.99);
    --color__link-visited: var(--color__link);
    --color__link-hover: color(var(--color__link) alpha(50%));
    --color__text-main: var(--color__Black);
  
    /* Borders */
    --color__border-button: #ccc #ccc #bbb;
    --color__border-button-hover: #ccc #bbb #aaa;
    --color__border-button-focus: #aaa #bbb #bbb;
    --color__border-input: #ccc;
    --color__border-abbr: #666;
  
    /* Misc */
    --duration__opacity-transition: 0.3s;
  }
`
