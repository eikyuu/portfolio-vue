<template>
  <NuxtLink
    :to="`/blog/${article.slug}`"
    prefetch
    class="group card-interactive flex flex-col w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] bg-white rounded-2xl shadow-card overflow-hidden focus-ring"
    :aria-label="`Lire l'article : ${article.title}`"
  >
    <div class="aspect-[16/10] overflow-hidden bg-brand-lavender">
      <NuxtImg
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col flex-1 p-5">
      <h3 class="text-h3 text-brand-purple line-clamp-2">{{ article.title }}</h3>
      <p class="mt-3 text-sm text-brand-muted line-clamp-3">{{ article.resume }}</p>

      <div class="flex items-center justify-between mt-5 pt-4 border-t border-brand-lavender text-xs text-brand-muted">
        <time :datetime="isoDate">{{ formattedDate }}</time>
        <span class="inline-flex items-center gap-1">
          <Clock class="w-3 h-3" aria-hidden="true" />
          {{ article.time }} min
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Clock } from 'lucide-vue-next'
import type { Article } from '~/types/article'

interface Props {
  article: Article
}

const props = defineProps<Props>()

const parseDate = (value: string): Date | null => {
  const m = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!m) return null
  const [, dd, mm, yyyy] = m
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd))
}

const dateObj = computed(() => parseDate(props.article.publishedDate))

const formattedDate = computed(() =>
  dateObj.value
    ? new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(dateObj.value)
    : props.article.publishedDate,
)

const isoDate = computed(() => (dateObj.value ? dateObj.value.toISOString().slice(0, 10) : ''))
</script>
