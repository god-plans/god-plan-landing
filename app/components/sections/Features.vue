<template>
  <section id="features" class="features-section py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ t('features.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, key) in features"
          :key="key"
          class="feature-card bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
            <img
              :src="`/icons/${key}.svg`"
              :alt="feature.title"
              class="w-8 h-8"
            />
          </div>
          <h3 class="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Additional benefits -->
      <div class="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold mb-4">{{ t('features.benefits.title') }}</h3>
          <p class="text-lg opacity-90">
            {{ t('features.benefits.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold mb-2">🚀</div>
            <h4 class="font-semibold mb-2">{{ t('features.benefits.items.developer.title') }}</h4>
            <p class="text-sm opacity-90">{{ t('features.benefits.items.developer.description') }}</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">🎯</div>
            <h4 class="font-semibold mb-2">{{ t('features.benefits.items.production.title') }}</h4>
            <p class="text-sm opacity-90">{{ t('features.benefits.items.production.description') }}</p>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">🌍</div>
            <h4 class="font-semibold mb-2">{{ t('features.benefits.items.community.title') }}</h4>
            <p class="text-sm opacity-90">{{ t('features.benefits.items.community.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = {
  modern: {
    title: t('features.items.modern.title'),
    description: t('features.items.modern.description')
  },
  fast: {
    title: t('features.items.fast.title'),
    description: t('features.items.fast.description')
  },
  responsive: {
    title: t('features.items.responsive.title'),
    description: t('features.items.responsive.description')
  },
  customizable: {
    title: t('features.items.customizable.title'),
    description: t('features.items.customizable.description')
  },
  secure: {
    title: t('features.items.secure.title'),
    description: t('features.items.secure.description')
  }
}
</script>

<style scoped>
.feature-card {
  border: 1px solid rgb(var(--v-theme-surface-variant));
}

.feature-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
