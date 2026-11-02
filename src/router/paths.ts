import type { Locale } from '@/i18n'

// Path tanpa prefix bahasa. Bahasa Indonesia di root, Inggris di /en
export function localizedPath(path: string, locale: Locale): string {
  if (locale === 'id') return path
  return path === '/' ? '/en' : `/en${path}`
}

// '/en/contact-us' -> '/contact-us', '/en' -> '/'
export function stripLocale(path: string): string {
  if (path === '/en' || path === '/en/') return '/'
  if (path.startsWith('/en/')) return path.slice(3)
  return path
}
