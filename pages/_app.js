import 'normalize.css'

import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import Box from '../components/Box'
import Footer from '../components/Footer'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box maxWidth='max-content'>
        <Header />
        <Component {...pageProps} />
      </Box>
      {router.pathname !== '/' && <Footer />}
    </ThemeProvider>
  )
}

export default MyApp
