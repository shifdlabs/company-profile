import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior, localizedPath, stripLocale } from './router'
import { createAppI18n, getSavedLocale } from './i18n'
import { blogAlternatePath, loadArticle } from './blog/data'

// vite-ssg: saat build, tiap route di-render jadi file HTML statis;
// di browser, app yang sama di-hydrate di atas HTML tersebut
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient }) => {
    const i18n = createAppI18n()
    app.use(i18n)

    // Dipakai di template: :to="$localePath('/contact-us')"
    app.config.globalProperties.$localePath = (path: string) =>
      localizedPath(path, router.currentRoute.value.meta.locale ?? 'id')

    router.beforeEach(async (to, from) => {
      // CMS /admin: SPA biasa (tanpa reload per halaman), wajib login di browser
      if (to.meta.admin) {
        i18n.global.locale.value = 'id'
        if (isClient && to.meta.requiresAuth) {
          const { ensureSession } = await import('./admin/auth')
          if (!(await ensureSession())) {
            return { name: 'AdminLogin', query: { redirect: to.fullPath } }
          }
        }
        return true
      }

      if (isClient) {
        // Kunjungan pertama: kalau user pernah memilih bahasa lain, pindah ke halaman bahasa itu
        if (from.name === undefined) {
          const saved = getSavedLocale()
          if (saved && saved !== to.meta.locale) {
            const page = to.meta.page
            const target = page === 'BlogPost' || page === 'BlogCategory'
              ? blogAlternatePath(page, String(to.params.slug), to.meta.locale, saved)
              : localizedPath(stripLocale(to.path), saved)
            window.location.replace(target + to.hash)
            return false
          }
        }

        // Force full browser reload on every navigation (except initial load and
        // same-page hash links, which should just scroll via scrollBehavior)
        if (from.name !== undefined && to.path !== from.path) {
          // Hanya izinkan path internal ("/..."), tolak "//host" (protocol-relative)
          // agar assignment ke location.href tidak bisa dipakai sebagai open redirect
          const path = to.fullPath
          if (path.startsWith('/') && !path.startsWith('//')) {
            window.location.href = path
          }
          return false
        }
      }

      i18n.global.locale.value = to.meta.locale
    })

    // Isi artikel dimuat sebelum render, supaya HTML hasil prerender dan
    // hydration di browser sama-sama sudah berisi artikelnya
    router.beforeResolve(async (to) => {
      if (to.meta.page === 'BlogPost') {
        await loadArticle(to.meta.locale, String(to.params.slug))
      }
    })

    if (isClient) {
      router.afterEach(async (to) => {
        if (to.meta.admin) return
        const { analytics, logEvent } = await import('./firebase')
        logEvent(analytics, 'page_view', {
          page_title: to.meta.page,
          page_path: to.path
        })
      })
    }
  }
)
