<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const handleNavClick = (e: Event, item: any) => {
  // Hanya proses jika item memiliki href (untuk scroll target)
  if (item.href && item.href.startsWith('#')) {
    
    if (route.path === '/') {
      // KONDISI: Sedang di Home
      // Cegah reload halaman dan lakukan scrolling
      e.preventDefault()
      const el = document.querySelector(item.href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // KONDISI: Sedang di halaman lain (About/Contact)
      // Jangan preventDefault, biarkan router-link/anchor mengarahkan ke "/"
      // Kita bisa memaksa arahkan ke root
      router.push('/')
    }
  }
}


const props = withDefaults(
  defineProps<{ isTransparentBackground?: boolean }>(),
  { isTransparentBackground: true }
)

const { t } = useI18n()

const navigation = computed(() => [
  { name: t('header.productNServices'), href: '#products-services' },
  { name: t('header.contactUs'), to: '/contact-us' },
  { name: t('header.aboutUs'), to: '/about-us' },
])

const headerStyle = computed(() => ({
  text: props.isTransparentBackground ? 'text-white' : 'text-[#4C5056]',
  logo: props.isTransparentBackground ? 'text-white' : 'text-[#1363DF]',
  divider: props.isTransparentBackground ? 'bg-white/60' : 'bg-[#B0B0B0]',
  menuHover: 'hover:text-[#1363DF]',
  langHover: props.isTransparentBackground
    ? 'hover:bg-white/10'
    : 'hover:bg-gray-100',
}))

// const activeItem = ref('Home')
const { locale } = useI18n()
const langOpen = ref(false)
const langMenu = ref<HTMLElement | null>(null)
const mobileMenuOpen = ref(false)
const currentLang = ref<Lang>((localStorage.getItem('lang') as Lang) || 'ENG')

type Lang = 'ID' | 'ENG'

const selectLang = (lang: Lang) => {
  currentLang.value = lang

  // mapping ke format vue-i18n
  const i18nLang = lang === 'ID' ? 'id' : 'en'
  locale.value = i18nLang

  localStorage.setItem('lang', lang)
  langOpen.value = false
}

onClickOutside(langMenu, () => {
  langOpen.value = false
})

onMounted(() => {
  // Ambil bahasa dari localStorage atau default ke 'ENG'
  const savedLang = (localStorage.getItem('lang') as Lang) || 'ENG'
  
  // Pastikan currentLang terisi (untuk tampilan UI button)
  currentLang.value = savedLang
  
  // TRIGGER: Sinkronkan locale i18n dengan bahasa yang tersimpan
  const i18nLang = savedLang === 'ID' ? 'id' : 'en'
  locale.value = i18nLang
})
</script>

<template>
  <header 
    class="absolute inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="{ 'bg-white shadow-sm': !isTransparentBackground }"
  >
    <nav class="py-2" aria-label="Global">
      <div class="mx-auto max-w-7xl flex items-center px-6 xl:px-0">

        <router-link to="/" class="flex items-center gap-3">
          <img class="h-14 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
          <p 
            class="text-[42px] font-['DM_Serif_Text'] leading-none transition-colors"
            :class="headerStyle.logo"
          >
            Shifd
          </p>
        </router-link>

        <div class="hidden lg:flex gap-10 ml-16">
          <component
            v-for="item in navigation"
            :key="item.name"
            :is="item.to ? 'router-link' : 'a'"
            :to="item.to"
            :href="item.href"
            @click="handleNavClick($event, item)"
            class="text-md transition-colors cursor-pointer select-none font-inter"
            :class="[
              headerStyle.text,
              headerStyle.menuHover
            ]"
          >
            {{ item.name }}
          </component>
        </div>

        <div class="flex-1"></div>

        <div class="hidden lg:flex items-center">
          <div class="relative" ref="langMenu">
            <button
              @click="langOpen = !langOpen"
              :class="[headerStyle.text, headerStyle.langHover]"
              class="inline-flex items-center gap-2 mt-2 text-lg font-semibold rounded-md transition-colors"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12h19.5"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c2.5 2.7 4 6.2 4 9.75s-1.5 7.05-4 9.75c-2.5-2.7-4-6.2-4-9.75s1.5-7.05 4-9.75z"/>
              </svg>
              <span class="text-[14px]">{{ currentLang }}</span>
              <svg class="h-5 w-5 transition-transform" :class="{ 'rotate-180': langOpen }" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </button>

            <div
              v-show="langOpen"
              class="absolute right-0 top-full mt-2 w-24 rounded-md bg-white shadow-lg ring-1 ring-black/10 z-50 overflow-hidden"
            >
              <button @click="selectLang('ID')" class="block w-full px-4 py-2 text-left text-[14px] text-gray-700 hover:bg-gray-100">Indonesia</button>
              <button @click="selectLang('ENG')" class="block w-full px-4 py-2 text-left text-[14px] text-gray-700 hover:bg-gray-100">English</button>
            </div>
          </div>

          <div class="mx-6 w-0.5 h-6 transition-colors" :class="headerStyle.divider"></div>

          <a
            href="https://wa.me/6285111210462"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 bg-[#1363DF] hover:bg-[#337dec] text-white px-3 py-1.5 rounded-sm shadow-lg transition"
          >
            <i class="fa-brands fa-whatsapp text-2xl"></i>
            <span class="text-[14px] font-inter">{{ $t('header.whatsAppUs') }}</span>
          </a>
        </div>

        <button
          @click="mobileMenuOpen = true"
          :class="[headerStyle.text, headerStyle.langHover]"
          class="lg:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors ml-auto"
        >
          <svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="!isTransparentBackground" class="w-full h-px bg-[#E7E7E7]"></div>

    <TransitionRoot appear :show="mobileMenuOpen" as="template">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/40" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transform transition duration-300 ease-out"
          enter-from="translate-x-full opacity-0"
          enter-to="translate-x-0 opacity-100"
          leave="transform transition duration-200 ease-in"
          leave-from="translate-x-0 opacity-100"
          leave-to="translate-x-full opacity-0"
        >
          <DialogPanel class="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl flex flex-col">
            <div class="flex items-center justify-between px-6 pt-6">
              <div class="flex items-center gap-3">
                <img class="h-14 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
                <p class="text-[30px] font-['DM_Serif_Text'] text-blue-500 leading-none">Shifd</p>
              </div>
              <button @click="mobileMenuOpen = false" class="rounded-md p-1 text-gray-600 hover:bg-gray-100">
                <XMarkIcon class="size-6" />
              </button>
            </div>
            <div class="mt-4 h-px w-full bg-gray-200" />
            <div class="flex-1 px-6 pt-6 divide-y divide-gray-200 overflow-y-auto">
              <component
                v-for="item in navigation"
                :key="item.name"
                :is="item.to ? 'router-link' : 'a'"
                :to="item.to"
                :href="item.href"
                @click="mobileMenuOpen = false"
                class="block py-4 text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
              >
                {{ item.name }}
              </component>
            </div>
            <div class="px-5 pb-6">
              <a href="https://wa.me/6285111210462" target="_blank" class="flex w-full items-center justify-center gap-3 bg-[#1363DF] text-white py-3 rounded-md shadow-lg">
                <i class="fa-brands fa-whatsapp text-2xl"></i>
                <span class="text-lg font-inter">{{ $t('header.whatsAppUs') }}</span>
              </a>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>