import { createGlobalStyle } from 'styled-components'
import { shevy } from '../../utils/styles/styles'

export const Common = createGlobalStyle`
      * {
        box-sizing: border-box;
      }
       
      :root {
        --baseLineHeight: ${shevy.baseLineHeight};
        --baseSpacing: ${shevy.baseSpacing(1)};
        --siteWidth: ${shevy.baseSpacing(30)};
      }

      body {
        ${shevy.body};

        font-family: 'Press Start 2P', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        color: #fff8dc;
        -webkit-font-smoothing: antialiased;

        background: #000000 url('/static/background.png') repeat-x;
        background-size: auto 100vh;

        min-height: 100vh;
      }
      
      a {
        color: #fffdf5;
        
        &:hover {
          color: #d0cab4;
        }
      }

      p, ul, ol, blockquote, li {
        padding: 0;
        margin: 0;
        ${shevy.content};
      }

      h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
      }
      
      h1 {
        ${shevy.h1};
      }

      h2 {
        ${shevy.h2};
      }

      h3 {
        ${shevy.h3};
      }

      h4 {
        ${shevy.h4};
      }

      h5 {
        ${shevy.h5};
      }

      h6 {
        ${shevy.h6};
      }
      
      ul {
        list-style-position: inside;
      }
    `
