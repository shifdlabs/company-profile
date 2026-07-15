import { createI18n } from 'vue-i18n'
import en from './en'
import id from './id'

const INDONESIA_TIMEZONES = ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura', 'Asia/Pontianak']

export const isFromIndonesia = INDONESIA_TIMEZONES.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)

export function getDefaultLang(): 'ID' | 'ENG' {
  const saved = localStorage.getItem('lang') as 'ID' | 'ENG' | null
  if (saved) return saved
  return isFromIndonesia ? 'ID' : 'ENG'
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLang() === 'ID' ? 'id' : 'en',
  fallbackLocale: 'en',
  messages: { en, id }
})
