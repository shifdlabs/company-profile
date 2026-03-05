<template>
  <section class="mt-20 flex flex-col items-center w-full overflow-x-hidden">
  <!-- FEATURE CARDS -->
  <div class="w-full max-w-[1360px] px-4 mx-auto"> <!-- batasi max-width container -->
    <div
      class="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6

        2xl:flex 2xl:flex-nowrap 2xl:justify-center
      "
    >
<button
  v-for="(item, index) in features"
  :key="item.id"
  @click="activeIndex = index"
  class="
    w-full
    xl:w-[420px]                   
    [@media(min-width:1600px)]:w-[400px] 
    h-[260px] xl:h-[400px]
    flex-shrink-0
    text-left
    rounded-2xl
    p-5 xl:p-6
    transition-all duration-100
    border
    /* --- TAMBAHKAN INI --- */
    flex flex-col 
    items-start 
    justify-start
    /* --------------------- */
  "
  :class="
    activeIndex === index
      ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white border-transparent shadow-xl'
      : 'bg-white text-gray-700 border-gray-300 hover:border-purple-400'
  "
>
          <!-- Icon -->
          <div
            class="
              mb-3 xl:mb-4
              flex items-center justify-center
              h-14 w-14 xl:h-20 xl:w-20
              rounded-xl
            "
            :class="activeIndex === index ? 'bg-white/20' : 'bg-purple-100'"
          >
            <i :class="item.icon" class="text-xl xl:text-3xl"></i>
          </div>

          <!-- Title -->
          <h3 class="text-[18px] xl:text-[25px] font-semibold mb-2">
            {{ item.title }}
          </h3>

          <!-- Caption -->
          <p
            class="text-[14px] xl:text-[18px] leading-relaxed"
            :class="activeIndex === index ? 'text-white/80' : 'text-gray-500'"
          >
            {{ item.caption }}
          </p>
        </button>
      </div>
    </div>

    <!-- IMAGE CAROUSEL -->
    <div class="relative mt-16 w-full max-w-7xl px-4 overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="item in features"
          :key="item.id"
          class="w-full flex-shrink-0 px-2 sm:px-6"
        >
          <img
            :src="item.image"
            alt="Feature Preview"
            class="
              mx-auto
              h-[260px] sm:h-[380px] xl:h-[560px]
              w-full
              max-w-6xl
              rounded-3xl
              object-cover
              shadow-2xl
            "
          />
        </div>
      </div>
    </div>

    <!-- INDICATOR -->
    <div class="mt-6 flex justify-center gap-2">
      <button
        v-for="(_, index) in features"
        :key="index"
        @click="activeIndex = index"
        class="h-2.5 rounded-full transition-all"
        :class="
          activeIndex === index
            ? 'bg-indigo-600 w-8'
            : 'bg-gray-300 w-2.5 hover:bg-gray-400'
        "
      />
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Feature1 from '@/assets/approval/feature-1.png'
import Feature2 from '@/assets/approval/feature-2.png'
import Feature3 from '@/assets/approval/feature-3.png'
import Feature4 from '@/assets/approval/feature-4.png'

const { t } = useI18n()

const features = computed(() => [
  {
    id: 1,
    title: 'Seamless Dashboard',
    caption: t('approval.features.description1'),
    icon: 'fa-sharp-duotone fa-solid fa-chart-simple',
    image: Feature1
  },
  {
    id: 2,
    title: 'Electronic Workflow',
    caption: t('approval.features.description2'),
    icon: 'fa-solid fa-network-wired',
    image: Feature2
  },
  {
    id: 3,
    title: 'E-Signature',
    caption: t('approval.features.description3'),
    icon: 'fa-solid fa-signature',
    image: Feature3
  },
  {
    id: 4,
    title: 'Custom Doc Number Format',
    caption: t('approval.features.description4'),
    icon: 'fa-solid fa-hashtag',
    image: Feature4
  },
])
const activeIndex = ref(0)
</script>