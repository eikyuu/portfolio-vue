<template>
    <div
      class="bg-white rounded-md shadow-xl shadow-[#F2EBF4] flex flex-col items-center justify-between border-b-8 border-[#FFC800] w-full h-full lg:h-[425px] p-5"
      v-motion-slide-visible-top
      :duration="500"
      :delay="100"
      role="region"
      :aria-labelledby="props.title ? 'service-title' : undefined"
    >
      <NuxtImg
        class="rounded-md mb-5"
        :src="props.img"
        width="240"
        height="110"
        format="webp"
        loading="lazy"
        fit="cover"
        :alt="`Illustration du service proposé - ${props.title}`"
      />
  
      <div class="flex flex-col items-center text-center">
        <h3
          v-if="props.title"
          id="service-title"
          class="font-bold text-[#5A3B5D] text-xl mb-6"
        >
          {{ props.title }}
        </h3>
  
        <div class="expertise-text text-gray-700">
          <slot />
        </div>
  
        <Button
          class="mt-5"
          :text="props.textBtn"
          :link="props.link ?? ''"
          :aria-label="`Lien vers ${props.textBtn}`"
          target="_self"
          type="button"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Button from './Button.vue';
  
  interface Props {
    img: string;
    title?: string;
    textBtn: string;
    link?: string;
  }
  
  const props = defineProps<Props>();
  </script>
  