<template>
    <section class="mt-32 ">
      <!-- Titre principal avec effet de surlignage -->
      <TitleUnder title="WordPress : Sites Web Performants et Sur Mesure" tag="h1" class=" mb-10 xl:mb-32"   />

      <!-- Carte d'expertise -->
  <article>
    <!-- Introduction -->
    <p>
      Vous cherchez à créer un <strong>site WordPress rapide, moderne et facile à gérer</strong> ? En tant que
      <strong>développeur WordPress freelance</strong>, je conçois des sites web <strong>sur mesure</strong>,
      <strong>optimisés pour les performances</strong> et adaptés à vos objectifs.
    </p>

    <!-- Section Développement WordPress -->
    <h2 class="text-2xl font-semibold mt-5 mb-3">Pourquoi choisir WordPress pour votre projet ?</h2>
    <p>
      WordPress est le CMS le plus utilisé au monde, apprécié pour sa <strong>flexibilité</strong>,
      sa <strong>facilité de gestion</strong> et sa large communauté. Voici ce que je vous propose :
    </p>
    <ul class="list-disc pl-5 mt-3">
      <li><strong>Site vitrine & blog :</strong> Un design impactant, responsive et facilement administrable.</li>
      <li><strong>Boutique en ligne :</strong> Mise en place de <a href="https://woocommerce.com/" class="underline" target="_blank">WooCommerce</a> pour vendre efficacement.</li>
      <li><strong>Thèmes & plugins sur mesure :</strong> Développés selon vos besoins spécifiques.</li>
      <li><strong>Optimisation SEO & performance :</strong> Pour un site rapide et bien positionné sur Google.</li>
    </ul>

    <!-- Section Technologies Utilisées -->
    <h2 class="text-2xl font-semibold mt-5 mb-3">Technologies & outils utilisés</h2>
    <p>
      Pour garantir un site WordPress <strong>fiable, sécurisé et évolutif</strong>, j’utilise les meilleurs standards techniques :
    </p>
    <ul class="list-disc pl-5 mt-3">
      <li><strong>Thèmes personnalisés</strong> codés proprement pour une identité unique</li>
      <li><strong>Plugins premium & développés maison</strong> pour des fonctionnalités puissantes</li>
      <li><strong>HTML5, CSS3, JavaScript</strong> pour des interfaces modernes et responsives</li>
      <li><strong>PHP & MySQL</strong> pour une base solide et sécurisée</li>
    </ul>

    <!-- Section Processus -->
    <h2 class="text-2xl font-semibold mt-5 mb-3">Une approche structurée & orientée résultats</h2>
    <p>
      Mon processus de création WordPress est basé sur la collaboration, la rigueur et l’écoute :
    </p>
    <ol class="list-decimal pl-5 mt-3">
      <li><strong>Analyse :</strong> Compréhension de vos enjeux, de votre audience et de vos objectifs.</li>
      <li><strong>Conception UX/UI :</strong> Wireframes & prototypes Figma avant développement.</li>
      <li><strong>Développement sur mesure :</strong> Frontend & backend alignés à vos besoins.</li>
      <li><strong>Tests & optimisation :</strong> Accessibilité, compatibilité, vitesse, SEO, sécurité.</li>
      <li><strong>Mise en ligne & formation :</strong> Accompagnement à la prise en main du back-office.</li>
    </ol>

    <!-- Call to Action -->
    <p class="mt-5">
      🎯 Prêt(e) à lancer votre site WordPress sur-mesure ?
      <NuxtLink 
        to="/contact" 
        title="Contactez-moi pour discuter de votre projet WordPress"
        aria-label="Contactez-moi pour discuter de votre projet WordPress"
        class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300"
      >
        Contactez-moi dès maintenant
      </NuxtLink>
      pour une <strong>consultation gratuite</strong> !
    </p>
  </article>

  </section>
</template>
  
  <script setup lang="ts">
  // Métadonnées SEO avec useSeoMeta
  useSeoMeta({
    title: 'Développement WordPress : Sites Web Performants et Sur Mesure',
    ogTitle: 'Développement WordPress : Sites Web Performants et Sur Mesure',
    description: 'Vous cherchez à créer un site web performant, moderne et facile à gérer ? En tant que développeur WordPress expérimenté, je vous accompagne dans la conception de sites web sur mesure, optimisés pour les performances et adaptés à vos besoins spécifiques.',
    ogDescription: 'Vous cherchez à créer un site web performant, moderne et facile à gérer ? En tant que développeur WordPress expérimenté, je vous accompagne dans la conception de sites web sur mesure, optimisés pour les performances et adaptés à vos besoins spécifiques.',
    ogImage: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
    twitterCard: 'summary_large_image',
    keywords: 'développement WordPress, sites web performants, thèmes personnalisés, plugins WordPress, WooCommerce, optimisation SEO, développement sur mesure',
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