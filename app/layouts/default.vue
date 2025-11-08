<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/Header.vue'
import AppFooter from '~/components/layout/Footer.vue'
</script>

<style scoped>
/* Layout specific styles */
</style>
