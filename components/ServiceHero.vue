<template>
  <section
    :id="anchorId"
    class="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 lg:mb-32"
    :aria-labelledby="titleId"
  >
    <div class="w-full lg:w-3/5">
      <div v-motion-slide-top :duration="500" :delay="100">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-purple-300 mb-4">
          {{ eyebrow }}
        </p>

        <component
          :is="titleTag"
          :id="titleId"
          class="text-brand-purple text-display max-w-readable"
        >
          {{ titleLead }}
          <span class="text-brand-yellow">{{ titleAccent }}</span>
        </component>

        <p class="mt-6 text-lg text-brand-muted max-w-readable">
          {{ subtitle }}
        </p>

        <div class="block lg:hidden flex flex-col justify-center items-center mt-10">
          <NuxtImg
            class="rounded-2xl object-cover floating-animation"
            :src="image"
            :alt="imageAlt"
            width="500"
            height="500"
            sizes="sm:50vw md:400px xl:742px"
            format="webp"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div class="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Button
            :text="primaryCtaText"
            :link="primaryCtaLink"
            :aria-label="primaryCtaText"
            color="secondary"
          />
          <NuxtLink
            v-if="secondaryCtaLink"
            :to="secondaryCtaLink"
            class="inline-flex items-center gap-2 text-brand-purple font-semibold hover:text-brand-purple-700 focus-ring rounded"
          >
            {{ secondaryCtaText }}
            <ArrowRight class="w-4 h-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <ul
          v-if="techStack?.length"
          class="mt-10 flex flex-wrap gap-2"
          :aria-label="techStackLabel"
        >
          <li
            v-for="tech in techStack"
            :key="tech"
            class="px-3 py-1 text-sm rounded-full bg-brand-lavender text-brand-purple"
          >
            {{ tech }}
          </li>
        </ul>
      </div>

      <AvailabilityBadge variant="extended" class="mt-10" />
    </div>

    <div class="hidden lg:block w-2/5">
      <NuxtImg
        class="object-cover rounded-2xl floating-animation"
        :src="image"
        :alt="imageAlt"
        width="500"
        height="500"
        sizes="lg:500px"
        format="webp"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import Button from './Button.vue'
import AvailabilityBadge from './AvailabilityBadge.vue'

interface Props {
  eyebrow: string
  titleLead: string
  titleAccent: string
  titleTag?: 'h1' | 'h2'
  titleId?: string
  subtitle: string
  image: string
  imageAlt: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  techStack?: string[]
  techStackLabel?: string
  anchorId?: string
}

withDefaults(defineProps<Props>(), {
  titleTag: 'h1',
  titleId: 'service-hero-title',
  primaryCtaText: 'Réserver un appel gratuit',
  primaryCtaLink: '/contact',
  secondaryCtaText: 'Voir mes projets',
  secondaryCtaLink: '/mes-collaborations-projets',
  techStack: () => [],
  techStackLabel: 'Technologies que j’utilise',
  anchorId: undefined,
})
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .floating-animation {
    animation: floating 6s ease-in-out infinite;
  }

  @keyframes floating {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
}
</style>
