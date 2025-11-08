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
          colors: {
            primary: '#6366f1',
            secondary: '#64748b',
            accent: '#82b1ff',
            error: '#ef4444',
            info: '#2196f3',
            success: '#10b981',
            warning: '#f59e0b',
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

  return {
    provide: {
      vuetify
    }
  }
})
