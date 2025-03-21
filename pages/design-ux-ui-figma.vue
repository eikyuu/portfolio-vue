<template>
  <section>
    <!-- Titre principal avec effet de surlignage -->

    <TitleUnder title="Design UX/UI : Création d'Expériences Utilisateurs Exceptionnelles" tag="h1" class=" mb-10 xl:mb-20"  />

    <!-- Carte d'expertise -->
    <ExpertiseCard link="/contact" textBtn="Je veux un design qui me ressemble →" img="book.jpg" width="600" height="600" alt="Design UX/UI pour des expériences utilisateur exceptionnelles">
      <article>
        <!-- Introduction -->
        <p class="mb-4">
          Vous souhaitez offrir une expérience utilisateur fluide, engageante et mémorable ? En tant que designer UX/UI
          expérimenté, je vous accompagne dans la conception d'interfaces intuitives et fonctionnelles qui répondent aux
          besoins de vos utilisateurs et atteignent vos objectifs commerciaux.
        </p>

        <Button text="Contactez-moi pour une consultation gratuite" link="/contact"  />

        <!-- Section Design UX -->
        <h2 class="text-2xl font-semibold mt-5 mb-3">Design UX : Comprendre et Satisfaire les Utilisateurs</h2>
        <p>
          Le design UX se concentre sur l'expérience globale de l'utilisateur. Voici comment je travaille pour créer des
          solutions centrées sur vos utilisateurs :
        </p>
        <ul class="list-disc pl-5 mt-3">
          <li><strong>Recherche utilisateur :</strong> Analyse des comportements, besoins et attentes grâce à des entretiens, questionnaires et tests.</li>
          <li><strong>Wireframes et prototypes :</strong> Création de maquettes basse et haute fidélité pour visualiser les interactions.</li>
          <li><strong>User testing :</strong> Validation des concepts avec des utilisateurs réels pour garantir leur efficacité.</li>
          <li><strong>Accessibilité :</strong> Conception d'interfaces inclusives conformes aux standards WCAG.</li>
        </ul>

        <!-- Section Design UI -->
        <h2 class="text-2xl font-semibold mt-5 mb-3">Design UI : Interfaces Visuelles Modernes et Attractives</h2>
        <p>
          Le design UI donne vie à votre produit grâce à des interfaces visuellement attrayantes et cohérentes. Je
          travaille avec les outils suivants :
        </p>
        <ul class="list-disc pl-5 mt-3">
          <li><strong>Figma :</strong> Outil collaboratif pour concevoir et partager des designs interactifs.</li>
          <li><strong>Photoshop & Illustrator :</strong> Pour la retouche d'images et la création de graphismes complexes.</li>
        </ul>

        <!-- Section Processus de Design -->
        <h2 class="text-2xl font-semibold mt-5 mb-3">Notre Approche de Design UX/UI</h2>
        <p>
          Mon approche repose sur une méthodologie itérative et centrée sur l'utilisateur. Les étapes clés incluent :
        </p>
        <ol class="list-decimal pl-5 mt-3">
          <li><strong>Découverte :</strong> Comprendre vos objectifs et ceux de vos utilisateurs.</li>
          <li><strong>Réalisation de wireframes :</strong> Création de structures basiques pour définir la navigation.</li>
          <li><strong>Prototypage :</strong> Développement d'une version interactive du produit.</li>
          <li><strong>Tests utilisateurs :</strong> Validation des concepts auprès de vrais utilisateurs.</li>
          <li><strong>Refinements finals :</strong> Ajout de détails visuels et livraison des assets finaux.</li>
        </ol>

        <!-- Call to Action (CTA) -->
        <p class="mt-5">
          Prêt(e) à transformer votre idée en une expérience utilisateur exceptionnelle ?
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
import Button from '~/components/Button.vue';
// Métadonnées SEO avec useSeoMeta
useSeoMeta({
  title: 'Design UX/UI : Création d\'Expériences Utilisateurs Exceptionnelles',
  ogTitle: 'Design UX/UI : Création d\'Expériences Utilisateurs Exceptionnelles',
  description: 'Vous souhaitez offrir une expérience utilisateur fluide, engageante et mémorable ? En tant que designer UX/UI expérimenté, je vous accompagne dans la conception d\'interfaces intuitives et fonctionnelles qui répondent aux besoins de vos utilisateurs et atteignent vos objectifs commerciaux.',
  ogDescription: 'Vous souhaitez offrir une expérience utilisateur fluide, engageante et mémorable ? En tant que designer UX/UI expérimenté, je vous accompagne dans la conception d\'interfaces intuitives et fonctionnelles qui répondent aux besoins de vos utilisateurs et atteignent vos objectifs commerciaux.',
  ogImage: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  keywords: 'design UX/UI, expérience utilisateur, interfaces intuitives, Figma, Photoshop, Illustrator, wireframes, prototypes, accessibilité, user testing',
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