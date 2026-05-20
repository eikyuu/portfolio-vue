<template>
  <div class="flex justify-center">
    <component
      :is="tag"
      class="relative inline-block before:content-[''] before:absolute before:bg-brand-yellow
             before:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] md:before:h-[1.5rem]
             before:scale-100 before:skew-x-[-8deg] before:-z-10 before:rounded rounded-xl"
    >
      <span class="relative text-brand-purple text-h1 md:text-h1">
        {{ title }}
      </span>
    </component>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  tag?: keyof HTMLElementTagNameMap
}

withDefaults(defineProps<Props>(), {
  tag: 'h1',
})
</script>
