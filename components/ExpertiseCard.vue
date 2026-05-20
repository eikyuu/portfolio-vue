<template>
  <CardGoldBorder interactive class="items-center h-full">
    <NuxtImg
      class="rounded-xl mb-5"
      :src="props.img"
      width="240"
      height="110"
      format="webp"
      loading="lazy"
      fit="cover"
      sizes="sm:240px md:240px lg:240px"
      :alt="`Illustration du service : ${props.title}`"
    />

    <div class="flex flex-col items-center text-center flex-1">
      <h3 v-if="props.title" class="text-h3 text-brand-purple mb-4">
        {{ props.title }}
      </h3>

      <div class="text-brand-muted mb-6 flex-1">
        <slot />
      </div>

      <Button
        :text="props.textBtn"
        :link="props.link ?? ''"
        :aria-label="`En savoir plus : ${props.title}`"
        target="_self"
        type="button"
        color="primary"
      />
    </div>
  </CardGoldBorder>
</template>

<script setup lang="ts">
import Button from './Button.vue'

interface Props {
  img: string
  title?: string
  textBtn: string
  link?: string
}

const props = defineProps<Props>()
</script>
