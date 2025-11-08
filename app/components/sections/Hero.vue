<template>
  <section id="home" class="hero-section relative overflow-hidden min-h-screen flex items-center">
    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="/images/hero-background.webp"
        alt="Hero background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 py-20">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          {{ t('hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <NuxtLink to="/docs" class="btn-primary">
            <v-icon size="20" class="me-2">mdi-rocket</v-icon>
            {{ t('hero.getStarted') }}
          </NuxtLink>
          <a href="#projects" class="btn-secondary">
            <v-icon size="20" class="me-2">mdi-eye</v-icon>
            {{ t('hero.viewProjects') }}
          </a>
        </div>

        <!-- Dashboard Preview -->
        <div class="mt-12 relative">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <img
              src="/images/hero-dashboard.svg"
              alt="Dashboard preview"
              class="w-full rounded-lg shadow-2xl"
            />
          </div>

          <!-- Floating elements for visual appeal -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <!-- Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">50+</div>
            <div class="text-sm opacity-80">Components</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">10k+</div>
            <div class="text-sm opacity-80">Downloads</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">100%</div>
            <div class="text-sm opacity-80">Open Source</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-sm opacity-80">Community</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <v-icon size="24" class="text-white/70">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.btn-primary {
  @apply bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl;
}

.btn-secondary {
  @apply border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
