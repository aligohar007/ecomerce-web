import { defineStore } from "pinia"
export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false
  }),
  actions: {
    initTheme() {
      this.isDark = document.documentElement.classList.contains('dark')
    },
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
    }
  }
})
