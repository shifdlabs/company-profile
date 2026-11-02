<template>
  <div>
    <div class="flex flex-wrap items-center gap-3">
      <router-link :to="{ name: 'AdminArticles' }" class="text-sm font-semibold text-[#566274] hover:text-[#3279e7]">← Artikel</router-link>
      <span v-if="article" class="cms-badge" :class="`cms-badge--${article.status}`">
        {{ article.status === 'published' ? 'Published' : 'Draft' }}
      </span>
      <span class="cms-badge cms-badge--locale">{{ form.locale }}</span>
      <span v-if="dirty" class="text-xs font-semibold text-[#b45309]">● Belum disimpan</span>
    </div>

    <p v-if="loadError" class="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{{ loadError }}</p>

    <div v-else-if="ready" class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <!-- Kolom utama: judul, ringkasan, cover, isi -->
      <div class="min-w-0 space-y-5">
        <div>
          <label class="sr-only" for="art-title">Judul</label>
          <textarea
            id="art-title"
            v-model="form.title"
            rows="1"
            maxlength="200"
            placeholder="Judul artikel"
            class="w-full resize-none bg-transparent text-3xl font-bold tracking-tight outline-none placeholder:text-[#b5bbc6] sm:text-4xl"
            @input="autoGrow"
          ></textarea>
        </div>

        <div>
          <label class="cms-label" for="art-excerpt">Ringkasan</label>
          <textarea id="art-excerpt" v-model="form.excerpt" rows="2" maxlength="300" class="cms-input mt-1.5"
            placeholder="1–2 kalimat yang muncul di daftar artikel dan hasil Google."></textarea>
          <p class="cms-hint">{{ form.excerpt.length }}/300</p>
        </div>

        <div class="cms-card p-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span class="cms-label">Cover image</span>
            <div class="flex gap-2">
              <button type="button" class="cms-btn" :disabled="coverUploading" @click="coverInput?.click()">
                {{ coverUploading ? 'Mengupload…' : form.coverImageUrl ? 'Ganti' : 'Upload' }}
              </button>
              <button v-if="form.coverImageUrl" type="button" class="cms-btn cms-btn--ghost" @click="form.coverImageUrl = ''">Hapus</button>
            </div>
            <input ref="coverInput" type="file" accept="image/jpeg,image/png,image/webp" class="hidden" @change="onCoverFile" />
          </div>
          <p class="cms-hint">Rasio 1200×630 ideal (juga dipakai saat dibagikan di WhatsApp/LinkedIn). JPG/PNG/WebP, maks 2 MB.</p>
          <p v-if="coverError" class="mt-2 text-sm text-red-700" role="alert">{{ coverError }}</p>
          <img v-if="form.coverImageUrl" :src="form.coverImageUrl" alt="" class="mt-3 aspect-[1200/630] w-full rounded-lg border border-[#e2e0da] object-cover" />
          <div class="mt-3">
            <label class="cms-label" for="art-cover-alt">Alt text cover</label>
            <input id="art-cover-alt" v-model="form.coverImageAlt" maxlength="200" class="cms-input mt-1.5" placeholder="Deskripsikan isi gambar" />
          </div>
        </div>

        <div>
          <span class="cms-label mb-1.5">Isi artikel</span>
          <RichTextEditor v-model="form.contentHtml" />
        </div>
      </div>

      <!-- Kolom samping: aksi, pengaturan, SEO -->
      <aside class="space-y-5">
        <div class="cms-card space-y-3 p-4 lg:sticky lg:top-[72px]">
          <p v-if="message" class="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-800" role="status">{{ message }}</p>
          <p v-if="actionError" class="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{{ actionError }}</p>

          <div class="flex flex-wrap gap-2">
            <button class="cms-btn" :disabled="busy || !form.title.trim()" @click="save">
              {{ isPublished ? 'Simpan' : 'Simpan draft' }}
            </button>
            <button v-if="!isPublished" class="cms-btn cms-btn--yellow" :disabled="busy || !checklistOk" @click="publish">Publish</button>
            <button v-else class="cms-btn" :disabled="busy" @click="unpublish">Unpublish</button>
          </div>

          <ul class="space-y-1 text-sm">
            <li v-for="item in checklist" :key="item.label" class="flex gap-2" :class="item.ok ? 'text-[#166534]' : 'text-[#6b7487]'">
              <span aria-hidden="true">{{ item.ok ? '✓' : '○' }}</span>{{ item.label }}
            </li>
          </ul>

          <p v-if="isPublished" class="cms-hint">
            Perubahan tampil di shifdlabs.com setelah situs di-build ulang.
            <a :href="publicUrl" target="_blank" rel="noopener" class="font-semibold text-[#3279e7]">Lihat artikel ↗</a>
          </p>
        </div>

        <div class="cms-card space-y-4 p-4">
          <div>
            <label class="cms-label" for="art-category">Kategori</label>
            <select id="art-category" v-model="form.categoryId" class="cms-input mt-1.5">
              <option value="">— Pilih kategori —</option>
              <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.name }}</option>
            </select>
            <p v-if="!categories.length" class="cms-hint">
              Belum ada kategori {{ form.locale.toUpperCase() }}.
              <router-link :to="{ name: 'AdminCategories' }" class="font-semibold text-[#3279e7]">Buat kategori</router-link>
            </p>
          </div>

          <div>
            <label class="cms-label" for="art-slug">Slug URL</label>
            <input id="art-slug" v-model="form.slug" maxlength="160" class="cms-input mt-1.5"
              :readonly="slugLocked" :placeholder="slugify(form.title)" @input="slugTouched = true" />
            <p class="cms-hint break-all">{{ publicPath }}</p>
            <p v-if="slugLocked" class="cms-hint cms-hint--warn">Slug dikunci karena artikel sudah pernah publish, supaya link di Google tidak rusak.</p>
          </div>

          <div v-if="!article">
            <label class="cms-label" for="art-locale">Bahasa</label>
            <select id="art-locale" v-model="form.locale" class="cms-input mt-1.5" :disabled="!!form.translationGroupId">
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div class="cms-card space-y-4 p-4">
          <p class="cms-label">SEO</p>
          <div>
            <label class="cms-label font-semibold" for="art-meta-title">Meta title</label>
            <input id="art-meta-title" v-model="form.metaTitle" maxlength="70" class="cms-input mt-1.5" :placeholder="form.title" />
            <p class="cms-hint">{{ form.metaTitle.length }}/70 · kosong = pakai judul</p>
          </div>
          <div>
            <label class="cms-label" for="art-meta-desc">Meta description</label>
            <textarea id="art-meta-desc" v-model="form.metaDescription" rows="3" maxlength="160" class="cms-input mt-1.5" :placeholder="form.excerpt"></textarea>
            <p class="cms-hint">{{ form.metaDescription.length }}/160 · kosong = pakai ringkasan</p>
          </div>
          <div class="rounded-lg border border-[#e2e0da] p-3">
            <p class="text-xs text-[#6b7487]">Pratinjau Google</p>
            <p class="mt-1 truncate text-[13px] text-[#3c4043]">shifdlabs.com{{ publicPath }}</p>
            <p class="truncate text-[17px] leading-snug text-[#1a0dab]">{{ previewTitle }}</p>
            <p class="line-clamp-2 text-[13px] text-[#4d5156]">{{ form.metaDescription || form.excerpt || 'Isi ringkasan atau meta description.' }}</p>
          </div>
        </div>

        <div v-if="article" class="cms-card space-y-3 p-4">
          <p class="cms-label">Terjemahan</p>
          <router-link
            v-for="tr in article.translations"
            :key="tr.id"
            :to="{ name: 'AdminArticleEdit', params: { id: tr.id } }"
            class="flex items-center gap-2 text-sm font-semibold hover:text-[#3279e7]"
          >
            <span class="cms-badge cms-badge--locale">{{ tr.locale }}</span>/{{ tr.slug }}
            <span class="cms-badge" :class="`cms-badge--${tr.status}`">{{ tr.status }}</span>
          </router-link>
          <router-link
            v-if="missingLocale"
            :to="{ name: 'AdminArticleNew', query: { locale: missingLocale, translationGroupId: article.translationGroupId } }"
            class="cms-btn"
          >
            + Buat versi {{ missingLocale === 'en' ? 'English' : 'Indonesia' }}
          </router-link>
        </div>

        <button v-if="article" class="cms-btn cms-btn--danger w-full justify-center" :disabled="busy" @click="remove">Hapus artikel</button>
      </aside>
    </div>

    <p v-else class="mt-10 text-center text-sm text-[#6b7487]">Memuat…</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import type { Locale } from '@/i18n'
import { localizedPath } from '@/router/paths'
import RichTextEditor from '../components/RichTextEditor.vue'
import { api, type ArticleDetail, type ArticleInput, type Category } from '../api'
import { slugify } from '../format'
import { uploadImage } from '../upload'

const route = useRoute()
const router = useRouter()

const article = ref<ArticleDetail | null>(null)
const categories = ref<Category[]>([])
const ready = ref(false)
const loadError = ref('')
const busy = ref(false)
const message = ref('')
const actionError = ref('')
const coverInput = ref<HTMLInputElement | null>(null)
const coverUploading = ref(false)
const coverError = ref('')
const slugTouched = ref(false)

const emptyForm = (): ArticleInput => ({
  locale: 'id',
  title: '',
  slug: '',
  excerpt: '',
  contentHtml: '',
  coverImageUrl: '',
  coverImageAlt: '',
  categoryId: '',
  metaTitle: '',
  metaDescription: '',
  translationGroupId: '',
})

const form = reactive<ArticleInput>(emptyForm())
const savedSnapshot = ref('')
const dirty = computed(() => ready.value && JSON.stringify(form) !== savedSnapshot.value)

const isPublished = computed(() => article.value?.status === 'published')
const slugLocked = computed(() => !!article.value?.publishedAt)
const effectiveSlug = computed(() => form.slug.trim() || slugify(form.title))
const publicPath = computed(() => localizedPath(`/blog/${effectiveSlug.value}`, form.locale))
const publicUrl = computed(() => (article.value ? localizedPath(`/blog/${article.value.slug}`, article.value.locale) : '#'))
const previewTitle = computed(() => {
  const title = form.metaTitle || form.title || 'Judul artikel'
  return /shifd/i.test(title) ? title : `${title} — Shifd Labs`
})
const missingLocale = computed<Locale | null>(() => {
  if (!article.value) return null
  const other: Locale = article.value.locale === 'id' ? 'en' : 'id'
  return article.value.translations.some((t) => t.locale === other) ? null : other
})

// Cerminan aturan publish di backend, supaya penulis tahu apa yang kurang
const checklist = computed(() => {
  const content = form.contentHtml
  const imgs = content.match(/<img\b[^>]*>/g) ?? []
  const imgsWithoutAlt = imgs.filter((tag) => !/\balt="[^"]*\S[^"]*"/.test(tag)).length
  const text = content.replace(/<[^>]+>/g, '').trim()
  return [
    { label: 'Judul', ok: !!form.title.trim() },
    { label: 'Ringkasan', ok: !!form.excerpt.trim() },
    { label: 'Kategori', ok: !!form.categoryId },
    { label: 'Cover image + alt text', ok: !!form.coverImageUrl && !!form.coverImageAlt.trim() },
    { label: 'Isi artikel', ok: text.length > 0 },
    { label: 'Alt text di semua gambar', ok: imgsWithoutAlt === 0 },
  ]
})
const checklistOk = computed(() => checklist.value.every((i) => i.ok))

// Slug ikut judul sampai penulis mengubahnya sendiri
watch(() => form.title, (title) => {
  if (!slugLocked.value && !slugTouched.value) form.slug = slugify(title)
})

watch(() => form.locale, loadCategories)

async function loadCategories() {
  try {
    categories.value = await api.listCategories(form.locale)
    if (form.categoryId && !categories.value.some((c) => c.id === form.categoryId)) form.categoryId = ''
  } catch {
    categories.value = []
  }
}

function applyArticle(a: ArticleDetail) {
  article.value = a
  Object.assign(form, {
    locale: a.locale,
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt,
    contentHtml: a.contentHtml,
    coverImageUrl: a.coverImageUrl,
    coverImageAlt: a.coverImageAlt,
    categoryId: a.category?.id ?? '',
    metaTitle: a.metaTitle,
    metaDescription: a.metaDescription,
    translationGroupId: a.translationGroupId,
  })
  slugTouched.value = a.slug !== slugify(a.title)
  savedSnapshot.value = JSON.stringify(form)
}

async function init() {
  ready.value = false
  loadError.value = ''
  message.value = ''
  actionError.value = ''
  article.value = null
  Object.assign(form, emptyForm())
  slugTouched.value = false
  try {
    const id = route.params.id
    if (typeof id === 'string') {
      applyArticle(await api.getArticle(id))
    } else {
      if (route.query.locale === 'en' || route.query.locale === 'id') form.locale = route.query.locale
      if (typeof route.query.translationGroupId === 'string') form.translationGroupId = route.query.translationGroupId
      savedSnapshot.value = JSON.stringify(form)
    }
    await loadCategories()
    ready.value = true
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : 'Gagal memuat artikel.'
  }
}

async function run(action: () => Promise<void>, success: string) {
  busy.value = true
  message.value = ''
  actionError.value = ''
  try {
    await action()
    message.value = success
  } catch (e) {
    actionError.value = e instanceof Error ? e.message : 'Terjadi kesalahan.'
  } finally {
    busy.value = false
  }
}

async function persist() {
  const input = { ...form, slug: form.slug.trim() }
  if (article.value) {
    applyArticle(await api.updateArticle(article.value.id, input))
  } else {
    const created = await api.createArticle(input)
    applyArticle(created)
    await router.replace({ name: 'AdminArticleEdit', params: { id: created.id } })
  }
}

const save = () => run(persist, 'Tersimpan.')

const publish = () =>
  run(async () => {
    await persist()
    applyArticle(await api.publishArticle(article.value!.id))
  }, 'Artikel dipublish. Akan tampil di situs setelah build berikutnya.')

const unpublish = () =>
  run(async () => {
    if (dirty.value) await persist()
    applyArticle(await api.unpublishArticle(article.value!.id))
  }, 'Artikel kembali jadi draft.')

async function remove() {
  if (!article.value || !confirm(`Hapus artikel "${article.value.title}"? Tindakan ini tidak bisa dibatalkan dari CMS.`)) return
  await run(async () => {
    await api.deleteArticle(article.value!.id)
    savedSnapshot.value = JSON.stringify(form)
    await router.replace({ name: 'AdminArticles' })
  }, 'Artikel dihapus.')
}

async function onCoverFile(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return
  coverError.value = ''
  coverUploading.value = true
  try {
    form.coverImageUrl = await uploadImage(file)
  } catch (e) {
    coverError.value = e instanceof Error ? e.message : 'Upload gagal.'
  } finally {
    coverUploading.value = false
  }
}

function autoGrow(event: Event) {
  const el = event.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
}

// Peringatan sebelum meninggalkan halaman dengan perubahan yang belum disimpan
onBeforeRouteLeave(() => !dirty.value || confirm('Ada perubahan yang belum disimpan. Tinggalkan halaman?'))
const beforeUnload = (e: BeforeUnloadEvent) => {
  if (dirty.value) e.preventDefault()
}
onMounted(() => window.addEventListener('beforeunload', beforeUnload))
onBeforeUnmount(() => window.removeEventListener('beforeunload', beforeUnload))

// /articles/new → /articles/:id setelah simpan pertama tidak perlu dimuat ulang
watch(
  () => route.params.id,
  (id) => {
    if (id !== article.value?.id) init()
  }
)
watch(() => route.query.translationGroupId, () => {
  if (!route.params.id) init()
})
onMounted(init)
</script>
