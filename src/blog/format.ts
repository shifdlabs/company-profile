import type { Locale } from '@/i18n'

// Zona waktu tetap supaya tanggal hasil prerender sama dengan di browser
const formatters: Record<Locale, Intl.DateTimeFormat> = {
  id: new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeZone: 'Asia/Jakarta' }),
  en: new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'Asia/Jakarta' }),
}

export function formatDate(iso: string | null, locale: Locale): string {
  return iso ? formatters[locale].format(new Date(iso)) : ''
}
