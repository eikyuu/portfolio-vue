<template>
  <div
    class="fixed top-16 left-0 right-0 h-1 z-40 bg-brand-lavender/40"
    role="progressbar"
    :aria-valuenow="Math.round(progress)"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Progression de lecture"
  >
    <div
      class="h-full bg-brand-yellow transition-[width] duration-100 ease-out"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

const onScroll = () => {
  const doc = document.documentElement
  const scrolled = doc.scrollTop
  const height = doc.scrollHeight - doc.clientHeight
  progress.value = height > 0 ? Math.min(100, (scrolled / height) * 100) : 0
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
