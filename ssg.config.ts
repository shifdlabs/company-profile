// Daftar halaman yang di-prerender vite-ssg + pembuatan sitemap.xml.
// Data blog dibaca dari src/generated/blog/index.json (hasil scripts/fetch-blog.mjs).
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const SITE_URL = 'https://shifdlabs.com'
const LOCALES = ['id', 'en'] as const
type Locale = (typeof LOCALES)[number]

// Halaman statis (harus sama dengan `pages` di src/router/index.ts)
const STATIC_PAGES = ['/', '/approval', '/about-us', '/contact-us', '/blog']

interface BlogIndex {
  locales: Record<Locale, {
    categories: { slug: string; articleCount: number }[]
    articles: { slug: string; updatedAt: string; alternates: { locale: Locale; slug: string }[] }[]
  }>
}

const localized = (p: string, locale: Locale) => (locale === 'id' ? p : p === '/' ? '/en' : `/en${p}`)

function readBlogIndex(root: string): BlogIndex | null {
  const file = path.join(root, 'src/generated/blog/index.json')
  return existsSync(file) ? (JSON.parse(readFileSync(file, 'utf8')) as BlogIndex) : null
}

// Path artikel & kategori yang benar-benar ada, per bahasa
function blogPaths(root: string): string[] {
  const blog = readBlogIndex(root)
  if (!blog) return []
  return LOCALES.flatMap((locale) => [
    ...blog.locales[locale].articles.map((a) => localized(`/blog/${a.slug}`, locale)),
    ...blog.locales[locale].categories
      .filter((c) => c.articleCount > 0)
      .map((c) => localized(`/blog/category/${c.slug}`, locale)),
  ])
}

// Route dinamis (:slug) diganti dengan path aslinya. /admin cukup satu
// halaman "Memuat…" yang dipakai untuk semua path /admin/*.
export function includedRoutes(paths: string[], root: string): string[] {
  const staticPaths = paths.filter((p) => !p.includes(':') && !(p.startsWith('/admin') && p !== '/admin'))
  return [...staticPaths, ...blogPaths(root)]
}

export function writeSitemap(root: string, outDir: string) {
  const blog = readBlogIndex(root)
  const today = new Date().toISOString().slice(0, 10)

  type Entry = { loc: string; lastmod: string; alternates: Partial<Record<Locale, string>> }
  const entries: Entry[] = []

  for (const page of STATIC_PAGES) {
    const alternates = { id: localized(page, 'id'), en: localized(page, 'en') }
    for (const locale of LOCALES) entries.push({ loc: alternates[locale], lastmod: today, alternates })
  }

  if (blog) {
    for (const locale of LOCALES) {
      for (const article of blog.locales[locale].articles) {
        const alternates: Partial<Record<Locale, string>> = { [locale]: localized(`/blog/${article.slug}`, locale) }
        for (const alt of article.alternates) alternates[alt.locale] = localized(`/blog/${alt.slug}`, alt.locale)
        entries.push({ loc: alternates[locale]!, lastmod: article.updatedAt.slice(0, 10), alternates })
      }
      for (const category of blog.locales[locale].categories) {
        if (category.articleCount === 0) continue
        const loc = localized(`/blog/category/${category.slug}`, locale)
        entries.push({ loc, lastmod: today, alternates: { [locale]: loc } })
      }
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map((e) => {
      const links = Object.entries(e.alternates).map(
        ([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${p}"/>`
      )
      const xDefault = e.alternates.id ?? e.loc
      return [
        '  <url>',
        `    <loc>${SITE_URL}${e.loc}</loc>`,
        `    <lastmod>${e.lastmod}</lastmod>`,
        ...links,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${xDefault}"/>`,
        '  </url>',
      ].join('\n')
    }),
    '</urlset>',
    '',
  ].join('\n')

  writeFileSync(path.join(outDir, 'sitemap.xml'), xml)
  console.log(`[sitemap] ${entries.length} URL → sitemap.xml`)
}
