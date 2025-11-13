<template>
  <header
    class="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img
            src="/logo/logo-icon.svg"
            alt="God Plan Logo"
            width="32"
            height="32"
            class="w-8 h-8"
            loading="eager"
          />
          <span class="font-bold text-xl text-gray-900 dark:text-white">{{
            t("header.brand")
          }}</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="hidden md:flex items-center space-x-2">
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="switchToLocale(locale.code)"
              :class="[
                'px-2 py-1 text-sm rounded transition-colors',
                currentLocale === locale.code
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400',
              ]"
            >
              {{ locale.name }}
            </button>
          </div>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 mt-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :aria-label="
              colorMode.preference === 'dark'
                ? t('header.switchToLightMode')
                : t('header.switchToDarkMode')
            "
          >
            <Icon
              v-if="colorMode.preference === 'dark'"
              name="lucide:sun"
              size="20"
            />
            <Icon v-else name="lucide:moon" size="20" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden mt-2 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :aria-label="t('header.toggleMobileMenu')"
            :aria-expanded="mobileMenuOpen"
          >
            <Icon v-if="mobileMenuOpen" name="lucide:x" size="20" />
            <Icon v-else name="lucide:menu" size="20" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-800 py-4"
      >
        <nav class="flex flex-col space-y-4">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            @click="closeMobileMenu"
            class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {{ item.label }}
          </a>

          <!-- Mobile Language Switcher -->

          <LanguageSwitcher />
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
// @ts-ignore - useSwitchLocalePath is auto-imported by @nuxtjs/i18n module
const switchLocalePath = useSwitchLocalePath();
// @ts-ignore - useColorMode is auto-imported by @nuxtjs/color-mode module
const colorMode = useColorMode();
const { t, locale, setLocale } = useI18n();

// Initialize dark class on mount
onMounted(() => {
  if (process.client && colorMode.preference === "dark") {
    document.documentElement.classList.add("dark");
  }
});

const mobileMenuOpen = ref(false);

const currentLocale = computed(() => locale.value);

const availableLocales = [
  { code: "en", name: "EN" },
  { code: "fa", name: "FA" },
];

const navItems = computed(() => [
  { key: "home", label: t("nav.home"), href: "#home" },
  { key: "projects", label: t("nav.projects"), href: "#projects" },
  { key: "features", label: t("nav.features"), href: "#features" },
  { key: "pricing", label: t("nav.pricing"), href: "#pricing" },
  { key: "contact", label: t("nav.contact"), href: "#contact" },
  { key: "docs", label: t("nav.docs"), href: "https://docs.godplans.org/" },
  {
    key: "github",
    label: t("nav.github"),
    href: "https://github.com/god-plans",
  },
]);

const toggleTheme = () => {
  // @ts-ignore - preference is available on colorMode
  const newTheme = colorMode.preference === "dark" ? "light" : "dark";
  colorMode.preference = newTheme;

  // Manually add/remove the 'dark' class for Tailwind dark mode
  if (process.client) {
    const html = document.documentElement;
    if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const switchToLocale = async (localeCode: string) => {
  await setLocale(localeCode);
};

const setLocaleAndClose = async (newLocale: string) => {
  await switchToLocale(newLocale);
  closeMobileMenu();
};
</script>

<style scoped>
/* Header specific styles */
</style>
