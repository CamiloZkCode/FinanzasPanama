// src/stores/theme.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const darkMode = ref(false)

  // al cargar, revisa localStorage
  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      darkMode.value = true
      document.body.classList.add('dark-theme-variables')
    } else {
      darkMode.value = false
      document.body.classList.remove('dark-theme-variables')
    }
  }

  const toggleTheme = () => {
    darkMode.value = !darkMode.value
    if (darkMode.value) {
      document.body.classList.add('dark-theme-variables')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-theme-variables')
      localStorage.setItem('theme', 'light')
    }
  }

  return { darkMode, initTheme, toggleTheme }
})
