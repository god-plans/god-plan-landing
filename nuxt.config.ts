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
    '@nuxt/icon',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  // Icon configuration
  icon: {
    serverBundle: {
      collections: ['lucide']
    }
  },

  // Google Fonts configuration for performance
  googleFonts: {
    families: {
      'Roboto': [400, 500, 700],
      'Inter': [400, 500, 600, 700]
    },
    display: 'swap'
  },

  // Image optimization
  image: {
    format: ['webp', 'avif', 'png', 'jpg'],
    quality: 80,
    sizes: '320,640,768,1024,1280,1536'
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://godplan.dev',
    gzip: true,
    routes: []
  },

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
    classSuffix: 'dark',
    storageKey: 'nuxt-color-mode'
  },

  // CSS
  css: [
    'vuetify/lib/styles/main.sass',
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
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'ui-vendor': ['vuetify', '@nuxt/icon'],
            'utils-vendor': ['pinia', '@vueuse/core']
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/variables.scss";'
        }
      }
    }
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
      titleTemplate: '%s | God Plan',
      meta: [
        // Basic SEO
        { name: 'description', content: 'Discover God Plan - Modern admin dashboards built with Nuxt.js, Next.js, and cutting-edge technology. Open source, customizable, and production-ready.' },
        { name: 'keywords', content: 'admin dashboard, nuxt.js, next.js, vuetify, material-ui, tailwind css, open source, dashboard templates, react dashboard, vue dashboard' },
        { name: 'author', content: 'God Plan Team' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },

        // Technical
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#6366f1' },
        { name: 'msapplication-TileColor', content: '#6366f1' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'God Plan - Divine Innovation & Modern Dashboards' },
        { property: 'og:description', content: 'Modern admin dashboards built with Nuxt.js, Next.js, and cutting-edge technology. Open source, customizable, and production-ready.' },
        { property: 'og:image', content: 'https://godplan.dev/logo/logo-full.svg' },
        { property: 'og:url', content: 'https://godplan.dev' },
        { property: 'og:site_name', content: 'God Plan' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'God Plan - Divine Innovation & Modern Dashboards' },
        { name: 'twitter:description', content: 'Modern admin dashboards built with Nuxt.js, Next.js, and cutting-edge technology.' },
        { name: 'twitter:image', content: 'https://godplan.dev/logo/logo-full.svg' },
        { name: 'twitter:site', content: '@godplan' },
        { name: 'twitter:creator', content: '@godplan' },

        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-config', content: '/browserconfig.xml' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/svg+xml', href: '/logo/logo-icon.svg' },
        { rel: 'apple-touch-icon', href: '/logo/logo-full.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo/logo-icon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo/logo-icon-16.png' },

        // Preconnect for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },

        // Canonical
        { rel: 'canonical', href: 'https://godplan.dev' }
      ],
      script: [
        // Structured Data (JSON-LD)
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'God Plan',
            'url': 'https://godplan.dev',
            'logo': 'https://godplan.dev/logo/logo-full.svg',
            'description': 'Modern admin dashboards built with Nuxt.js, Next.js, and cutting-edge technology.',
            'sameAs': [
              'https://github.com/god-plans',
              'https://twitter.com/godplan'
            ],
            'offers': {
              '@type': 'Offer',
              'category': 'Software',
              'description': 'Open source admin dashboard templates and components'
            }
          })
        }
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
