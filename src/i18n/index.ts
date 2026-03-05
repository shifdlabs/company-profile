import { createI18n } from 'vue-i18n'
import en from './en'
import id from './id'

const savedLang = localStorage.getItem('lang') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: { en, id }
})
