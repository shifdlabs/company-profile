import { createI18n } from 'vue-i18n'
import en from './en'
import id from './id'

const INDONESIA_TIMEZONES = ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura', 'Asia/Pontianak']

export function getDefaultLang(): 'ID' | 'ENG' {
  const saved = localStorage.getItem('lang') as 'ID' | 'ENG' | null
  if (saved) return saved
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  return INDONESIA_TIMEZONES.includes(tz) ? 'ID' : 'ENG'
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLang() === 'ID' ? 'id' : 'en',
  fallbackLocale: 'en',
  messages: { en, id }
})
