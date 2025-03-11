<script setup lang="ts">
import ExpertiseCard from '~/components/ExpertiseCard.vue';
import TitleUnder from '~/components/TitleUnder.vue';
import Contact from '~/components/Contact.vue';
import Button from '~/components/Button.vue';

useHead({
  title: 'Vincent Duguet - Développeur Web et Mobile Full Stack Freelance à Tours',
  meta: [
    { name: 'description', content: 'Développeur web & mobile freelance, Vincent Duguet conçoit des sites web performants, des applications intuitives et des expériences utilisateur optimisées.' },
    { name: 'keywords', content: 'Vincent Duguet, développeur web mobile freelance, création site web, application mobile sur mesure, UX/UI, React, Vue.js, Symfony, Next, Nuxt, Swift, SEO' },
    { name: 'author', content: 'Vincent Duguet' },

    // Open Graph (Facebook, LinkedIn)
    { property: 'og:title', content: 'Vincent Duguet - Développeur Web Full Stack Freelance' },
    { property: 'og:description', content: 'Développeur web & mobile freelance, Vincent Duguet conçoit des sites web performants et des applications intuitives.' },
    { property: 'og:image', content: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png' },
    { property: 'og:url', content: 'https://vincentduguet.dev' },
    { property: 'og:type', content: 'website' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Vincent Duguet - Développeur Web Full Stack Freelance' },
    { name: 'twitter:description', content: 'Développeur web & mobile freelance, Vincent Duguet conçoit des sites web performants et des applications intuitives.' },
    { name: 'twitter:image', content: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png' }
  ],
  htmlAttrs: { lang: 'fr' },
  bodyAttrs: {
    class: 'portfolio'
  },
  script: [
    { innerHTML: 'console.log(\'Bienvenue sur le portfolio de Vincent Duguet !\')' }
  ]
});

</script>

<template>
  <div>
    <section class="flex flex-col xl:flex-row items-center place-content-between mb-20 md:mb-20">
      <div class="xl:w-3/6 bg-number bg-cover mb-4">

        <h1 class="uppercase text-[#5A3B5D] text-4xl font-bold">
          Salut, je suis <span class="text-[#FFC800]">Vincent Duguet</span><br>
          Développeur web & mobile Freelance à Tours.
        </h1>

        <h2 class="uppercase text-[#5A3B5D] text-2xl font-bold mt-10">J’accompagne les entreprises et entrepreneurs dans
          la création de sites web et d’applications <strong>performantes, accessibles et optimisées.</strong></h2>

        <p class="mt-10">
          <strong>Passionné par le développement web et le design UX/UI</strong>, je mets mon expertise au service de
          vos
          projets numériques en créant des <strong>sites responsives</strong>, des <strong>applications
            performantes</strong>, et des expériences utilisateurs accessibles.
        </p>

        <h2 class="mt-10"><strong>💡 Technologies modernes et adaptées</strong></h2>

        <p>
          Pour répondre aux besoins spécifiques de chaque projet, j’utilise des outils modernes comme <strong><a
              target='blank' class='underline' href='https://fr.react.dev/'>React.js</a>, <a target='blank'
              class='underline' href='https://nextjs.org/'>Next.js</a>, <a target='blank' class='underline'
              href='https://vuejs.org/'>Vue.js</a></strong> et <strong><a href='https://nuxt.com/' target='blank'
              class='underline'>Nuxt.js</a></strong>, ou <strong><a href='https://wordpress.com/' target='blank'
              class='underline'>Wordpress</a></strong>, adaptés au développement web, mobile et à la création
          d’applications performantes. Ces technologies garantissent des solutions fiables,
          évolutives et optimisées.
        </p>

        <p class="mt-10"><strong>Mon objectif ? Créer :</strong></p>
        <ul class="list-disc list-inside">
          <li>Des <strong>sites web responsives</strong>, optimisés pour tous les écrans ;</li>
          <li>Des <strong>applications performantes</strong>, fiables et faciles à maintenir ;</li>
          <li>Des <strong>expériences utilisateurs uniques</strong>, qui placent vos utilisateurs au centre de
            l’expérience.</li>
        </ul>

        <h2 class="mt-10">🎯 <strong>Pourquoi collaborer avec moi ?</strong></h2>
        <p class="mb-5">
          Que vous soyez une PME, une start-up ou un indépendant, je vous accompagne de <strong>A à Z</strong> dans vos
          projets de développement web et mobile. Qu’il s’agisse d’un <strong>site vitrine</strong>, d’une
          <strong>plateforme sur mesure</strong>, ou d’une <strong>application mobile</strong>, je suis à vos côtés pour
          transformer vos idées en réalité digitale.
        </p>

        <div class="flex flex-col md:flex-row gap-5 items-center">
          <Button text="Voir mes collaborations & projets" link="/mes-collaborations-projets" />
          <Button text="Contactez-moi pour une consultation gratuite" link="/contact" />
        </div>

      </div>

      <div>
        <NuxtImg class="mt-20 xl:mt-0 object-cover rounded-md" src="homme-barbu-devant-ordinateur.png"
          sizes="sm:50vw md:400px xl:742px" width="600" height="600" loading="lazy" format="webp"
          alt="Un homme barbu avec des lunettes devant un ordinateur" placeholder />
      </div>
    </section>

    <TitleUnder title="Je suis un expert" class="" />

    <ExpertiseCard link="/developpement-web-vue-react-symfony-adonis" title="Développement Web sur mesure"
      textBtn="J’ai besoin d’un expert en Développement Web →" img="svg/web.svg" class="mt-20 md:mt-20">
      Offrez à vos utilisateurs un <strong>site web moderne, performant et personnalisé</strong>.
      <br>Que ce soit pour un <strong>site vitrine</strong>, une <strong>plateforme interactive</strong>, ou une
      <strong>application web complexe</strong>, je mets mon expertise au service de votre projet pour créer des
      expériences utilisateur :
      <br>- <strong>Fluides</strong> : Une navigation intuitive et rapide ;
      <br>- <strong>Esthétiques</strong> : Des interfaces modernes et adaptées à votre image ;
      <br>- <strong>Accessibles</strong> : Conformes aux meilleures pratiques d’accessibilité web.

      <strong><br><br>💡 Une expertise Full Stack pour un projet clé en main</strong>
      <br>Grâce à mes compétences en <strong>front-end</strong> et <strong>back-end</strong>, j’assure un développement
      complet, couvrant :
      <br>- La création d’interfaces utilisateur avec des frameworks comme <strong><a target='blank' class='underline'
          href='https://fr.react.dev/'>React.js</a>, <a target='blank' class='underline'
          href='https://nextjs.org/'>Next.js</a>, <a target='blank' class='underline'
          href='https://vuejs.org/'>Vue.js</a></strong> et <strong><a href='https://nuxt.com/' target='blank'
          class='underline'>Nuxt.js</a></strong> ;
      <br>- La gestion des données et des API avec des outils robustes comme <strong><a href='https://symfony.com/'
          target='blank' class='underline'>Symfony</a> et <a href='https://adonisjs.com/' target='blank'
          class='underline'>Adonis</a></strong> ;
      <br>- Une attention particulière portée à la <strong>performance</strong>, la <strong>sécurité</strong>, et
      l’<strong>optimisation SEO</strong>.
      <strong><br><br>🎯 Un site à la hauteur de vos ambitions</strong>
      <br>Chaque projet est unique, tout comme les besoins de vos utilisateurs. Mon objectif ? Concevoir un site web qui
      soit à la fois <strong>moderne</strong>, <strong>innovant</strong>, et <strong>accessible à tous</strong>, tout en
      répondant aux exigences techniques les plus élevées.

      Faites passer vos idées au niveau supérieur avec un site qui reflète parfaitement votre vision et dépasse les
      attentes de vos utilisateurs.
    </ExpertiseCard>

    <ExpertiseCard link="/developpement-mobile-react-native-flutter-swift-kotlin"
      title="Développement Mobile sur mesure" textBtn="Je veux une application mobile performante →"
      img="svg/mobile.svg" class="mt-20 md:mt-20">

      Offrez à vos utilisateurs une <strong>application mobile intuitive, performante</strong> et adaptée à leurs
      besoins.
      <br>Que ce soit pour une application <strong>iOS</strong>, <strong>Android</strong>, ou une <strong>solution
        multiplateforme</strong>, je conçois des expériences modernes qui allient design et fonctionnalités pour
      répondre aux exigences de votre projet.

      <strong><br><br> Mes domaines d’expertise :</strong>
      <br>- <strong>Frameworks multiplateformes</strong> : Développement rapide et efficace avec <strong><a
          href='https://reactnative.dev/' target='blank' class='underline'>React Native</a></strong>.
      <br>- <strong>Technologies natives</strong> : Création d’applications optimisées pour iOS avec <strong><a
          href='https://developer.apple.com/swift/' target='blank' class='underline'>Swift</a></strong>.
      <br>- <strong>Design attractif et ergonomique</strong> : Interfaces pensées pour séduire et fidéliser vos
      utilisateurs.
      <br>- <strong>Accessibilité intégrée</strong> : Conformité avec les standards pour des applications inclusives et
      accessibles à tous.

      <strong><br><br>💡 Un accompagnement à chaque étape</strong>
      <br>De la <strong>conception</strong> à l’<strong>implémentation</strong>, en passant par les
      <strong>tests</strong> et le <strong>déploiement sur les stores</strong>, je prends en charge toutes les phases du
      développement.
      <br><br><strong>Mon approche garantit :</strong>
      <br>- Une <strong>expérience utilisateur fluide</strong> et engageante ;
      <br>- Une <strong>performance optimale</strong>, même pour les projets les plus exigeants ;
      <br>- Une <strong>sécurité renforcée</strong> pour protéger les données de vos utilisateurs.

      <strong><br><br>🎯 Un projet mobile qui se distingue</strong>
      <br>Votre application mérite de se démarquer par son <strong>efficacité</strong>, sa <strong>simplicité</strong>,
      et sa <strong>capacité à engager</strong> vos utilisateurs.
      <br>Que vous visiez un lancement rapide ou une solution sur mesure à long terme, je suis là pour transformer vos
      idées en une application innovante et impactante.
    </ExpertiseCard>

    <ExpertiseCard link="/design-ux-ui-figma" title="Design UX/UI centré sur vos utilisateurs"
      textBtn="Je veux un design qui me ressemble →" img="svg/design.svg" class="mt-20 mb-20 md:mt-20 md:mb-20">
      Créez des expériences mémorables grâce à des <strong>interfaces modernes, intuitives</strong> et <strong>centrées
        sur l’utilisateur</strong>.
      <br>Chaque projet commence par une analyse approfondie de vos besoins et de ceux de vos utilisateurs.
      <br>Mon objectif ? Concilier <strong>esthétisme</strong>, <strong>simplicité</strong>, et
      <strong>efficacité</strong> pour concevoir des designs qui répondent aux attentes tout en restant impactants.

      <strong><br><br>🎨 Un processus de design structuré :</strong>
      <br>1. <strong>Recherche utilisateur</strong> : Analyse des attentes et des comportements pour concevoir des
      solutions pertinentes et adaptées.
      <br>2. <strong>Wireframes et prototypes</strong> : Création de maquettes interactives pour tester et affiner les
      concepts avant leur développement.
      <br>3. <strong>Design system</strong> : Mise en place d’un système de design cohérent pour garantir une harmonie
      visuelle et fonctionnelle sur toutes les plateformes.

      <strong><br><br>♿ Accessibilité : des interfaces pour tous</strong>
      <br>Passionné par l’<strong>accessibilité numérique</strong>, je veille à ce que chaque interface soit inclusive
      et utilisable par tous, quels que soient leurs besoins ou leurs capacités.
      <br>Pour garantir des applications accessibles, je respecte les standards<strong> <a class='underline'
          target='blank' href='https://www.w3.org/WAI/standards-guidelines/wcag/'>WCAG</a></strong>.
      <strong><br><br>🌟 Un design qui raconte une histoire</strong>
      <br>Un bon design ne se limite pas à une belle apparence : il doit <strong>engager</strong>, <strong>raconter une
        histoire</strong>, et offrir une <strong>expérience utilisateur inoubliable</strong>.
      <br>Je m’assure que chaque projet reflète vos valeurs tout en répondant aux standards les plus élevés en matière
      de convivialité et d’impact visuel.

      <strong><br><br>🎯 Transformons vos idées en expériences uniques</strong>
      <br>Faites de votre projet une référence en design UX/UI avec des solutions modernes, accessibles, et pensées pour
      durer.
    </ExpertiseCard>

    <Contact />
  </div>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>