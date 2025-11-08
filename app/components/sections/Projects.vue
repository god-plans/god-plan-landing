<template>
  <section id="projects" class="projects-section py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ t('projects.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('projects.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>

      <!-- Call to action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">{{ t('projects.cta.title') }}</h3>
          <p class="text-lg opacity-90 mb-6">
            {{ t('projects.cta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/docs" class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {{ t('projects.cta.getStarted') }}
            </NuxtLink>
            <a href="https://github.com/god-plan" target="_blank" rel="noopener noreferrer" class="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              {{ t('projects.cta.viewGithub') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProjectCard from '~/components/common/ProjectCard.vue'

const { t } = useI18n()

const projects = [
  {
    name: 'God Panel (Nuxt.js)',
    description: t('projects.nuxt.description'),
    tech: ['Nuxt.js', 'Vuetify', 'TypeScript', 'Tailwind'],
    image: '/images/projects/nuxt-dashboard.svg',
    demo: 'https://demo.god-panel-nuxt.vercel.app',
    docs: '/docs/nuxt',
    github: 'https://github.com/god-plan/god-panel-nuxt',
    features: ['SSR Ready', 'i18n Support', 'Dark Mode', 'Responsive']
  },
  {
    name: 'God Panel (Next.js)',
    description: t('projects.next.description'),
    tech: ['Next.js', 'Material-UI', 'TypeScript', 'Tailwind'],
    image: '/images/projects/next-dashboard.svg',
    demo: 'https://starter-next-js.vercel.app',
    docs: '/docs/next',
    github: 'https://github.com/god-plan/starter-next-js',
    features: ['App Router', 'Server Components', 'API Routes', 'Responsive']
  },
  {
    name: 'Documentation',
    description: t('projects.docs.description'),
    tech: ['VitePress', 'Vue', 'Markdown', 'TypeScript'],
    image: '/images/projects/vite-docs.svg',
    demo: '/docs',
    docs: '/docs',
    github: 'https://github.com/god-plan/god-panel-docs-vite',
    features: ['Auto-generated', 'Search', 'Dark Mode', 'Mobile-friendly']
  }
]
</script>

<style scoped>
/* Projects section specific styles */
</style>
