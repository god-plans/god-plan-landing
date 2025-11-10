<template>
  <section
    id="home"
    class="hero-section relative overflow-hidden min-h-screen flex items-center"
  >
    <!-- Background -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/hero-background.webp"
        alt="Hero background"
        format="webp"
        quality="80"
        class="w-full h-full object-cover"
        loading="eager"
        sizes="100vw"
      />
      <div class="absolute inset-0 dark:bg-gray-900 bg-white/90"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 py-20">
      <div class="max-w-4xl mx-auto text-center dark:text-white text-gray-800 mt-10">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          {{ t("hero.title") }}
        </h1>
        <p
          class="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
        >
          {{ t("hero.subtitle") }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <NuxtLink
            to="https://docs.godplans.org/"
            class="btn-primary flex items-center justify-center"
          >
            <Icon name="lucide:rocket" size="24" class="me-2" />
            {{ t("hero.getStarted") }}
          </NuxtLink>
          <a
            href="#projects"
            class="btn-secondary flex items-center justify-center"
          >
            <Icon name="lucide:eye" size="24" class="me-2" />
            {{ t("hero.viewProjects") }}
          </a>
        </div>

        <!-- Dashboard Preview -->
        <div class="mt-12 relative">
          <div
            class="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto"
          >
            <NuxtImg
              :src="isDark?'/images/hero/hero-dark.png':'/images/hero/hero-light.png'"
              format="webp"
              quality="85"
              loading="lazy"
              
              alt="Dashboard preview"
              class="w-full rounded-lg shadow-2xl"
            />
          </div>

          <!-- Floating elements for visual appeal -->
          <div
            class="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"
          ></div>
        </div>

        <!-- Stats -->
        <div
          class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">
              {{ t("hero.stats.components") }}
            </div>
            <div class="text-sm opacity-80">
              {{ t("hero.stats.componentsLabel") }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">
              {{ t("hero.stats.downloads") }}
            </div>
            <div class="text-sm opacity-80">
              {{ t("hero.stats.downloadsLabel") }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">
              {{ t("hero.stats.opensource") }}
            </div>
            <div class="text-sm opacity-80">
              {{ t("hero.stats.opensourceLabel") }}
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">
              {{ t("hero.stats.support") }}
            </div>
            <div class="text-sm opacity-80">
              {{ t("hero.stats.supportLabel") }}
            </div>
          </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-12 text-center">
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90"
          >
            <div class="flex items-center gap-2">
              <div class="flex -space-x-1">
                <div
                  class="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-white"
                ></div>
                <div
                  class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"
                ></div>
                <div
                  class="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-2 border-white"
                ></div>
                <div
                  class="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold"
                >
                  +
                </div>
              </div>
              <span>{{ t("hero.socialProof.trustedBy") }}</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex gap-1">
                <Icon
                  name="solar:star-bold"
                  size="16"
                  class="text-yellow-400"
                />
                <Icon
                  name="solar:star-bold"
                  size="16"
                  class="text-yellow-400"
                />
                <Icon
                  name="solar:star-bold"
                  size="16"
                  class="text-yellow-400"
                />
                <Icon
                  name="solar:star-bold"
                  size="16"
                  class="text-yellow-400"
                />
                <Icon
                  name="solar:star-bold"
                  size="16"
                  class="text-yellow-400"
                />
              </div>
              <span class="font-semibold">{{
                t("hero.socialProof.stars")
              }}</span>
              <span class="text-xs">{{
                t("hero.socialProof.starsLabel")
              }}</span>
            </div>
          </div>
          <p class="mt-4 text-sm opacity-75">
            {{ t("hero.socialProof.companies") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <Icon name="lucide:chevron-down" size="24" class="text-white/70" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
// @ts-ignore - useColorMode is auto-imported by @nuxtjs/color-mode module
const colorMode = useColorMode();

const isDark = computed(() => colorMode.preference === "dark");

const { t } = useI18n();
</script>

<style scoped>
.btn-primary {
  @apply bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl;
}

.btn-secondary {
  @apply border-2 border-white dark:text-white text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
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
