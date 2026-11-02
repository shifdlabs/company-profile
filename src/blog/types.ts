import type { Locale } from '@/i18n'

// Bentuk data dari public API shifd-article-service (lihat scripts/fetch-blog.mjs)

export interface BlogCategoryRef {
  slug: string
  name: string
}

export interface BlogCategory extends BlogCategoryRef {
  description: string
  articleCount: number
}

export interface BlogAlternate {
  locale: Locale
  slug: string
}

export interface BlogArticleSummary {
  slug: string
  locale: Locale
  title: string
  excerpt: string
  coverImageUrl: string
  coverImageAlt: string
  category: BlogCategoryRef | null
  authorName: string
  publishedAt: string | null
  updatedAt: string
  metaTitle: string
  metaDescription: string
  alternates: BlogAlternate[]
  readingMinutes: number
}

export interface BlogArticle extends BlogArticleSummary {
  contentHtml: string
}

export interface BlogIndex {
  generatedAt: string
  locales: Record<Locale, { categories: BlogCategory[]; articles: BlogArticleSummary[] }>
}
