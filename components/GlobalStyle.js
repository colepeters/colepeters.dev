import { createGlobalStyle } from 'styled-components'

const system = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cabinet';
    src: url('/fonts/CabinetGrotesk-Variable.woff2') format('woff2-variations');
    font-weight: 100 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sporting';
    src: url('/fonts/Sporting_Grotesque-Regular_web.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.body};
    font-family: Cabinet, ${system};
    font-size: ${(props) => props.theme.fontSizes[1]};
    font-weight: 450;
    line-height: ${(props) => props.theme.lineHeights.body};
    padding: 1rem;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    body {
      padding: clamp(1rem, 4vw, 4rem) clamp(1rem, 8vw, 8rem);
    }

    p, li, blockquote {
      max-width: 58ch;
    }
  }

  h1 { font-size: ${(props) => props.theme.fontSizes[6]}; }
  h2 { font-size: ${(props) => props.theme.fontSizes[4]}; }
  h3 { font-size: ${(props) => props.theme.fontSizes[3]}; }
  h4 { font-size: ${(props) => props.theme.fontSizes[2]}; }
  h5, h6 { font-size: ${(props) => props.theme.fontSizes[1]}; }

  h1, h2, h3, h4, h5, h6 {
    font-family: Sporting, ${system};
    line-height: ${(props) => props.theme.lineHeights.heading};
    letter-spacing: ${(props) => props.theme.letterSpacings.tight};
    max-width: 32ch;
    font-weight: 400;
  }

  h1 {
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: ${(props) => props.theme.space[5]};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[2]}) {
    h1 {
    letter-spacing: ${(props) => props.theme.letterSpacings.vtight};
      margin-top: ${(props) => props.theme.space[5]};
      margin-bottom: ${(props) => props.theme.space[6]};
    }
  }

  h2, h3, h4, h5, h6 {
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: ${(props) => props.theme.space[3]};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    h2, h3, h4, h5, h6 {
      margin-top: ${(props) => props.theme.space[5]};
      margin-bottom: ${(props) => props.theme.space[4]};
    }
  }

  blockquote {
    border-left: 0.5rem double ${(props) => props.theme.colors.darkBackground};
    margin: ${(props) => props.theme.space[4]} 0;
    padding: 0 ${(props) => props.theme.space[3]};
    font-size: ${(props) => props.theme.fontSizes[2]};
    font-weight: 600;

    & p {
      margin: 0;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    blockquote {
      margin: ${(props) => props.theme.space[5]} 0;
    }
  }

  ul, ol {
    padding-left: 0;
    list-style-position: inside;
  }

  ol {
    counter-reset: section;
    list-style: none;
  }

  ol li {
    counter-increment: step-counter;
  }

  ol li::before {
    content: counter(step-counter) '. ';
    display: inline-block;
    width: 1.5em;
    opacity: 0.666;
  }

  ul {
    list-style: none;
  }

  ul li::before {
    content: '•';
    display: inline-block;
    width: 1.5em;
    opacity: 0.666;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: ${(props) => props.theme.lineHeights.body}rem;
  }

  a {
    color: ${(props) => props.theme.colors.body};
    cursor: pointer;
  }

  strong {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
  }

  code {
    font-family: IBM Plex Mono, monospace;
    font-weight: 400;
  }

  figcaption {
    font-size: ${(props) => props.theme.fontSizes[0]};
    font-style: italic;
  }

  ::selection {
    background-color: rgba(20,15,0,0.25);
  }

`

GlobalStyle.displayName = 'GlobalStyle'

export default GlobalStyle
