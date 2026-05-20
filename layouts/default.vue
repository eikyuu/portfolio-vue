<template>
  <div class="overflow-x-hidden min-h-screen">

    <Header />

    <div class="w-[90vw] md:w-[80vw] xl:max-w-screen-2xl mx-auto md:p-0 md:px-4 text-sm md:text-base leading-5 md:leading-8">
      <slot />
    </div>

    <Footer />
  </div>

</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCookie } from 'nuxt/app'

const route = useRoute()
const isLoading = ref(false)
const loadingProgress = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null
let endTimeoutId: ReturnType<typeof setTimeout> | null = null

const visitedPages = useCookie<string[]>('visitedPages', { default: () => [] })

const clearTimers = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  if (endTimeoutId) {
    clearTimeout(endTimeoutId)
    endTimeoutId = null
  }
}

const startLoading = (isFirstLoadForPage = false) => {
  isLoading.value = true
  loadingProgress.value = 0
  clearTimers()

  const duration = isFirstLoadForPage ? 50 : 20
  const endPause = isFirstLoadForPage ? 300 : 100

  intervalId = setInterval(() => {
    if (loadingProgress.value < 100) {
      const increment = loadingProgress.value < 70 ? 15 : 5
      loadingProgress.value = Math.min(loadingProgress.value + increment, 100)
    } else {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
      endTimeoutId = setTimeout(() => {
        isLoading.value = false
        endTimeoutId = null
      }, endPause)
    }
  }, duration)
}

const handleRouteChange = (path: string) => {
  if (!visitedPages.value.includes(path)) {
    startLoading(true)
    visitedPages.value = [...visitedPages.value, path]
  } else {
    startLoading(false)
  }
}

onMounted(() => {
  handleRouteChange(route.fullPath)
})

onUnmounted(() => {
  clearTimers()
})

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      handleRouteChange(newPath)
    }
  }
)
</script>
