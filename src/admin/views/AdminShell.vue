<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-30 border-b border-[#e2e0da] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
        <router-link to="/admin" class="flex items-center gap-2">
          <img :src="appLogo" alt="" class="h-7 w-auto" />
          <span class="font-['DM_Serif_Text'] text-lg text-[#2f57c9]">Shifd Labs</span>
          <span class="rounded bg-[#17191c] px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">CMS</span>
        </router-link>

        <nav class="flex items-center gap-1 text-sm font-semibold">
          <router-link to="/admin" class="cms-nav" :class="{ 'cms-nav--active': isArticles }">Artikel</router-link>
          <router-link to="/admin/categories" class="cms-nav" active-class="cms-nav--active">Kategori</router-link>
        </nav>

        <div class="ml-auto flex items-center gap-3 text-sm">
          <a href="/blog" target="_blank" rel="noopener" class="hidden text-[#566274] hover:text-[#3279e7] sm:inline">Lihat blog ↗</a>
          <span class="hidden text-[#566274] md:inline">{{ session.name || session.email }}</span>
          <button class="cms-btn cms-btn--ghost" @click="signOut">Keluar</button>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import appLogo from '@/assets/app-logo.svg'
import { logout, session } from '../auth'
import '../admin.css'

const route = useRoute()
const router = useRouter()
const isArticles = computed(() => route.name === 'AdminArticles' || String(route.name).startsWith('AdminArticle'))

async function signOut() {
  await logout()
  router.replace({ name: 'AdminLogin' })
}
</script>

<style scoped>
.cms-nav { border-radius: 8px; padding: 6px 12px; color: #566274; }
.cms-nav:hover { color: #17191c; background: #f1f0ec; }
.cms-nav--active { color: #17191c; background: #ffbf1f33; }
</style>
