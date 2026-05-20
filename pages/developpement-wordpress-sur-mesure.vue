<template>
  <main id="main-content" class="mt-32">
    <Breadcrumb :items="[{ label: 'Accueil', to: '/' }, { label: 'WordPress sur mesure' }]" />
    <ServiceHero
      eyebrow="WordPress sur mesure · Tours"
      title-lead="Un site WordPress que vous"
      title-accent="gérez vous-même."
      subtitle="Refonte ou création de site WordPress sur mesure à Tours : thèmes personnalisés, WooCommerce, optimisation SEO et performance. Vous reprenez la main, sans dépendance."
      image="homme-barbu-devant-ordinateur.png"
      image-alt="Vincent Duguet, développeur WordPress freelance à Tours"
      primary-cta-text="Lancer mon projet WordPress"
      :tech-stack="['WordPress', 'WooCommerce', 'PHP 8', 'MySQL', 'ACF', 'Elementor']"
    />

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Pourquoi WordPress pour votre projet"
      tag="h2"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-10 lg:mt-32 lg:mb-32"
      aria-label="Atouts d’un site WordPress sur mesure"
    >
      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Vous gardez la main</h3>
          <p class="text-brand-muted">
            Le CMS le plus utilisé au monde : interface familière, écosystème immense, formation rapide. Vous éditez vos pages sans appeler un développeur à chaque modification.
          </p>
        </div>
      </CardGoldBorder>

      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Vitrine ou e-commerce</h3>
          <p class="text-brand-muted">
            Site vitrine, blog, catalogue ou boutique WooCommerce : un seul socle, une seule interface d’administration. Évolutif sans tout reconstruire.
          </p>
        </div>
      </CardGoldBorder>

      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Sur mesure, pas un thème</h3>
          <p class="text-brand-muted">
            Thème codé pour votre identité, plugins choisis avec soin, performances optimisées. Pas de page-builder qui ralentit votre site ni qui vous enferme.
          </p>
        </div>
      </CardGoldBorder>
    </section>

    <div
      v-motion-slide-visible-left
      :duration="500"
      :delay="100"
      class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 w-full gap-4 md:gap-8"
    >
      <NuxtImg
        src="site-web-i-love-my-dog.webp"
        alt="Exemple de site WordPress sur mesure réalisé par Vincent Duguet"
        class="h-full object-cover rounded-2xl w-full md:w-1/2"
        loading="lazy"
      />
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-semibold text-brand-purple mb-3">
          Ce que vous obtenez
        </h2>
        <p class="mb-5 text-brand-muted">
          Un site WordPress complet, performant et facile à administrer.
        </p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Thème codé sur mesure</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Champs personnalisés ACF</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>WooCommerce paramétré</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>SEO technique intégré</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Responsive mobile-first</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>HTTPS & sauvegardes</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Cache & optimisation images</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Formation & guide d’admin</span>
          </li>
        </ul>

        <Button
          class="mt-8"
          text="Lancer mon projet WordPress"
          link="/contact"
          aria-label="Lancer mon projet WordPress"
          target="_self"
          type="button"
        />
      </div>
    </div>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Ma méthode"
      tag="h2"
      class="mt-10 lg:mt-32"
    />

    <ol
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10 lg:mt-32 lg:mb-32 list-none p-0"
    >
      <MethodStep
        :index="1"
        title="Cadrage stratégique"
        description="On clarifie vos enjeux, votre audience et vos contenus. Le site est un outil business, pas une fin en soi."
      />
      <MethodStep
        :index="2"
        title="Conception UX/UI"
        description="Wireframes puis maquettes Figma alignées sur votre identité. Validation à chaque étape avant le développement."
      />
      <MethodStep
        :index="3"
        title="Développement sur mesure"
        description="Thème WordPress codé proprement, plugins sélectionnés, ACF pour des back-offices clairs. Pas de page-builder lourd."
      />
      <MethodStep
        :index="4"
        title="SEO & performance"
        description="Core Web Vitals, balises sémantiques, cache, images optimisées, sitemap. Le terrain est prêt pour Google."
      />
      <MethodStep
        :index="5"
        title="Mise en ligne"
        description="Déploiement, HTTPS, DNS, analytics. Recette finale en production avant le go-live officiel."
      />
      <MethodStep
        :index="6"
        title="Formation & suivi"
        description="Prise en main du back-office, documentation, maintenance optionnelle. Vous restez autonome sur vos contenus."
      />
    </ol>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Les offres"
      tag="h2"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="flex flex-col lg:flex-row items-stretch justify-between w-full gap-4 lg:gap-6 mt-10 mb-10 lg:mt-32 lg:mb-32"
    >
      <Offres />
    </section>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Questions fréquentes"
      tag="h2"
      class="mt-10 lg:mt-32"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="mt-10 mb-10 lg:mt-32 lg:mb-32 max-w-readable mx-auto"
      aria-label="Questions fréquentes sur la création d’un site WordPress"
    >
      <ServiceFaq :items="faqItems" />
    </section>

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mb-10 lg:mb-32">
      <Contact />
    </section>

    <p class="mt-10 lg:mt-32 mb-10">
      Prêt(e) à lancer votre projet avec un
      <strong>développeur WordPress freelance à Tours</strong> ?
      <NuxtLink
        to="/contact"
        title="Discutons ensemble de votre projet WordPress"
        aria-label="Discutons ensemble de votre projet WordPress"
        class="text-brand-purple font-bold underline hover:text-brand-purple-700 focus-ring rounded"
      >
        Contactez-moi dès maintenant
      </NuxtLink>
      pour une <strong>consultation gratuite</strong> et sans engagement.
    </p>
  </main>
</template>

<script setup lang="ts">
import { BadgeCheck } from 'lucide-vue-next'

const faqItems = [
  {
    q: 'WordPress, c’est vraiment toujours pertinent en 2026 ?',
    a: 'Oui pour les sites éditoriaux, vitrines et boutiques. WordPress reste le CMS le plus utilisé au monde, avec un écosystème énorme et des coûts de maintenance maîtrisés. Pour une web-app ou un produit SaaS, on partira plutôt sur Vue/Nuxt ou React/Next.',
  },
  {
    q: 'Vous utilisez Elementor, Divi ou un page-builder ?',
    a: 'Le moins possible. Je préfère un thème codé sur mesure avec ACF pour des back-offices clairs et performants. Si vous avez déjà Elementor en place, je peux travailler avec, mais on évite de l’imposer sur un projet neuf.',
  },
  {
    q: 'Combien de temps pour livrer mon site WordPress ?',
    a: 'Une vitrine 5-8 pages : 3 à 5 semaines. Un site avec WooCommerce ou des templates métiers : 6 à 10 semaines. Tout dépend de la vitesse des retours et de la disponibilité des contenus.',
  },
  {
    q: 'Et la maintenance ? Mises à jour, sécurité, sauvegardes ?',
    a: 'Trois options : vous gérez en interne avec mon guide, vous prenez un forfait de maintenance chez moi (mises à jour cœur + plugins + sauvegardes), ou vous passez par un hébergeur infogéré. Je vous oriente vers la solution qui colle à votre équipe.',
  },
  {
    q: 'Puis-je migrer mon site WordPress existant ?',
    a: 'Oui. Audit de l’existant, choix de ce qui est conservé ou refait, migration des contenus, redirections SEO. Le but : ne pas perdre votre référencement pendant l’opération.',
  },
]

useSeoMeta({
  title: 'Création et refonte de site WordPress à Tours',
  description:
    'Création et refonte de site WordPress sur mesure à Tours : thèmes personnalisés, WooCommerce, optimisation SEO et performances. Vous reprenez la main, sans dépendance.',
  ogLocale: 'fr_FR',
  ogImage: '/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  author: 'Vincent Duguet',
})

useSchemaOrg([
  defineArticle({
    headline: 'Refonte site WordPress sur mesure à Tours',
    description:
      'Refonte de site WordPress sur mesure à Tours : thèmes personnalisés, WooCommerce, optimisation SEO et performances. Vous reprenez la main, sans dépendance.',
    datePublished: '2024-06-01',
    author: {
      '@type': 'Person',
      name: 'Vincent Duguet',
      url: 'https://vincentduguet.dev',
    },
    areaServed: {
      '@type': 'City',
      name: 'Tours',
    },
  }),
])
</script>
