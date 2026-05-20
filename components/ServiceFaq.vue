<template>
  <ul class="space-y-4">
    <li
      v-for="(item, idx) in items"
      :key="idx"
      class="bg-white rounded-2xl shadow-card border-t-4 border-brand-yellow/70 overflow-hidden"
    >
      <details class="group">
        <summary
          class="flex items-center justify-between gap-4 cursor-pointer list-none p-5 focus-ring rounded-2xl"
        >
          <span class="text-brand-purple font-semibold text-lg">{{ item.q }}</span>
          <ChevronDown
            class="w-5 h-5 text-brand-purple shrink-0 transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div class="px-5 pb-5 text-brand-muted">
          <p>{{ item.a }}</p>
        </div>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

interface FaqItem {
  q: string
  a: string
}

defineProps<{ items: FaqItem[] }>()
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
</style>
