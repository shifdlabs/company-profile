<template>
  <div>
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">Artikel</h1>
        <p class="mt-1 text-sm text-[#566274]">{{ total }} artikel</p>
      </div>
      <router-link :to="{ name: 'AdminArticleNew' }" class="cms-btn cms-btn--primary">+ Tulis artikel</router-link>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <input v-model="search" type="search" placeholder="Cari judul…" class="cms-input max-w-xs" aria-label="Cari judul" />
      <select v-model="locale" class="cms-input w-auto" aria-label="Bahasa">
        <option value="">Semua bahasa</option>
        <option value="id">Indonesia</option>
        <option value="en">English</option>
      </select>
      <select v-model="status" class="cms-input w-auto" aria-label="Status">
        <option value="">Semua status</option>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
    </div>

    <p v-if="error" class="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{{ error }}</p>

    <div class="cms-card mt-6 overflow-x-auto">
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead class="border-b border-[#e2e0da] text-xs uppercase tracking-wider text-[#6b7487]">
          <tr>
            <th class="px-4 py-3 font-semibold">Judul</th>
            <th class="px-4 py-3 font-semibold">Bahasa</th>
            <th class="px-4 py-3 font-semibold">Kategori</th>
            <th class="px-4 py-3 font-semibold">Status</th>
            <th class="px-4 py-3 font-semibold">Diperbarui</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="5" class="px-4 py-10 text-center text-[#6b7487]">Memuat…</td>
          </tr>
          <tr v-else-if="!items.length">
            <td colspan="5" class="px-4 py-10 text-center text-[#6b7487]">
              Belum ada artikel{{ hasFilter ? ' yang cocok dengan filter' : '' }}.
            </td>
          </tr>
          <template v-else>
          <tr
            v-for="a in items"
            :key="a.id"
            class="border-b border-[#f0eee9] last:border-0 hover:bg-[#faf9f6]"
          >
            <td class="px-4 py-3">
              <router-link :to="{ name: 'AdminArticleEdit', params: { id: a.id } }" class="font-semibold hover:text-[#3279e7]">
                {{ a.title }}
              </router-link>
              <div class="mt-0.5 text-xs text-[#6b7487]">/{{ a.slug }}</div>
            </td>
            <td class="px-4 py-3"><span class="cms-badge cms-badge--locale">{{ a.locale }}</span></td>
            <td class="px-4 py-3 text-[#43516a]">{{ a.category?.name ?? '—' }}</td>
            <td class="px-4 py-3">
              <span class="cms-badge" :class="`cms-badge--${a.status}`">{{ a.status === 'published' ? 'Published' : 'Draft' }}</span>
            </td>
            <td class="px-4 py-3 text-[#43516a]">{{ formatDateTime(a.updatedAt) }}</td>
          </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div v-if="pages > 1" class="mt-4 flex items-center justify-end gap-3 text-sm">
      <button class="cms-btn" :disabled="page <= 1" @click="page--">← Sebelumnya</button>
      <span class="text-[#566274]">Halaman {{ page }} dari {{ pages }}</span>
      <button class="cms-btn" :disabled="page >= pages" @click="page++">Berikutnya →</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { api, type ArticleListItem } from '../api'
import { formatDateTime } from '../format'

const PAGE_SIZE = 20

const items = ref<ArticleListItem[]>([])
const total = ref(0)
const page = ref(1)
const search = ref('')
const locale = ref('')
const status = ref('')
const loading = ref(true)
const error = ref('')

const pages = computed(() => Math.max(1, Math.ceil(total.value / PAGE_SIZE)))
const hasFilter = computed(() => !!(search.value || locale.value || status.value))

let requestId = 0
async function load() {
  const id = ++requestId
  loading.value = true
  error.value = ''
  try {
    const res = await api.listArticles({
      q: search.value.trim(),
      locale: locale.value,
      status: status.value,
      page: page.value,
      pageSize: PAGE_SIZE,
    })
    if (id !== requestId) return
    items.value = res.items
    total.value = res.total
  } catch (e) {
    if (id === requestId) error.value = e instanceof Error ? e.message : 'Gagal memuat artikel.'
  } finally {
    if (id === requestId) loading.value = false
  }
}

let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(search, () => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    page.value = 1
    load()
  }, 300)
})
watch([locale, status], () => {
  page.value = 1
  load()
})
watch(page, load)

onMounted(load)
</script>
