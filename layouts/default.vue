<template>
  <div>

  <Header />

  <main class="w-[90vw] xl:max-w-screen-2xl mx-auto p-4 md:p-0 md:px-4 text-sm md:text-base leading-5 md:leading-8">
    <Loader v-if="isLoading" :progress="loadingProgress"/>

    <slot v-else />
  </main>   
  
  <Footer />
  </div>

</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(false)
const loadingProgress = ref(0)
let intervalId: NodeJS.Timeout | null = null

const startLoading = () => {
  isLoading.value = true
  loadingProgress.value = 0
  if (intervalId) clearInterval(intervalId)

  intervalId = setInterval(() => {
    if (loadingProgress.value < 100) {
      // Augmente rapidement au début, puis ralentit
      const increment = loadingProgress.value < 70 ? 10 : 2
      loadingProgress.value = Math.min(loadingProgress.value + increment, 100)
    } else {
      if (intervalId) clearInterval(intervalId)
      // Petite pause à 100% avant de disparaître
setTimeout(() => {
  isLoading.value = false
      }, 500)
    }
  }, 50) // Met à jour toutes les 50ms
}

onMounted(() => {
  startLoading()
})

watch(
  () => route.fullPath,
  () => {
    startLoading()
  }
)
</script>
