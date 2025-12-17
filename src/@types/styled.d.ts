import '@emotion/react'
import { lightTheme } from '../styles/themes/default'

type ThemeType = typeof lightTheme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
