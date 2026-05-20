<template>
  <main id="main-content" class="mt-32 overflow-x-hidden">
    <ServiceHero
      eyebrow="Développement web · Tours"
      title-lead="Des sites web qui transforment vos"
      title-accent="visiteurs en clients."
      subtitle="Création de site internet sur mesure à Tours, du cadrage au déploiement. Code propre, accessibilité, SEO et performances mesurées."
      image="homme-barbu-devant-ordinateur.png"
      image-alt="Vincent Duguet, développeur web freelance à Tours"
      primary-cta-text="Lancer mon projet web"
      :tech-stack="['Vue / Nuxt', 'React / Next', 'Angular', 'Symfony', 'AdonisJS', 'Spring Boot']"
    />

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Vous êtes au bon endroit si"
      tag="h2"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 mb-10 lg:mb-32 w-full gap-4 md:gap-8"
    >
      <NuxtImg
        src="site-web-i-love-my-dog.webp"
        alt="Aperçu d’un site web vitrine sur mesure réalisé par Vincent Duguet"
        class="h-full object-cover rounded-2xl w-full md:w-1/2"
        loading="lazy"
      />
      <ul class="w-full md:w-1/2 space-y-3">
        <li class="flex items-start gap-3">
          <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
          <span>Vous voulez faire décoller votre activité en ligne</span>
        </li>
        <li class="flex items-start gap-3">
          <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
          <span>Vous voulez passer à la vitesse supérieure</span>
        </li>
        <li class="flex items-start gap-3">
          <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
          <span>Vous voulez un site qui vous ressemble vraiment</span>
        </li>
        <li class="flex items-start gap-3">
          <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
          <span>Vous voulez être accompagné(e) du début à la fin</span>
        </li>
        <li class="flex items-start gap-3">
          <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
          <span>Vous voulez être fier(ère) de votre site internet</span>
        </li>
      </ul>
    </section>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Pourquoi me confier votre site"
      tag="h2"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-10 lg:mt-32 lg:mb-32"
      aria-label="Atouts du développement web sur mesure"
    >
      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Sur mesure, pas un thème</h3>
          <p class="text-brand-muted">
            Chaque section est dessinée pour votre activité. Pas de template figé, pas de fonctionnalité inutile, pas de dépendances qui freinent vos évolutions futures.
          </p>
        </div>
      </CardGoldBorder>

      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Performance & SEO mesurés</h3>
          <p class="text-brand-muted">
            Core Web Vitals, accessibilité WCAG, balises structurées, sitemap et open-graph : le terrain technique est préparé pour que Google vous remonte.
          </p>
        </div>
      </CardGoldBorder>

      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Vous gardez la main</h3>
          <p class="text-brand-muted">
            Code documenté, hébergement libre, formation à la prise en main. Vous n’êtes jamais prisonnier d’un prestataire ni d’une plateforme propriétaire.
          </p>
        </div>
      </CardGoldBorder>
    </section>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Ma méthode"
      tag="h2"
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
        description="On clarifie vos objectifs business, votre cible et les contenus. Le site n’est pas une fin, c’est un outil au service de votre activité."
      />
      <MethodStep
        :index="2"
        title="Design UX/UI"
        description="Wireframes puis maquettes Figma, alignées sur votre identité. Validation à chaque étape, zéro mauvaise surprise au moment de l’intégration."
      />
      <MethodStep
        :index="3"
        title="Développement"
        description="Stack moderne (Vue/Nuxt, React/Next, Symfony, AdonisJS, Spring Boot) selon le projet. Code typé, testé, versionné, hébergeable partout."
      />
      <MethodStep
        :index="4"
        title="SEO & accessibilité"
        description="Balises sémantiques, données structurées, contrastes, navigation clavier, métadonnées, sitemap, robots. Le terrain est prêt pour ranker."
      />
      <MethodStep
        :index="5"
        title="Mise en ligne"
        description="Déploiement, certificat HTTPS, configuration DNS, analytics. Recette finale sur environnement de production avant le go-live officiel."
      />
      <MethodStep
        :index="6"
        title="Suivi & évolutions"
        description="Maintenance, ajout de pages, optimisation continue. Vous évoluez avec votre marché, votre site suit le rythme sans dette technique."
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

    <div
      v-motion-slide-visible-left
      :duration="500"
      :delay="100"
      class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 w-full gap-4 md:gap-8"
    >
      <NuxtImg
        src="site-web-grotte-fee.png"
        alt="Aperçu du site web Grotte de Saint-Émilion réalisé par Vincent Duguet"
        class="h-full object-cover rounded-2xl w-full md:w-1/2 order-2 md:order-1"
        loading="lazy"
      />
      <div class="w-full md:w-1/2 order-1 md:order-2">
        <h2 class="text-2xl font-semibold text-brand-purple mb-3">
          Votre site peut être en ligne dès ce mois-ci
        </h2>
        <p class="text-brand-muted">Tarif sur devis — facilités de paiement disponibles.</p>
        <p class="text-brand-muted">
          Chaque jour sans site, ce sont des clients potentiels qui partent chez vos concurrents.
        </p>

        <Button
          class="mt-5"
          text="Lancer mon projet de site"
          link="/contact"
          aria-label="Lancer mon projet de site"
          target="_self"
          type="button"
        />
      </div>
    </div>

    <div
      v-motion-slide-visible-right
      :duration="500"
      :delay="100"
      class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 w-full mb-10 lg:mb-32 gap-4 md:gap-8"
    >
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-semibold text-brand-purple mb-3">
          Votre site, prêt à performer
        </h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Mise en forme du design des pages</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Intégration des contenus</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Formulaire de contact sécurisé</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Responsive mobile, tablette, desktop</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Optimisation SEO technique</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Performances & cache</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Certificat SSL / HTTPS</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Assistance & guide de prise en main</span>
          </li>
        </ul>

        <p class="text-brand-muted">One-page, vitrine ou e-commerce : tarif sur devis selon vos besoins.</p>
        <p class="text-brand-muted">Gestion simple, design pro, SEO intégré.</p>

        <Button
          class="mt-5"
          text="Créer mon site avec un expert"
          link="/contact"
          aria-label="Créer mon site avec un expert"
          target="_self"
          type="button"
        />
      </div>
      <NuxtImg
        src="restaurant.png"
        alt="Aperçu du site web Restaurant réalisé par Vincent Duguet"
        class="h-full object-cover rounded-2xl w-full md:w-1/2"
        loading="lazy"
      />
    </div>

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
      aria-label="Questions fréquentes sur la création de site web"
    >
      <ServiceFaq :items="faqItems" />
    </section>

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mb-10 lg:mb-32">
      <Contact />
    </section>

    <p class="mt-10 lg:mt-32 mb-10">
      Prêt(e) à concrétiser votre projet avec un
      <strong>expert en développement web à Tours</strong> ?
      <NuxtLink
        to="/contact"
        title="Discutons ensemble de votre projet web"
        aria-label="Discutons ensemble de votre projet web"
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
    q: 'Quelle techno pour mon site : Vue, React, Symfony, AdonisJS ?',
    a: 'Le choix dépend de vos contenus, de votre équipe interne et de votre SEO. Vitrine ou marketing : Vue/Nuxt ou React/Next pour la performance et le rendu serveur. Métier ou application : Symfony, AdonisJS ou Spring Boot pour la robustesse côté back. On décide ensemble au cadrage.',
  },
  {
    q: 'Combien de temps pour livrer mon site ?',
    a: 'Une vitrine 4 à 6 pages : 3 à 6 semaines. Un site sur mesure avec back-office : 6 à 12 semaines. Tout dépend de la rapidité des retours et de la disponibilité des contenus. Je livre par sprints courts pour que vous voyiez la valeur s’accumuler.',
  },
  {
    q: 'Mon site sera-t-il bien référencé sur Google ?',
    a: 'Le terrain technique est préparé : balises sémantiques, données structurées, Core Web Vitals, sitemap, open-graph, accessibilité. Je ne rédige pas vos contenus éditoriaux, mais tout est en place pour qu’ils performent.',
  },
  {
    q: 'Puis-je modifier mon site sans développeur ?',
    a: 'Oui, c’est la norme. Selon le projet on met en place un CMS (WordPress, Strapi, Directus) ou une zone d’administration sur mesure. Vous gérez vos contenus, je gère le socle technique.',
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: 'Vous reprenez la main avec un guide de prise en main. Je propose aussi un forfait de maintenance pour les mises à jour, correctifs et évolutions. Vous n’êtes jamais bloqué : tout est documenté et hébergeable où vous voulez.',
  },
]

useSeoMeta({
  title: 'Création de site internet à Tours — Angular, React, Vue',
  description:
    'Création de site internet sur mesure à Tours en Angular, React, Vue/Nuxt, Next.js, Symfony, AdonisJS et Java Spring Boot. Sites performants, accessibles et SEO-friendly.',
  ogLocale: 'fr_FR',
  ogImage: '/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  author: 'Vincent Duguet',
})

useSchemaOrg([
  defineArticle({
    headline: 'Création de site internet à Tours — Angular, React, Vue',
    description:
      'Création de site internet sur mesure à Tours en Angular, React, Vue/Nuxt, Next.js, Symfony, AdonisJS et Java Spring Boot. Sites performants, accessibles et SEO-friendly.',
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
