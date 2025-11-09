<template>
  <section id="contact" class="contact-section py-20  dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ t('contact.title') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {{ t('contact.form.name') }}
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {{ t('contact.form.email') }}
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {{ t('contact.form.company') }}
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {{ t('contact.form.message') }}
                </label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <v-icon v-if="isSubmitting" size="20" class="me-2 animate-spin">mdi-loading</v-icon>
                <v-icon v-else size="20" class="me-2">mdi-send</v-icon>
                {{ t('contact.form.submit') }}
              </button>
            </form>
          </div>

          <!-- Contact Info & Map -->
          <div class="space-y-8">
            <!-- Contact Information -->
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <v-icon size="24" class="text-indigo-600 dark:text-indigo-400">mdi-email</v-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ t('contact.info.email.title') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.email.value') }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('contact.info.email.subtitle') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <v-icon size="24" class="text-indigo-600 dark:text-indigo-400">mdi-github</v-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ t('contact.info.github.title') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.github.value') }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('contact.info.github.subtitle') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <v-icon size="24" class="text-indigo-600 dark:text-indigo-400">mdi-discord</v-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ t('contact.info.discord.title') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.discord.value') }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('contact.info.discord.subtitle') }}</p>
                </div>
              </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 class="text-xl font-bold mb-3">{{ t('contact.newsletter.title') }}</h3>
              <p class="mb-4 opacity-90">
                {{ t('contact.newsletter.subtitle') }}
              </p>
              <div class="flex gap-2">
                <input
                  v-model="newsletterEmail"
                  type="email"
                  :placeholder="t('contact.newsletter.placeholder')"
                  class="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button
                  @click="subscribeNewsletter"
                  class="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {{ t('contact.newsletter.subscribe') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const newsletterEmail = ref('')
const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      message: ''
    }

    // Show success message (you could use a toast notification here)
    alert(t('contact.success'))

  } catch (error) {
    console.error('Form submission error:', error)
    alert(t('contact.error'))
  } finally {
    isSubmitting.value = false
  }
}

const subscribeNewsletter = () => {
  if (!newsletterEmail.value) {
    alert(t('contact.newsletter.error'))
    return
  }

  // Here you would send the email to your newsletter service
  console.log('Newsletter subscription:', newsletterEmail.value)

  newsletterEmail.value = ''
  alert(t('contact.newsletter.success'))
}
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
