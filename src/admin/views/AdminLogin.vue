<template>
  <div class="grid min-h-screen place-items-center px-4 py-12">
    <form
      class="w-full max-w-sm rounded-2xl border-2 border-[#17191c] bg-white p-8 shadow-[6px_6px_0_#17191c]"
      @submit.prevent="submit"
    >
      <div class="flex items-center gap-2.5">
        <img :src="appLogo" alt="" class="h-8 w-auto" />
        <span class="text-xl font-['DM_Serif_Text'] text-[#2f57c9]">Shifd Labs</span>
      </div>
      <h1 class="mt-6 text-2xl font-bold tracking-tight">Masuk ke CMS Artikel</h1>
      <p class="mt-1 text-sm text-[#566274]">Gunakan akun Shifd yang punya akses admin.</p>

      <label class="mt-6 block text-sm font-semibold" for="cms-email">Email</label>
      <input
        id="cms-email"
        v-model.trim="email"
        type="email"
        autocomplete="username"
        required
        class="cms-input mt-1.5"
      />

      <label class="mt-4 block text-sm font-semibold" for="cms-password">Password</label>
      <input
        id="cms-password"
        v-model="password"
        type="password"
        autocomplete="current-password"
        required
        class="cms-input mt-1.5"
      />

      <p v-if="error" class="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{{ error }}</p>

      <button type="submit" :disabled="loading" class="cms-btn cms-btn--primary mt-6 w-full justify-center">
        {{ loading ? 'Memproses…' : 'Masuk' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import appLogo from '@/assets/app-logo.svg'
import { login } from '../auth'
import '../admin.css'

const route = useRoute()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    await login(email.value, password.value)
    const redirect = typeof route.query.redirect === 'string' && route.query.redirect.startsWith('/admin')
      ? route.query.redirect
      : '/admin'
    router.replace(redirect)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Login gagal.'
  } finally {
    loading.value = false
  }
}
</script>
