import type { Locale } from '@/i18n'
import { localizedPath } from '@/router/paths'
import type { BlogArticle, BlogArticleSummary, BlogCategory, BlogIndex } from './types'
import rawIndex from '@/generated/blog/index.json'

// Data blog dibuat saat build oleh scripts/fetch-blog.mjs. Daftar artikel
// (tanpa isi) ikut di bundle; isi artikel dimuat per halaman.
const index = rawIndex as unknown as BlogIndex

const articleFiles = import.meta.glob<{ default: BlogArticle }>('../generated/blog/articles/*/*.json')
const loadedArticles = new Map<string, BlogArticle>()
const key = (locale: Locale, slug: string) => `${locale}/${slug}`

export function listArticles(locale: Locale, categorySlug?: string): BlogArticleSummary[] {
  const articles = index.locales[locale]?.articles ?? []
  return categorySlug ? articles.filter((a) => a.category?.slug === categorySlug) : articles
}

export function listCategories(locale: Locale): BlogCategory[] {
  return (index.locales[locale]?.categories ?? []).filter((c) => c.articleCount > 0)
}

export function findCategory(locale: Locale, slug: string): BlogCategory | undefined {
  return listCategories(locale).find((c) => c.slug === slug)
}

export function findArticleSummary(locale: Locale, slug: string): BlogArticleSummary | undefined {
  return listArticles(locale).find((a) => a.slug === slug)
}

// Dipanggil oleh router sebelum halaman artikel dirender (saat build & di browser)
export async function loadArticle(locale: Locale, slug: string): Promise<BlogArticle | null> {
  const cached = loadedArticles.get(key(locale, slug))
  if (cached) return cached
  const loader = articleFiles[`../generated/blog/articles/${locale}/${slug}.json`]
  if (!loader) return null
  const article = (await loader()).default
  loadedArticles.set(key(locale, slug), article)
  return article
}

export function getLoadedArticle(locale: Locale, slug: string): BlogArticle | null {
  return loadedArticles.get(key(locale, slug)) ?? null
}

export const blogPath = (locale: Locale) => localizedPath('/blog', locale)
export const articlePath = (locale: Locale, slug: string) => localizedPath(`/blog/${slug}`, locale)
export const categoryPath = (locale: Locale, slug: string) => localizedPath(`/blog/category/${slug}`, locale)

// Halaman blog di bahasa lain: artikel → terjemahannya (kalau ada), selain itu → /blog
export function blogAlternatePath(page: string, slug: string, from: Locale, to: Locale): string {
  if (page === 'BlogPost') {
    const alt = findArticleSummary(from, slug)?.alternates.find((a) => a.locale === to)
    if (alt) return articlePath(to, alt.slug)
  }
  return blogPath(to)
}
