<template>
  <section id="pricing" class="pricing-section py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ t('pricing.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(plan, key) in plans"
          :key="key"
          :class="[
            'pricing-card bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300',
            key === 'pro' ? 'border-2 border-indigo-500 transform scale-105' : 'border border-gray-200 dark:border-gray-700'
          ]"
        >
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {{ plan.name }}
            </h3>
            <div class="text-4xl font-bold text-indigo-600 mb-2">
              {{ plan.price }}
              <span class="text-lg text-gray-500 dark:text-gray-400">{{ plan.period }}</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              {{ plan.description }}
            </p>
          </div>

          <div class="space-y-3 mb-8">
            <div
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center text-gray-700 dark:text-gray-200"
            >
              <v-icon size="16" class="text-green-500 dark:text-green-400 me-3">mdi-check-circle</v-icon>
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ feature }}</span>
            </div>
          </div>

          <button
            :class="[
              'w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300',
              key === 'pro'
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
            ]"
          >
            {{ t('pricing.cta') }}
          </button>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 max-w-4xl mx-auto">
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {{ t('pricing.faq.title') }}
        </h3>
        <div class="space-y-6">
          <div
            v-for="(faq, key) in faqItems"
            :key="key"
            class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow"
          >
            <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">
              {{ faq.question }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const plans = {
  free: {
    name: t('pricing.plans.free.name'),
    price: t('pricing.plans.free.price'),
    period: t('pricing.plans.free.period'),
    description: t('pricing.plans.free.description'),
    features: [
      t('pricing.plans.free.features[0]'),
      t('pricing.plans.free.features[1]'),
      t('pricing.plans.free.features[2]'),
      t('pricing.plans.free.features[3]')
    ]
  },
  pro: {
    name: t('pricing.plans.pro.name'),
    price: 'Coming Soon',
    period: '',
    description: t('pricing.plans.pro.description'),
    features: [
      t('pricing.plans.pro.features[0]'),
      t('pricing.plans.pro.features[1]'),
      t('pricing.plans.pro.features[2]'),
      t('pricing.plans.pro.features[3]'),
      t('pricing.plans.pro.features[4]')
    ]
  },
  enterprise: {
    name: t('pricing.plans.enterprise.name'),
    price: 'Coming Soon',
    period: '',
    description: t('pricing.plans.enterprise.description'),
    features: [
      t('pricing.plans.enterprise.features[0]'),
      t('pricing.plans.enterprise.features[1]'),
      t('pricing.plans.enterprise.features[2]'),
      t('pricing.plans.enterprise.features[3]'),
      t('pricing.plans.enterprise.features[4]')
    ]
  }
}

const faqItems = {
  commercial: {
    question: t('pricing.faq.questions.commercial.question'),
    answer: t('pricing.faq.questions.commercial.answer')
  },
  enterprise: {
    question: t('pricing.faq.questions.enterprise.question'),
    answer: t('pricing.faq.questions.enterprise.answer')
  },
  documentation: {
    question: t('pricing.faq.questions.documentation.question'),
    answer: t('pricing.faq.questions.documentation.answer')
  },
  customization: {
    question: t('pricing.faq.questions.customization.question'),
    answer: t('pricing.faq.questions.customization.answer')
  },
  updates: {
    question: t('pricing.faq.questions.updates.question'),
    answer: t('pricing.faq.questions.updates.answer')
  }
}
</script>

<style scoped>
.pricing-card {
  position: relative;
}

.pricing-card.pro {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(147, 51, 234, 0.1));
}
</style>
