import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

const isDark = ref(false)

export function useDarkMode() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const setTheme = (dark) => {
    isDark.value = dark
  }

  const applyTheme = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  }

  const initTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }

    applyTheme(isDark.value)
  }

  watch(isDark, (newValue) => {
    applyTheme(newValue)
  })

  onMounted(() => {
    initTheme()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        isDark.value = e.matches
      }
    }

    mediaQuery.addEventListener('change', handleChange)
  })

  return {
    isDark,
    toggleTheme,
    setTheme
  }
}
