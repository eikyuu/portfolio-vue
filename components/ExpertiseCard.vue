<template>
  <CardGoldBorder interactive class="items-center h-full relative">
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

      <span :class="ctaClasses" aria-hidden="true">
        <span class="relative z-10 font-medium">{{ props.textBtn }}</span>
      </span>
    </div>

    <NuxtLink
      :to="props.link"
      class="absolute inset-0 rounded-2xl focus:outline-none focus-visible:shadow-focus z-20"
      :aria-label="`En savoir plus : ${props.title}`"
    >
      <span class="sr-only">{{ props.title }}</span>
    </NuxtLink>
  </CardGoldBorder>
</template>

<script setup lang="ts">
interface Props {
  img: string
  title?: string
  textBtn: string
  link: string
}

const props = defineProps<Props>()

const ctaClasses = [
  'group',
  'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'rounded-xl',
  'border',
  'font-semibold',
  'transition',
  'duration-200',
  'ease-out',
  'px-6',
  'py-2',
  'text-base',
  'border-brand-purple',
  'text-brand-purple',
  'bg-white',
  "before:content-['']",
  'before:absolute',
  'before:left-2',
  'before:right-0',
  'before:top-1',
  'before:-z-10',
  'before:h-[calc(100%+2px)]',
  'before:w-full',
  'before:rounded',
  'before:bg-brand-lavender',
]
</script>
