<template>
  <div
    class="project-card  dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
  >
    <!-- Image -->
    <div class="relative overflow-hidden min-h-72 p-5 flex items-center justify-center">
      <NuxtImg
        :src="project.image"
        :alt="project.name"
        class="w-full  transition-transform duration-300 hover:scale-105"
        format="webp"
        quality="80"
        loading="lazy"
        
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {{ project.name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs rounded-full"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Features -->
      <div class="mb-6">
        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {{ t("projects.features") }}:
        </h4>
        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li
            v-for="feature in project.features"
            :key="feature"
            class="flex items-center"
          >
            <Icon name="lucide:check-circle" size="12" class="text-green-500 me-2" />
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Actions -->
      <div class="flex flex-col  gap-3">
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-row items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors"
        >
          <Icon name="lucide:eye" size="16" class="me-1 " />
          {{ t("projects.viewDemo") }}
        </a>
        <a
          v-if="project.docs"
          :href="project.docs"
          target="_blank"

          class="flex flex-row items-center justify-center border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors"
        >
          <Icon name="lucide:book-open" size="16" class="me-1" />
          {{ t("projects.viewDocs") }}
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-row items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors"
        >
          <Icon name="lucide:git-branch" size="16" class="me-1" />
          {{ t("projects.viewCode") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  docs?: string;
  github?: string;
  features: string[];
}

defineProps<{
  project: Project;
}>();
</script>

<style scoped>
.project-card {
  border: 1px solid #e0e0e0;
}
</style>
