<template>
  <main id="main-content" class="mt-32">
    <ServiceHero
      eyebrow="Application mobile · iOS & Android"
      title-lead="Une app mobile pensée pour"
      title-accent="vos utilisateurs."
      subtitle="Je conçois et développe des applications mobiles iOS et Android sur mesure, performantes et durables, du cadrage au déploiement sur les stores."
      image="phone.png"
      image-alt="Aperçu d’une application mobile iOS et Android sur smartphone"
      :tech-stack="['React Native', 'Expo', 'TypeScript', 'Swift', 'iOS', 'Android']"
    />

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Pourquoi me confier votre app"
      tag="h2"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-10 lg:mt-32 lg:mb-32"
      aria-label="Atouts du développement mobile sur mesure"
    >
      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Une base, deux plateformes</h3>
          <p class="text-brand-muted">
            React Native permet de livrer iOS et Android avec une seule équipe, un seul code, et un time-to-market réduit, sans sacrifier l’expérience native.
          </p>
        </div>
      </CardGoldBorder>

      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Performance perçue</h3>
          <p class="text-brand-muted">
            Animations fluides à 60 fps, navigation native, démarrage rapide, mémoire maîtrisée : l’app reste agréable même sur les appareils anciens.
          </p>
        </div>
      </CardGoldBorder>

      <CardGoldBorder>
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">Du concept au store</h3>
          <p class="text-brand-muted">
            Je gère la publication App Store et Google Play, les certificats, les builds et les mises à jour OTA. Vous restez focalisé sur votre produit.
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
        src="phone.png"
        alt="Application mobile responsive iOS et Android"
        class="h-full object-cover rounded-2xl w-full md:w-1/2"
        loading="lazy"
      />
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-semibold text-brand-purple mb-3">
          Ce que vous obtenez
        </h2>
        <p class="mb-5 text-brand-muted">
          Une application complète, prête à grandir avec votre activité.
        </p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Architecture TypeScript robuste</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Authentification & gestion de comptes</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Notifications push & deep-linking</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Mode hors-ligne & synchronisation</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Accessibilité iOS & Android</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Analytics & suivi des conversions</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Publication App Store & Google Play</span>
          </li>
          <li class="flex items-start gap-2">
            <BadgeCheck class="mt-1 shrink-0 text-brand-yellow" aria-hidden="true" />
            <span>Mises à jour OTA & maintenance</span>
          </li>
        </ul>

        <Button
          class="mt-8"
          text="Lancer mon projet mobile"
          link="/contact"
          aria-label="Lancer mon projet mobile"
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
        title="Cadrage fonctionnel"
        description="On clarifie le problème utilisateur, les parcours clés, les contraintes techniques et les jalons. Un brief partagé, pas une boîte noire."
      />
      <MethodStep
        :index="2"
        title="Design UX/UI"
        description="Wireframes puis maquettes haute-fidélité Figma alignées sur les guidelines iOS et Material. Validation à chaque étape."
      />
      <MethodStep
        :index="3"
        title="Développement agile"
        description="Sprints courts, démos régulières, code review et tests automatisés. Vous voyez l’app prendre forme à mesure qu’on avance."
      />
      <MethodStep
        :index="4"
        title="QA & performance"
        description="Tests sur appareils physiques iOS et Android, profilage des écrans critiques, audit d’accessibilité, vérification des permissions."
      />
      <MethodStep
        :index="5"
        title="Publication stores"
        description="Préparation des assets, certificats, fiches App Store et Google Play, gestion des refus éventuels jusqu’à la mise en ligne."
      />
      <MethodStep
        :index="6"
        title="Suivi & évolutions"
        description="Mises à jour OTA, correctifs, ajout de fonctionnalités. Vous gardez la main sur la roadmap, je sécurise la qualité technique."
      />
    </ol>

    <div
      v-motion-slide-visible-right
      :duration="500"
      :delay="100"
      class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 w-full gap-4 md:gap-8 mb-10 lg:mb-32"
    >
      <div class="w-full md:w-1/2 order-2 md:order-1">
        <h2 class="text-2xl font-semibold text-brand-purple mb-3">
          Votre app peut sortir ce trimestre
        </h2>
        <p class="text-brand-muted">
          Tarif sur devis — facilités de paiement disponibles. Un MVP solide en quelques semaines, puis on itère avec vos premiers utilisateurs.
        </p>
        <p class="text-brand-muted mt-2">
          Chaque mois sans app, ce sont des utilisateurs qui s’habituent à la concurrence.
        </p>

        <Button
          class="mt-5"
          text="Obtenir un devis mobile"
          link="/contact"
          aria-label="Obtenir un devis pour mon application mobile"
          target="_self"
          type="button"
        />
      </div>
      <NuxtImg
        src="phone.png"
        alt="Application mobile sur smartphone"
        class="h-full object-cover rounded-2xl w-full md:w-1/2 order-1 md:order-2"
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
      aria-label="Questions fréquentes sur le développement mobile"
    >
      <ServiceFaq :items="faqItems" />
    </section>

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mb-10 lg:mb-32">
      <Contact />
    </section>

    <p class="mt-10 lg:mt-32 mb-10">
      Prêt(e) à concrétiser votre projet avec un
      <strong>développeur mobile freelance à Tours</strong> ?
      <NuxtLink
        to="/contact"
        title="Discutons ensemble de votre application mobile"
        aria-label="Discutons ensemble de votre application mobile"
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
    q: 'React Native ou natif (Swift / Kotlin) ?',
    a: 'React Native couvre 90 % des besoins métier avec un excellent rapport qualité/délai. Pour des cas très spécifiques (réalité augmentée, calculs intensifs, intégrations matérielles poussées), on peut basculer une partie en natif via des modules ponctuels.',
  },
  {
    q: 'Combien de temps pour livrer une première version ?',
    a: 'Un MVP fonctionnel est généralement prêt en 6 à 12 semaines selon la complexité. Je travaille par sprints courts avec des démos régulières pour que vous voyiez la valeur s’accumuler en continu.',
  },
  {
    q: 'Comment se passe la publication App Store et Google Play ?',
    a: 'Je m’occupe des comptes développeurs, des certificats, des fiches store, des captures d’écran et des soumissions. Si Apple ou Google demandent des modifications, je gère les allers-retours jusqu’à la validation.',
  },
  {
    q: 'Qui maintient l’app après la mise en ligne ?',
    a: 'Vous pouvez reprendre la main en interne ou me confier la maintenance : mises à jour OS, correctifs, évolutions, suivi des crashs et des performances. Le code est documenté et structuré pour rester lisible par n’importe quelle équipe.',
  },
  {
    q: 'L’app fonctionnera-t-elle hors connexion ?',
    a: 'Oui si votre cas d’usage le justifie. Je mets en place un cache local, une file de synchronisation et la gestion fine des conflits pour que l’expérience reste fluide même sans réseau.',
  },
]

useSeoMeta({
  title: 'Application mobile React Native sur mesure — Tours',
  description:
    'Développeur freelance à Tours, je conçois vos applications mobiles iOS et Android en React Native : performance, accessibilité, design sur mesure.',
  ogLocale: 'fr_FR',
  ogImage: '/phone.png',
  twitterCard: 'summary_large_image',
  author: 'Vincent Duguet',
})

useSchemaOrg([
  defineArticle({
    headline: 'Application mobile React Native sur mesure — Tours',
    description:
      'Développeur freelance à Tours, je conçois vos applications mobiles iOS et Android en React Native : performance, accessibilité, design sur mesure.',
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
