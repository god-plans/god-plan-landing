<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <img
              src="/logo/logo-icon.svg"
              alt="God Plan Logo"
              class="w-8 h-8"
            />
            <span class="font-bold text-xl">{{ t('footer.brand') }}</span>
          </div>
          <p class="text-gray-300 mb-6">
            {{ t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a
              href="https://github.com/god-plan"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <v-icon size="20">mdi-github</v-icon>
            </a>
            <a
              href="https://twitter.com/godplan"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <v-icon size="20">mdi-twitter</v-icon>
            </a>
            <a
              href="https://discord.gg/godplan"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <v-icon size="20">mdi-discord</v-icon>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="font-semibold mb-4">{{ t('footer.links.products') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="#projects" class="text-gray-400 hover:text-white transition-colors">
                God Panel (Nuxt.js)
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#projects" class="text-gray-400 hover:text-white transition-colors">
                God Panel (Next.js)
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" class="text-gray-400 hover:text-white transition-colors">
                {{ t('footer.links.resources') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-semibold mb-4">{{ t('footer.links.company') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">
                {{ t('footer.links.about') }}
              </NuxtLink>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white transition-colors">
                {{ t('footer.links.contact') }}
              </a>
            </li>
            <li>
              <a href="https://github.com/god-plan" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                {{ t('footer.links.github') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          {{ t('footer.copyright') }}
        </p>
        <div class="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
            {{ t('footer.privacy') }}
          </a>
          <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
            {{ t('footer.terms') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Footer specific styles */
</style>
