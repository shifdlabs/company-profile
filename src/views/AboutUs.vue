<template>
  <div class="bg-[#f7f9fb] text-[#191c1e] font-sans overflow-x-hidden selection:bg-[#dde1ff] selection:text-[#003ec7]">
    <AppHeader :is-transparent-background="false"/>

    <main class="pt-16">
      <!-- Hero & Identity Section -->
      <section
        ref="heroSection"
        class="relative py-20 overflow-hidden transition-all duration-700"
        :class="heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <!-- Hero gradient background -->
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(circle at top right, rgba(0, 62, 199, 0.05), transparent), radial-gradient(circle at bottom left, rgba(19, 99, 223, 0.03), transparent);"></div>

        <div class="max-w-[1440px] mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div class="space-y-6">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-[#dde1ff] text-[#003ec7] px-3 py-1 rounded-full">
              <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">verified</span>
              <span class="text-xs font-bold uppercase tracking-wider">{{ $t('aboutUs.badge') }}</span>
            </div>

            <!-- Headline -->
            <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#191c1e]">
              {{ $t('aboutUs.heroHeadline') }} <span class="text-[#003ec7]">{{ $t('aboutUs.heroHeadlineHighlight') }}</span>.
            </h1>

            <!-- Description -->
            <p class="text-lg leading-7 text-[#434656] max-w-xl">
              {{ $t('aboutUs.mainDescription') }}
            </p>

            <!-- Feature tags -->
            <div class="flex flex-wrap gap-6 pt-2">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[#003ec7] text-2xl">check_circle</span>
                <span class="text-sm font-semibold">{{ $t('aboutUs.featureScalable') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[#003ec7] text-2xl">check_circle</span>
                <span class="text-sm font-semibold">{{ $t('aboutUs.featureSecure') }}</span>
              </div>
            </div>
          </div>

          <!-- Hero image -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-[#003ec7]/10 blur-3xl rounded-full transition-opacity group-hover:opacity-50"></div>
            <div class="relative rounded-xl overflow-hidden shadow-2xl glass-card aspect-square md:aspect-video flex items-center justify-center">
              <img
                :src="enterpriseOfficeImg"
                alt="Enterprise Environment"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Bento Grid -->
      <section
        ref="missionSection"
        class="py-20 bg-white transition-all duration-700"
        :class="missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="max-w-[1440px] mx-auto px-4 md:px-16">
          <!-- Section header -->
          <div class="mb-12 text-center max-w-2xl mx-auto">
            <h2 class="text-3xl font-semibold text-[#191c1e] mb-3 tracking-tight">{{ $t('aboutUs.missionSectionTitle') }}</h2>
            <p class="text-base leading-6 text-[#434656]">{{ $t('aboutUs.missionSectionCaption') }}</p>
          </div>

          <!-- Bento grid -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
            <!-- About / Mission Card (large) -->
            <div class="md:col-span-8 bg-[#f2f4f6] rounded-xl p-12 flex flex-col justify-between group hover:bg-[#e0e3e5] transition-colors duration-500">
              <div>
                <div class="w-12 h-12 rounded-lg bg-[#003ec7]/10 flex items-center justify-center mb-6">
                  <span class="material-symbols-outlined text-[#003ec7] text-4xl">psychology</span>
                </div>
                <h3 class="text-2xl font-semibold mb-6">{{ $t('aboutUs.missionCardTitle') }}</h3>
                <p class="text-lg leading-7 text-[#434656]">
                  {{ $t('aboutUs.missionTitle') }}
                </p>
              </div>
            </div>

            <!-- Side Cards -->
            <div class="md:col-span-4 space-y-6">
              <!-- Technical Mastery card -->
              <div class="bg-[#003ec7] rounded-xl p-6 text-white h-[calc(50%-12px)] flex flex-col justify-center">
                <span class="material-symbols-outlined text-5xl mb-2">security</span>
                <h4 class="text-2xl font-semibold mb-1">{{ $t('aboutUs.technicalMasteryTitle') }}</h4>
                <p class="text-sm leading-5 opacity-90">{{ $t('aboutUs.technicalMasteryDesc') }}</p>
              </div>

              <!-- Cloud Ready card -->
              <div class="bg-[#f7f9fb] rounded-xl p-6 border border-[#c3c5d9]/50 h-[calc(50%-12px)] flex flex-col justify-center relative overflow-hidden group">
                <div class="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <span class="material-symbols-outlined" style="font-size: 128px;">cloud_done</span>
                </div>
                <h4 class="text-2xl font-semibold mb-1">{{ $t('aboutUs.cloudReadyTitle') }}</h4>
                <p class="text-sm leading-5 text-[#434656]">{{ $t('aboutUs.cloudReadyDesc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section
        ref="ctaSection"
        class="py-20 relative transition-all duration-700"
        :class="ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <!-- Background image -->
        <div class="absolute inset-0 z-0">
          <img
            :src="skyscraperImg"
            alt="Skyscraper Architecture"
            class="w-full h-full object-cover opacity-10 grayscale"
          />
        </div>

        <div class="max-w-[1440px] mx-auto px-4 md:px-16 relative z-10 text-center">
          <div class="glass-card rounded-2xl p-12 md:p-20 shadow-lg border border-[#003ec7]/10">
            <!-- Rocket icon -->
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 bg-[#003ec7] rounded-xl flex items-center justify-center rotate-3 group hover:rotate-0 transition-transform duration-300">
                <span class="material-symbols-outlined text-white text-5xl" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
              </div>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold text-[#191c1e] mb-6 tracking-tight">{{ $t('aboutUs.callToActionQuestion') }}</h2>
            <p class="text-lg leading-7 text-[#434656] max-w-2xl mx-auto mb-12">{{ $t('aboutUs.callToActionCaption') }}</p>

            <!-- CTA buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/6285111210462"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#1363DF] text-white px-12 py-4 rounded-full text-2xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
              >
                <svg class="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {{ $t('aboutUs.whatsAppUs') }}
              </a>

              <p class="text-sm font-semibold text-[#434656] max-w-[200px] text-left leading-tight">
                <span class="text-[#003ec7] font-bold">{{ $t('aboutUs.preferDirect') }}</span><br/>
                {{ $t('aboutUs.preferDirectDesc') }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
import enterpriseOfficeImg from '@/assets/enterprise-office.png'
import skyscraperImg from '@/assets/skyscraper-architecture.png'

// Intersection Observer for scroll-triggered animations
const heroSection = ref<HTMLElement | null>(null)
const missionSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

const heroVisible = ref(false)
const missionVisible = ref(false)
const ctaVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroSection.value) heroVisible.value = true
          if (entry.target === missionSection.value) missionVisible.value = true
          if (entry.target === ctaSection.value) ctaVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  if (heroSection.value) observer.observe(heroSection.value)
  if (missionSection.value) observer.observe(missionSection.value)
  if (ctaSection.value) observer.observe(ctaSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 0.5);
}
</style>