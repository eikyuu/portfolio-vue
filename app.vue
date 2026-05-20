<template>
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';

useHead({
  htmlAttrs: { lang: 'fr' },
})

useSchemaOrg([
  defineWebSite({
    name: 'Vincent Duguet — Développeur web freelance Tours',
    inLanguage: 'fr-FR',
  }),
  definePerson({
    name: 'Vincent Duguet',
    jobTitle: 'Développeur web & mobile freelance',
    url: 'https://vincentduguet.dev',
    email: 'contact@vincentduguet.dev',
    telephone: '+33-6-59-63-03-26',
    image: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tours',
      addressRegion: 'Centre-Val de Loire',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.linkedin.com/in/vincent-duguet/',
      'https://www.instagram.com/vincentduguet.dev',
    ],
    knowsAbout: [
      'Angular', 'React', 'Vue.js', 'Nuxt', 'Next.js',
      'Java Spring Boot', 'Symfony', 'AdonisJS',
      'React Native', 'WordPress', 'UX/UI', 'SEO', 'Accessibilité web',
    ],
  }),
])
</script>