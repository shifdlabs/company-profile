import { ensureSession, refreshSession, session } from './auth'
import type { Locale } from '@/i18n'

// Klien endpoint admin shifd-article-service

const API_URL = (import.meta.env.VITE_ARTICLE_API_URL ?? '').replace(/\/+$/, '')

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export type ArticleStatus = 'draft' | 'published'

export interface CategoryRef {
  id?: string
  slug: string
  name: string
}

export interface Category {
  id: string
  locale: Locale
  slug: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface ArticleListItem {
  id: string
  translationGroupId: string
  locale: Locale
  slug: string
  title: string
  status: ArticleStatus
  category: CategoryRef | null
  authorName: string
  publishedAt: string | null
  updatedAt: string
}

export interface ArticleDetail extends Omit<ArticleListItem, 'category'> {
  excerpt: string
  contentHtml: string
  coverImageUrl: string
  coverImageAlt: string
  category: CategoryRef | null
  metaTitle: string
  metaDescription: string
  authorId: string
  createdAt: string
  translations: { id: string; locale: Locale; slug: string; status: ArticleStatus }[]
}

export interface ArticleInput {
  locale: Locale
  title: string
  slug: string
  excerpt: string
  contentHtml: string
  coverImageUrl: string
  coverImageAlt: string
  categoryId: string
  metaTitle: string
  metaDescription: string
  translationGroupId: string
}

export interface Paginated<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

async function request<T>(method: string, path: string, body?: unknown, retried = false): Promise<T> {
  if (!(await ensureSession())) throw new ApiError('Sesi berakhir, silakan login lagi.', 401)

  let res: Response
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new ApiError('Tidak bisa terhubung ke server artikel.', 0)
  }

  // Token ditolak (mis. kedaluwarsa lebih cepat): perbarui sekali lalu ulangi
  if (res.status === 401 && !retried && (await refreshSession())) {
    return request<T>(method, path, body, true)
  }

  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new ApiError(json.message || `Request gagal (${res.status})`, res.status)
  }
  return json.data as T
}

const query = (params: Record<string, string | number | undefined>) => {
  const search = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') search.set(k, String(v))
  const s = search.toString()
  return s ? `?${s}` : ''
}

export const api = {
  listArticles: (params: { locale?: string; status?: string; categoryId?: string; q?: string; page?: number; pageSize?: number }) =>
    request<Paginated<ArticleListItem>>('GET', `/api/admin/articles${query(params)}`),
  getArticle: (id: string) => request<ArticleDetail>('GET', `/api/admin/articles/${id}`),
  createArticle: (input: ArticleInput) => request<ArticleDetail>('POST', '/api/admin/articles', input),
  updateArticle: (id: string, input: ArticleInput) => request<ArticleDetail>('PUT', `/api/admin/articles/${id}`, input),
  publishArticle: (id: string) => request<ArticleDetail>('POST', `/api/admin/articles/${id}/publish`),
  unpublishArticle: (id: string) => request<ArticleDetail>('POST', `/api/admin/articles/${id}/unpublish`),
  deleteArticle: (id: string) => request<null>('DELETE', `/api/admin/articles/${id}`),

  listCategories: (locale?: Locale) => request<Category[]>('GET', `/api/admin/categories${query({ locale })}`),
  createCategory: (input: { locale: Locale; name: string; slug: string; description: string }) =>
    request<Category>('POST', '/api/admin/categories', input),
  updateCategory: (id: string, input: { name: string; slug: string; description: string }) =>
    request<Category>('PUT', `/api/admin/categories/${id}`, input),
  deleteCategory: (id: string) => request<null>('DELETE', `/api/admin/categories/${id}`),

  presignImage: (contentType: string) =>
    request<{ uploadUrl: string; method: string; publicUrl: string; expiresIn: number }>(
      'POST',
      '/api/admin/uploads/presign',
      { contentType }
    ),
}
