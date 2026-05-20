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
});
</script>