<template>
  <section class="mt-32 ">

    <TitleUnder title="Création d'Application Mobile" tag="h1" class="mb-32" />
    <article>
      <p class="mb-32">
        Vous avez une idée d’application mobile ? Je conçois des apps <strong>sur mesure</strong>,
        <strong>rapides</strong> et
        <strong>scalables</strong> pour iOS et Android, en m’appuyant sur des technologies cross-platform comme
        <strong>React Native</strong> pour des besoins spécifiques. Objectif : un
        <strong>temps de développement optimisé</strong> sans compromis sur l’expérience utilisateur.
      </p>

      <div class="flex flex-col md:flex-row items-center justify-between w-full">
        <NuxtImg src="phone.png" alt="Un site web de mariage"
          class="h-full object-cover rounded-xl w-full md:w-1/2 " />

        <div class="w-full md:w-1/2 ml-0 md:ml-10">
          <h2 class="text-2xl font-semibold mb-3">Développement Mobile : Apps iOS & Android performantes avec React
            Native</h2>

          <h3 class="font-bold text-xl">Cross-Platform : une seule base de code, deux plateformes</h3>
          <p>
            Les frameworks cross-platform offrent un excellent compromis entre rapidité de développement et qualité. Je
            travaille principalement avec :
          </p>
          <ul class="list-disc list-inside">
            <li>
              <strong>React Native</strong> : Framework JavaScript performant pour des applications mobiles fluides,
              compatibles iOS et Android.
            </li>
          </ul>

          <h3 class="font-bold text-xl">Une méthode rigoureuse, du concept au déploiement</h3>
          <p>
            Chaque application mobile que je développe suit un processus clair, orienté qualité et résultats :
          </p>
          <ol class="list-decimal list-inside">
            <li><strong>Analyse fonctionnelle :</strong> Définition précise de vos besoins et des parcours utilisateurs.
            </li>
            <li><strong>Conception technique :</strong> Choix des technologies les plus pertinentes selon votre projet.
            </li>
            <li><strong>Développement agile :</strong> Sprints de production itératifs, livrables fréquents et clairs.
            </li>
            <li><strong>Tests & optimisations :</strong> QA mobile, tests sur appareils physiques, UX/UI fine-tunée.
            </li>
            <li><strong>Déploiement :</strong> Publication sur l’App Store & Google Play, avec accompagnement
              post-lancement.</li>
          </ol>

          <h3 class="font-bold text-xl">Pourquoi faire appel à un expert mobile ?</h3>
          <p>
            Avec une solide expérience en <strong>React Native</strong>, je vous propose bien plus qu’un simple
            développement technique.
            Je vous aide à concevoir une <strong>app mobile performante</strong>, <strong>pérenne</strong> et
            <strong>orientée utilisateurs</strong>, qui répond réellement à vos objectifs métier.
          </p>
        </div>
      </div>

    </article>


    <p class="mt-32">
      Besoin d’une application mobile de qualité, développée par un freelance expérimenté ?
      <NuxtLink to="/contact" title="Discutons de votre application mobile"
        aria-label="Discutons de votre application mobile"
        class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300">
        Contactez-moi dès aujourd’hui
      </NuxtLink>
      pour une <strong>consultation gratuite</strong> et sans engagement.
    </p>

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
