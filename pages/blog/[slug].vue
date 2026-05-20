<template>
  <ReadingProgress />

  <main id="main-content" v-motion-slide-top :duration="500" :delay="100" class="mt-32">
    <article v-if="blog.content" class="mx-auto max-w-readable">
      <Breadcrumb :items="[{ label: 'Accueil', to: '/' }, { label: 'Blog', to: '/blog' }, { label: blog.title }]" />

      <header class="mb-10">
        <h1 class="text-h1 text-brand-purple mb-6">{{ blog.title }}</h1>

        <NuxtImg
          v-if="hasHero"
          :src="`/${slug}.webp`"
          :alt="blog.alt"
          class="w-full aspect-[16/9] object-cover rounded-2xl shadow-card"
          format="webp"
          loading="eager"
          fetchpriority="high"
        />
      </header>

      <div
        v-html="blog.content"
        class="prose prose-lg max-w-none prose-headings:text-brand-purple prose-headings:font-bold prose-a:text-brand-purple prose-a:underline prose-strong:text-brand-ink"
      />

      <footer class="mt-12 pt-6 border-t border-brand-lavender flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <ShareButtons :url="shareUrl" :title="blog.title" />
        <NuxtLink to="/contact"
                  class="inline-flex items-center gap-2 text-brand-purple font-semibold hover:text-brand-purple-700 focus-ring rounded">
          Un projet en tête ? Discutons-en
          <ArrowRight class="w-4 h-4" aria-hidden="true" />
        </NuxtLink>
      </footer>
    </article>

    <div v-else class="mx-auto max-w-readable text-center py-20">
      <p class="text-brand-muted">Cet article est introuvable.</p>
      <NuxtLink to="/blog"
                class="inline-flex items-center gap-1 mt-6 text-brand-purple hover:text-brand-purple-700 focus-ring rounded">
        <ArrowLeft class="w-4 h-4" aria-hidden="true" />
        Retour au blog
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import Breadcrumb from '~/components/Breadcrumb.vue'
import ReadingProgress from '~/components/blog/ReadingProgress.vue'
import ShareButtons from '~/components/blog/ShareButtons.vue'
import { blogs, type BlogContent } from '~/data/blogs'
import { articles } from '~/types/articles'

const route = useRoute()
const slug = route.params.slug as string

const fallback: BlogContent = {
  title: 'Article introuvable',
  meta: '',
  alt: '',
  content: '',
}

const blog: BlogContent = blogs[slug as keyof typeof blogs] ?? fallback
const hasHero = computed(() => slug in blogs)
const shareUrl = computed(() => `https://vincentduguet.dev/blog/${slug}`)

const meta = articles.find(a => a.slug === slug)
const publishedIso = (() => {
  if (!meta) return undefined
  const m = meta.publishedDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!m) return undefined
  const [, dd, mm, yyyy] = m
  return `${yyyy}-${mm}-${dd}`
})()

useSeoMeta({
  title: `${blog.title} — Blog Vincent Duguet`,
  description: blog.meta,
  ogType: 'article',
  ogLocale: 'fr_FR',
  ogImage: hasHero.value ? `/${slug}.webp` : '/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  articlePublishedTime: publishedIso,
  articleAuthor: ['Vincent Duguet'],
})

if (hasHero.value) {
  useSchemaOrg([
    defineArticle({
      headline: blog.title,
      description: blog.meta,
      image: `https://vincentduguet.dev/${slug}.webp`,
      datePublished: publishedIso,
      inLanguage: 'fr-FR',
      author: { '@type': 'Person', name: 'Vincent Duguet', url: 'https://vincentduguet.dev' },
    }),
  ])
}
</script>
