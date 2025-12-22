import './i18n'

import { ThemeProvider } from '@emotion/react'
import { useAppStore } from '../store/use-app-store/use-app-store'
import { GlobalStyles } from '../styles/global'
import { darkTheme, lightTheme } from '../styles/themes/default'
import { Routes } from './routes/routes'

export function App() {
  const { theme } = useAppStore()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}
