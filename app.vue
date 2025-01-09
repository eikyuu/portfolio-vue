<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <Analytics />
</template>

<script>
import { Analytics } from '@vercel/analytics/nuxt'
</script>