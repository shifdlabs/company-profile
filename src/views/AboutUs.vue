<template>
  <div class="bg-white dark:bg-gray-950 scheme-light dark:scheme-dark pt-40">
    <AppHeader :is-transparent-background="false"/>

    <section class="max-w-5xl mx-auto  px-6 text-center">
      <div class="flex justify-center">
      <img class="h-30 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
            <p class="text-[100px] text-center font-['DM_Serif_Text'] text-gray-600">
              Shifd
            </p>
          </div>

      <p class="text-xl md:text-3xl text-slate-600 font-medium leading-relaxed mb-12 max-w-4xl mx-auto">
        {{ $t('aboutUs.mainDescription') }}
      </p>

      <p class="text-lg md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto">
        {{ $t('aboutUs.missionTitle') }}
      </p>
    </section>

    <section class="relative flex flex-col items-center text-center py-45 px-6 mt-50 bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${buildingBanner})` }">
      <div class="mb-6">
        <img class="h-25 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
      </div>

      <h2 class="text-3xl md:text-4xl font-bold text-white/80 mb-6 tracking-tight">
        {{ $t('aboutUs.callToActionQuestion') }}
      </h2>

      <p class="text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
        {{ $t('aboutUs.callToActionCaption') }}
      </p>

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 bg-[#3366D6] hover:bg-[#2851AB] text-white px-8 py-3 rounded-md shadow-md transition-all duration-200"
      >
        <i class="fa-brands fa-whatsapp text-2xl"></i>
        <span class="text-lg font-semibold">{{ $t('aboutUs.whatsAppUs') }}</span>
      </a>
    </section>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import Footer from '../components/Footer.vue';
import buildingBanner from '@/assets/building-banner.png'
</script>