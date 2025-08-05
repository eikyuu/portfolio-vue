<template>
  <section class="mt-20 md:mt-32">
    <!-- Titre principal avec effet de surlignage -->
    <TitleUnder title="Création de Site Internet" tag="h1" class=" mb-10 xl:mb-20"   />

    <!-- Carte d'expertise -->
    <ExpertiseCard
  link="/contact"
  text-btn="J’ai besoin d’un expert en Développement Web →"
  img="svg/web.svg"
  alt="Expert en développement web"
>
  <article>
    <!-- Introduction -->
    <p class="mb-4">
      Vous avez un projet d’application web et cherchez un <strong>développeur fullstack</strong> capable de concevoir
      une solution <strong>moderne, performante et évolutive</strong> ? Fort d’une expertise sur les frameworks
      frontend comme <strong>Vue.js</strong>, <strong>React.js</strong>, <strong>Next.js</strong> et
      <strong>Nuxt.js</strong>, ainsi que sur des backends puissants comme <strong>Symfony</strong>,
      <strong>Node.js</strong> ou <strong>Adonis.js</strong>, je vous accompagne de la conception à la mise en ligne.
    </p>

    <!-- Frontend -->
    <h2 class="text-2xl font-semibold mt-5 mb-3">Frontend : des interfaces modernes & réactives</h2>
    <p>
      Le frontend est votre vitrine digitale. Je développe des interfaces <strong>rapides, intuitives</strong> et
      <strong>adaptées à tous les écrans</strong> à l’aide des meilleures technologies JavaScript :
    </p>
    <ul class="list-disc pl-5 mt-3">
      <li><strong>Vue.js :</strong> Parfait pour des applications modulaires et dynamiques.</li>
      <li><strong>React.js :</strong> Idéal pour des interfaces complexes et interactives.</li>
      <li><strong>Next.js :</strong> Pour un rendu côté serveur, un SEO optimisé et des performances accrues.</li>
      <li><strong>Nuxt.js :</strong> Pour des sites Vue.js performants, en SSR ou Jamstack.</li>
    </ul>

    <!-- Backend -->
    <h2 class="text-2xl font-semibold mt-5 mb-3">Backend : une architecture solide & sécurisée</h2>
    <p>
      Le backend structure et fait vivre votre application. J’utilise des frameworks robustes pour gérer efficacement
      les données, la logique métier et la scalabilité :
    </p>
    <ul class="list-disc pl-5 mt-3">
      <li><strong>Symfony :</strong> Framework PHP éprouvé, idéal pour les applications web robustes et sécurisées.</li>
      <li><strong>Node.js :</strong> Pour des APIs performantes et des temps de réponse optimisés.</li>
      <li><strong>Adonis.js :</strong> Alternative élégante à Laravel en Node.js, avec une structure MVC claire.</li>
    </ul>

    <!-- Méthodologie -->
    <h2 class="text-2xl font-semibold mt-5 mb-3">Ma méthode de travail</h2>
    <p>
      Chaque projet est unique. Mon approche est collaborative, structurée et orientée résultats, avec un focus sur la
      qualité du code et l’expérience utilisateur :
    </p>
    <ol class="list-decimal pl-5 mt-3">
      <li><strong>Analyse :</strong> Compréhension des enjeux métier et rédaction du cahier des charges.</li>
      <li><strong>Architecture technique :</strong> Choix technologiques et structuration du projet.</li>
      <li><strong>Développement :</strong> Codage clair, maintenable et évolutif selon les meilleures pratiques.</li>
      <li><strong>Tests & QA :</strong> Contrôles qualité, tests unitaires et optimisation des performances.</li>
      <li><strong>Déploiement & suivi :</strong> Mise en production, documentation et accompagnement post-lancement.</li>
    </ol>

    <!-- CTA -->
    <p class="mt-5">
      🚀 Prêt(e) à concrétiser votre idée avec un <strong>expert en développement web</strong> ?
      <NuxtLink 
        to="/contact" 
        title="Discutons ensemble de votre projet web" 
        aria-label="Discutons ensemble de votre projet web"
        class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300"
      >
        Contactez-moi dès maintenant
      </NuxtLink>
      pour une <strong>consultation gratuite</strong> et sans engagement !
    </p>
  </article>
</ExpertiseCard>

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