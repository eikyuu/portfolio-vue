<template>
  <section class="mt-20 md:mt-32">
    
    <TitleUnder title="Création d'Application Mobile" tag="h1" class=" mb-10 xl:mb-20"  />

    <ExpertiseCard 
  link="/contact"
  text-btn="Je veux une application mobile performante →" 
  img="svg/mobile.svg" 
  alt="Développement mobile sur mesure"
>
  <!-- Section Intro / Cross-Platform -->
  <section id="cross-platform" class="space-y-5 mb-5">
    <h2 class="font-bold text-2xl mb-2">
      Développement Mobile : Apps iOS & Android performantes avec React Native
    </h2>

    <p>
      Vous avez une idée d’application mobile ? Je conçois des apps <strong>sur mesure</strong>, <strong>rapides</strong> et
      <strong>scalables</strong> pour iOS et Android, en m’appuyant sur des technologies cross-platform comme 
      <strong>React Native</strong> pour des besoins spécifiques. Objectif : un 
      <strong>temps de développement optimisé</strong> sans compromis sur l’expérience utilisateur.
    </p>

    <h3 class="font-bold text-xl">Cross-Platform : une seule base de code, deux plateformes</h3>
    <p>
      Les frameworks cross-platform offrent un excellent compromis entre rapidité de développement et qualité. Je travaille principalement avec :
    </p>
    <ul class="list-disc list-inside">
      <li>
        <strong>React Native</strong> : Framework JavaScript performant pour des applications mobiles fluides, compatibles iOS et Android.
      </li>
    </ul>
  </section>

  <!-- Section Développement Natif -->
  <!-- <section id="developpement-natif" class="space-y-5 mb-5">
    <h3 class="font-bold text-xl">Développement natif : performances maximales sur iOS</h3>
    <p>
      Certains projets nécessitent des performances de haut niveau, un accès natif au matériel ou une UX très fine. Dans ce cas, le natif est la meilleure option :
    </p>
    <ul class="list-disc list-inside">
      <li>
        <strong>Swift</strong> : Le langage officiel d'Apple pour créer des apps iOS modernes, stables et ultra-rapides.
      </li>
    </ul>
  </section> -->

  <!-- Section Approche de développement -->
  <section id="approche" class="space-y-5 mb-5">
    <h3 class="font-bold text-xl">Une méthode rigoureuse, du concept au déploiement</h3>
    <p>
      Chaque application mobile que je développe suit un processus clair, orienté qualité et résultats :
    </p>
    <ol class="list-decimal list-inside">
      <li><strong>Analyse fonctionnelle :</strong> Définition précise de vos besoins et des parcours utilisateurs.</li>
      <li><strong>Conception technique :</strong> Choix des technologies les plus pertinentes selon votre projet.</li>
      <li><strong>Développement agile :</strong> Sprints de production itératifs, livrables fréquents et clairs.</li>
      <li><strong>Tests & optimisations :</strong> QA mobile, tests sur appareils physiques, UX/UI fine-tunée.</li>
      <li><strong>Déploiement :</strong> Publication sur l’App Store & Google Play, avec accompagnement post-lancement.</li>
    </ol>
  </section>

  <!-- Section Pourquoi Choisir -->
  <section id="pourquoi-choisir" class="space-y-5">
    <h3 class="font-bold text-xl">Pourquoi faire appel à un expert mobile ?</h3>
    <p>
      Avec une solide expérience en <strong>React Native</strong>, je vous propose bien plus qu’un simple développement technique. 
      Je vous aide à concevoir une <strong>app mobile performante</strong>, <strong>pérenne</strong> et <strong>orientée utilisateurs</strong>, qui répond réellement à vos objectifs métier.
    </p>
  </section>

  <!-- Section Contact / CTA -->
  <section id="contact" class="space-y-5">
    <h3 class="text-2xl font-bold">Votre projet mobile commence ici</h3>
    <p>
      Besoin d’une application mobile de qualité, développée par un freelance expérimenté ?
      <NuxtLink 
        to="/contact" 
        title="Discutons de votre application mobile"
        aria-label="Discutons de votre application mobile"
        class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300"
      >
        Contactez-moi dès aujourd’hui
      </NuxtLink>
      pour une <strong>consultation gratuite</strong> et sans engagement.
    </p>
  </section>
</ExpertiseCard>

  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Développement Mobile sur Mesure : React Native',
  ogTitle: 'Développement Mobile sur Mesure : React Native',
  description: 'Développez une application mobile performante et moderne pour iOS et Android avec un expert en frameworks cross-platform (React Native).',
  ogDescription: 'Développez une application mobile performante et moderne pour iOS et Android avec un expert en frameworks cross-platform (React Native).',
  ogImage: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
});
</script>
