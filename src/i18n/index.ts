import { createI18n } from 'vue-i18n'
import en from './en'
import id from './id'

export type Locale = 'id' | 'en'

export const DEFAULT_LOCALE: Locale = 'id'

// Pilihan bahasa yang disimpan saat user ganti bahasa lewat header
export const LANG_STORAGE_KEY = 'lang'

// Dibuat per app (bukan singleton) supaya tiap halaman yang di-prerender
// punya locale sendiri dan tidak saling menimpa
export function createAppI18n(locale: Locale = DEFAULT_LOCALE) {
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { en, id }
  })
}

// Nilai lama di localStorage berupa 'ID' / 'ENG'
export function getSavedLocale(): Locale | null {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    if (saved === 'ID') return 'id'
    if (saved === 'ENG') return 'en'
  } catch {
    // localStorage bisa tidak tersedia (private mode, dll)
  }
  return null
}

export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, locale === 'id' ? 'ID' : 'ENG')
  } catch {
    // abaikan
  }
}
