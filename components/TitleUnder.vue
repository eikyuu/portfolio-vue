<template>
  <div class="flex justify-center">
    <component
      :is="tag"
      class="relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] 
             before:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] md:before:h-[1.5rem]
             before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 before:rounded rounded-xl"
      :role="tag === 'div' ? 'heading' : undefined"
      :aria-level="tag === 'div' ? 1 : undefined"
    >
      <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">
        {{ title }}
      </span>
    </component>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  title: string
  tag?: keyof HTMLElementTagNameMap // restreint à des balises HTML valides
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h1',
})
</script>
