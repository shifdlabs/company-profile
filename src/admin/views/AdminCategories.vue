<template>
  <div>
    <h1 class="text-2xl font-bold tracking-tight">Kategori</h1>
    <p class="mt-1 max-w-2xl text-sm text-[#566274]">
      Kategori dibuat per bahasa. Tiap kategori punya halaman sendiri di blog
      (<code>/blog/category/&lt;slug&gt;</code>), yang tampil setelah ada artikel published di dalamnya.
    </p>

    <p v-if="error" class="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{{ error }}</p>

    <form class="cms-card mt-6 grid gap-4 p-5 md:grid-cols-[110px_1fr_1fr]" @submit.prevent="create">
      <div>
        <label class="cms-label" for="cat-locale">Bahasa</label>
        <select id="cat-locale" v-model="draft.locale" class="cms-input mt-1.5">
          <option value="id">ID</option>
          <option value="en">EN</option>
        </select>
      </div>
      <div>
        <label class="cms-label" for="cat-name">Nama</label>
        <input id="cat-name" v-model="draft.name" required maxlength="120" class="cms-input mt-1.5" placeholder="Tips Bisnis" />
      </div>
      <div>
        <label class="cms-label" for="cat-slug">Slug</label>
        <input id="cat-slug" v-model="draft.slug" maxlength="120" class="cms-input mt-1.5" :placeholder="slugify(draft.name) || 'otomatis dari nama'" />
      </div>
      <div class="md:col-span-3">
        <label class="cms-label" for="cat-desc">Deskripsi <span class="font-normal text-[#6b7487]">(opsional, dipakai sebagai meta description halaman kategori)</span></label>
        <textarea id="cat-desc" v-model="draft.description" maxlength="500" rows="2" class="cms-input mt-1.5"></textarea>
      </div>
      <div class="md:col-span-3">
        <button type="submit" class="cms-btn cms-btn--primary" :disabled="saving">+ Tambah kategori</button>
      </div>
    </form>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <section v-for="l in (['id', 'en'] as const)" :key="l" class="cms-card p-5">
        <h2 class="flex items-center gap-2 font-bold">
          <span class="cms-badge cms-badge--locale">{{ l }}</span>
          {{ l === 'id' ? 'Indonesia' : 'English' }}
        </h2>

        <p v-if="loading" class="mt-4 text-sm text-[#6b7487]">Memuat…</p>
        <p v-else-if="!byLocale(l).length" class="mt-4 text-sm text-[#6b7487]">Belum ada kategori.</p>

        <ul class="mt-3 divide-y divide-[#f0eee9]">
          <li v-for="c in byLocale(l)" :key="c.id" class="py-3">
            <template v-if="editing?.id === c.id">
              <div class="grid gap-2">
                <input v-model="editing.name" class="cms-input" maxlength="120" aria-label="Nama" />
                <input v-model="editing.slug" class="cms-input" maxlength="120" aria-label="Slug" />
                <textarea v-model="editing.description" class="cms-input" rows="2" maxlength="500" aria-label="Deskripsi"></textarea>
                <div class="flex gap-2">
                  <button class="cms-btn cms-btn--primary" :disabled="saving" @click="saveEdit">Simpan</button>
                  <button class="cms-btn cms-btn--ghost" @click="editing = null">Batal</button>
                </div>
              </div>
            </template>
            <div v-else class="flex items-start justify-between gap-3">
              <div>
                <div class="font-semibold">{{ c.name }}</div>
                <div class="text-xs text-[#6b7487]">/{{ c.slug }}</div>
                <p v-if="c.description" class="mt-1 text-sm text-[#43516a]">{{ c.description }}</p>
              </div>
              <div class="flex shrink-0 gap-1">
                <button class="cms-btn cms-btn--ghost" @click="startEdit(c)">Ubah</button>
                <button class="cms-btn cms-btn--ghost text-red-700" :disabled="saving" @click="remove(c)">Hapus</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { Locale } from '@/i18n'
import { api, type Category } from '../api'
import { slugify } from '../format'

const categories = ref<Category[]>([])
const loading = ref(true)
const saving = ref(false)
const error = ref('')
const draft = reactive({ locale: 'id' as Locale, name: '', slug: '', description: '' })
const editing = ref<{ id: string; name: string; slug: string; description: string } | null>(null)

const byLocale = (l: Locale) => categories.value.filter((c) => c.locale === l)

async function run(action: () => Promise<void>) {
  saving.value = true
  error.value = ''
  try {
    await action()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Terjadi kesalahan.'
  } finally {
    saving.value = false
  }
}

async function load() {
  try {
    categories.value = await api.listCategories()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Gagal memuat kategori.'
  } finally {
    loading.value = false
  }
}

const create = () =>
  run(async () => {
    await api.createCategory({ ...draft, name: draft.name.trim(), slug: draft.slug.trim() })
    Object.assign(draft, { name: '', slug: '', description: '' })
    await load()
  })

function startEdit(c: Category) {
  editing.value = { id: c.id, name: c.name, slug: c.slug, description: c.description }
}

const saveEdit = () =>
  run(async () => {
    if (!editing.value) return
    const { id, ...input } = editing.value
    await api.updateCategory(id, input)
    editing.value = null
    await load()
  })

const remove = (c: Category) =>
  run(async () => {
    if (!confirm(`Hapus kategori "${c.name}"?`)) return
    await api.deleteCategory(c.id)
    await load()
  })

onMounted(load)
</script>
