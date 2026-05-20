<template>
  <span
    role="status"
    :aria-label="ariaLabel"
    :class="containerClasses"
  >
    <span class="relative inline-flex items-center justify-center w-2.5 h-2.5 shrink-0">
      <span
        v-if="pulsing"
        :class="['absolute inset-0 rounded-full', dotBgClass, 'animate-pulse-soft']"
        aria-hidden="true"
      />
      <span :class="['relative inline-block w-2.5 h-2.5 rounded-full', dotBgClass]" aria-hidden="true" />
    </span>
    <span :class="textClass">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAvailability } from '~/composables/useAvailability'

interface Props {
  variant?: 'compact' | 'extended'
}

const props = withDefaults(defineProps<Props>(), { variant: 'compact' })

const { status, availableFrom } = useAvailability()

const isAvailable = computed(() => status === 'available')
const pulsing = computed(() => isAvailable.value)

const dotBgClass = computed(() => (isAvailable.value ? 'bg-green-500' : 'bg-red-500'))

const textClass = computed(() => {
  if (props.variant === 'compact') {
    return isAvailable.value ? 'text-green-700' : 'text-red-700'
  }
  return isAvailable.value ? 'text-green-700' : 'text-red-700'
})

const containerClasses = computed(() => {
  const base = ['inline-flex', 'items-center', 'gap-2', 'font-medium']
  if (props.variant === 'compact') {
    return [
      ...base,
      'text-xs',
      'px-2.5',
      'py-1',
      'rounded-full',
      'bg-white',
      'shadow-sm',
      'border',
      isAvailable.value ? 'border-green-200' : 'border-red-200',
    ]
  }
  return [
    ...base,
    'text-sm',
    'px-3',
    'py-1.5',
    'rounded-full',
    isAvailable.value ? 'bg-green-50' : 'bg-red-50',
    isAvailable.value ? 'border border-green-200' : 'border border-red-200',
  ]
})

const formattedDate = computed(() => {
  if (!availableFrom) return ''
  const d = new Date(availableFrom)
  if (Number.isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
})

const label = computed(() => {
  if (props.variant === 'compact') {
    return isAvailable.value ? 'Disponible' : 'Complet'
  }
  // variant extended
  if (isAvailable.value) return 'Disponible pour de nouveaux projets'
  return formattedDate.value
    ? `Carnet plein — dispo dès le ${formattedDate.value}`
    : 'Carnet plein — sur liste d’attente'
})

const ariaLabel = computed(() => `Statut de disponibilité : ${label.value}`)
</script>
