<template>
  <nav aria-label="Fil d’Ariane" class="text-sm text-brand-muted mb-6">
    <ol class="flex flex-wrap items-center gap-2">
      <li v-for="(item, index) in items" :key="item.to ?? item.label" class="flex items-center gap-2">
        <ChevronRight v-if="index > 0" class="w-3 h-3 text-brand-muted/60" aria-hidden="true" />
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="hover:text-brand-purple underline-offset-2 hover:underline focus-ring rounded"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else aria-current="page" class="text-brand-purple font-medium">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

interface BreadcrumbItem {
  label: string
  to?: string
}

const props = defineProps<{ items: BreadcrumbItem[] }>()

const siteUrl = 'https://vincentduguet.dev'

const schemaItems = computed(() =>
  props.items.map((item, idx) => ({
    name: item.label,
    item: item.to ? `${siteUrl}${item.to}` : undefined,
    position: idx + 1,
  })),
)

useSchemaOrg([
  defineBreadcrumb({ itemListElement: schemaItems.value }),
])
</script>
