// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3012,
    host: '0.0.0.0',
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    "@nuxtjs/i18n",
  ],

  // Auto-imports for better DX
  imports: {
    autoImport: true
  },

  // Runtime config
  runtimeConfig: {
    public: {
      appName: 'God Plan',
      version: '1.0.0',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://godplan.dev',
    }
  },

  // Color mode configuration
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  // CSS
  css: [
    // Load MDI font for icons
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Build configuration
  build: {
    transpile: ['vuetify']
  },

  // SSR
  ssr: true,

  // Nitro configuration for better performance
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // Vite configuration for optimization
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', '@vueuse/core']
    },
  },

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: false
  },

  // App configuration
  app: {
    head: {
      title: 'God Plan - Divine Innovation & Modern Dashboards',
      meta: [
        { name: 'description', content: 'Discover God Plan - Modern admin dashboards built with Nuxt.js, Next.js, and cutting-edge technology. Open source, customizable, and production-ready.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#6366f1' },
        { name: 'keywords', content: 'admin dashboard, nuxt.js, next.js, vuetify, material-ui, tailwind css, open source' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo/logo-icon.svg' },
        { rel: 'apple-touch-icon', href: '/logo/logo-full.png' }
      ]
    }
  },

  i18n: {
    locales: [
      {
        code: "fa",
        language: "fa-IR",
        dir: "rtl",

        files: [
          "fa.json",

        ],
      },
      {
        code: "en",
        language: "en-US",
        files: [
          "en.json",
        ],
        dir: "ltr",
      },
    ],
    strategy: "no_prefix", // 'prefix_except_default', 'prefix', 'no_prefix', 'prefix_and_default',
    defaultLocale: "en",
    detectBrowserLanguage: false,

    langDir: "./locales/",

  },
})
