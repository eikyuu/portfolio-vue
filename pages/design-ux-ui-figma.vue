<template>
  <section>
    <!-- Titre principal avec effet de surlignage -->
    <div class="block flex justify-center">
      <h1
        class="mb-5 xl:mb-20 relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] before:top-[1rem] before:md:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] before:md:h-[1.5rem] before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 rounded-xl before:rounded">
        <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">
          Design UX/UI : Création d'Expériences Utilisateurs Exceptionnelles
        </span>
      </h1>
    </div>

    <!-- Carte d'expertise -->
    <ExpertiseCard link="/contact" textBtn="Je veux un design qui me ressemble →" img="book.jpg" width="600" height="600" alt="Design UX/UI pour des expériences utilisateur exceptionnelles">
      <article>
        <!-- Introduction -->
        <p class="mb-4">
          Vous souhaitez offrir une expérience utilisateur fluide, engageante et mémorable ? En tant que designer UX/UI
          expérimenté, je vous accompagne dans la conception d'interfaces intuitives et fonctionnelles qui répondent aux
          besoins de vos utilisateurs et atteignent vos objectifs commerciaux.
        </p>
        <Button text="Contactez-moi pour une consultation gratuite" link="/contact" />

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
          <a href="/contact" title="Contactez-moi pour discuter de votre projet" class="text-[#FFC800] font-bold hover:underline">
            Contactez-moi dès maintenant
          </a> pour une consultation gratuite !
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
  title: 'Design UX/UI : Création d\'Expériences Utilisateurs Exceptionnelles',
  ogTitle: 'Design UX/UI : Création d\'Expériences Utilisateurs Exceptionnelles',
  description: 'Vous souhaitez offrir une expérience utilisateur fluide, engageante et mémorable ? En tant que designer UX/UI expérimenté, je vous accompagne dans la conception d\'interfaces intuitives et fonctionnelles qui répondent aux besoins de vos utilisateurs et atteignent vos objectifs commerciaux.',
  ogDescription: 'Vous souhaitez offrir une expérience utilisateur fluide, engageante et mémorable ? En tant que designer UX/UI expérimenté, je vous accompagne dans la conception d\'interfaces intuitives et fonctionnelles qui répondent aux besoins de vos utilisateurs et atteignent vos objectifs commerciaux.',
  ogImage: 'https://vincentduguet.dev/images/homme-barbu-devant-ordinateur.png',
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