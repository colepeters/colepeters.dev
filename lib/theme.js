const theme = {
  breakpoints: ['36em', '52em', '64em', '96em'],
  colors: {
    background: '#f9f8f7',
    darkBackground: '#cbc7c3',
    body: '#393e4e',
  },
  fontSizes: [
    'clamp(0.83rem, calc(0.79rem + 0.20vw), 0.94rem)',
    'clamp(1.00rem, calc(0.90rem + 0.49vw), 1.25rem)',
    'clamp(1.20rem, calc(1.02rem + 0.91vw), 1.67rem)',
    'clamp(1.44rem, calc(1.14rem + 1.52vw), 2.22rem)',
    'clamp(1.73rem, calc(1.25rem + 2.40vw), 2.96rem)',
    'clamp(2.07rem, calc(1.34rem + 3.65vw), 3.95rem)',
    'clamp(2.49rem, calc(1.41rem + 5.41vw), 5.26rem)',
  ],
  fonts: {
    body: 'Cabinet',
    display: 'Sporting',
  },
  fontWeights: {
    normal: 450,
    semibold: 750,
    bold: 850,
  },
  letterSpacings: {
    tight: '-0.05em',
    vtight: '-0.075em',
  },
  lineHeights: {
    single: 1,
    heading: 1.25,
    body: 1.6,
    double: 2,
  },
  space: ['0rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],
}

export default theme
