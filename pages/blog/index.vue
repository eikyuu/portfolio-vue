<template>
  <main id="main-content" v-motion-slide-top :duration="500" :delay="100" class="mt-32">
    <Breadcrumb :items="[{ label: 'Accueil', to: '/' }, { label: 'Blog' }]" />
    <TitleUnder title="Blog : UX, développement web et SEO" tag="h1" />
    <p class="text-center text-brand-muted max-w-prose mx-auto mt-6">
      Le journal d’un développeur freelance : articles courts et concrets sur l’UX/UI,
      le développement web (Angular, Vue, Spring Boot) et la stratégie digitale.
    </p>

    <div class="flex flex-col flex-wrap md:flex-row gap-5 mt-12 lg:mt-20">
      <BlogCard v-for="article in articles" :key="article.slug" :article="article" />
    </div>
  </main>
</template>

<script setup lang="ts">
import BlogCard from '~/components/blog/BlogCard.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import { articles } from '~/types/articles'

useSeoMeta({
  title: 'Blog développeur freelance — UX, dev web et SEO',
  description:
    'Le blog de Vincent Duguet, développeur freelance à Tours : articles concrets sur l’UX/UI, le développement web (Angular, Vue, Spring Boot) et le référencement naturel.',
  ogLocale: 'fr_FR',
  ogImage: '/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
})
</script>