<template>
  <CardGoldBorder v-for="offer in offers" :key="offer.id" :highlight="offer.featured" class="relative">
    <div v-if="offer.featured"
         class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
      Le plus choisi
    </div>

    <div>
      <h3 class="text-h3 text-brand-purple uppercase tracking-wide">{{ offer.name }}</h3>
      <p class="mt-2 text-brand-muted">{{ offer.tagline }}</p>

      <p class="mt-6 text-2xl font-bold text-brand-purple">Sur devis</p>
      <p class="text-sm text-brand-muted">Facilités de paiement disponibles</p>

      <ul class="mt-6 space-y-3 text-sm">
        <li v-for="feature in offer.features" :key="feature" class="flex items-start gap-2">
          <Check class="w-4 h-4 mt-1 text-brand-yellow shrink-0" aria-hidden="true" />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <Button
      class="mt-8 self-stretch"
      :text="`Demander un devis ${offer.name}`"
      :link="`/contact?offre=${offer.id}`"
      :aria-label="`Demander un devis pour ${offer.name}`"
      :color="offer.featured ? 'secondary' : 'primary'"
    />
  </CardGoldBorder>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import CardGoldBorder from './CardGoldBorder.vue'
import Button from './Button.vue'

interface Offer {
  id: string
  name: string
  tagline: string
  features: string[]
  featured?: boolean
}

const offers: Offer[] = [
  {
    id: 'refonte',
    name: 'Refonte de site',
    tagline: 'Pour ceux qui veulent que leur site reflète enfin leur personnalité et leurs valeurs.',
    features: [
      'Analyse du site existant et plan d’amélioration',
      'Audit stratégique et créatif',
      'Refonte UX/UI complète : structure, sections, composants',
      'Intégration des contenus (textes, images, vidéos)',
      'Optimisation technique et SEO',
      'Formation pour devenir autonome',
    ],
  },
  {
    id: 'cms',
    name: 'Site CMS',
    tagline: 'Pour devenir autonome rapidement et simplement.',
    features: [
      'Audit stratégique et créatif',
      'Création d’un site avec interface intuitive',
      'Contenu administrable (textes, images, vidéos)',
      'SEO : Google Analytics, balises HTML, médias optimisés',
      'Hébergement et maintenance simplifiée',
      'Formation pour devenir autonome',
    ],
    featured: true,
  },
  {
    id: 'sur-mesure',
    name: 'Site sur-mesure',
    tagline: 'Pour un site codé à la perfection qui répond à tous vos besoins.',
    features: [
      'Audit stratégique et créatif',
      'Design UX/UI premium et animations interactives',
      'Développement 100 % sur-mesure',
      'Intégrations avancées : API, plugins, plateforme d’admin',
      'Stratégie SEO complète',
      'Accompagnement stratégique sur 1 mois supplémentaire',
    ],
  },
]
</script>
