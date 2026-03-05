<template>
  <div class="bg-white dark:bg-gray-950 scheme-light dark:scheme-dark">
    <AppHeader :is-transparent-background="false"/>

    <div class="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-10 lg:py-0 px-6 mt-30 lg:mt-0">
      <div class="bg-[#EAEFF7] w-full max-w-xl rounded-xl">
        <div class="m-4 md:m-6 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {{ $t('contactUs.form.title') }}
          </h2>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-md font-semibold text-slate-700 mb-1">
                {{ $t('contactUs.form.fullName') }}<span class="text-red-500">*</span>
              </label>
              <input 
                v-model="form.name"
                type="text" 
                placeholder="Robert Sam"
                class="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label class="block text-md font-semibold text-slate-700 mb-1">
                {{ $t('contactUs.form.email') }}<span class="text-red-500">*</span>
              </label>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="robert.sam@company.com"
                class="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label class="block text-md font-semibold text-slate-700 mb-1">
                {{ $t('contactUs.form.phoneNumber') }}
                <span class="text-red-500">*</span>
              </label>

              <input 
                v-model="form.phone"
                type="text"
                inputmode="numeric"
                maxlength="15"
                pattern="[0-9]*"
                placeholder="081234567910"
                @input="form.phone = form.phone.replace(/\D/g, '')"
                class="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label class="block text-md font-semibold text-slate-700 mb-1">
                {{ $t('contactUs.form.briefDescription') }}
              </label>
              <textarea 
                v-model="form.description"
                rows="4"
                :placeholder="$t('contactUs.form.briefDescriptionPlaceholder')"
                class="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full md:w-auto px-6 py-2.5  bg-[#1363DF] hover:bg-[#337dec] text-white font-bold rounded-md transition duration-200 shadow-md"
            >
              {{ $t('contactUs.form.submitButton') }}
            </button>
          </form>
        </div>
      </div>
      
      <div class="max-w-2xl w-full flex flex-col items-center">
        <div class="flex-1 text-center">
          <div class="flex justify-center items-center">
            <img class="h-16 md:h-20 lg:h-30 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
            <p class="text-[60px] md:text-[80px] lg:text-[100px] text-center font-['DM_Serif_Text'] text-gray-600">
              Shifd
            </p>
          </div>

          <p class="mt-4 md:mt-6 text-[20px] md:text-[30px] text-slate-600">
            {{ $t('contactUs.companyValues.caption1') }}
          </p>

          <p class="mt-4 md:mt-6 text-[20px] md:text-[30px] font-extralight italic text-slate-600">
            {{ $t('contactUs.companyValues.caption2') }}
          </p>

          <div class="flex items-center w-full my-8">
            <div class="grow border-t-2 border-slate-300"></div>
            <div class="mx-4">
              <img src="/src/assets/stars.svg" alt="Stars" class="w-20 md:w-25 h-auto pb-3" />
            </div>
            <div class="grow border-t-2 border-slate-300"></div>
          </div>

          <div class="max-w-6xl mx-auto">
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                
                <div class="flex flex-col items-center text-center">
                  <div class="mb-4 flex items-center justify-center">
                    <img :src="cloudBasedIcon" alt="Cloud-Based" class="h-12 md:h-16 w-auto opacity-30 grayscale">
                  </div>
                  <h3 class="text-lg md:text-xl font-bold text-[#4C5056] leading-tight">Cloud Based</h3>
                </div>

                <div class="flex flex-col items-center text-center">
                  <div class="mb-4 flex items-center justify-center">
                    <img :src="dedicatedSupportIcon" alt="Dedicated Support" class="h-12 md:h-16 w-auto opacity-30 grayscale">
                  </div>
                  <h3 class="text-lg md:text-xl font-bold text-[#4C5056] leading-tight">Dedicated Support</h3>
                </div>

                <div class="flex flex-col items-center text-center">
                  <div class="mb-4 flex items-center justify-center">
                    <img :src="technicalExcellenceIcon" alt="Technical Excellence" class="h-12 md:h-16 w-auto opacity-30 grayscale">
                  </div>
                  <h3 class="text-lg md:text-xl font-bold text-[#4C5056] leading-tight">Technical Excellence</h3>
                </div>

                <div class="flex flex-col items-center text-center">
                  <div class="mb-4 flex items-center justify-center">
                    <img :src="securityRealibilityIcon" alt="Security & Reliability" class="h-12 md:h-16 w-auto opacity-30 grayscale">
                  </div>
                  <h3 class="text-lg md:text-xl font-bold text-[#4C5056] leading-tight">Security & Reliability</h3>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>

    <section class="max-w-3xl mx-auto mb-20 px-4 text-center mt-20 lg:mt-0">
      <h2 class="text-2xl md:text-3xl font-medium text-slate-700 mb-10 leading-relaxed">
        {{ $t('contactUs.callToAction.title1') }} <br class="hidden md:block"> {{ $t('contactUs.callToAction.title2') }}
      </h2>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
        
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-3 bg-white border-2 border-[#4A85F6] hover:bg-blue-50 text-[#4A85F6] px-8 py-3 rounded-md transition-all duration-200 w-fit"
        >
          <i class="fa-brands fa-whatsapp text-2xl"></i>
          <span class="text-lg font-medium">{{ $t('contactUs.callToAction.whatsAppUs') }}</span>
        </a>

        <div class="w-16 h-px md:w-px md:h-32 bg-[#D2D2D2]"></div>

        <a
          href="mailto:sales@shifdlabs.com"
          target="_blank"
          class="flex items-center justify-center gap-3 bg-white border-2 border-[#4A85F6] hover:bg-blue-50 text-[#4A85F6] px-8 py-3 rounded-md transition-all duration-200 w-fit"
        >
          <i class="fa-solid fa-envelope text-2xl"></i>
          <span class="text-lg font-medium">{{ $t('contactUs.callToAction.emailUs') }}</span>
        </a>
      </div>
    </section>

    <Footer/>
  </div>

  <div v-if="loading" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
  <div class="bg-white rounded-xl p-6 flex flex-col items-center gap-3 shadow-lg">
    <svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
      <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
    <p class="text-gray-700 font-medium">Sending your request...</p>
  </div>
</div>

<div v-if="showSuccessDialog" class="fixed inset-0 z-50 flex items-center justify-center">
  <!-- Backdrop -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Modal -->
  <div class="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8 text-center animate-fade-in">
    <div class="flex justify-center mb-4">
      <i class="fa fa-check-circle text-green-600 text-[50px]" aria-hidden="true"></i>
    </div>

    <h2 class="text-2xl font-semibold mb-2">Request Sent!</h2>
    <p class="text-gray-600 mb-6">
      Thank you! Your request has been submitted successfully. Our team will be in touch with you shortly.
    </p>

    <button
      @click="goToNextPage"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition"
    >
      OK
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import cloudBasedIcon from '@/assets/company-values/cloud-based.svg'
import dedicatedSupportIcon from '@/assets/company-values/dedicated-support.svg'
import technicalExcellenceIcon from '@/assets/company-values/technical-excellence.svg'
import securityRealibilityIcon from '@/assets/company-values/security-realibility.svg'
import Footer from '../components/Footer.vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  description: ''
})

const loading = ref(false)
const showSuccessDialog = ref(false)
const router = useRouter()

async function handleSubmit() {
  loading.value = true

  try {
    const params = new URLSearchParams()
    params.append('name', form.name)
    params.append('email', form.email)
    params.append('phone', form.phone)
    params.append('description', form.description || '')

    await fetch(
      'https://script.google.com/macros/s/AKfycbwtV52U3FeSpKlRTsNYKD93UTgBE9NTtg9i1PXMgj1hNVKDx7X8d2UmzCGddDM8sj0HVQ/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      }
    )

    // karena no-cors, kita tidak bisa baca response
    showSuccessDialog.value = true

  } catch (err) {
    console.error(err)
    alert('Submit failed')
  } finally {
    loading.value = false
  }
}

function goToNextPage() {
  showSuccessDialog.value = false
  router.push('/') // ganti sesuai route kamu
}
</script>