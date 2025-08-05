<template>
  <section class="mt-20 md:mt-32">
    <!-- Titre principal avec effet de surlignage -->
    <TitleUnder title="Création de Site Internet" tag="h1" class=" mb-10 xl:mb-20"   />

    <!-- Carte d'expertise -->
    <ExpertiseCard link="/contact" text-btn="J’ai besoin d’un expert en Développement Web →" img="svg/web.svg" alt="Expert en développement web">
      <article>
        <!-- Introduction -->
        <p class="mb-4">
          Vous cherchez à créer une application web performante, moderne et évolutive ? Avec une expertise solide dans
          les frameworks frontend tels que
          <strong>Vue.js</strong>, <strong>React.js</strong>, <strong>Next.js</strong> et <strong>Nuxt.js</strong>,
          ainsi que dans les solutions backend comme
          <strong>Symfony</strong>, <strong>Node.js</strong> et <strong>Adonis.js</strong>, je vous accompagne dans la
          réalisation de votre projet de A à Z.
        </p>

        <!-- Section Frontend -->
        <h2 class="text-2xl font-semibold mt-5 mb-3">Frontend : Des Interfaces Utilisateurs Modernes et Réactives</h2>
        <p>
          Le frontend est l'interface qui dialogue directement avec vos utilisateurs. Pour garantir une expérience
          fluide et engageante, j'utilise des technologies de pointe :
        </p>
        <ul class="list-disc pl-5 mt-3">
          <li><strong>Vue.js :</strong> Parfait pour des applications légères et modulaires.</li>
          <li><strong>React.js :</strong> Idéal pour des interfaces complexes et interactives.</li>
          <li><strong>Next.js :</strong> Framework React server-side rendering pour des performances optimales.</li>
          <li><strong>Nuxt.js :</strong> Solution complète basée sur Vue.js pour des sites statiques ou dynamiques.</li>
        </ul>

        <!-- Section Backend -->
        <h2 class="text-2xl font-semibold mt-5 mb-3">Backend : Une Base Technique Robuste et Évolutive</h2>
        <p>
          Le backend est le cœur de votre application, gérant les données, la logique métier et les interactions avec la
          base de données. Je m'appuie sur des technologies fiables telles que :
        </p>
        <ul class="list-disc pl-5 mt-3">
          <li><strong>Symfony :</strong> Framework PHP puissant pour des applications web robustes et sécurisées.</li>
          <li><strong>Node.js :</strong> Plateforme JavaScript côté serveur pour des applications rapides et évolutives.</li>
          <li><strong>Adonis.js :</strong> Framework Node.js inspiré de Laravel, offrant une structure claire et des performances exceptionnelles.</li>
        </ul>

        <!-- Section Approche de Développement -->
        <h2 class="text-2xl font-semibold mt-5 mb-3">Mon Approche de Développement</h2>
        <p>
          Mon approche repose sur une analyse approfondie de vos besoins, suivie d'une architecture technique adaptée et
          d'une mise en œuvre rigoureuse. Les étapes clés incluent :
        </p>
        <ol class="list-decimal pl-5 mt-3">
          <li><strong>Analyse fonctionnelle :</strong> Comprendre vos objectifs et définir les spécifications du projet.</li>
          <li><strong>Conception technique :</strong> Choisir les technologies les mieux adaptées à vos besoins.</li>
          <li><strong>Développement :</strong> Implémentation des fonctionnalités selon les meilleures pratiques.</li>
          <li><strong>Tests et optimisation :</strong> Vérification de la qualité et des performances.</li>
          <li><strong>Déploiement :</strong> Mise en production et suivi post-lancement.</li>
        </ol>

        <!-- Call to Action (CTA) -->
        <p class="mt-5">
          Prêt(e) à donner vie à votre projet web avec des technologies de pointe ?
          <NuxtLink 
            to="/contact" 
            title="Contactez-moi pour discuter de votre projet" 
            aria-label="Contactez-moi pour discuter de votre projet"
            class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300"
          >
            Contactez-moi dès maintenant
          </NuxtLink> pour une consultation gratuite !
        </p>
      </article>
    </ExpertiseCard>

    <!-- Composant Contact -->
    <Contact />
  </section>
</template>

<script setup lang="ts">
// Métadonnées SEO avec useSeoMeta
useSeoMeta({
  title: 'Développement Web sur mesure : Vue, React, Next.js, Nuxt.js & Symfony, Adonis.js',
  ogTitle: 'Développement Web sur mesure : Vue, React, Next.js, Nuxt.js & Symfony, Adonis.js',
  description: 'Vous cherchez à créer une application web performante, moderne et évolutive ? Avec une expertise solide dans les frameworks frontend tels que Vue.js, React.js, Next.js et Nuxt.js, ainsi que dans les solutions backend comme Symfony, Node.js et Adonis.js, je vous accompagne dans la réalisation de votre projet de A à Z.',
  ogDescription: 'Vous cherchez à créer une application web performante, moderne et évolutive ? Avec une expertise solide dans les frameworks frontend tels que Vue.js, React.js, Next.js et Nuxt.js, ainsi que dans les solutions backend comme Symfony, Node.js et Adonis.js, je vous accompagne dans la réalisation de votre projet de A à Z.',
  ogImage: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  keywords: 'développement web, Vue.js, React.js, Next.js, Nuxt.js, Symfony, Node.js, Adonis.js, application web performante, développement sur mesure',
  author: 'Vincent Duguet',
});
</script>

<style scoped>


a {
  transition: color 0.3s ease;
}

a:hover {
  color: #5A3B5D; /* Changement de couleur au survol */
}
</style>