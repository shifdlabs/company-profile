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
import { getDefaultLang } from '@/i18n'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const handleNavClick = (e: Event, item: any) => {
  if (item.href && item.href.startsWith('#')) {
    if (route.path === '/') {
      e.preventDefault()
      const el = document.querySelector(item.href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/')
    }
  }
}

withDefaults(
  defineProps<{ isTransparentBackground?: boolean }>(),
  { isTransparentBackground: true }
)

const { t } = useI18n()

interface NavItem {
  name: string
  to?: string
  href?: string
}

// Reordered to match reference: Products & Services, About Us, Contact Us
const navigation = computed<NavItem[]>(() => [
  { name: t('header.aboutUs'), to: '/about-us' },
  { name: t('header.contactUs'), to: '/contact-us' },
])

const { locale } = useI18n()
const langOpen = ref(false)
const langMenu = ref<HTMLElement | null>(null)
const mobileMenuOpen = ref(false)
const currentLang = ref<Lang>(getDefaultLang())
const productsOpen = ref(false)
const productsMenu = ref<HTMLElement | null>(null)

type Lang = 'ID' | 'ENG'

const selectLang = (lang: Lang) => {
  currentLang.value = lang
  const i18nLang = lang === 'ID' ? 'id' : 'en'
  locale.value = i18nLang
  localStorage.setItem('lang', lang)
  langOpen.value = false
}

onClickOutside(langMenu, () => { langOpen.value = false })
onClickOutside(productsMenu, () => { productsOpen.value = false })

onMounted(() => {
  const lang = getDefaultLang()
  currentLang.value = lang
  locale.value = lang === 'ID' ? 'id' : 'en'
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isTransparentBackground
      ? 'bg-[#f8f9fb]/90 backdrop-blur-md border-b border-gray-200/50'
      : 'bg-[#f8f9fb] border-b border-gray-200 shadow-sm'"
  >
    <nav class="py-3" aria-label="Global">
      <div class="mx-auto max-w-7xl flex items-center px-6 xl:px-0">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2.5 flex-shrink-0">
          <img class="h-9 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
          <p class="text-[26px] font-['DM_Serif_Text'] leading-none text-[#2f57c9]">
            Shifd
          </p>
        </router-link>

        <!-- Desktop nav links -->
        <div class="hidden lg:flex items-center gap-1 ml-10">

          <!-- Products & Services dropdown -->
          <div
            class="relative"
            ref="productsMenu"
            @mouseenter="productsOpen = true"
            @mouseleave="productsOpen = false"
          >
            <button
              @click="productsOpen = !productsOpen"
              class="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg text-[#5c5e61] hover:text-[#2f57c9] hover:bg-gray-100/70 transition-all duration-200 cursor-pointer select-none"
              :class="productsOpen ? 'text-[#2f57c9] bg-gray-100/70' : ''"
            >
              {{ $t('header.productNServices') }}
              <svg
                class="w-3.5 h-3.5 mt-px transition-transform duration-200 opacity-60"
                :class="{ 'rotate-180': productsOpen }"
                viewBox="0 0 20 20" fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-1"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-1"
            >
              <div
                v-show="productsOpen"
                class="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100/80 py-3 px-2 z-50"
                style="box-shadow: 0 8px 30px -8px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.04)"
              >
                <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 mb-1.5">Produk</p>

                <router-link
                  to="/approval"
                  @click="productsOpen = false"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#e9f0ff] transition-colors group"
                >
                  <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg,#2f57c9,#2f57c9)">
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                      <rect x="4" y="7" width="12.5" height="12.5" rx="3.2" fill="white" opacity="0.3"/>
                      <rect x="7.5" y="3.5" width="12.5" height="12.5" rx="3.2" fill="white"/>
                      <path d="m10.6 9.7 2 2 3.4-3.6" fill="none" stroke="#2f57c9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-sm text-[#1a1c1e] group-hover:text-[#2f57c9] transition-colors leading-tight">Approval</p>
                    <p class="text-xs text-[#8c8e92] leading-snug mt-0.5 truncate">Persetujuan dokumen end-to-end</p>
                  </div>
                  <svg class="w-3.5 h-3.5 text-gray-300 group-hover:text-[#2f57c9] transition-colors shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
            </Transition>
          </div>

          <!-- Other nav links -->
          <component
            v-for="item in navigation"
            :key="item.name"
            :is="item.to ? 'router-link' : 'a'"
            :to="item.to"
            :href="item.href"
            @click="handleNavClick($event, item)"
            class="text-sm font-medium px-3 py-2 rounded-lg text-[#5c5e61] hover:text-[#2f57c9] hover:bg-gray-100/70 transition-all duration-200 cursor-pointer select-none"
          >
            {{ item.name }}
          </component>
        </div>

        <div class="flex-1" />

        <!-- Desktop: lang + whatsapp -->
        <div class="hidden lg:flex items-center gap-5">

          <!-- Language selector -->
          <div class="relative" ref="langMenu">
            <button
              @click="langOpen = !langOpen"
              class="inline-flex items-center gap-1.5 text-[#5c5e61] hover:text-[#2f57c9] transition-colors duration-200 rounded-md px-2 py-1.5"
            >
              <svg class="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12h19.5"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c2.5 2.7 4 6.2 4 9.75s-1.5 7.05-4 9.75c-2.5-2.7-4-6.2-4-9.75s1.5-7.05 4-9.75z"/>
              </svg>
              <span class="text-sm font-medium">{{ currentLang }}</span>
              <svg
                class="h-3.5 w-3.5 transition-transform duration-200"
                :class="{ 'rotate-180': langOpen }"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-1"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-1"
            >
              <div
                v-show="langOpen"
                class="absolute right-0 top-full mt-2 w-32 rounded-xl bg-white shadow-lg ring-1 ring-black/8 z-50 overflow-hidden"
              >
                <button
                  @click="selectLang('ID')"
                  class="block w-full px-4 py-2.5 text-left text-sm text-[#44474a] hover:bg-[#f8f9fb] hover:text-[#2f57c9] transition-colors"
                >
                  Indonesia
                </button>
                <button
                  @click="selectLang('ENG')"
                  class="block w-full px-4 py-2.5 text-left text-sm text-[#44474a] hover:bg-[#f8f9fb] hover:text-[#2f57c9] transition-colors"
                >
                  English
                </button>
              </div>
            </Transition>
          </div>

          <!-- Divider -->
          <div class="w-px h-5 bg-gray-300"></div>

          <!-- WhatsApp button -->
          <a
            href="https://wa.me/6285111210462"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#2f57c9] hover:bg-[#2448a8] active:bg-[#1e3d93] text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm transition-all duration-200"
          >
            <i class="fa-brands fa-whatsapp text-base"></i>
            <span>{{ $t('header.whatsAppUs') }}</span>
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button
          @click="mobileMenuOpen = true"
          class="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#5c5e61] hover:bg-gray-100 hover:text-[#2f57c9] transition-colors ml-auto"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
          </svg>
        </button>

      </div>
    </nav>

    <!-- Mobile drawer -->
    <TransitionRoot appear :show="mobileMenuOpen" as="template">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="mobileMenuOpen = false">

        <!-- Backdrop -->
        <TransitionChild
          as="template"
          enter="transition-opacity duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </TransitionChild>

        <!-- Panel -->
        <TransitionChild
          as="template"
          enter="transform transition duration-300 ease-out"
          enter-from="translate-x-full opacity-0"
          enter-to="translate-x-0 opacity-100"
          leave="transform transition duration-200 ease-in"
          leave-from="translate-x-0 opacity-100"
          leave-to="translate-x-full opacity-0"
        >
          <DialogPanel class="fixed inset-y-0 right-0 w-full max-w-sm bg-[#f8f9fb] shadow-2xl flex flex-col">

            <!-- Drawer header -->
            <div class="flex items-center justify-between px-6 pt-6 pb-4">
              <div class="flex items-center gap-2.5">
                <img class="h-9 w-auto" src="/src/assets/app-logo.svg" alt="Logo" />
                <p class="text-[24px] font-['DM_Serif_Text'] text-[#2f57c9] leading-none">Shifd</p>
              </div>
              <button
                @click="mobileMenuOpen = false"
                class="rounded-lg p-1.5 text-[#5c5e61] hover:bg-white hover:shadow-sm transition-all"
              >
                <XMarkIcon class="size-5" />
              </button>
            </div>

            <div class="h-px w-full bg-gray-200" />

            <!-- Nav links -->
            <div class="flex-1 px-6 pt-2 overflow-y-auto">
              <!-- Products section -->
              <div class="border-b border-gray-100">
                <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 pt-4 pb-2">{{ $t('header.productNServices') }}</p>
                <router-link
                  to="/approval"
                  @click="mobileMenuOpen = false"
                  class="flex items-center gap-3 py-3 mb-2"
                >
                  <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg,#2f57c9,#2f57c9)">
                    <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24">
                      <rect x="4" y="7" width="12.5" height="12.5" rx="3.2" fill="white" opacity="0.3"/>
                      <rect x="7.5" y="3.5" width="12.5" height="12.5" rx="3.2" fill="white"/>
                      <path d="m10.6 9.7 2 2 3.4-3.6" fill="none" stroke="#2f57c9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-base font-semibold text-[#44474a]">Approval</p>
                    <p class="text-xs text-gray-400 leading-tight">Persetujuan dokumen end-to-end</p>
                  </div>
                </router-link>
              </div>

              <!-- Other nav links -->
              <component
                v-for="item in navigation"
                :key="item.name"
                :is="item.to ? 'router-link' : 'a'"
                :to="item.to"
                :href="item.href"
                @click="mobileMenuOpen = false"
                class="flex items-center py-4 text-base font-medium text-[#44474a] hover:text-[#2f57c9] border-b border-gray-100 last:border-0 transition-colors"
              >
                {{ item.name }}
              </component>
            </div>

            <!-- Drawer footer -->
            <div class="px-6 pb-8 pt-4 space-y-3">
              <!-- Language toggle -->
              <div class="flex rounded-xl overflow-hidden border border-gray-200 bg-white">
                <button
                  @click="selectLang('ID')"
                  class="flex-1 py-2.5 text-sm font-medium transition-all"
                  :class="currentLang === 'ID'
                    ? 'bg-[#2f57c9] text-white'
                    : 'text-[#5c5e61] hover:bg-gray-50'"
                >
                  Indonesia
                </button>
                <button
                  @click="selectLang('ENG')"
                  class="flex-1 py-2.5 text-sm font-medium transition-all"
                  :class="currentLang === 'ENG'
                    ? 'bg-[#2f57c9] text-white'
                    : 'text-[#5c5e61] hover:bg-gray-50'"
                >
                  English
                </button>
              </div>

              <!-- WhatsApp CTA -->
              <a
                href="https://wa.me/6285111210462"
                target="_blank"
                rel="noopener noreferrer"
                class="flex w-full items-center justify-center gap-2.5 bg-[#2f57c9] hover:bg-[#2448a8] text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm"
              >
                <i class="fa-brands fa-whatsapp text-lg"></i>
                <span>{{ $t('header.whatsAppUs') }}</span>
              </a>
            </div>

          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>