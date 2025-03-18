<template>
    <div class="block flex justify-center">
      <component
        :is="tag"
        class="mb-5 xl:mb-20 relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] 
        before:top-[1rem] before:md:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] before:md:h-[1.5rem] 
        before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 rounded-xl before:rounded"
      >
        <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">
          {{ title }}
        </span>
      </component>
    </div>
  </template>
  
  <script setup lang="ts">
  import { withDefaults } from 'vue';
  
  interface Props {
    title: string;
    tag?: string;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    tag: 'h1', // Définit 'h1' comme valeur par défaut
  });
  </script>
  