import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import type { Locale } from '@/i18n'
import { localizedPath } from './paths'

import Home from '@/views/Home.vue'
import ContactUs from '@/views/ContactUs.vue'
import AboutUs from '@/views/AboutUs.vue'
import Approval from '@/views/Approval.vue'
import Blog from '@/views/Blog.vue'
import BlogPost from '@/views/BlogPost.vue'

export { localizedPath, stripLocale } from './paths'

declare module 'vue-router' {
  interface RouteMeta {
    locale: Locale
    // Nama halaman tanpa bahasa, dipakai untuk SEO & analytics
    page: PageName
    // Halaman CMS (/admin): tanpa prefix bahasa, tidak diindeks Google
    admin?: boolean
    requiresAuth?: boolean
  }
}

export type PageName = 'Home' | 'AboutUs' | 'ContactUs' | 'Approval' | 'Blog' | 'BlogCategory' | 'BlogPost' | 'Admin'

// Path tanpa prefix bahasa. Bahasa Indonesia di root, Inggris di /en
export const pages: { name: PageName; path: string; component: RouteRecordRaw['component'] }[] = [
  { name: 'Home', path: '/', component: Home },
  { name: 'ContactUs', path: '/contact-us', component: ContactUs },
  { name: 'AboutUs', path: '/about-us', component: AboutUs },
  { name: 'Approval', path: '/approval', component: Approval },
  { name: 'Blog', path: '/blog', component: Blog },
  { name: 'BlogCategory', path: '/blog/category/:slug', component: Blog },
  { name: 'BlogPost', path: '/blog/:slug', component: BlogPost },
]

const publicRoutes: RouteRecordRaw[] = (['id', 'en'] as Locale[]).flatMap((locale) =>
  pages.map((page) => ({
    path: localizedPath(page.path, locale),
    name: locale === 'id' ? page.name : `${page.name}-en`,
    component: page.component!,
    meta: { locale, page: page.name },
  }))
)

// Dashboard CMS artikel. Sengaja tidak ada link ke sini dari halaman publik.
// AdminRoot menahan render sampai di browser, jadi HTML hasil prerender
// cukup berisi "Memuat…" dan aman dipakai untuk semua path /admin/*.
const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('@/admin/views/AdminRoot.vue'),
    meta: { locale: 'id', page: 'Admin', admin: true },
    children: [
      { path: 'login', name: 'AdminLogin', component: () => import('@/admin/views/AdminLogin.vue') },
      {
        path: '',
        component: () => import('@/admin/views/AdminShell.vue'),
        meta: { locale: 'id', page: 'Admin', admin: true, requiresAuth: true },
        children: [
          { path: '', name: 'AdminArticles', component: () => import('@/admin/views/AdminArticles.vue') },
          { path: 'articles/new', name: 'AdminArticleNew', component: () => import('@/admin/views/AdminArticleEditor.vue') },
          { path: 'articles/:id', name: 'AdminArticleEdit', component: () => import('@/admin/views/AdminArticleEditor.vue') },
          { path: 'categories', name: 'AdminCategories', component: () => import('@/admin/views/AdminCategories.vue') },
        ],
      },
    ],
  },
]

export const routes: RouteRecordRaw[] = [...publicRoutes, ...adminRoutes]

export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (to.hash) {
    // top = offset in px so the target section clears the fixed header
    return { el: to.hash, top: 80, behavior: 'smooth' }
  }
  if (savedPosition) {
    return savedPosition
  }
  return { top: 0 }
}
