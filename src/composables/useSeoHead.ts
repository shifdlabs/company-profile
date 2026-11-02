import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import type { Locale } from '@/i18n'
import { pages, localizedPath } from '@/router'
import { articlePath, blogPath, categoryPath, findCategory, getLoadedArticle } from '@/blog/data'

export const SITE_URL = 'https://shifdlabs.com'

const OG_LOCALE: Record<Locale, string> = { id: 'id_ID', en: 'en_US' }

interface PageSeo {
  title: string
  description: string
  path: string
  // Versi halaman ini per bahasa (hreflang). Kosong = hanya halaman ini sendiri.
  alternates: Partial<Record<Locale, string>>
  image?: string
  imageAlt?: string
  article?: { publishedAt: string | null; updatedAt: string; author: string; section?: string }
}

// Title, description, canonical, hreflang & Open Graph per halaman,
// diambil dari key `seo.<Halaman>` di file i18n, atau dari data artikel untuk blog
export function useSeoHead() {
  const route = useRoute()
  const { t } = useI18n()

  const brand = (title: string) => (/shifd/i.test(title) ? title : `${title} — Shifd Labs`)

  const pageSeo = (locale: Locale): PageSeo | null => {
    const page = route.meta.page ?? 'Home'
    const slug = String(route.params.slug ?? '')

    if (page === 'BlogPost') {
      const article = getLoadedArticle(locale, slug)
      if (!article) return null
      const alternates: Partial<Record<Locale, string>> = { [locale]: articlePath(locale, article.slug) }
      for (const alt of article.alternates) alternates[alt.locale] = articlePath(alt.locale, alt.slug)
      return {
        title: brand(article.metaTitle || article.title),
        description: article.metaDescription || article.excerpt,
        path: articlePath(locale, article.slug),
        alternates,
        image: article.coverImageUrl,
        imageAlt: article.coverImageAlt,
        article: {
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          author: article.authorName,
          section: article.category?.name,
        },
      }
    }

    if (page === 'BlogCategory') {
      const category = findCategory(locale, slug)
      if (!category) return null
      const path = categoryPath(locale, category.slug)
      return {
        title: t('seo.BlogCategory.title', { name: category.name }),
        description: category.description || t('seo.BlogCategory.description', { name: category.name }),
        path,
        alternates: { [locale]: path },
      }
    }

    const basePath = page === 'Blog' ? '/blog' : (pages.find((p) => p.name === page)?.path ?? '/')
    return {
      title: t(`seo.${page}.title`),
      description: t(`seo.${page}.description`),
      path: localizedPath(basePath, locale),
      alternates: { id: localizedPath(basePath, 'id'), en: localizedPath(basePath, 'en') },
    }
  }

  const head = computed(() => {
    const locale = route.meta.locale ?? 'id'

    if (route.meta.admin) {
      return {
        htmlAttrs: { lang: 'id' },
        title: 'CMS Artikel — Shifd Labs',
        meta: [{ name: 'robots', content: 'noindex, nofollow' }],
      }
    }

    // Artikel/kategori yang tidak ada: jangan sampai halaman kosong ikut terindeks
    const seo = pageSeo(locale)
    if (!seo) {
      return {
        htmlAttrs: { lang: locale },
        title: brand(t('blog.notFoundTitle')),
        meta: [{ name: 'robots', content: 'noindex' }],
        link: [{ rel: 'canonical', href: SITE_URL + blogPath(locale) }],
      }
    }

    const url = SITE_URL + seo.path
    const hreflang = (Object.entries(seo.alternates) as [Locale, string][]).map(([l, path]) => ({
      rel: 'alternate', hreflang: l, href: SITE_URL + path,
    }))
    const xDefault = seo.alternates.id ?? seo.path

    const meta: Record<string, string>[] = [
      { name: 'description', content: seo.description },
      { property: 'og:type', content: seo.article ? 'article' : 'website' },
      { property: 'og:site_name', content: 'Shifd Labs' },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:url', content: url },
      { property: 'og:locale', content: OG_LOCALE[locale] },
      { name: 'twitter:card', content: seo.image ? 'summary_large_image' : 'summary' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
    ]
    if (seo.image) {
      meta.push(
        { property: 'og:image', content: seo.image },
        { property: 'og:image:alt', content: seo.imageAlt ?? '' },
        { name: 'twitter:image', content: seo.image },
      )
    }
    if (seo.article) {
      if (seo.article.publishedAt) meta.push({ property: 'article:published_time', content: seo.article.publishedAt })
      meta.push({ property: 'article:modified_time', content: seo.article.updatedAt })
      if (seo.article.section) meta.push({ property: 'article:section', content: seo.article.section })
    }

    const script = seo.article
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: seo.title,
            description: seo.description,
            image: seo.image ? [seo.image] : undefined,
            datePublished: seo.article.publishedAt ?? undefined,
            dateModified: seo.article.updatedAt,
            inLanguage: locale,
            mainEntityOfPage: url,
            author: { '@type': 'Person', name: seo.article.author },
            publisher: {
              '@type': 'Organization',
              name: 'Shifd Labs',
              url: SITE_URL,
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/app-logo.svg` },
            },
          }),
        }]
      : []

    return {
      htmlAttrs: { lang: locale },
      title: seo.title,
      meta,
      link: [
        { rel: 'canonical', href: url },
        ...hreflang,
        { rel: 'alternate', hreflang: 'x-default', href: SITE_URL + xDefault },
      ],
      script,
    }
  })

  useHead(head)
}
