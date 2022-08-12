import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.body};
    font-family: IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: ${(props) => props.theme.lineHeights.body};
    padding: ${(props) => props.theme.space[3]};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    body {
      padding: ${(props) => props.theme.space[4]} ${(props) =>
  props.theme.space[5]};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[3]}) {
    body {
      padding: ${(props) => props.theme.space[5]} ${(props) =>
  props.theme.space[6]};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${(props) => props.theme.lineHeights.heading};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes[4]};
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: ${(props) => props.theme.space[5]};
    letter-spacing: ${(props) => props.theme.letterSpacings.tight};
    max-width: 26ch;
  }

  h2, h3, h4, h5, h6 {
    margin-top: ${(props) => props.theme.space[4]};
    margin-bottom: ${(props) => props.theme.space[3]};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes[3]};
    letter-spacing: ${(props) => props.theme.letterSpacings.tight};
    max-width: 26ch;
  }

  h3, h4, h5, h6 {
    font-size: ${(props) => props.theme.fontSizes[2]};
    max-width: 72ch;
  }

  blockquote {
    border-left: 0.5rem double ${(props) => props.theme.colors.darkBackground};
    font-size: ${(props) => props.theme.fontSizes[2]};
    margin: ${(props) => props.theme.space[4]} 0;
    padding: 0 ${(props) => props.theme.space[3]};

    & p {
      margin: 0;
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

  p, li, blockquote {
    max-width: 72ch;
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
    transition: color 0.15s linear;

    &:hover, &:focus {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  strong {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
  }

  code {
    font-family: IBM Plex Mono, monospace;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  ::selection {
    background-color: rgba(20,15,0,0.25);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    html { font-size: 112.5%; }

    h2, h3, h4, h5, h6 {
      margin-top: ${(props) => props.theme.space[5]};
      margin-bottom: ${(props) => props.theme.space[4]};
    }

    h1 { font-size: ${(props) => props.theme.fontSizes[6]}; }
    h2 { font-size: ${(props) => props.theme.fontSizes[5]}; }

    h3 {
      font-size: ${(props) => props.theme.fontSizes[4]};
      letter-spacing: ${(props) => props.theme.letterSpacings.tight};
      max-width: 32ch;
    }

    h4, h5, h6 { font-size: ${(props) => props.theme.fontSizes[3]}; }
    blockquote {
      font-size: ${(props) => props.theme.fontSizes[3]};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[2]}) {
    html { font-size: 125%; }
    h1 {
      font-size: ${(props) => props.theme.fontSizes[7]};
      margin-top: ${(props) => props.theme.space[5]};
      margin-bottom: ${(props) => props.theme.space[6]};
      max-width: 20ch;
    }
  }

`

GlobalStyle.displayName = 'GlobalStyle'

export default GlobalStyle
