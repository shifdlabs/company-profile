<template>
  <!-- Perspective container — fixed height required for 3D flip to work -->
  <div class="relative perspective min-h-[520px] sm:min-h-[480px] lg:min-h-[460px]">
    <div
      class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
      :class="{ 'rotate-y-180': isFlipped }"
      style="min-height: inherit;"
    >

      <!-- ========================
           FRONT SIDE
      ======================== -->
      <div
        class="
          absolute inset-0
          glass-card rounded-3xl p-7 sm:p-8
          flex flex-col
          backface-hidden
          group
          transition-all duration-500 ease-out
          hover:-translate-y-2
        "
      >
        <!-- Icon box -->
        <div
          class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
          :class="colors.iconBg"
        >
          <i :class="[icon, colors.iconText, 'text-2xl sm:text-3xl']"></i>
        </div>

        <!-- Title -->
        <h3 class="text-[24px] sm:text-[22px] lg:text-[24px] font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
          {{ title }}
        </h3>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4 sm:mb-5">
          <span
            v-for="(tag, idx) in tags"
            :key="idx"
            class="text-[13px] sm:text-[13px] font-semibold tracking-wide px-3 py-1 rounded-full border"
            :class="colors.tag"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-gray-500 text-[16px] sm:text-[15px] lg:text-[16px] leading-relaxed flex-grow mb-6 sm:mb-8">
          {{ description }}
        </p>

        <!-- Learn More button -->
        <button
          @click="isFlipped = true"
          class="text-[16px] sm:text-[14px] lg:text-[15px] font-semibold flex items-center gap-2 mt-auto hover:translate-x-1 transition-transform duration-200 w-fit"
          :class="colors.link"
        >
          {{ $t('services.viewDetails') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button>
      </div>

      <!-- ========================
           BACK SIDE
      ======================== -->
      <div
        class="
          absolute inset-0
          glass-card rounded-3xl p-7 sm:p-8
          flex flex-col
          backface-hidden rotate-y-180
          border-2
        "
        :class="colors.backBorder"
      >
        <!-- Back header -->
        <div class="flex items-center gap-4 mb-5 sm:mb-6">
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            :class="colors.iconBg"
          >
            <i :class="[icon, colors.iconText, 'text-xl sm:text-2xl']"></i>
          </div>
          <h3 class="text-[21px] sm:text-[19px] lg:text-[20px] font-bold text-gray-900 leading-tight">
            {{ $t('services.deliverables.title') }}
          </h3>
        </div>

        <!-- Deliverables list -->
        <ul class="flex-grow space-y-2.5 sm:space-y-3">
          <li
            v-for="(item, index) in deliverables"
            :key="index"
            class="flex items-start gap-3"
          >
            <span
              class="mt-[7px] h-1.5 w-1.5 rounded-full flex-shrink-0"
              :class="colors.dot"
            ></span>
            <span class="text-gray-700 text-[15px] sm:text-[14px] lg:text-[15px] leading-relaxed">
              {{ t(item.title) }}
            </span>
          </li>
        </ul>

        <!-- Back footer actions -->
        <div class="mt-5 sm:mt-6 flex justify-between items-center pt-4 sm:pt-5 border-t border-gray-100">
          <button
            @click="isFlipped = false"
            class="text-gray-400 hover:text-gray-600 text-[15px] sm:text-[14px] font-medium flex items-center gap-1.5 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 16l-4-4m0 0l4-4m-4 4h18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            {{ $t('services.deliverables.back') }}
          </button>

          <button
            @click="scrollToSection('contact-section')"
            class="text-[15px] sm:text-[14px] font-semibold flex items-center gap-1.5 transition-transform hover:translate-x-1 duration-200"
            :class="colors.link"
          >
            {{ t('services.deliverables.discuss') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ServiceDeliverable } from '@/constants/services'
import useScrollToSection from './useScrollToSection'
import { useI18n } from 'vue-i18n'

const { scrollToSection } = useScrollToSection()
const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    icon: string
    title: string
    description: string
    tags: string[]
    deliverables: ServiceDeliverable[]
    color?: 'blue' | 'green' | 'violet'
  }>(),
  { color: 'blue' }
)

const isFlipped = ref(false)

// ── Color theme map ──────────────────────────────────────────
const colorMap = {
  blue: {
    iconBg:     'bg-blue-50',
    iconText:   'text-[#1363DF]',
    tag:        'bg-blue-50 text-[#1363DF] border-blue-200',
    link:       'text-[#1363DF] hover:text-blue-700',
    backBorder: 'border-blue-200',
    dot:        'bg-[#1363DF]',
  },
  green: {
    iconBg:     'bg-emerald-50',
    iconText:   'text-emerald-700',
    tag:        'bg-emerald-50 text-emerald-700 border-emerald-200',
    link:       'text-emerald-700 hover:text-emerald-900',
    backBorder: 'border-emerald-200',
    dot:        'bg-emerald-600',
  },
  violet: {
    iconBg:     'bg-violet-50',
    iconText:   'text-violet-600',
    tag:        'bg-violet-50 text-violet-600 border-violet-200',
    link:       'text-violet-600 hover:text-violet-800',
    backBorder: 'border-violet-200',
    dot:        'bg-violet-600',
  },
}

const colors = computed(() => colorMap[props.color])
</script>


<style scoped>
/* ─── Card — solid white (NO backdrop-filter untuk performa scroll) ─── */
.glass-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 10px 30px -5px rgba(0, 0, 0, 0.07),
    0 4px 12px -4px rgba(0, 0, 0, 0.04);
  /* Promote ke own compositor layer agar scroll tidak trigger repaint */
  will-change: transform;
  transform: translateZ(0);
}

/* Hover shadow lift */
.glass-card:hover {
  box-shadow:
    0 20px 40px -10px rgba(0, 0, 0, 0.10),
    0 10px 20px -5px rgba(0, 0, 0, 0.06);
}

/* ─── 3D flip setup ─── */
.perspective {
  perspective: 1200px;
}
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>