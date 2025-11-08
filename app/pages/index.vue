<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'God Plan - Modern Admin Dashboards',
  meta: [
    {
      name: 'description',
      content: 'Open source admin dashboards built with Nuxt.js, Next.js, Vuetify, and Material-UI. Production-ready, customizable, and feature-rich.'
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
