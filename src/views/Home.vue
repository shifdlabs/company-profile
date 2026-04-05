<template>
  <div class="bg-white dark:bg-gray-950 scheme-light dark:scheme-dark">
    <AppHeader />

    <div class="relative isolate min-h-screen overflow-hidden">
      <img
        src="/src/assets/sample-background.gif"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <!-- Optional dark overlay (for readability) -->
      <!-- <div class="absolute inset-0 -z-10 bg-black/40"></div> -->
      <div class="relative px-6 pt-20 lg:pt-50 lg:px-40 xl:px-80 animate-fade-up ">
        <div class="max-auto max-w-4xl py-32 sm:py-48 lg:py-36 text-start">
          <h1 class="text-6xl tracking-tight text-white sm:text-5xl lg:text-7xl font-inter">
           <span class="text-blue-500">{{ $t('hero.title.part1') }}</span> {{ ' ' + $t('hero.title.part2') + ' ' }} <span class=" text-blue-500">{{ $t('hero.title.part3') }}</span> {{ ' ' + $t('hero.title.part4') + ' ' }} <span class=" text-blue-500">{{ $t('hero.title.part5') }}</span>
          </h1>

          <p class="mt-8 text-lg text-white/90 sm:text-2xl font-inter">
            {{ $t('hero.caption') }} Hello World!
          </p>

          <div class="mt-7 flex flex-wrap items-center justify-start gap-x-4 gap-y-3">
            <a
              href="#why-shifd-section"
              class="
                flex items-center justify-center
                rounded-md bg-[#1363DF] hover:bg-[#337dec]
                px-4 py-2
                text-xs sm:text-sm md:text-base
                font-semibold text-white
                whitespace-nowrap

                md:w-[220px]
              "
            >
              {{ $t('hero.whyButton') }} Reza
            </a>

            <a
              href="#shifd-services-section"
              class="
                flex items-center justify-center
                text-xs sm:text-sm md:text-base
                font-medium text-white
                whitespace-nowrap

                md:w-[220px]
              "
            >
              {{ $t('hero.learnServicesButton') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="relative isolate overflow-hidden animate-fade-up mb-20" id="products-services">
      <div class="relative px-6 pt-10">
        <div class="max-auto text-center">
          <p class="text-[35px] md:text-[38px] lg:text-[43px] text-center font-light tracking-tight text-gray-600">
            {{ $t('productIntroduction.title') }}
          </p>

          <p
            class="mt-4
                  max-w-6xl
                  mx-auto
                  font-extralight
                  text-center
                  text-xl lg:text-xl
                  text-gray-600"
          >
            {{ $t('productIntroduction.caption') }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="relative isolate min-h-screen overflow-hidden animate-fade-up mb-20" id="products-services">
      <div
        class="
          inline-flex items-center gap-3 sm:gap-4
          border-1 border-gray-300
          rounded-[200px]
          px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4
          ml-4 sm:ml-4 md:ml-6 lg:ml-15
        "
      >
        <img
          src="/src/assets/shifd-approval-icon.svg"
          alt="Shifd Approval Icon"
          class="
            w-10 h-10
            sm:w-12 sm:h-12
            md:w-20 md:h-20
            lg:w-25 lg:h-25
          "
        />

        <div class="leading-tight">
          <p class="text-xs sm:text-sm md:text-[20px] text-gray-400">
            shifd
          </p>
          <p class="text-lg sm:text-xl md:text-[35px] text-gray-600 font-extrabold">
            Approval
          </p>
        </div>
      </div>

      <div
        class="flex flex-col gap-6 px-6 mt-4 md:mt-10 lg:flex-row lg:items-center lg:px-15"
      >
        <!-- LEFT TEXT -->
        <span
          class="text-[32px] md:text-[40px] lg:text-[50px] text-gray-600 font-bold max-w-[700px] text-left"
        >
          {{ $t('approval.title1') }}
          <span class="text-[#7367F0]">{{ $t('approval.title2') }}</span>
          {{ $t('approval.title3') }}
        </span>

        <!-- RIGHT TEXT -->
        <span
          class="
            text-[16px]
            md:text-[18px]
            lg:text-[20px]
            font-light
            max-w-[700px]

            text-left
            lg:text-right
            lg:ml-auto
          "
        >
          {{ $t('approval.caption') }}
        </span>
      </div>

      <ApprovalFeatures />
    </div>


    <div class="w-full h-[100px] bg-linear-to-b from-white to-gray-600"></div>

    <div class="relative isolate min-h-screen overflow-hidden z-10 bg-white rounded-t-[40px] pb-24 -mt-20" id="shifd-services-section">
      <div class="relative px-6 pt-20">
        <div class="max-auto text-start">
          <p class="text-[25px] text-center tracking-tight font-inter text-gray-600">
            {{ $t('services.smallTitle') }}
          </p>

          <p class="text-[50px] font-bold mt-10 text-center text-l">
            <span class="text-gray-600">{{ $t('services.cta1') }}</span>

            <span
              class="
                bg-blue-500 text-white px-8 py-4 rounded-2xl shadow-lg inline-flex items-center ml-2
                sm:px-8 sm:py-5    /* small screens → area biru lebih besar */
                md:px-10 md:py-6   /* medium screens → area biru lebih besar */
                lg:px-8 lg:py-4    /* large screens tetap sama */
              "
            >
              <span class="typing-text inline-block overflow-hidden">
                {{ $t('services.cta2') }}
              </span>
            </span>
          </p>

          <p class="text-[35px] text-center font-extralight mt-5 text-gray-600">
            {{ $t('services.bridgingText') }}
          </p>

          <p
            class="
              text-[23px] font-normal mt-3 text-gray-600 text-center
              px-6         /* default / very small screens */
              sm:px-8      /* small screens */
              md:px-20     /* medium screens */
              lg:pl-[130px] lg:pr-[130px] /* large screens tetap asli */
              xl:pl-[130px] xl:pr-[130px] /* extra large screens tetap asli */
              max-w-[1600px] mx-auto        /* max width 200px dan center */
            "
          >
            {{ $t('services.caption') }}
          </p>
        </div>
      </div>

      <div
        class="grid gap-12 mt-20 justify-center
              grid-cols-1
              md:grid-cols-1
              lg:grid-cols-3
              xl:grid-cols-3
              max-w-[400px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] xl:max-w-[1200px]
              mx-auto
          "
      >
        <ServiceCard
          icon="fa-solid fa-mobile-screen-button text-6xl text-gray-700"
          title="Mobile Development"
          :description="$t('services.mobileDevDesc')"
          :tags="['Native', 'Hybrid']"
          :deliverables="serviceDeliverables.mobile"
        />
        <ServiceCard
          icon="fa-solid fa-display text-6xl text-gray-700"
          title="Web Development"
          :description="$t('services.webDevDesc')"
          :tags="['Open Source']"
          :deliverables="serviceDeliverables.web"
        />
        <ServiceCard
          icon="fa-regular fa-comments text-6xl text-gray-700"
          title="Solution Consultation"
          :description="$t('services.consultationDesc')"
          :tags="['Free Consultation']"
          :deliverables="serviceDeliverables.consultation"
        />
      </div>
    </div>

    <div class="relative isolate min-h-screen overflow-hidden bg-[#2E5B9F]" id="why-shifd-section">
      <div class="relative px-6 pt-20">
        <div class="mx-auto text-start"> 
          <p class="text-[30px] text-center tracking-tight font-light text-white">
            {{ $t('companyValues.why') }}
          </p>

          <p class="text-[120px] text-center font-['DM_Serif_Text'] text-white leading-none mb-10">
            Shifd?
          </p>

          <p class="text-[30px] px-4 md:px-40 text-center font-normal text-white max-w-6xl mx-auto">
            {{ $t('companyValues.caption1') }}
          </p>

          <p class="text-[30px] px-4 md:px-40 text-center font-extralight italic text-white mt-4">
            {{ $t('companyValues.caption2') }}
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-20 text-white text-center px-6">
        <div class="flex flex-col items-center gap-1">
          <div class="h-20 w-18 flex items-center justify-center mb-4">
            <img :src="cloudBasedIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center mb-3">Cloud Based</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value1') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-1">
          <div class="h-16 w-16 flex items-center justify-center mb-8">
            <img :src="dedicatedSupportIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center mb-3">Dedicated Support</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value2') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-1">
          <div class="h-18 w-18 flex items-center justify-center mb-6">
            <img :src="technicalExcellenceIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center mb-3">Technical Excellence</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value3') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-5">
          <div class="h-18 w-18 flex items-center justify-center mb-2">
            <img :src="securityRealibilityIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center">Security & Reliability</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value4') }}
          </p>
        </div>
      </div> 

      <div class="relative mt-20 flex flex-col gap-4 py-10 w-full overflow-hidden uppercase font-sans mb-50">
        <div class="relative flex overflow-hidden">
          <div class="flex w-max animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none leading-none mx-8 font-black font-[poppins] text-white">Fully customizable</span>
              <span class="text-[9rem] leading-none leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none leading-none mx-8 font-black text-white font-[poppins]">Fully customizable</span>
              <span class="text-[9rem] leading-none leading-none mx-8 font-bold text-transparent" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none leading-nonemx-8 font-black text-white font-[poppins]">Fully customizable</span>
              <span class="text-[9rem] leading-none leading-none mx-8 font-bold text-transparent" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Secure Reliable</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Secure Reliable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Secure Reliable</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Secure Reliable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Secure Reliable</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Secure Reliable</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Multi Platform</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Multi Platform</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Multi Platform</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Multi Platform</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Multi Platform</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Multi Platform</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Customer Centric</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Customer Centric</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Customer Centric</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Customer Centric</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Customer Centric</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Customer Centric</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-9xl mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">On-Time Delivery</span>
              <span class="text-9xl mx-8 font-black text-white font-[poppins]">On-Time Delivery</span>
            </div>
            <div class="flex items-center">
              <span class="text-9xl mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">On-Time Delivery</span>
              <span class="text-9xl mx-8 font-black text-white font-[poppins]">On-Time Delivery</span>
            </div>
            <div class="flex items-center">
              <span class="text-9xl mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">On-Time Delivery</span>
              <span class="text-9xl mx-8 font-black text-white font-[poppins]">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10 bg-white rounded-t-[40px] -mt-20" id="contact-section">
      <div class="relative px-6 pt-20 pb-20">
        <div class="max-auto text-start">
          <p
            class="
              text-[80px] leading-[1.1] text-center tracking-tight font-bold text-gray-800 mb-10
              max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1200px] xl:max-w-[1200px]
              mx-auto
            "
          >
            {{ $t('callToAction.title1') }} 
            <span class="text-blue-500">{{ $t('callToAction.title2') }}</span>
          </p>

          <p class="text-[30px] px-4 md:px-40 text-center font-light text-gray-600 max-w-6xl mx-auto mb-10">
            {{ $t('callToAction.caption') }}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <!-- WhatsApp Button -->
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              class="
                flex items-center justify-center gap-2
                bg-[#1363DF] hover:bg-[#337dec] text-white
                rounded-xl shadow-lg transition

                w-full sm:w-[220px] md:w-auto
                px-4 py-3 sm:px-6 sm:py-4
                text-sm sm:text-base md:text-lg
                font-semibold
                whitespace-nowrap
              "
            >
              <i class="fa-brands fa-whatsapp text-lg sm:text-xl md:text-2xl"></i>
              <span>{{ $t('callToAction.whatsAppUs') }}</span>
            </a>

            <!-- Outline Button -->
            <router-link
              to="/contact-us"
              class="
                flex items-center justify-center
                rounded-xl border border-blue-500
                text-blue-500 font-medium
                hover:bg-blue-50 transition

                w-full sm:w-[220px] md:w-auto
                px-4 py-3 sm:px-12 sm:py-4
                text-sm sm:text-base md:text-lg
                whitespace-nowrap
              "
            >
              {{ $t('callToAction.contactUs') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '../components/Services.vue'

import cloudBasedIcon from '@/assets/company-values/cloud-based.svg'
import dedicatedSupportIcon from '@/assets/company-values/dedicated-support.svg'
import technicalExcellenceIcon from '@/assets/company-values/technical-excellence.svg'
import securityRealibilityIcon from '@/assets/company-values/security-realibility.svg'

import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
import ApprovalFeatures from '@/components/ApprovalFeatures.vue'
import { serviceDeliverables } from '@/constants/services'
</script>

<style scoped>
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 300ms ease;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .font-outline {
  -webkit-text-stroke: 2px white;
  color: transparent;
  }
</style>
