import { useRouter, useRoute } from 'vue-router'
import { nextTick } from 'vue'
import { useLocalePath } from '@/composables/useLocalePath'

export default function useScrollToSection() {
  const router = useRouter()
  const route = useRoute()
  const { localePath } = useLocalePath()

  const scrollToSection = async (
    sectionId: string,
    delay: number = 300
  ): Promise<void> => {
    // Jika sudah di main page
    if (route.meta.page === 'Home') {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    // Jika bukan main page
    await router.push(localePath('/'))
    await nextTick()

    setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, delay)
  }

  return { scrollToSection }
}
