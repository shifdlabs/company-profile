import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { analytics, logEvent } from '@/firebase'  // ✅ tambah ini

import Home from '@/views/Home.vue'
import ContactUs from '@/views/ContactUs.vue'
import AboutUs from '@/views/AboutUs.vue'
import Approval from '@/views/Approval.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/approval', name: 'Approval', component: Approval },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      // top = offset in px so the target section clears the fixed header
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Force full browser reload on every navigation (except initial load and
// same-page hash links, which should just scroll via scrollBehavior above)
router.beforeEach((to, from) => {
  if (from.name !== undefined && to.path !== from.path) {
    // Hanya izinkan path internal ("/..."), tolak "//host" (protocol-relative)
    // agar assignment ke location.href tidak bisa dipakai sebagai open redirect
    const path = to.fullPath
    if (path.startsWith('/') && !path.startsWith('//')) {
      window.location.href = path
    }
    return false
  }
})

router.afterEach((to) => {
  logEvent(analytics, 'page_view', {
    page_title: String(to.name ?? to.path),
    page_path: to.path
  })
})

export default router