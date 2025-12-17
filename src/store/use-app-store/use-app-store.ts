import { create } from 'zustand'
import { KEY_THEME, THEMES } from './use-app-store.constants'
import type { AppStore, Theme } from './use-app-store.types'

const applyTheme = (theme: Theme) => {
  const root = document.documentElement
  root.classList.remove(...THEMES)
  root.classList.add(theme)
}

export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(KEY_THEME)
  const isValidTheme = THEMES.includes(savedTheme as Theme)
  if (isValidTheme) {
    applyTheme(savedTheme as Theme)
    return savedTheme as Theme
  }

  applyTheme('light')
  return 'light'
}

export const useAppStore = create<AppStore>((set, get) => ({
  theme: getInitialTheme(),

  setTheme: (theme) => {
    applyTheme(theme)
    localStorage.setItem(KEY_THEME, theme)
    set({ theme })
  },

  toggleTheme: () => {
    const newTheme = get().theme === 'light' ? 'dark' : 'light'
    get().setTheme(newTheme)
  },

  handleError: (error: unknown, action = 'unknown_action') => {
    // TODO: implement error handling
    console.log(`Error during ${action}:`, error)
  },
}))
