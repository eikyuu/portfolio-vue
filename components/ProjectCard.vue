<template>
  <article
    class="relative z-0 bg-white shadow-card p-6 xl:p-10 rounded-2xl before:content-[''] before:absolute before:bg-brand-yellow before:left-4 before:md:left-14 before:right-0 before:bottom-[-1rem] before:h-[1.5rem] before:w-11/12 before:scale-100 before:skew-x-[-15deg] before:-z-20 before:rounded"
    :aria-labelledby="`project-${slugId}`"
  >
    <div class="flex flex-col xl:flex-row justify-center items-center gap-8 xl:gap-12">
      <NuxtImg
        :src="img"
        width="600"
        height="600"
        fit="cover"
        format="webp"
        loading="lazy"
        :alt="`Aperçu du projet : ${title}`"
        :class="['rounded-xl object-cover w-full xl:w-1/2', order]"
      />

      <div :class="textContainerClasses">
        <h3 :id="`project-${slugId}`" class="text-h3 text-brand-purple mb-4">
          {{ title }}
        </h3>
        <div class="text-brand-muted mb-6 max-w-prose" v-html="text" />

        <Button
          v-if="link"
          text="Découvrir le projet"
          target="_blank"
          :link="link"
          :aria-label="`Découvrir le projet ${title} (nouvel onglet)`"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'

interface Props {
  img: string
  title: string
  text: string
  order: string
  btnPosition?: 'float-end' | 'float-first'
  link?: string
}

const props = defineProps<Props>()

const slugId = computed(() => props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))

const textContainerClasses = computed(() =>
  props.order === 'xl:order-last'
    ? 'flex flex-col items-start w-full xl:w-1/2 xl:pr-6'
    : 'flex flex-col items-start w-full xl:w-1/2 xl:pl-6',
)
</script>
