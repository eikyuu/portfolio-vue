<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  interactive?: boolean
  highlight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  interactive: false,
  highlight: false,
})

const cardClasses = computed(() => [
  'bg-white rounded-2xl shadow-card flex flex-col justify-between p-6 min-h-[380px]',
  'border-t-4',
  props.highlight ? 'border-brand-yellow ring-2 ring-brand-yellow/40' : 'border-brand-yellow/70',
  props.interactive && 'card-interactive cursor-pointer',
])
</script>
