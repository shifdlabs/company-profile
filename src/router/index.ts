import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

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

  scrollBehavior(_to, _from, savedPosition) { // Tambahkan underscore
  if (savedPosition) {
    return savedPosition
  }
  return { top: 0 }
}
})

export default router