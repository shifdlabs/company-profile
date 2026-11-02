<template>
  <router-view />
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Lenis from 'lenis'
import { useSeoHead } from '@/composables/useSeoHead'

const route = useRoute()
useSeoHead()
let sectionObserver: IntersectionObserver | null = null
let lenis: Lenis | null = null
let lenisFrame = 0

const startLenis = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({
    autoRaf: false,
    smoothWheel: true,
    lerp: 0.16,
    wheelMultiplier: 1,
    anchors: true,
    respectReducedMotion: true,
  })

  const raf = (time: number) => {
    lenis?.raf(time)
    lenisFrame = requestAnimationFrame(raf)
  }

  lenisFrame = requestAnimationFrame(raf)
}

const observeSections = async () => {
  await nextTick()

  document.querySelectorAll<HTMLElement>('main section').forEach((section) => {
    section.classList.add('reveal-on-scroll')
    sectionObserver?.observe(section)
  })
}

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          sectionObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -56px 0px' }
  )

  observeSections()
  // Smooth scroll hanya untuk halaman publik; di CMS mengganggu scroll editor
  if (!route.meta.admin) startLenis()
})

watch(() => route.fullPath, observeSections)

onUnmounted(() => {
  sectionObserver?.disconnect()
  if (lenisFrame) cancelAnimationFrame(lenisFrame)
  lenis?.destroy()
  lenis = null
})
</script>
