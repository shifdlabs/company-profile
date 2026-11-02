<template>
  <div class="post-page bg-[#fbfaf6] text-[#17191c] selection:bg-[#ffd45c] selection:text-[#17191c]">
    <AppHeader :is-transparent-background="false" />

    <main class="pt-16">
      <article v-if="article" class="post">
        <header class="post-header post-container">
          <nav class="post-breadcrumb" aria-label="Breadcrumb">
            <router-link :to="blogPath(locale)">Blog</router-link>
            <template v-if="article.category">
              <span aria-hidden="true">/</span>
              <router-link :to="categoryPath(locale, article.category.slug)">{{ article.category.name }}</router-link>
            </template>
          </nav>

          <h1 class="post-title">{{ article.title }}</h1>
          <p v-if="article.excerpt" class="post-excerpt">{{ article.excerpt }}</p>

          <p class="post-meta">
            <span>{{ $t('blog.by', { name: article.authorName }) }}</span>
            <span aria-hidden="true">·</span>
            <time v-if="article.publishedAt" :datetime="article.publishedAt">{{ formatDate(article.publishedAt, locale) }}</time>
            <span aria-hidden="true">·</span>
            <span>{{ $t('blog.readingTime', { minutes: article.readingMinutes }) }}</span>
          </p>
        </header>

        <figure v-if="article.coverImageUrl" class="post-cover">
          <img :src="article.coverImageUrl" :alt="article.coverImageAlt" width="1200" height="630" fetchpriority="high" />
        </figure>

        <!-- contentHtml sudah disanitasi di shifd-article-service (allowlist tag) -->
        <div class="post-container">
          <div class="article-content" v-html="article.contentHtml"></div>
        </div>

        <aside class="post-container">
          <div class="post-cta">
            <p class="post-cta__eyebrow">{{ $t('blog.ctaEyebrow') }}</p>
            <p class="post-cta__title">{{ $t('blog.ctaTitle') }}</p>
            <p class="post-cta__body">{{ $t('blog.ctaBody') }}</p>
            <div class="post-cta__actions">
              <router-link :to="$localePath('/approval')" class="post-button post-button--ink">{{ $t('blog.ctaButton') }}</router-link>
              <router-link :to="$localePath('/contact-us')" class="post-button">{{ $t('blog.ctaSecondary') }}</router-link>
            </div>
          </div>
        </aside>

        <section v-if="related.length" class="post-related">
          <div class="post-wide">
            <h2 class="post-related__title">{{ $t('blog.related') }}</h2>
            <div class="post-related__grid">
              <router-link v-for="r in related" :key="r.slug" :to="articlePath(locale, r.slug)" class="post-related__card">
                <span v-if="r.category" class="post-related__category">{{ r.category.name }}</span>
                <span class="post-related__name">{{ r.title }}</span>
                <span class="post-related__date">{{ formatDate(r.publishedAt, locale) }}</span>
              </router-link>
            </div>
          </div>
        </section>
      </article>

      <section v-else class="post-container post-missing">
        <h1 class="post-title">{{ $t('blog.notFoundTitle') }}</h1>
        <p class="post-excerpt">{{ $t('blog.notFoundBody') }}</p>
        <router-link :to="blogPath(locale)" class="post-button post-button--ink mt-8">{{ $t('blog.backToBlog') }}</router-link>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'
import { articlePath, blogPath, categoryPath, getLoadedArticle, listArticles } from '@/blog/data'
import { formatDate } from '@/blog/format'

const route = useRoute()
const locale = computed(() => route.meta.locale)

// Dimuat oleh router.beforeResolve di main.ts sebelum halaman dirender
const article = computed(() => getLoadedArticle(locale.value, String(route.params.slug)))

// 3 artikel lain: utamakan kategori yang sama, lalu yang terbaru
const related = computed(() => {
  const current = article.value
  if (!current) return []
  const others = listArticles(locale.value).filter((a) => a.slug !== current.slug)
  const sameCategory = others.filter((a) => current.category && a.category?.slug === current.category.slug)
  const rest = others.filter((a) => !sameCategory.includes(a))
  return [...sameCategory, ...rest].slice(0, 3)
})
</script>

<style scoped>
.post-page { --ink:#17191c; --blue:#3279e7; --yellow:#ffbf1f; --muted:#566274; }
.post-container { width:min(760px,calc(100% - 48px)); margin:0 auto; }
.post-wide { width:min(1180px,calc(100% - 48px)); margin:0 auto; }

.post-header { padding:72px 0 40px; }
.post-breadcrumb { display:flex; flex-wrap:wrap; gap:8px; color:var(--muted); font-size:14px; font-weight:700; }
.post-breadcrumb a:hover { color:var(--blue); }
.post-title { margin-top:28px; color:var(--ink); font-size:clamp(2.2rem,4.4vw,3.6rem); font-weight:700; letter-spacing:-.05em; line-height:1.06; }
.post-excerpt { margin-top:20px; color:var(--muted); font-size:20px; line-height:1.55; }
.post-meta { display:flex; flex-wrap:wrap; gap:8px; margin-top:28px; color:var(--muted); font-size:14px; }

.post-cover { width:min(1040px,calc(100% - 48px)); margin:0 auto 56px; overflow:hidden; border:2px solid var(--ink); border-radius:18px; box-shadow:8px 8px 0 var(--ink); }
.post-cover img { display:block; width:100%; height:auto; aspect-ratio:1200/630; object-fit:cover; }

.post-cta { margin:64px 0 0; border:2px solid var(--ink); border-radius:16px; padding:32px; background:var(--yellow); box-shadow:6px 6px 0 var(--ink); }
.post-cta__eyebrow { color:#544719; font-size:11px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
.post-cta__title { margin-top:12px; font-size:26px; font-weight:700; letter-spacing:-.035em; line-height:1.2; }
.post-cta__body { margin-top:10px; color:#4f411d; font-size:16px; line-height:1.55; }
.post-cta__actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:22px; }
.post-button { display:inline-flex; border:2px solid var(--ink); border-radius:7px; padding:12px 18px; background:#fffdf8; font-size:15px; font-weight:700; transition:transform .15s ease; }
.post-button:hover { transform:translateY(-2px); }
.post-button--ink { color:white; background:var(--ink); }

.post-related { margin-top:96px; padding:72px 0 112px; background:#edf3ff; }
.post-related__title { font-size:clamp(1.8rem,3vw,2.6rem); font-weight:700; letter-spacing:-.045em; }
.post-related__grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; margin-top:32px; }
.post-related__card { display:flex; flex-direction:column; gap:10px; border:2px solid var(--ink); border-radius:14px; padding:22px; background:#fffdf8; box-shadow:5px 5px 0 var(--ink); transition:transform .2s ease; }
.post-related__card:hover { transform:translate(-2px,-2px); }
.post-related__category { align-self:flex-start; border-radius:999px; padding:3px 10px; background:#dce7fb; font-size:12px; font-weight:700; }
.post-related__name { font-size:19px; font-weight:700; letter-spacing:-.025em; line-height:1.25; }
.post-related__date { margin-top:auto; color:var(--muted); font-size:13px; }

.post-missing { padding:120px 0 160px; }
.post:not(:has(.post-related)) { padding-bottom:112px; }

/* Isi artikel dari editor CMS (v-html, jadi pakai :deep) */
.article-content { color:#2b3445; font-size:18px; line-height:1.75; }
.article-content :deep(* + *) { margin-top:1.25em; }
.article-content :deep(h2) { margin-top:2.2em; color:var(--ink); font-size:30px; font-weight:700; letter-spacing:-.035em; line-height:1.2; }
.article-content :deep(h3) { margin-top:1.8em; color:var(--ink); font-size:23px; font-weight:700; letter-spacing:-.025em; line-height:1.3; }
.article-content :deep(a) { color:var(--blue); text-decoration:underline; text-underline-offset:3px; }
.article-content :deep(strong), .article-content :deep(b) { color:var(--ink); font-weight:700; }
.article-content :deep(ul) { padding-left:1.4em; list-style:disc; }
.article-content :deep(ol) { padding-left:1.4em; list-style:decimal; }
.article-content :deep(li + li) { margin-top:.4em; }
.article-content :deep(li::marker) { color:var(--blue); }
.article-content :deep(blockquote) { border-left:5px solid var(--yellow); padding:4px 0 4px 22px; color:var(--ink); font-size:20px; font-style:italic; }
.article-content :deep(img) { width:100%; height:auto; border:2px solid var(--ink); border-radius:12px; }
.article-content :deep(hr) { border:0; border-top:2px dashed rgba(23,25,28,.25); }
.article-content :deep(code) { border-radius:5px; padding:2px 6px; background:#edf0f5; font-size:.9em; }
.article-content :deep(pre) { overflow-x:auto; border-radius:12px; padding:18px; color:#f3f4f6; background:var(--ink); font-size:15px; }
.article-content :deep(pre code) { padding:0; background:none; }
.article-content :deep(table) { width:100%; border-collapse:collapse; font-size:16px; }
.article-content :deep(th), .article-content :deep(td) { border:1px solid rgba(23,25,28,.2); padding:10px 12px; text-align:left; }
.article-content :deep(th) { background:#edf3ff; font-weight:700; }

@media (max-width: 767px) {
  .post-header { padding:48px 0 32px; }
  .post-cover { margin-bottom:40px; box-shadow:5px 5px 0 var(--ink); }
  .article-content { font-size:17px; }
  .article-content :deep(h2) { font-size:25px; }
  .post-related__grid { grid-template-columns:minmax(0,1fr); }
}
</style>
