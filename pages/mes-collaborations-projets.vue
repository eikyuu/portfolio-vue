<template>
<div>

    <article class="mb-20">
  <!-- Titre principal -->
  <TitleUnder title="Mes Collaborations : Partenariats Stratégiques et Expériences Enrichissantes" class="mb-10 xl:mb-20" />

  <!-- Introduction -->
  <p>
    Au fil des années, j'ai eu la chance de travailler avec des entreprises, des startups et des individus passionnés dans divers secteurs d'activité. Chaque collaboration a été une opportunité d'apprentissage, de croissance et de création de valeur commune. Découvrez ci-dessous quelques-uns de mes partenariats marquants.
  </p>

  <!-- Sous-titre : Secteurs d'expertise -->
  <h2 class="text-2xl font-semibold mt-5 mb-3">Collaborations dans des Secteurs Variés</h2>

  <p>
    Mon expertise s'étend à plusieurs domaines, ce qui m'a permis de collaborer avec des acteurs clés dans différents secteurs :
  </p>

  <ul class="list-disc pl-5 mt-3">
    <li><strong>Tech & Innovation :</strong> Développement de solutions technologiques avancées pour des startups innovantes.</li>
    <li><strong>E-commerce :</strong> Optimisation des plateformes de commerce électronique pour améliorer l'expérience client.</li>
    <li><strong>Marketing Digital :</strong> Conception de stratégies digitales performantes avec des agences spécialisées.</li>
    <!-- <li><strong>Éducation :</strong> Création de plateformes éducatives interactives pour des institutions scolaires et universitaires.</li> -->
  </ul>

  <!-- Sous-titre : Exemples de Collaborations -->
  <h2 class="text-2xl font-semibold mt-5 mb-3">Quelques Collaborations Marquantes</h2>

  <p>
    Voici quelques exemples concrets de projets sur lesquels j'ai eu le plaisir de travailler :
  </p>

  <div class="mt-3">
    <h3 class="text-lg font-semibold mb-3">Projet 1 : {{ projects[2].title }}</h3>
    <p v-html="projects[2].text"></p>
  </div>

  <div class="mt-3">
  <h3 class="text-lg font-semibold mb-3">Projet 2 : {{ projects[3].title }}</h3>
  <p v-html="projects[3].text"></p>
  </div>

  <div class="mt-3">
    <h3 class="text-lg font-semibold mb-3">Projet 3 : {{ projectsMobile[0].title }}</h3>
    <p v-html="projectsMobile[0].text"></p>
  </div>

  <!-- Sous-titre : Valeurs et Approche -->
  <h2 class="text-2xl font-semibold mt-5 mb-3">Ma Philosophie de Collaboration</h2>

  <p>
    Chaque projet est unique, et je m'efforce de bâtir des relations de confiance basées sur :
  </p>

  <ul class="list-disc pl-5 mt-3">
    <li><strong>L'écoute active :</strong> Comprendre vos besoins et objectifs pour proposer des solutions adaptées.</li>
    <li><strong>La transparence :</strong> Communication claire et régulière tout au long du processus.</li>
    <li><strong>L'innovation :</strong> Proposer des idées créatives et des technologies de pointe pour dépasser vos attentes.</li>
    <li><strong>La qualité :</strong> Livrer des résultats professionnels et durables.</li>
  </ul>

  <!-- Call to Action (CTA) -->
  <p class="mt-5">
    Intéressé(e) par une collaboration ? 
    <NuxtLink to="/contact" title="Contactez-moi pour discuter de votre projet" class="text-[#FFC800] font-bold hover:underline">
      Contactez-moi dès maintenant
    </NuxtLink> pour explorer comment nous pouvons travailler ensemble !
  </p>
</article>

  <section>

    <div class=" flex justify-center mb-20">
      <button class="w-[50%] skew-x-[-8deg] rounded-md"
        :class="type === 'WEB' ? 'bg-[#FFC800] h-10' : 'bg-[#F2EBF4] h-10'" type="button" @click="onClick('WEB')">Projet
        web</button>

      <button class="w-[50%] skew-x-[-8deg] rounded-md"
        :class="type === 'MOBILE' ? 'bg-[#FFC800] h-10' : 'bg-[#F2EBF4] h-10'" type="button"
        @click="onClick('MOBILE')">Projet
        mobile</button>
    </div>

    <div v-if="type === 'WEB'">
      <div v-for="(project, index) in displayedProjects" :key="index">
        <ProjectCard :title="project.title" :text="project.text" :img="project.img" :order="project.order"
          :btnPosition="project.btnPosition" :link="project.link" class="mb-20" />
      </div>
    </div>

    <div v-else>
      <div v-for="(project, index) in displayedProjectsMobile" :key="index">
        <ProjectCard :title="project.title" :text="project.text" :img="project.img" :order="project.order"
          :btnPosition="project.btnPosition" :link="project.link" class="mb-20" />
      </div>
    </div>

    <div class="flex justify-center mt-24">

      <Button v-if="canLoadMore && type === 'WEB'" @click="loadMoreProjects" text="Voir plus de projets"
        color="bg-[#F2EBF4]" blank="_blank" />

      <Button v-if="canLoadMoreMobile && type === 'MOBILE'" @click="loadMoreProjectsMobile" text="Voir plus de projets"
        color="bg-[#F2EBF4]" blank="_blank" />

    </div>
  </section>

</div>


</template>


<script setup lang="ts">


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
    text: '<strong>Amélioration et optimisation d\'une application de gestion de coworking</strong>\n\n<br>Mon rôle a consisté à :\n<br>- <strong>Implémenter de nouvelles fonctionnalités</strong>, notamment un calendrier interactif permettant de :\n<br>- Visualiser toutes les réservations en temps réel ;\n<br>- Bloquer des dates spécifiques pour la gestion des disponibilités ;\n<br>- Appliquer divers filtres pour l\'administration (types de réservation, disponibilités, etc.).\n<br>- <strong>Corriger des bugs</strong> existants pour améliorer la stabilité et les performances de l\'application.\n<br>- <strong>Faire évoluer la codebase</strong> pour faciliter les futures itérations et maintenir une structure solide et performante.\n\n<strong><br>Technologies utilisées :</strong>\n<br>- Flutter : pour une interface utilisateur moderne et fluide.\n<br>- Firebase : pour le back-end, incluant la gestion des données en temps réel, l\'authentification, et le stockage.\n\nCe projet démontre ma capacité à travailler sur des applications complexes, à optimiser leur fonctionnement et à ajouter des fonctionnalités clés répondant aux besoins des utilisateurs et des administrateurs.',
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