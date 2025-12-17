import type { THEMES } from './use-app-store.constants'

export type Theme = (typeof THEMES)[number]

export interface AppStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  handleError: (error: unknown, action?: string) => void
}
