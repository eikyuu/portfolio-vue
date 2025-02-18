<script setup lang="ts">
import ExpertiseCard from '~/components/ExpertiseCard.vue';
import TitleUnder from '~/components/TitleUnder.vue';
import { ref } from 'vue';
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
    { property: 'og:image', content: 'https://vincentduguet.dev/images/man.png' },
    { property: 'og:url', content: 'https://vincentduguet.dev' },
    { property: 'og:type', content: 'website' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Vincent Duguet - Développeur Web Full Stack Freelance' },
    { name: 'twitter:description', content: 'Développeur web & mobile freelance, Vincent Duguet conçoit des sites web performants et des applications intuitives.' },
    { name: 'twitter:image', content: 'https://vincentduguet.dev/images/man.png' }
  ],
  htmlAttrs: { lang: 'fr' },
  bodyAttrs: {
    class: 'portfolio'
  },
  script: [
    { innerHTML: 'console.log(\'Bienvenue sur le portfolio de Vincent Duguet !\')' }
  ]
});


const type = ref("WEB");

const onClick = (newType: "WEB" | "MOBILE") => {
  type.value = newType;
  currentPage.value = 1;
}

interface Project {
  title: string;
  text: string;
  img: string;
  order: string;
  btnPosition: 'float-first' | 'float-end';
  link?: string;
}

const projects = ref<Project[]>([
  {
    title: 'Suismespattes',
    text: '<strong>La plateforme collaborative pour voyager avec son chien 🐾</strong><br><br>Unique développeur de <strong>Suis Mes Pattes</strong>, une plateforme innovante et gratuite conçue pour les passionnés de voyages avec leur chien. Ce projet allie <strong>technologie moderne</strong> et <strong>expérience utilisateur optimale</strong>, en mettant l’accent sur la <strong>communauté</strong> et l’<strong>entraide</strong>.<br><br><strong>Fonctionnalités clés du projet :</strong><br>  - <strong>Recherche de destinations :</strong> Les utilisateurs peuvent trouver des lieux adaptés aux chiens, que ce soit pour des balades en forêt, des sorties en ville ou des moments de détente au restaurant.<br>  - <strong>Partage communautaire :</strong> Chaque membre peut ajouter ses découvertes, noter les destinations et contribuer à enrichir la plateforme.<br>  - <strong>Organisation des sorties :</strong> Possibilité de créer des groupes pour planifier des activités avec des amis et leurs chiens.<br>  - <strong>Boutique en ligne :</strong> Une sélection soignée de produits pour les chiens et leurs maîtres, centralisée dans un espace dédié.<br><br>',
    img: 'suismespattes.png',
    order: 'xl:order-start',
    btnPosition: 'float-first',
    link: 'https://suismespattes.com/'
  },
  {
    title: 'Harmonie mutelle',
    text: '<strong>Collaboration avec <a href="https://www.harmonie-mutuelle.fr/" class="underline" target="blank">Harmonie mutuelle</a></strong> <br><br>Dans le cadre de la refonte du design system d’Harmonie Mutuelle, j\'ai contribué au développement de <strong>nouveaux parcours web</strong> visant à <strong>simplifier l’accès à la prévoyance individuelle</strong> pour les adhérents. L\'objectif principal était de rendre le parcours plus fluide, plus intuitif et totalement <strong>centré sur l’utilisateur</strong>, tout en garantissant une expérience optimale sur <strong>mobile et desktop.</strong> <br><br> Ce projet de refonte des parcours web pour la <strong>prévoyance individuelle</strong> chez <strong>Harmonie Mutuelle</strong> est un exemple parfait de l’application de l’UX design et des pratiques de développement moderne. Grâce à une <strong>interface responsive, centrée sur l’utilisateur</strong>, et validée par des tests pratiques, nous avons créé une expérience digitale fluide et accessible, qui répond aux besoins des adhérents d\'Harmonie Mutuelle, tout en respectant les standards de performance ',
    img: 'harmonie.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
    link: 'https://protection-sante-particuliers.harmonie-mutuelle.fr/'
  },
  {
    title: 'MGEN',
    text: '<strong>Collaboration avec la <a href="https://www.mgen.fr/" class="underline" target="blank">MGEN</a> - Refonte de l\'interface utilisateur et optimisation du parcours adhérent :</strong><br><br>Au cours de mes deux années de collaboration avec la <strong>MGEN</strong>, j\'ai participé activement à la conception et au développement de plusieurs projets majeurs. Un des projets phares a été la refonte de l\'<strong>interface utilisateur</strong> pour l\'<strong>espace personnel des adhérents</strong>, visant à améliorer l\'<strong>expérience utilisateur</strong>. Cette refonte a permis de simplifier la navigation, augmentant ainsi la <strong>satisfaction des utilisateurs</strong> et l\'<strong>engagement</strong> sur la plateforme.<br><br>J\'ai également travaillé en étroite collaboration avec l\'<strong>équipe de vente</strong> pour créer des <strong>parcours d\'adhésion personnalisés</strong>. L\'objectif était de rendre le processus d\'inscription plus <strong>intuitif</strong> et <strong>efficace</strong>, facilitant ainsi la souscription aux offres de la MGEN. Cette démarche a contribué à <strong>optimiser le parcours client</strong>, générant une <strong>meilleure conversion</strong> et <strong>fidélisation des adhérents</strong>.',
    img: 'mgen.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
  },
  {
    title: 'Le bon agent',
    text: '<strong>Développement du Backoffice pour "<a href="https://www.lebonagent.fr/" class="underline" target="blank">le bon agent</a>" - Groupe Arche :</strong><br><br> En 2021, j\'ai développé le <strong>backoffice</strong> du réseau de mandataires immobiliers <strong>\'Le bon agent\'</strong>, intégré au groupe Arche. Ce projet clé a consisté à créer une plateforme centralisée destinée à optimiser la <strong>gestion des mandataires</strong>, des contacts, ainsi que la <strong>synergie entre les différentes entités</strong> du groupe. Le backoffice est conçu pour être un outil puissant et intuitif, permettant aux utilisateurs de travailler de manière plus efficace et coordonnée.<br><br> L\’une des fonctionnalités majeures du système permet de générer des <strong>estimations immobilières personnalisées</strong> en fonction de critères précis envoyés à une API, offrant ainsi des rapports dynamiques et détaillés au format <strong>PDF</strong>. Ce processus améliore la <strong>rapidité</strong> et la <strong>précision</strong> des estimations, tout en simplifiant le workflow des utilisateurs.<br><br>Le projet a été développé avec des technologies de pointe telles que <strong>ReactJS</strong>, <strong>Redux</strong>, et <strong>MaterialUI</strong> pour le front-end, ainsi que <strong>Symfony</strong> pour le back-end, garantissant une plateforme robuste, scalable et performante, adaptée aux besoins évolutifs du réseau de mandataires.',
    img: 'lebonagent.png',
    order: 'xl:order-start',
    btnPosition: 'float-first',
    link: 'https://www.lebonagent.fr/'
  },
  {
    title: 'Arche',
    text: '<strong>Conception du site web pour Arche - Holding immobilière :</strong><br><br>Arche est une <strong>holding immobilière</strong> regroupant plusieurs <strong>réseaux immobiliers</strong> ainsi que des <strong>filiales support</strong>, spécialisées en immobilier (assurances, diagnostics, courtage financier). Basée à Tours et dirigée par <strong>Philippe Briand</strong>, Arche est un acteur majeur du secteur.<br><br>En 2021, j\'ai créé le <strong>design du site web</strong> à destination des particuliers. Le site a été pensé et conçu selon une approche <strong>Mobile First</strong> afin d\'optimiser l\'<strong>expérience utilisateur</strong>, garantissant une navigation fluide et intuitive sur tous types d\'appareils. De plus, le site a été optimisé pour répondre aux exigences de qualité élevées attendues par une enseigne de la stature d\'Arche.',
    img: 'arche.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
    link: 'https://github.com/eikyuu/arche-files'
  },
  {
    title: 'Carte de visite dynamique immobilier',
    text: '<strong>Création de la carte de visite dynamique pour les agents immobiliers du réseau Arche :</strong><br><br>J\'ai développé une <strong>carte de visite dynamique</strong> pour les agents immobiliers du réseau de <strong>Arche</strong>. Cette carte de visite est générée automatiquement en fonction des <strong>informations du mandataire</strong> et de son <strong>agence</strong>, offrant ainsi une solution personnalisée et moderne pour chaque agent. Grâce à cette fonctionnalité, les cartes de visite sont créées de manière fluide, avec des informations à jour, tout en respectant l’identité visuelle du réseau.<br><br>La carte de visite dynamique a été conçue en utilisant <strong>Symfony</strong>, garantissant ainsi une solution robuste et performante. Cette approche permet de simplifier le processus de création et de gestion des cartes tout en assurant une flexibilité maximale.',
    img: 'carte.png',
    order: 'xl:order-start',
    btnPosition: 'float-first',
    link: 'https://media.sas-arche.com/businesscards/html/pbriand-1.html'
  },
]);

const projectsMobile = ref<Project[]>([
  {
    title: 'B’COWORKER',
    text: '<strong>Amélioration et optimisation d\'une application de gestion de coworking</strong>\n\n<br>Mon rôle a consisté à :\n<br>- <strong>Implémenter de nouvelles fonctionnalités</strong>, notamment un calendrier interactif permettant de :\n    - Visualiser toutes les réservations en temps réel ;\n    - Bloquer des dates spécifiques pour la gestion des disponibilités ;\n    - Appliquer divers filtres pour l\'administration (types de réservation, disponibilités, etc.).\n<br>- <strong>Corriger des bugs</strong> existants pour améliorer la stabilité et les performances de l\'application.\n<br>- <strong>Faire évoluer la codebase</strong> pour faciliter les futures itérations et maintenir une structure solide et performante.\n\n<strong>Technologies utilisées :</strong>\n<br>- Flutter : pour une interface utilisateur moderne et fluide.\n<br>- Firebase : pour le back-end, incluant la gestion des données en temps réel, l\'authentification, et le stockage.\n\nCe projet démontre ma capacité à travailler sur des applications complexes, à optimiser leur fonctionnement et à ajouter des fonctionnalités clés répondant aux besoins des utilisateurs et des administrateurs.',
    img: 'bcoworker.png',
    order: 'xl:order-start',
    btnPosition: 'float-first',
    link: 'https://app.bcoworker.com/home'
  },
  {
    title: 'Matchr',
    text: '<strong>Matchr – L’application de collection de cartes réinventée 🎴</strong><br><br><strong>Matchr</strong> est une application innovante de collection de cartes qui combine la stratégie et l\'amusement, en s\'inspirant de la logique des applications de rencontre.<br><br><strong>Fonctionnalités principales :</strong><br>  - <strong>Système de matching :</strong> Les joueurs "matchent" avec des cartes basées sur leur profil et un facteur de chance, ajoutant une dimension unique au gameplay.<br>  - <strong>Collection et personnalisation :</strong> Construisez votre collection en obtenant des cartes rares et en personnalisant votre profil.<br>  - <strong>Économie intégrée :</strong> Achetez des cartes exclusives ou mettez-les aux enchères pour maximiser leur valeur.<br>  - <strong>Engagement communautaire :</strong> Participez à des échanges et des enchères pour interagir avec d\'autres joueurs.<br><br><strong>Objectif :</strong><br>  Créer une expérience captivante où la collection de cartes devient une aventure dynamique et sociale, grâce à des mécanismes inspirés des plateformes modernes de rencontre et de jeu.<br>',
    img: 'matchr.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
  },
  {
    title: 'HealthyFitnessChallenge',
    text: '<strong>HealthyFitnessChallenge – Gamifiez votre fitness 🏋️‍♂️</strong><br><br> <strong>HealthyFitnessChallenge</strong> est une application innovante conçue pour <strong>gamifier vos séances de sport</strong> et transformer votre routine fitness en une expérience ludique et engageante.<br><br> <strong>Mon rôle :</strong><br>  J\’ai assuré à la fois le <strong>design</strong> et le <strong>développement</strong> de l’application, en veillant à offrir une interface utilisateur intuitive et des performances optimales.<br><br><strong>Fonctionnalités clés :</strong><br>  - <strong>Challenges personnalisés :</strong> Des défis quotidiens adaptés aux objectifs et niveaux des utilisateurs.<br>  - <strong>Suivi des performances :</strong> Une interface claire pour visualiser les progrès et les accomplissements.<br>  - <strong>Gamification :</strong> Points, récompenses et classements pour garder la motivation intacte.<br><br><strong>Objectif :</strong><br>  Faire du fitness une activité accessible et amusante, en utilisant une approche moderne et interactive pour encourager les utilisateurs à atteindre leurs objectifs de manière régulière et motivante.<br>',
    img: 'fitness.png',
    order: 'xl:order-start',
    btnPosition: 'float-first',
  },
]);

const itemsPerPage = 2;
const currentPage = ref(1);

const displayedProjects = computed(() => {
  return projects.value.slice(0, currentPage.value * itemsPerPage);
});

const canLoadMore = computed(() => {
  return displayedProjects.value.length < projects.value.length;
});

const loadMoreProjects = () => {
  currentPage.value++;
};

const displayedProjectsMobile = computed(() => {
  return projectsMobile.value.slice(0, currentPage.value * itemsPerPage);
});

const canLoadMoreMobile = computed(() => {
  return displayedProjectsMobile.value.length < projectsMobile.value.length;
});

const loadMoreProjectsMobile = () => {
  currentPage.value++;
};


</script>

<template>





  <section class="flex flex-col xl:flex-row mb-20 md:mb-20">
    <div class="xl:w-3/6 bg-number bg-cover mb-4 xl:pr-10">

      <h1 class="uppercase text-[#5A3B5D] text-4xl font-bold">
        Salut, je suis <span class="text-[#FFC800]">Vincent Duguet</span><br>
        Développeur web & mobile Freelance à Tours.
      </h1>

      <h2 class="uppercase text-[#5A3B5D] text-2xl font-bold mt-10">J’accompagne les entreprises et entrepreneurs dans
        la création de sites web et d’applications <strong>performantes, accessibles et optimisées.</strong></h2>

      <p class="mt-10">
        <strong>Passionné par le développement web et le design UX/UI</strong>, je mets mon expertise au service de vos
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
      <Button text="Voir mes collaborations & projets" link="/mes-collaborations-projets"/>

    </div>

    <NuxtImg class="mt-5 md:mt-0" src="homme-barbu-devant-ordinateur.png" width="768" height="1060" fit="fill" loading="lazy" format="webp"
      alt="Un homme barbu avec des lunettes devant un ordinateur" />
  </section>

  <TitleUnder title="Je suis un expert" class="" />

  <ExpertiseCard link="/developpement-web-vue-react-symfony-adonis" title="Développement Web sur mesure"
    textBtn="J’ai besoin d’un expert en Développement Web →"
    text="Offrez à vos utilisateurs un <strong>site web moderne, performant et personnalisé</strong>.
<br>Que ce soit pour un <strong>site vitrine</strong>, une <strong>plateforme interactive</strong>, ou une <strong>application web complexe</strong>, je mets mon expertise au service de votre projet pour créer des expériences utilisateur :
<br>- <strong>Fluides</strong> : Une navigation intuitive et rapide ;
<br>- <strong>Esthétiques</strong> : Des interfaces modernes et adaptées à votre image ;
<br>- <strong>Accessibles</strong> : Conformes aux meilleures pratiques d’accessibilité web.

<strong><br><br>💡 Une expertise Full Stack pour un projet clé en main</strong>
<br>Grâce à mes compétences en <strong>front-end</strong> et <strong>back-end</strong>, j’assure un développement complet, couvrant :
<br>- La création d’interfaces utilisateur avec des frameworks comme <strong><a target='blank' class='underline' href='https://fr.react.dev/'>React.js</a>, <a target='blank' class='underline' href='https://nextjs.org/'>Next.js</a>, <a target='blank' class='underline' href='https://vuejs.org/'>Vue.js</a></strong> et <strong><a href='https://nuxt.com/' target='blank' class='underline'>Nuxt.js</a></strong> ;
<br>- La gestion des données et des API avec des outils robustes comme <strong><a href='https://symfony.com/' target='blank' class='underline'>Symfony</a> et <a href='https://adonisjs.com/' target='blank' class='underline'>Adonis</a></strong> ;
<br>- Une attention particulière portée à la <strong>performance</strong>, la <strong>sécurité</strong>, et l’<strong>optimisation SEO</strong>.
<strong><br><br>🎯 Un site à la hauteur de vos ambitions</strong>
<br>Chaque projet est unique, tout comme les besoins de vos utilisateurs. Mon objectif ? Concevoir un site web qui soit à la fois <strong>moderne</strong>, <strong>innovant</strong>, et <strong>accessible à tous</strong>, tout en répondant aux exigences techniques les plus élevées.

Faites passer vos idées au niveau supérieur avec un site qui reflète parfaitement votre vision et dépasse les attentes de vos utilisateurs." img="web.svg"
    class="mt-20 md:mt-20" />

  <ExpertiseCard link="/developpement-mobile-react-native-flutter-swift-kotlin" title="Développement Mobile sur mesure"
    textBtn="Je veux une application mobile performante →"
    text="Offrez à vos utilisateurs une <strong>application mobile intuitive, performante</strong> et adaptée à leurs besoins.
<br>Que ce soit pour une application <strong>iOS</strong>, <strong>Android</strong>, ou une <strong>solution multiplateforme</strong>, je conçois des expériences modernes qui allient design et fonctionnalités pour répondre aux exigences de votre projet.

<strong><br><br> Mes domaines d’expertise :</strong>
<br>- <strong>Frameworks multiplateformes</strong> : Développement rapide et efficace avec <strong><a href='https://reactnative.dev/' target='blank' class='underline'>React Native</a></strong>.
<br>- <strong>Technologies natives</strong> : Création d’applications optimisées pour iOS avec <strong><a href='https://developer.apple.com/swift/' target='blank' class='underline'>Swift</a></strong>.
<br>- <strong>Design attractif et ergonomique</strong> : Interfaces pensées pour séduire et fidéliser vos utilisateurs.
<br>- <strong>Accessibilité intégrée</strong> : Conformité avec les standards pour des applications inclusives et accessibles à tous.

<strong><br><br>💡 Un accompagnement à chaque étape</strong>
<br>De la <strong>conception</strong> à l’<strong>implémentation</strong>, en passant par les <strong>tests</strong> et le <strong>déploiement sur les stores</strong>, je prends en charge toutes les phases du développement.
<br><br><strong>Mon approche garantit :</strong>
<br>- Une <strong>expérience utilisateur fluide</strong> et engageante ;
<br>- Une <strong>performance optimale</strong>, même pour les projets les plus exigeants ;
<br>- Une <strong>sécurité renforcée</strong> pour protéger les données de vos utilisateurs.

<strong><br><br>🎯 Un projet mobile qui se distingue</strong>
<br>Votre application mérite de se démarquer par son <strong>efficacité</strong>, sa <strong>simplicité</strong>, et sa <strong>capacité à engager</strong> vos utilisateurs.
<br>Que vous visiez un lancement rapide ou une solution sur mesure à long terme, je suis là pour transformer vos idées en une application innovante et impactante."
    img="mobile.svg" class="mt-20 md:mt-20" />

  <ExpertiseCard link="/design-ux-ui-figma" title="Design UX/UI centré sur vos utilisateurs"
    textBtn="Je veux un design qui me ressemble →"
    text="Créez des expériences mémorables grâce à des <strong>interfaces modernes, intuitives</strong> et <strong>centrées sur l’utilisateur</strong>.
<br>Chaque projet commence par une analyse approfondie de vos besoins et de ceux de vos utilisateurs.
<br>Mon objectif ? Concilier <strong>esthétisme</strong>, <strong>simplicité</strong>, et <strong>efficacité</strong> pour concevoir des designs qui répondent aux attentes tout en restant impactants.

<strong><br><br>🎨 Un processus de design structuré :</strong>
<br>1. <strong>Recherche utilisateur</strong> : Analyse des attentes et des comportements pour concevoir des solutions pertinentes et adaptées.
<br>2. <strong>Wireframes et prototypes</strong> : Création de maquettes interactives pour tester et affiner les concepts avant leur développement.
<br>3. <strong>Design system</strong> : Mise en place d’un système de design cohérent pour garantir une harmonie visuelle et fonctionnelle sur toutes les plateformes.

<strong><br><br>♿ Accessibilité : des interfaces pour tous</strong>
<br>Passionné par l’<strong>accessibilité numérique</strong>, je veille à ce que chaque interface soit inclusive et utilisable par tous, quels que soient leurs besoins ou leurs capacités.
<br>Pour garantir des applications accessibles, je respecte les standards<strong> <a class='underline' target='blank' href='https://www.w3.org/WAI/standards-guidelines/wcag/'>WCAG</a></strong>.
<strong><br><br>🌟 Un design qui raconte une histoire</strong>
<br>Un bon design ne se limite pas à une belle apparence : il doit <strong>engager</strong>, <strong>raconter une histoire</strong>, et offrir une <strong>expérience utilisateur inoubliable</strong>.
<br>Je m’assure que chaque projet reflète vos valeurs tout en répondant aux standards les plus élevés en matière de convivialité et d’impact visuel.

<strong><br><br>🎯 Transformons vos idées en expériences uniques</strong>
<br>Faites de votre projet une référence en design UX/UI avec des solutions modernes, accessibles, et pensées pour durer." img="design.svg"
    class="mt-20 mb-20 md:mt-20 md:mb-20" />

  <Contact />

</template>
