<template>
  <div class="blog-page bg-[#fbfaf6] text-[#17191c] selection:bg-[#ffd45c] selection:text-[#17191c]">
    <AppHeader :is-transparent-background="false" />

    <main class="pt-16">
      <section class="blog-hero">
        <div class="blog-container">
          <template v-if="category">
            <router-link :to="blogPath(locale)" class="blog-back">← {{ $t('blog.allArticles') }}</router-link>
            <p class="blog-eyebrow mt-8"><span class="blog-eyebrow__dot"></span>{{ $t('blog.categoryEyebrow') }}</p>
            <h1 class="blog-display mt-6">{{ category.name }}</h1>
            <p v-if="category.description" class="blog-lead mt-6">{{ category.description }}</p>
          </template>
          <template v-else-if="!notFound">
            <p class="blog-eyebrow"><span class="blog-eyebrow__dot"></span>{{ $t('blog.eyebrow') }}</p>
            <h1 class="blog-display mt-6">{{ $t('blog.title') }}</h1>
            <p class="blog-lead mt-6">{{ $t('blog.subtitle') }}</p>
          </template>
          <template v-else>
            <h1 class="blog-display">{{ $t('blog.notFoundTitle') }}</h1>
            <p class="blog-lead mt-6">{{ $t('blog.notFoundBody') }}</p>
            <router-link :to="blogPath(locale)" class="blog-button mt-8">{{ $t('blog.backToBlog') }}</router-link>
          </template>

          <nav v-if="categories.length && !notFound" class="blog-chips" :aria-label="$t('blog.categoryEyebrow')">
            <router-link :to="blogPath(locale)" class="blog-chip" :class="{ 'blog-chip--active': !category }">
              {{ $t('blog.allArticles') }}
            </router-link>
            <router-link
              v-for="c in categories"
              :key="c.slug"
              :to="categoryPath(locale, c.slug)"
              class="blog-chip"
              :class="{ 'blog-chip--active': category?.slug === c.slug }"
            >
              {{ c.name }} <span class="blog-chip__count">{{ c.articleCount }}</span>
            </router-link>
          </nav>
        </div>
      </section>

      <section v-if="!notFound" class="blog-list">
        <div class="blog-container">
          <p v-if="!articles.length" class="blog-empty">{{ $t('blog.empty') }}</p>

          <div v-else class="blog-grid">
            <article
              v-for="(article, i) in articles"
              :key="article.slug"
              class="blog-card"
              :class="{ 'blog-card--featured': i === 0 && !category }"
            >
              <router-link :to="articlePath(locale, article.slug)" class="blog-card__link">
                <div class="blog-card__media">
                  <img
                    v-if="article.coverImageUrl"
                    :src="article.coverImageUrl"
                    :alt="article.coverImageAlt"
                    :loading="i < 3 ? 'eager' : 'lazy'"
                    width="1200"
                    height="630"
                  />
                </div>
                <div class="blog-card__body">
                  <p class="blog-card__meta">
                    <span v-if="article.category" class="blog-card__category">{{ article.category.name }}</span>
                    <span>{{ formatDate(article.publishedAt, locale) }}</span>
                  </p>
                  <h2 class="blog-card__title">{{ article.title }}</h2>
                  <p class="blog-card__excerpt">{{ article.excerpt }}</p>
                  <span class="blog-card__more">
                    {{ $t('blog.readArticle') }}
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" /></svg>
                  </span>
                </div>
              </router-link>
            </article>
          </div>
        </div>
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
import { articlePath, blogPath, categoryPath, findCategory, listArticles, listCategories } from '@/blog/data'
import { formatDate } from '@/blog/format'

const route = useRoute()
const locale = computed(() => route.meta.locale)
const isCategoryPage = computed(() => route.meta.page === 'BlogCategory')

const category = computed(() =>
  isCategoryPage.value ? findCategory(locale.value, String(route.params.slug)) : undefined
)
const notFound = computed(() => isCategoryPage.value && !category.value)
const categories = computed(() => listCategories(locale.value))
const articles = computed(() => listArticles(locale.value, category.value?.slug))
</script>

<style scoped>
.blog-page { --ink:#17191c; --blue:#3279e7; --yellow:#ffbf1f; --muted:#566274; }
.blog-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }

.blog-hero { padding:88px 0 56px; }
.blog-back { color:var(--muted); font-size:14px; font-weight:700; }
.blog-back:hover { color:var(--blue); }
.blog-eyebrow { display:flex; align-items:center; gap:10px; color:var(--muted); font-size:11px; font-weight:800; letter-spacing:.16em; line-height:1.2; text-transform:uppercase; }
.blog-eyebrow__dot { width:9px; height:9px; border-radius:999px; background:var(--yellow); box-shadow:0 0 0 4px rgba(255,191,31,.2); }
.blog-display { max-width:820px; color:var(--ink); font-size:clamp(2.5rem,5vw,4.4rem); font-weight:700; letter-spacing:-.055em; line-height:1.02; }
.blog-lead { max-width:620px; color:var(--muted); font-size:18px; line-height:1.6; }
.blog-button { display:inline-flex; border-radius:7px; padding:14px 20px; color:white; background:var(--blue); font-size:15px; font-weight:700; }

.blog-chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:44px; }
.blog-chip { display:inline-flex; align-items:center; gap:8px; border:2px solid var(--ink); border-radius:999px; padding:8px 15px; background:#fffdf8; font-size:14px; font-weight:700; transition:transform .15s ease,box-shadow .15s ease; }
.blog-chip:hover { transform:translateY(-2px); box-shadow:3px 3px 0 var(--ink); }
.blog-chip--active { background:var(--yellow); box-shadow:3px 3px 0 var(--ink); }
.blog-chip__count { color:var(--muted); font-size:12px; }

.blog-list { padding:8px 0 120px; }
.blog-empty { border:2px dashed rgba(23,25,28,.25); border-radius:16px; padding:56px 24px; color:var(--muted); text-align:center; }
.blog-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:28px; }

.blog-card { border:2px solid var(--ink); border-radius:16px; overflow:hidden; background:#fffdf8; box-shadow:6px 6px 0 var(--ink); transition:transform .2s ease,box-shadow .2s ease; }
.blog-card:hover { transform:translate(-2px,-2px); box-shadow:8px 8px 0 var(--ink); }
.blog-card__link { display:flex; height:100%; flex-direction:column; }
.blog-card__media { aspect-ratio:1200/630; border-bottom:2px solid var(--ink); background:linear-gradient(135deg,#edf3ff,#fff3cf); }
.blog-card__media img { width:100%; height:100%; object-fit:cover; }
.blog-card__body { display:flex; flex:1; flex-direction:column; gap:12px; padding:22px 22px 24px; }
.blog-card__meta { display:flex; flex-wrap:wrap; align-items:center; gap:10px; color:var(--muted); font-size:13px; }
.blog-card__category { border-radius:999px; padding:3px 10px; color:var(--ink); background:#dce7fb; font-size:12px; font-weight:700; }
.blog-card__title { color:var(--ink); font-size:22px; font-weight:700; letter-spacing:-.03em; line-height:1.2; }
.blog-card__excerpt { color:#43516a; font-size:15px; line-height:1.55; }
.blog-card__more { display:inline-flex; align-items:center; gap:8px; margin-top:auto; padding-top:6px; color:var(--blue); font-size:14px; font-weight:700; }
.blog-card__more svg { width:17px; height:17px; }
.blog-card__more svg path { fill:none; stroke:currentColor; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.8; }

.blog-card--featured { grid-column:span 3; }
.blog-card--featured .blog-card__link { display:grid; grid-template-columns:1.15fr 1fr; }
.blog-card--featured .blog-card__media { border-right:2px solid var(--ink); border-bottom:0; aspect-ratio:auto; min-height:340px; }
.blog-card--featured .blog-card__body { justify-content:center; padding:40px; }
.blog-card--featured .blog-card__title { font-size:clamp(1.7rem,2.6vw,2.4rem); }

@media (max-width: 1023px) {
  .blog-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .blog-card--featured { grid-column:span 2; }
}
@media (max-width: 767px) {
  .blog-hero { padding:64px 0 40px; }
  .blog-grid { grid-template-columns:minmax(0,1fr); }
  .blog-card--featured { grid-column:auto; }
  .blog-card--featured .blog-card__link { display:flex; }
  .blog-card--featured .blog-card__media { border-right:0; border-bottom:2px solid var(--ink); aspect-ratio:1200/630; min-height:0; }
  .blog-card--featured .blog-card__body { padding:22px; }
}
</style>
