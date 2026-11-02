// Ambil semua artikel published dari shifd-article-service dan simpan sebagai
// JSON di src/generated/blog, supaya halaman /blog bisa di-prerender tanpa
// memanggil API saat runtime.
//
//   node scripts/fetch-blog.mjs --mode production   (dipanggil oleh `npm run build`)
//   node scripts/fetch-blog.mjs --mode development  (dipanggil oleh `npm run dev`)
//
// Kalau VITE_ARTICLE_API_URL kosong, blog dibuat kosong. Kalau API diisi tapi
// gagal dipanggil, build production dibatalkan supaya halaman artikel yang
// sudah terindeks Google tidak ikut hilang.
import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'

const LOCALES = ['id', 'en']
const PAGE_SIZE = 100

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'src/generated/blog')

const modeIndex = process.argv.indexOf('--mode')
const mode = modeIndex > -1 ? process.argv[modeIndex + 1] : 'production'
const env = loadEnv(mode, root, 'VITE_')
const apiUrl = (env.VITE_ARTICLE_API_URL || '').replace(/\/+$/, '')

async function getJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`)
  const body = await res.json()
  if (!body.success) throw new Error(`${body.message} — ${url}`)
  return body.data
}

async function fetchLocale(locale) {
  const categories = await getJson(`${apiUrl}/api/public/categories?locale=${locale}`)

  const items = []
  for (let page = 1; ; page++) {
    const data = await getJson(`${apiUrl}/api/public/articles?locale=${locale}&page=${page}&pageSize=${PAGE_SIZE}`)
    items.push(...data.items)
    if (items.length >= data.total || data.items.length === 0) break
  }

  const articles = []
  for (const item of items) {
    const article = await getJson(`${apiUrl}/api/public/articles/${locale}/${encodeURIComponent(item.slug)}`)
    article.readingMinutes = readingMinutes(article.contentHtml)
    articles.push(article)
  }
  return { categories, articles }
}

// Perkiraan waktu baca: ~200 kata per menit, minimal 1 menit
function readingMinutes(html) {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

async function main() {
  const data = { generatedAt: new Date().toISOString(), locales: {} }
  const details = []

  if (!apiUrl) {
    console.warn('[blog] VITE_ARTICLE_API_URL kosong — blog dibuat tanpa artikel.')
    for (const locale of LOCALES) data.locales[locale] = { categories: [], articles: [] }
  } else {
    try {
      for (const locale of LOCALES) {
        const { categories, articles } = await fetchLocale(locale)
        // Index tanpa isi artikel; isi disimpan per file supaya dimuat per halaman
        data.locales[locale] = {
          categories,
          articles: articles.map(({ contentHtml: _content, ...summary }) => summary),
        }
        details.push(...articles)
      }
    } catch (err) {
      if (mode === 'production') {
        console.error(`[blog] Gagal mengambil artikel dari ${apiUrl}: ${err.message}`)
        process.exit(1)
      }
      console.warn(`[blog] Gagal mengambil artikel (${err.message}) — blog dibuat kosong untuk ${mode}.`)
      for (const locale of LOCALES) data.locales[locale] = { categories: [], articles: [] }
      details.length = 0
    }
  }

  await rm(outDir, { recursive: true, force: true })
  for (const locale of LOCALES) await mkdir(path.join(outDir, 'articles', locale), { recursive: true })
  await writeFile(path.join(outDir, 'index.json'), JSON.stringify(data))
  for (const article of details) {
    await writeFile(path.join(outDir, 'articles', article.locale, `${article.slug}.json`), JSON.stringify(article))
  }

  const counts = LOCALES.map((l) => `${l}: ${data.locales[l].articles.length}`).join(', ')
  console.log(`[blog] ${counts} artikel → src/generated/blog`)
}

main()
