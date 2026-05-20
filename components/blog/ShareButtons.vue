<template>
  <div class="flex items-center gap-3" aria-label="Partager cet article">
    <span class="text-sm text-brand-muted">Partager :</span>
    <a
      :href="linkedInUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Partager sur LinkedIn (nouvel onglet)"
      class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-lavender text-brand-purple hover:bg-brand-purple hover:text-white focus-ring transition"
    >
      <Linkedin class="w-4 h-4" aria-hidden="true" />
    </a>
    <a
      :href="twitterUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Partager sur X (nouvel onglet)"
      class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-lavender text-brand-purple hover:bg-brand-purple hover:text-white focus-ring transition"
    >
      <Twitter class="w-4 h-4" aria-hidden="true" />
    </a>
    <button
      type="button"
      :aria-label="copied ? 'Lien copié' : 'Copier le lien de l’article'"
      class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-lavender text-brand-purple hover:bg-brand-purple hover:text-white focus-ring transition"
      @click="copy"
    >
      <Check v-if="copied" class="w-4 h-4" aria-hidden="true" />
      <Link2 v-else class="w-4 h-4" aria-hidden="true" />
    </button>
    <span v-if="copied" class="text-sm text-brand-muted" role="status">Lien copié</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Linkedin, Twitter, Link2, Check } from 'lucide-vue-next'

interface Props {
  url: string
  title: string
}

const props = defineProps<Props>()

const copied = ref(false)

const linkedInUrl = computed(
  () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`,
)
const twitterUrl = computed(
  () => `https://twitter.com/intent/tweet?url=${encodeURIComponent(props.url)}&text=${encodeURIComponent(props.title)}`,
)

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.url)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    /* clipboard indisponible — ignorer */
  }
}
</script>
