import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#6366f1',
            secondary: '#64748b',
            accent: '#82b1ff',
            error: '#ef4444',
            info: '#2196f3',
            success: '#10b981',
            warning: '#f59e0b',
            surface: '#ffffff',
            'on-surface': '#1f2937',
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#818cf8',
            secondary: '#94a3b8',
            accent: '#a5b4fc',
            error: '#f87171',
            info: '#60a5fa',
            success: '#34d399',
            warning: '#fbbf24',
            surface: '#111827',
            'on-surface': '#f9fafb',
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
  })

  nuxtApp.vueApp.use(vuetify)

  // Sync Vuetify theme with Nuxt color mode
  const colorMode = useColorMode()
  watchEffect(() => {
    vuetify.theme.change(colorMode.preference === 'dark' ? 'dark' : 'light')
  })

  return {
    provide: {
      vuetify
    }
  }
})
