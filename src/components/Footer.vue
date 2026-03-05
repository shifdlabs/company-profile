<script setup lang="ts">
import twitterIcon from '@/assets/social-media/twitter.png'
import instagramIcon from '@/assets/social-media/instagram.png'
import linkedinIcon from '@/assets/social-media/linkedin.png'
import tiktokIcon from '@/assets/social-media/tiktok.png'
import useScrollToSection from './useScrollToSection'

const { scrollToSection } = useScrollToSection()
</script>

<template>
    <div class="relative bg-[#F7F7F7] pt-16 pb-20 md:pb-35 px-6 md:px-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:items-start gap-10 lg:gap-20 pb-16 md:pb-25">
        
        <div class="flex items-center gap-2 col-span-1 sm:col-span-2 lg:col-span-1 lg:mb-0">
          <img class="h-12 md:h-20 lg:h-20 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
          <p class="text-[50px] font-['DM_Serif_Text'] text-gray-600">
            Shifd
          </p>
        </div>

        <div class="flex flex-col items-start gap-4">
          <p class="text-gray-600 text-[20px] md:text-[23px] font-semibold">{{ $t('footer.product') }}</p>
          <button
            type="button"
            @click="scrollToSection('products-services')"
            class="text-gray-600 text-[18px] md:text-[20px] transition duration-300 hover:text-blue-500"
          >
            Shifd Approval
          </button>
        </div>
        
        <div class="flex flex-col items-start gap-4">
          <p class="text-gray-600 text-[20px] md:text-[23px] font-semibold">{{ $t('footer.service') }}</p>
          <button
            @click="scrollToSection('shifd-services-section')"
            class="text-left text-gray-600 text-[18px] md:text-[20px]
                  transition duration-300 hover:text-blue-500"
          >
            Mobile Development
          </button>

          <button
            @click="scrollToSection('shifd-services-section')"
            class="text-left text-gray-600 text-[18px] md:text-[20px]
                  transition duration-300 hover:text-blue-500"
          >
            Web Development
          </button>

          <button
            @click="scrollToSection('shifd-services-section')"
            class="text-left text-gray-600 text-[18px] md:text-[20px]
                  transition duration-300 hover:text-blue-500"
          >
            Solution Consultation
          </button>
        </div>

        <div class="flex flex-col items-start gap-4">
          <p class="text-gray-600 text-[20px] md:text-[23px] font-semibold">{{ $t('footer.company') }}</p>
          <a class="text-gray-600 text-[18px] md:text-[20px] transition duration-300 hover:text-blue-500 cursor-pointer" href="/about-us">
            About us
          </a>
        </div>

        <div class="flex flex-col items-start gap-10">
          <div class="flex flex-col items-start gap-4">
            <p class="text-gray-600 text-[20px] md:text-[23px] font-semibold">{{ $t('footer.ourLocation') }}</p>
            <p class="text-gray-600 text-[18px] md:text-[20px]">
              Jakarta, Jakarta 14430,<br /> Indonesia
            </p>
          </div>

          <div class="flex flex-col items-start gap-4">
            <p class="text-gray-600 text-[20px] md:text-[23px] font-semibold">{{ $t('footer.contactUs') }}</p>
            <div class="flex flex-col gap-1">
              <p class="text-gray-600 text-[18px] md:text-[20px]">+62 851 1121 0462</p>
              <p class="text-gray-600 text-[18px] md:text-[20px]">sales@shifdlabs.com</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-4 md:gap-6 w-full px-4">
        <div class="h-0.5 bg-[#1363DF] flex-1 lg:ml-80"></div>
        <div class="flex items-center gap-4 md:gap-6 text-blue-500 text-2xl shrink-0">
          <a href="https://www.linkedin.com/in/shifd-labs/" target="_blank" rel="noopener noreferrer">
            <img :src="linkedinIcon" alt="LinkedIn" class="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </a>
          <a href="https://x.com/shifdlabs" target="_blank" rel="noopener noreferrer">
            <img :src="twitterIcon" alt="X" class="w-6 h-6 md:w-8 md:h-8 object-contain"/>
          </a>
          <a href="https://www.instagram.com/shifdlabs/" target="_blank" rel="noopener noreferrer">
            <img :src="instagramIcon" alt="Instagram" class="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </a>
          <a href="https://www.tiktok.com/@shifdlabs" target="_blank" rel="noopener noreferrer">
            <img :src="tiktokIcon" alt="TikTok" class="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </a>
        </div>
        <div class="h-0.5 bg-[#1363DF] flex-1 lg:mr-80"></div>
      </div>
    </div>
</template>