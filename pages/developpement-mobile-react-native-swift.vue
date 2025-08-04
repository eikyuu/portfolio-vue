<template>
  <section class="mt-20 md:mt-32">
    
    <TitleUnder title="Création d'Application Mobile" tag="h1" class=" mb-10 xl:mb-20"  />

    <ExpertiseCard 
      link="/contact"
      text-btn="Je veux une application mobile performante →" 
      img="svg/mobile.svg" 
      alt="Développement mobile sur mesure">

      <!-- Section Cross-Platform -->
      <section id="cross-platform" class="space-y-5 mb-5">
        <h2 class="font-bold mb-5">
          Expert en framework cross-platform React Native et développement natif Swift.
        </h2>

        <ZcalEmbed/>

        <h2 class="font-bold">Cross-Platform : Une Solution Unique pour iOS et Android</h2>
        <p>
          Les frameworks cross-platform permettent de développer des applications mobiles compatibles avec plusieurs
          systèmes d'exploitation à partir d'un seul codebase. Voici les technologies que j'utilise :
        </p>
        <ul class="list-disc list-inside">
          <li>
            <strong>React Native</strong> : Un framework JavaScript puissant pour des applications réactives et performantes.
          </li>
        </ul>
      </section>

      <!-- Section Développement Natif -->
      <section id="developpement-natif" class="space-y-5 mb-5">
        <h2 class="font-bold">Développement Natif : Performances Optimales pour iOS</h2>
        <p>
          Pour des projets nécessitant des performances maximales ou des intégrations spécifiques, le développement
          natif reste la solution idéale. Je maîtrise :
        </p>
        <ul class="list-disc list-inside">
          <li>
            <strong>Swift</strong> : Le langage officiel d'Apple pour des applications iOS rapides, sécurisées et intuitives.
          </li>
        </ul>
      </section>

      <!-- Section Approche de Développement -->
      <section id="approche" class="space-y-5 mb-5">
        <h2 class="font-bold">Mon Approche de Développement Mobile</h2>
        <p>
          Ma méthodologie repose sur une analyse approfondie de vos besoins, une architecture technique adaptée et une mise en œuvre rigoureuse. Voici les étapes clés :
        </p>
        <ol class="list-decimal list-inside">
          <li><strong>Analyse fonctionnelle</strong> : Comprendre vos objectifs et définir les spécifications techniques.</li>
          <li><strong>Conception technique</strong> : Choisir les technologies les plus adaptées à vos besoins.</li>
          <li><strong>Développement</strong> : Implémentation des fonctionnalités selon les meilleures pratiques.</li>
          <li><strong>Tests et optimisation</strong> : Vérification de la qualité, des performances et de l'expérience utilisateur (UX).</li>
          <li><strong>Déploiement</strong> : Publication sur l'App Store et Google Play, avec suivi post-lancement.</li>
        </ol>
      </section>

      <!-- Section Pourquoi Choisir -->
      <section id="pourquoi-choisir" class="space-y-5">
        <h2 class="font-bold">Pourquoi Choisir un Développeur Mobile Expert ?</h2>
        <p>
          Avec une expertise approfondie dans les technologies modernes et une approche centrée sur vos besoins, je vous garantis une application mobile performante, intuitive et évolutive.
        </p>
      </section>

      <!-- Section Contact -->
      <section id="contact" class="space-y-5">
        <h2>Prêt(e) à Donner Vie à Votre Projet Mobile ?</h2>
        <p>
          Contactez-moi dès aujourd'hui pour une <strong>consultation gratuite</strong> et découvrez comment je peux vous aider à concrétiser votre vision avec des technologies de pointe.
        </p>
      </section>

    </ExpertiseCard>

    <Contact />
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Développement Mobile sur Mesure : React Native, Swift',
  ogTitle: 'Développement Mobile sur Mesure : React Native, Swift',
  description: 'Développez une application mobile performante et moderne pour iOS et Android avec un expert en frameworks cross-platform (React Native) et développement natif (Swift).',
  ogDescription: 'Développez une application mobile performante et moderne pour iOS et Android avec un expert en frameworks cross-platform (React Native) et développement natif (Swift).',
  ogImage: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
});
</script>
