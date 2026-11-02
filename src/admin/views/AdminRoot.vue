<template>
  <div class="min-h-screen bg-[#f6f5f1] text-[#17191c] antialiased">
    <router-view v-if="mounted" />
    <div v-else class="grid min-h-screen place-items-center text-sm text-[#566274]">Memuat…</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// /admin hanya jalan di browser. Saat prerender (dan render pertama di browser)
// yang tampil cuma "Memuat…", jadi satu file HTML cukup untuk semua path /admin/*.
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>
