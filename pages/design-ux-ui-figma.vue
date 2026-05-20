<template>
  <main id="main-content" class="mt-32">
    <Breadcrumb :items="[{ label: 'Accueil', to: '/' }, { label: 'Design UX/UI' }]" />
    <!-- Titre principal avec effet de surlignage -->

    <TitleUnder title="Designer UX/UI freelance à Tours : interfaces sur mesure" tag="h1"
      class=" mb-10 xl:mb-32" />

    <article>
      <!-- Introduction -->
      <p class="mb-4">
        Offrez à vos utilisateurs une expérience fluide, engageante et mémorable. En tant que designer UX/UI
        expérimenté, je crée des interfaces intuitives et esthétiques qui répondent à vos objectifs business tout en
        plaçant vos utilisateurs au cœur du processus.
      </p>

      <!-- Design UX -->
      <h2 class="text-2xl font-semibold mt-5 mb-3">Design UX : Comprendre & satisfaire vos utilisateurs</h2>
      <p>
        L'expérience utilisateur est la clé du succès. Voici comment je conçois des solutions centrées sur vos besoins
        réels :
      </p>
      <ul class="list-disc pl-5 mt-3">
        <li><strong>Recherche utilisateur :</strong> Entretiens, questionnaires et tests pour analyser comportements
          et attentes.</li>
        <li><strong>Wireframes & prototypes :</strong> Maquettes basse et haute fidélité pour visualiser les parcours
          utilisateurs.</li>
        <li><strong>Tests utilisateurs :</strong> Validation avec des utilisateurs réels pour garantir l’efficacité.
        </li>
        <li><strong>Accessibilité :</strong> Interfaces inclusives respectant les normes WCAG.</li>
      </ul>

      <!-- Design UI -->
      <h2 class="text-2xl font-semibold mt-5 mb-3">Design UI : Des interfaces modernes, attractives et cohérentes</h2>
      <p>
        Le design visuel donne vie à votre produit grâce à une identité forte et une ergonomie travaillée. J’utilise :
      </p>
      <ul class="list-disc pl-5 mt-3">
        <li><strong>Figma :</strong> Pour créer et partager des designs interactifs et collaboratifs.</li>
        <li><strong>Photoshop & Illustrator :</strong> Pour retouche d’images et créations graphiques avancées.</li>
      </ul>

      <!-- Processus -->
      <h2 class="text-2xl font-semibold mt-5 mb-3">Une démarche itérative et centrée utilisateur</h2>
      <p>
        Mon approche repose sur la collaboration et l’amélioration continue. Les étapes clés :
      </p>
      <ol class="list-decimal pl-5 mt-3">
        <li><strong>Découverte :</strong> Analyse de vos objectifs et des besoins utilisateurs.</li>
        <li><strong>Wireframing :</strong> Conception des structures et parcours.</li>
        <li><strong>Prototypage :</strong> Création d’une version interactive pour tests.</li>
        <li><strong>Tests utilisateurs :</strong> Recueil de feedbacks réels pour ajustements.</li>
        <li><strong>Finitions :</strong> Ajout des détails visuels et livraison des assets prêts à l’usage.</li>
      </ol>

      <!-- CTA -->
      <p class="mt-5">
        Prêt(e) à donner vie à un design unique qui vous ressemble ?
        <NuxtLink to="/contact" title="Contactez-moi pour discuter de votre projet"
          aria-label="Contactez-moi pour discuter de votre projet"
          class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300">
          Contactez-moi dès maintenant
        </NuxtLink> pour une consultation gratuite et sans engagement !
      </p>
    </article>

  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Designer UX/UI freelance à Tours — Vincent Duguet',
  description:
    'Designer UX/UI freelance à Tours : wireframes, prototypes Figma, tests utilisateurs et accessibilité WCAG. Des interfaces intuitives au service de vos objectifs.',
  ogLocale: 'fr_FR',
  ogImage: '/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  author: 'Vincent Duguet',
})
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}

a:hover {
  color: #5A3B5D;
  /* Changement de couleur au survol */
}
</style>