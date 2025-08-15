<template>
    <section
      class="relative z-0 bg-white shadow-xl shadow-[#F2EBF4] p-5 xl:p-10 rounded-xl before:content-[''] before:absolute before:bg-[#FFC800] before:left-4 before:md:left-14 before:right-0 before:bottom-[-1rem] before:h-[1.5rem] before:w-11/12 before:transform before:scale-100 before:skew-x-[-15deg] before:-z-20 before:rounded"
      role="region"
      aria-labelledby="project-title"
    >
      <div class="flex flex-col xl:flex-row justify-center items-center">
        <!-- Image du projet -->
        <NuxtImg
          :src="img"
          width="600"
          height="600"
          fit="cover"
          format="webp"
          loading="lazy"
          alt="Présentation visuelle du projet : {{ title }}"
          :class="imageClasses"
          class="rounded-xl mb-10 xl:mb-0"
        />
  
        <!-- Contenu texte -->
        <div :class="textContainerClasses">
          <h3 id="project-title" class="font-bold text-[#5A3B5D] text-xl mb-10">
            {{ title }}
          </h3>
          <p class="mb-10 text-base text-gray-700" v-html="text" />
  
          <Button
            v-if="link"
            class="mb-5"
            text="Découvrir le projet"
            target="_blank"
            :link="link"
            :aria-label="`Découvrir le projet : ${title}`"
            :class="`xl:${btnPosition}`"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import Button from './Button.vue'
  
  interface Props {
    img: string
    title: string
    text: string
    order: 'xl:order-last' | ''
    btnPosition: 'float-end' | 'float-first'
    link?: string
  }
  
  const props = defineProps<Props>()
  
  const imageClasses = computed(() => `mb-10 xl:mb-0 ${props.order}`)
  const textContainerClasses = computed(() =>
    props.order === 'xl:order-last'
      ? 'flex flex-col items-center xl:items-start xl:pr-10'
      : 'flex flex-col items-center xl:items-start xl:pl-10'
  )
  </script>
  