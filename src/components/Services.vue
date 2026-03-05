<template>
  <div class="relative h-120 perspective">
    <div
      class="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d"
      :class="{ 'rotate-y-180': isFlipped }"
    >
      <!-- FRONT SIDE -->
      <div class="absolute inset-0 bg-blue-50 rounded-3xl p-8 flex flex-col backface-hidden">
        <!-- Icon -->
        <div class="mb-8">
          <i :class="icon"></i>
        </div>

        <!-- Title -->
        <h3 class="text-[28px] font-inter mb-2">
          {{ title }}
        </h3>

        <!-- Tags -->
        <div class="flex gap-2 mb-8 flex-wrap">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="text-[#1363DF] border-2 border-[#1363DF] px-3 py-1 rounded-md text-[15px] font-medium"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 text-[20px] font-light mb-8">
          {{ description }}
        </p>

        <!-- Action -->
        <button
          @click="isFlipped = true"
          class="text-[#1363DF] font-inter text-[18px] flex items-center gap-2 mt-auto hover:underline"
        >
          {{ $t('services.viewDetails') }} →
        </button>
      </div>

      <!-- BACK SIDE -->
      <div
        class="absolute inset-0 bg-white rounded-3xl p-8 flex flex-col backface-hidden rotate-y-180 border border-blue-300"
      >
        <h3 class="text-[26px] font-inter mb-6">
          {{ $t('services.deliverables.title') }}
        </h3>

        <li
          v-for="(item, index) in deliverables"
          :key="index"
          class="flex items-start gap-3"
        >
          <span class="mt-2 h-2 w-2 rounded-full bg-[#1363DF]/80"></span>

          <span class="font-medium text-gray-900 text-[18px]">
            {{ t(item.title) }}
          </span>
        </li>

        <div class="mt-auto flex justify-between items-center pt-8">
          <button
            @click="isFlipped = false"
            class="text-gray-500 hover:text-gray-700 text-[18px]"
          >
            ← {{ $t('services.deliverables.back') }}
          </button>

          <button
            @click="scrollToSection('contact-section')"
            class="text-[#1363DF] text-[18px] font-medium hover:underline"
          >
            {{ t('services.deliverables.discuss') }} →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import type { ServiceDeliverable } from '@/constants/services'
import useScrollToSection from './useScrollToSection'

const { scrollToSection } = useScrollToSection()

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  icon: string
  title: string
  description: string
  tags: string[]
  deliverables: ServiceDeliverable[]
}>()

const isFlipped = ref(false)
</script>