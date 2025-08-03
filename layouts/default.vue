<template>
  <div>

  <Header />

  <main class="w-[90vw] xl:max-w-screen-2xl mx-auto p-4 md:p-0 md:px-4 text-sm md:text-base leading-5 md:leading-8">
    <!-- <Loader v-if="isLoading" :progress="loadingProgress"/> -->

    <slot />
  </main>   
  
  <Footer />
  </div>

</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCookie } from 'nuxt/app'

const route = useRoute()
const isLoading = ref(false)
const loadingProgress = ref(0)
let intervalId: NodeJS.Timeout | null = null

// Cookie pour stocker les chemins des pages déjà visitées dans la session
const visitedPages = useCookie<string[]>('visitedPages', { default: () => [] })

const startLoading = (isFirstLoadForPage = false) => {
  isLoading.value = true
  loadingProgress.value = 0
  if (intervalId) clearInterval(intervalId)

  const duration = isFirstLoadForPage ? 50 : 20
  const endPause = isFirstLoadForPage ? 300 : 100

  intervalId = setInterval(() => {
    if (loadingProgress.value < 100) {
      const increment = loadingProgress.value < 70 ? 15 : 5
      loadingProgress.value = Math.min(loadingProgress.value + increment, 100)
    } else {
      if (intervalId) clearInterval(intervalId)
      setTimeout(() => {
        isLoading.value = false
      }, endPause)
    }
  }, duration)
}

const handleRouteChange = (path: string) => {
  if (!visitedPages.value.includes(path)) {
    // C'est la première fois qu'on visite CETTE page
    startLoading(true) // On lance le loader "long"
    // On ajoute la page à la liste des pages visitées
    visitedPages.value = [...visitedPages.value, path]
  } else {
    // On a déjà visité cette page, on lance le loader rapide
    startLoading(false)
  }
}

// Gérer le chargement initial de la toute première page
onMounted(() => {
  handleRouteChange(route.fullPath)
})

// Gérer les changements de route suivants
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      handleRouteChange(newPath)
    }
  }
)
</script>
