import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { analytics, logEvent } from '@/firebase'  // ✅ tambah ini

import Home from '@/views/Home.vue'
import ContactUs from '@/views/ContactUs.vue'
import AboutUs from '@/views/AboutUs.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// ✅ tambah ini
router.afterEach((to) => {
  logEvent(analytics, 'page_view', {
    page_title: String(to.name ?? to.path),
    page_path: to.path
  })
})

export default router