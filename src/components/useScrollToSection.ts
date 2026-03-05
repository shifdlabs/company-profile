import { useRouter, useRoute } from 'vue-router'
import { nextTick } from 'vue'

export default function useScrollToSection() {
  const router = useRouter()
  const route = useRoute()

  const scrollToSection = async (
    sectionId: string,
    delay: number = 300
  ): Promise<void> => {
    // Jika sudah di main page
    if (route.path === '/') {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    // Jika bukan main page
    await router.push('/')
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
