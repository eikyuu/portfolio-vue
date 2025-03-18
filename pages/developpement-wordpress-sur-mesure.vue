<template>
    <section>
      <!-- Titre principal avec effet de surlignage -->
      <TitleUnder title="WordPress : Sites Web Performants et Sur Mesure" tag="h1" class="mb-20"  />

      <!-- Carte d'expertise -->
      <ExpertiseCard link="/contact" textBtn="Je veux un site WordPress performant →" img="wordpress.jpg" width="600" height="600" alt="Développement WordPress sur mesure">
        <article>
          <!-- Introduction -->
          <p>
            Vous cherchez à créer un site web performant, moderne et facile à gérer ? En tant que développeur WordPress
            expérimenté, je vous accompagne dans la conception de sites web sur mesure, optimisés pour les performances et
            adaptés à vos besoins spécifiques.
          </p>
  
          <!-- Section Développement WordPress -->
          <h2 class="text-2xl font-semibold mt-5 mb-3">Développement WordPress : Pourquoi Choisir cette Plateforme ?</h2>
          <p>
            WordPress est la plateforme de gestion de contenu (CMS) la plus populaire au monde, offrant une flexibilité
            inégalée et une grande communauté de support. Voici ce que je propose :
          </p>
          <ul class="list-disc pl-5 mt-3">
            <li><strong>Sites vitrines et blogs :</strong> Création de sites web attractifs et faciles à mettre à jour.</li>
            <li><strong>E-commerce :</strong> Intégration de WooCommerce pour des boutiques en ligne performantes.</li>
            <li><strong>Personnalisation :</strong> Développement de thèmes et plugins sur mesure pour répondre à vos besoins spécifiques.</li>
            <li><strong>Optimisation :</strong> Amélioration des performances et du référencement (SEO) de votre site.</li>
          </ul>
  
          <!-- Section Technologies Utilisées -->
          <h2 class="text-2xl font-semibold mt-5 mb-3">Technologies et Outils Utilisés</h2>
          <p>
            Pour garantir des sites web performants et sécurisés, j'utilise les technologies et outils suivants :
          </p>
          <ul class="list-disc pl-5 mt-3">
            <li><strong>Thèmes personnalisés :</strong> Développement de thèmes WordPress sur mesure pour une expérience unique.</li>
            <li><strong>Plugins premium :</strong> Intégration de plugins fiables pour étendre les fonctionnalités de votre site.</li>
            <li><strong>HTML5, CSS3, JavaScript :</strong> Pour des interfaces modernes et réactives.</li>
            <li><strong>PHP et MySQL :</strong> Pour un backend robuste et sécurisé.</li>
          </ul>
  
          <!-- Section Processus de Développement -->
          <h2 class="text-2xl font-semibold mt-5 mb-3">Notre Approche de Développement WordPress</h2>
          <p>
            Mon approche repose sur une méthodologie structurée et centrée sur vos besoins. Les étapes clés incluent :
          </p>
          <ol class="list-decimal pl-5 mt-3">
            <li><strong>Analyse des besoins :</strong> Comprendre vos objectifs et vos exigences techniques.</li>
            <li><strong>Conception :</strong> Création de maquettes et de wireframes pour visualiser la structure du site.</li>
            <li><strong>Développement :</strong> Implémentation des fonctionnalités et intégration des designs.</li>
            <li><strong>Tests :</strong> Vérification des performances, de la sécurité et de la compatibilité.</li>
            <li><strong>Déploiement :</strong> Mise en ligne et formation pour la gestion du site.</li>
          </ol>
  
          <!-- Call to Action (CTA) -->
          <p class="mt-5">
            Prêt(e) à lancer votre projet WordPress ?
            <NuxtLink to="/contact" title="Contactez-moi pour discuter de votre projet" class="text-[#FFC800] font-bold hover:underline">
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