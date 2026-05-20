<template>
  <div class="overflow-x-hidden min-h-screen flex flex-col">
    <!-- Barre de chargement subtile : effet de marque, < 300ms, sans pourcentage -->
    <div
      v-if="isLoading"
      class="fixed top-16 left-0 right-0 h-[2px] bg-brand-yellow z-40 origin-left animate-loader-bar"
      role="progressbar"
      aria-label="Chargement de la page"
    />

    <Header />

    <div class="w-[92vw] md:w-[88vw] xl:max-w-screen-2xl mx-auto md:px-4 text-base leading-relaxed flex-1">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

const triggerLoader = () => {
  if (timeoutId) clearTimeout(timeoutId)
  isLoading.value = true
  timeoutId = setTimeout(() => {
    isLoading.value = false
    timeoutId = null
  }, 280)
}

onMounted(() => {
  triggerLoader()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath !== oldPath) triggerLoader()
  },
)
</script>

<style>
@keyframes loader-bar {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
.animate-loader-bar {
  animation: loader-bar 280ms cubic-bezier(.4, 0, .2, 1) forwards;
}
@media (prefers-reduced-motion: reduce) {
  .animate-loader-bar { animation: none; transform: scaleX(1); }
}
</style>
