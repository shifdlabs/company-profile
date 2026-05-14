<template>
  <div class="bg-[#f0f4f8] dark:bg-gray-950 scheme-light dark:scheme-dark min-h-screen">
    <AppHeader :is-transparent-background="false"/>

    <!-- Main Content -->
    <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div class="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Left Column: Text & Features -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-[#2f80ed] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-md shadow-blue-200/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            {{ $t('contactUs.badge') }}
          </div>

          <!-- Heading -->
          <h1 class="text-4xl md:text-5xl font-bold text-[#191c1e] leading-tight" style="font-family: 'DM Serif Text', serif;">
            {{ $t('contactUs.heading') }}
          </h1>

          <!-- Subtitle -->
          <p class="text-lg text-[#565e74] leading-relaxed max-w-md" style="font-family: 'Inter', sans-serif;">
            {{ $t('contactUs.subtitle') }}
          </p>

          <!-- Feature Items -->
          <div class="space-y-6 pt-4">
            <!-- Scalable Infrastructure -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#e8f0fe] rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#2f80ed]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-[#191c1e]" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contactUs.features.scalableTitle') }}
                </h3>
                <p class="text-sm text-[#565e74] leading-relaxed mt-1" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contactUs.features.scalableDesc') }}
                </p>
              </div>
            </div>

            <!-- Expert Consultation -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#e8f0fe] rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#2f80ed]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-[#191c1e]" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contactUs.features.expertTitle') }}
                </h3>
                <p class="text-sm text-[#565e74] leading-relaxed mt-1" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contactUs.features.expertDesc') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Form Card -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Full Name -->
            <div>
              <label class="block text-sm font-semibold text-[#191c1e] mb-2" style="font-family: 'Inter', sans-serif;">
                {{ $t('contactUs.form.fullName') }}
              </label>
              <input 
                v-model="form.name"
                type="text" 
                :placeholder="$t('contactUs.form.fullNamePlaceholder')"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#191c1e] placeholder-gray-400 focus:ring-2 focus:ring-[#2f80ed] focus:border-transparent focus:outline-none transition"
                style="font-family: 'Inter', sans-serif;"
                required
              />
            </div>

            <!-- Email & Phone Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-[#191c1e] mb-2" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contactUs.form.email') }}
                </label>
                <input 
                  v-model="form.email"
                  type="email" 
                  :placeholder="$t('contactUs.form.emailPlaceholder')"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#191c1e] placeholder-gray-400 focus:ring-2 focus:ring-[#2f80ed] focus:border-transparent focus:outline-none transition"
                  style="font-family: 'Inter', sans-serif;"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-[#191c1e] mb-2" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contactUs.form.phoneNumber') }}
                </label>
                <input 
                  v-model="form.phone"
                  type="text"
                  inputmode="numeric"
                  maxlength="15"
                  pattern="[0-9]*"
                  :placeholder="$t('contactUs.form.phonePlaceholder')"
                  @input="form.phone = form.phone.replace(/\D/g, '')"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#191c1e] placeholder-gray-400 focus:ring-2 focus:ring-[#2f80ed] focus:border-transparent focus:outline-none transition"
                  style="font-family: 'Inter', sans-serif;"
                  required
                />
              </div>
            </div>

            <!-- Brief Description -->
            <div>
              <label class="block text-sm font-semibold text-[#191c1e] mb-2" style="font-family: 'Inter', sans-serif;">
                {{ $t('contactUs.form.briefDescription') }}
              </label>
              <textarea 
                v-model="form.description"
                rows="4"
                :placeholder="$t('contactUs.form.briefDescriptionPlaceholder')"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl text-[#191c1e] placeholder-gray-400 focus:ring-2 focus:ring-[#2f80ed] focus:border-transparent focus:outline-none transition resize-none"
                style="font-family: 'Inter', sans-serif;"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full flex items-center justify-center gap-2 bg-[#2f80ed] hover:bg-[#1a6fd4] active:bg-[#1560c0] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-200/50"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ $t('contactUs.form.submitButton') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>

          <!-- Direct Contact Section -->
          <div class="mt-8 pt-6 border-t border-gray-100">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
              <p class="text-sm text-[#565e74] whitespace-nowrap" style="font-family: 'Inter', sans-serif;">
                {{ $t('contactUs.preferDirect') }}
              </p>
              <div class="flex gap-3">
                <!-- WhatsApp Button + Label -->
                <div class="flex flex-col items-center">
                  <a
                    href="https://wa.me/6285111210462"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-white border-2 border-[#2f80ed] text-[#2f80ed] hover:bg-[#e8f0fe] px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {{ $t('contactUs.whatsapp') }}
                  </a>
                  <span class="text-[10px] text-[#8e95a9] uppercase tracking-widest mt-1.5 font-medium" style="font-family: 'Inter', sans-serif;">
                    {{ $t('contactUs.whatsappLabel') }}
                  </span>
                </div>

                <!-- Email Button + Label -->
                <div class="flex flex-col items-center">
                  <a
                    href="mailto:sales@shifdlabs.com"
                    class="inline-flex items-center gap-2 bg-white border-2 border-[#2f80ed] text-[#2f80ed] hover:bg-[#e8f0fe] px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    {{ $t('contactUs.emailSupport') }}
                  </a>
                  <span class="text-[10px] text-[#8e95a9] uppercase tracking-widest mt-1.5 font-medium" style="font-family: 'Inter', sans-serif;">
                    {{ $t('contactUs.emailLabel') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>

  <!-- Loading Overlay -->
  <div v-if="loading" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
      <svg class="animate-spin h-10 w-10 text-[#2f80ed]" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
        <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" opacity="0.75"/>
      </svg>
      <p class="text-[#191c1e] font-medium" style="font-family: 'Inter', sans-serif;">
        {{ $t('contactUs.loading') }}
      </p>
    </div>
  </div>

  <!-- Success Dialog -->
  <div v-if="showSuccessDialog" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    <!-- Modal -->
    <div class="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-10 text-center animate-fade-in">
      <!-- Success Icon -->
      <div class="flex justify-center mb-6">
        <div class="w-20 h-20 bg-[#e8f0fe] rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#2f80ed]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-[#191c1e] mb-3" style="font-family: 'DM Serif Text', serif;">
        {{ $t('contactUs.success.title') }}
      </h2>
      <p class="text-[#565e74] mb-8 leading-relaxed" style="font-family: 'Inter', sans-serif;">
        {{ $t('contactUs.success.message') }}
      </p>

      <button
        @click="goToNextPage"
        class="w-full bg-[#2f80ed] hover:bg-[#1a6fd4] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-200/50 mb-3"
        style="font-family: 'Inter', sans-serif;"
      >
        {{ $t('contactUs.success.returnHome') }}
      </button>

      <button
        @click="closeDialog"
        class="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-[#565e74] font-semibold px-6 py-4 rounded-xl transition-all duration-200"
        style="font-family: 'Inter', sans-serif;"
      >
        {{ $t('contactUs.success.close') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
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

function closeDialog() {
  showSuccessDialog.value = false
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>