<template>
  <li class="relative bg-white rounded-2xl shadow-card border-t-4 border-brand-yellow/70 p-6 flex flex-col h-full">
    <span
      class="text-5xl font-bold text-brand-yellow leading-none mb-3 select-none"
      aria-hidden="true"
    >
      {{ formattedIndex }}
    </span>
    <h3 class="text-h3 text-brand-purple mb-2">
      <span class="sr-only">Étape {{ index }} : </span>{{ title }}
    </h3>
    <p class="text-brand-muted">
      <slot>{{ description }}</slot>
    </p>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  index: number
  title: string
  description?: string
}

const props = defineProps<Props>()

const formattedIndex = computed(() => String(props.index).padStart(2, '0'))
</script>
