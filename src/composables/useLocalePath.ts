import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { localizedPath } from '@/router'

// Mengubah path internal ('/contact-us') jadi path sesuai bahasa halaman saat ini
export function useLocalePath() {
  const route = useRoute()
  const locale = computed(() => route.meta.locale ?? 'id')

  const localePath = (path: string) => localizedPath(path, locale.value)

  return { locale, localePath }
}
