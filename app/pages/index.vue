<template>
  <div class="landing-page ">
    <!-- Hero Section -->
    <SectionsHero />

    <!-- Features Section -->
    <SectionsFeatures />

    <!-- Projects Section -->
    <SectionsProjects />

    <!-- Pricing Section -->
    <SectionsPricing />

    <!-- Contact Section -->
    <SectionsContact />
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'God Plan - Modern Admin Dashboards',
  meta: [
    {
      name: 'description',
      content: 'Open source admin dashboards built with Nuxt.js, Next.js, Vuetify, Material-UI. Production-ready, customizable, and feature-rich.'
    },
    // Open Graph
    { property: 'og:title', content: 'God Plan - Modern Admin Dashboards' },
    { property: 'og:description', content: 'Open source admin dashboards built with cutting-edge technology. Production-ready, customizable, and feature-rich.' },
    { property: 'og:image', content: 'https://godplan.dev/images/hero-dashboard.svg' },
    { property: 'og:url', content: 'https://godplan.dev' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'God Plan' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'God Plan - Modern Admin Dashboards' },
    { name: 'twitter:description', content: 'Open source admin dashboards built with cutting-edge technology. Production-ready, customizable, and feature-rich.' },
    { name: 'twitter:image', content: 'https://godplan.dev/images/hero-dashboard.svg' },
    { name: 'twitter:site', content: '@godplan' },
    // Additional SEO
    { name: 'keywords', content: 'admin dashboard, nuxt.js, next.js, vuetify, material-ui, tailwind css, open source, typescript, react, vue' },
    { name: 'author', content: 'God Plan Team' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://godplan.dev' }
  ]
})

// Structured Data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'God Plan',
        url: 'https://godplan.dev',
        logo: 'https://godplan.dev/logo/logo-full.svg',
        description: 'Open source admin dashboards built with cutting-edge technology. Production-ready, customizable, and feature-rich.',
        foundingDate: '2024',
        sameAs: [
          'https://github.com/god-plans',
          'https://twitter.com/godplan',
          'https://discord.gg/godplan'
        ],
        offers: [
          {
            '@type': 'Offer',
            name: 'God Panel (Nuxt.js)',
            description: 'Modern admin dashboard built with Nuxt.js, Vuetify, and TypeScript',
            price: '0',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            name: 'God Panel (Next.js)',
            description: 'React admin dashboard with Next.js, Material-UI, and TypeScript',
            price: '0',
            priceCurrency: 'USD'
          }
        ],
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web Browser',
        softwareVersion: '1.0.0',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '100',
          bestRating: '5',
          worstRating: '1'
        }
      })
    }
  ]
})

// Page meta
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
}
</style>
