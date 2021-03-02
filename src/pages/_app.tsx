import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Consumer,
  ThemeSwitcherProvider
} from '../Store/ContextApi/ThemeSwitcher/provider'
import GlobalStyle from '../Styles/global'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeSwitcherProvider>
      <Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </Consumer>
    </ThemeSwitcherProvider>
  )
}

export default MyApp
