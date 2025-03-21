<template>
    <Analytics />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
useHead({
  htmlAttrs: { lang: 'fr' },
});
</script>