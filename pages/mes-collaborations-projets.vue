<template>
  <main id="main-content" class="mt-32">
    <Breadcrumb :items="[{ label: 'Accueil', to: '/' }, { label: 'Projets' }]" />
    <section
      class="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 lg:mb-32"
      aria-labelledby="portfolio-hero-title"
    >
      <div class="w-full lg:w-3/5">
        <div v-motion-slide-top :duration="500" :delay="100">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-purple-300 mb-4">
            Portfolio · Tours
          </p>

          <h1 id="portfolio-hero-title" class="text-brand-purple text-display max-w-readable">
            Portfolio : mes projets web et mobile en freelance
            <span class="text-brand-yellow">à Tours et au-delà.</span>
          </h1>

          <p class="mt-6 text-lg text-brand-muted max-w-readable">
            Une sélection de collaborations menées en freelance ou en équipe, du cadrage au
            déploiement : sites React/Angular, API REST Java Springboot, applications React Native, refontes WordPress. UX,
            code propre, performances mesurées.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button
              text="Discutons de votre projet"
              link="/contact"
              aria-label="Discutons de votre projet"
              color="secondary"
            />
            <a
              href="#projets"
              class="inline-flex items-center gap-2 text-brand-purple font-semibold hover:text-brand-purple-700 focus-ring rounded"
            >
              Voir les projets
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <ul
            class="mt-10 flex flex-wrap gap-2"
            aria-label="Secteurs et domaines d’intervention"
          >
            <li
              v-for="sector in sectors"
              :key="sector"
              class="px-3 py-1 text-sm rounded-full bg-brand-lavender text-brand-purple"
            >
              {{ sector }}
            </li>
          </ul>
        </div>

        <AvailabilityBadge variant="extended" class="mt-10" />
      </div>

      <div class="hidden lg:block w-2/5">
        <NuxtImg
          class="object-cover rounded-2xl floating-animation"
          src="team-building.jpg"
          width="500"
          height="500"
          sizes="lg:500px"
          format="webp"
          loading="eager"
          fetchpriority="high"
          alt="Vincent Duguet, développeur freelance"
        />
      </div>
    </section>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Ma vision du partenariat"
      tag="h2"
    />

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-10 lg:mt-32 lg:mb-32"
      aria-label="Mes valeurs de collaboration"
    >
      <CardGoldBorder v-for="value in values" :key="value.title">
        <div>
          <h3 class="text-h3 text-brand-purple mb-3">{{ value.title }}</h3>
          <p class="text-brand-muted">{{ value.description }}</p>
        </div>
      </CardGoldBorder>
    </section>

    <TitleUnder
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      title="Les projets"
      tag="h2"
    />

    <section
      id="projets"
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="mt-10 lg:mt-32"
      aria-labelledby="type-projet"
    >
      <h3 id="type-projet" class="sr-only">Choisissez le type de projet à afficher</h3>

      <div
        class="flex flex-col sm:flex-row gap-2 mb-10 lg:mb-16 max-w-md mx-auto bg-brand-lavender rounded-2xl p-1.5"
        role="tablist"
        aria-label="Filtrer par type de projet"
      >
        <button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          role="tab"
          :aria-selected="type === tab.value"
          :aria-controls="`panel-${tab.value.toLowerCase()}`"
          :class="[
            'flex-1 rounded-xl py-2 px-4 text-sm font-semibold transition-colors duration-200 focus-ring',
            type === tab.value
              ? 'bg-white text-brand-purple shadow-card'
              : 'text-brand-purple/70 hover:text-brand-purple',
          ]"
          @click="onClick(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        v-if="type === 'WEB'"
        id="panel-web"
        role="tabpanel"
        aria-labelledby="type-projet"
      >
        <div v-for="(project, index) in displayedProjects" :key="`web-${index}`" class="mb-20 lg:mb-32">
          <ProjectCard
            v-bind="project"
            v-motion-slide-visible-once-top
            :duration="500"
            :delay="100"
            :order="project.order"
          />
        </div>
      </div>

      <div
        v-else
        id="panel-mobile"
        role="tabpanel"
        aria-labelledby="type-projet"
      >
        <div v-for="(project, index) in displayedProjectsMobile" :key="`mobile-${index}`" class="mb-20 lg:mb-32">
          <ProjectCard
            v-bind="project"
            v-motion-slide-visible-once-top
            :duration="500"
            :delay="100"
            :order="project.order"
          />
        </div>
      </div>

      <div class="flex justify-center mt-10 lg:mt-16">
        <Button
          v-if="canLoadMore && type === 'WEB'"
          text="Voir plus de projets"
          aria-label="Voir plus de projets web"
          @click="loadMoreProjects"
        />
        <Button
          v-if="canLoadMoreMobile && type === 'MOBILE'"
          text="Voir plus de projets"
          aria-label="Voir plus de projets mobile"
          @click="loadMoreProjectsMobile"
        />
      </div>
    </section>

    <section
      v-motion-slide-visible-once-top
      :duration="500"
      :delay="100"
      class="mt-20 lg:mt-32 mb-10 lg:mb-32"
    >
      <Contact />
    </section>

    <p class="mb-10 text-center">
      Un projet en tête ?
      <NuxtLink
        to="/contact"
        title="Discuter de votre projet"
        aria-label="Discuter de votre projet"
        class="text-brand-purple font-bold underline hover:text-brand-purple-700 focus-ring rounded"
      >
        Parlons-en dès maintenant
      </NuxtLink>
      .
    </p>
  </main>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

useSeoMeta({
  title: 'Portfolio — Projets web et mobile · Vincent Duguet',
  description:
    'Portfolio de projets web et mobile réalisés en freelance : sites Vue/Nuxt, applications React Native, refontes WordPress. Études de cas et collaborations.',
  ogLocale: 'fr_FR',
  ogImage: '/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  author: 'Vincent Duguet',
})

const sectors = [
  'Tech & SaaS',
  'E-commerce',
  'Immobilier',
  'Santé & Mutuelles',
  'IA & Data',
  'Marketing digital',
]

const values = [
  { title: 'Écoute', description: 'Comprendre vos enjeux réels avant de proposer une solution. Pas de prêt-à-porter technique.' },
  { title: 'Clarté', description: 'Communication fluide, points réguliers, jargon traduit. Vous savez toujours où on en est.' },
  { title: 'Innovation', description: 'Des solutions modernes, accessibles et durables. Pas d’effets de mode au détriment de votre projet.' },
  { title: 'Qualité', description: 'Code propre, tests, documentation. Vos évolutions futures restent possibles, par moi ou n’importe quelle équipe.' },
]

type ProjectType = 'WEB' | 'MOBILE'

const tabs: { label: string, value: ProjectType }[] = [
  { label: 'Projets web', value: 'WEB' },
  { label: 'Projets mobile', value: 'MOBILE' },
]

const type = ref<ProjectType>('WEB')

const onClick = (newType: ProjectType) => {
  type.value = newType
  currentPage.value = 1
}

interface Project {
  title: string
  text: string
  img: string
  order: string
  btnPosition: 'float-first' | 'float-end'
  link?: string
}

const projects = ref<Project[]>([
  {
    title: 'Suismespattes',
    text: '<strong>La plateforme collaborative pour voyager avec son chien 🐾</strong><br><br>Unique développeur de <strong>Suis Mes Pattes</strong>, une plateforme innovante et gratuite conçue pour les passionnés de voyages avec leur chien. Ce projet allie <strong>technologie moderne</strong> et <strong>expérience utilisateur optimale</strong>, en mettant l’accent sur la <strong>communauté</strong> et l’<strong>entraide</strong>.<br><br><strong>Fonctionnalités clés du projet :</strong><br>  - <strong>Recherche de destinations :</strong> Les utilisateurs peuvent trouver des lieux adaptés aux chiens, que ce soit pour des balades en forêt, des sorties en ville ou des moments de détente au restaurant.<br>  - <strong>Partage communautaire :</strong> Chaque membre peut ajouter ses découvertes, noter les destinations et contribuer à enrichir la plateforme.<br>  - <strong>Organisation des sorties :</strong> Possibilité de créer des groupes pour planifier des activités avec des amis et leurs chiens.<br>  - <strong>Boutique en ligne :</strong> Une sélection soignée de produits pour les chiens et leurs maîtres, centralisée dans un espace dédié.<br><br>',
    img: 'suismespattes.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: 'https://suismespattes-git-main-eikyuus-projects.vercel.app/',
  },
  {
    title: 'Chatbot IA - ICF Habitat',
    text: '<strong>Développement d’un chatbot basé sur l’intelligence artificielle générative 🏡🤖</strong><br><br>En tant que <strong>développeur front-end</strong>, j’ai contribué à la création d’un agent conversationnel sécurisé et performant pour <strong>ICF Habitat</strong>. Ce chatbot, basé sur <strong>ChatGPT-4</strong> et d’autres technologies avancées, permet aux collaborateurs d’optimiser l’accès à l’information et la gestion documentaire.<br><br><strong>Fonctionnalités clés du projet :</strong><br>  - <strong>Interface intuitive :</strong> Développement de l’UI avec <strong>Angular</strong> pour une expérience fluide et accessible.<br>  - <strong>Intégration de l’IA :</strong> Connexion avec <strong>Azure OpenAI, ChatGPT-4 et Langchain</strong> pour des échanges dynamiques.<br>  - <strong>Sécurité renforcée :</strong> Utilisation de <strong>Entra ID</strong> pour l’authentification et gestion des accès.<br>  - <strong>Génération de contenu :</strong> Capacité à produire des images via <strong>DALL·E</strong> et à analyser des documents en temps réel.<br>  - <strong>Déploiement cloud :</strong> Hébergement sur <strong>Azure</strong> pour une intégration fluide dans l’écosystème IT d’ICF Habitat.<br><br>',
    img: 'chatbot-icf-habitat.webp',
    order: 'xl:order-last',
    btnPosition: 'float-end',
    link: 'https://www.apside.com/fr/projets/realisation-ia-gen-icf-habitat/',
  },
  {
    title: 'Harmonie mutuelle',
    text: '<strong>Collaboration avec <a href="https://www.harmonie-mutuelle.fr/" class="underline" target="blank">Harmonie mutuelle</a></strong> <br><br>Dans le cadre de la refonte du design system d’Harmonie Mutuelle, j\'ai contribué au développement de <strong>nouveaux parcours web</strong> visant à <strong>simplifier l’accès à la prévoyance individuelle</strong> pour les adhérents. L\'objectif principal était de rendre le parcours plus fluide, plus intuitif et totalement <strong>centré sur l’utilisateur</strong>, tout en garantissant une expérience optimale sur <strong>mobile et desktop.</strong> <br><br> Ce projet de refonte des parcours web pour la <strong>prévoyance individuelle</strong> chez <strong>Harmonie Mutuelle</strong> est un exemple parfait de l’application de l’UX design et des pratiques de développement moderne. Grâce à une <strong>interface responsive, centrée sur l’utilisateur</strong>, et validée par des tests pratiques, nous avons créé une expérience digitale fluide et accessible, qui répond aux besoins des adhérents d\'Harmonie Mutuelle, tout en respectant les standards de performance ',
    img: 'harmonie.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
    link: 'https://protection-sante-particuliers.harmonie-mutuelle.fr/',
  },
  {
    title: 'MGEN',
    text: '<strong>Collaboration avec la <a href="https://www.mgen.fr/" class="underline" target="blank">MGEN</a> - Refonte de l\'interface utilisateur et optimisation du parcours adhérent :</strong><br><br>Au cours de mes deux années de collaboration avec la <strong>MGEN</strong>, j\'ai participé activement à la conception et au développement de plusieurs projets majeurs. Un des projets phares a été la refonte de l\'<strong>interface utilisateur</strong> pour l\'<strong>espace personnel des adhérents</strong>, visant à améliorer l\'<strong>expérience utilisateur</strong>. Cette refonte a permis de simplifier la navigation, augmentant ainsi la <strong>satisfaction des utilisateurs</strong> et l\'<strong>engagement</strong> sur la plateforme.<br><br>J\'ai également travaillé en étroite collaboration avec l\'<strong>équipe de vente</strong> pour créer des <strong>parcours d\'adhésion personnalisés</strong>. L\'objectif était de rendre le processus d\'inscription plus <strong>intuitif</strong> et <strong>efficace</strong>, facilitant ainsi la souscription aux offres de la MGEN. Cette démarche a contribué à <strong>optimiser le parcours client</strong>, générant une <strong>meilleure conversion</strong> et <strong>fidélisation des adhérents</strong>.',
    img: 'mgen.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
  },
  {
    title: 'FindMyRoad',
    text: 'En tant que développeur web freelance, j’ai eu l’opportunité de créer le site web de FindMyRoad, un générateur de voyages avec IA. Ce site permet de planifier des voyages avec des IA et des algorithmes de machine learning.',
    img: 'voyage.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: '/contact',
  },
  {
    title: 'Le chat Bohême',
    text: '<strong>Un restaurant… avec des chats dedans !</strong> <br><br>En tant que <strong>développeur wordpress freelance</strong>, j’ai eu l’opportunité de créer le site web de <strong>Le chat Bohême</strong>, un restaurant qui accueille des chats dans un environnement convivial et sécurisé. Ce projet a été conçu pour offrir une expérience utilisateur fluide et agréable, tout en mettant l’accent sur la qualité des produits et le service.',
    img: 'le-chat-boheme.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
  },
  {
    title: 'I love my dog',
    text: '<strong>Développement du site web pour I love my dog 🐶</strong><br><br>En tant que <strong>développeur wordpress freelance</strong>, j’ai eu l’opportunité de créer le site web de <strong>I love my dog</strong>, une éducatrice canine à Tours. Ce projet a été conçu pour offrir une interface conviviale et informative, permettant aux propriétaires de chiens de trouver facilement des conseils et des services adaptés à leurs besoins.<br><br>Le site a été développé sur la plateforme <strong>WordPress</strong>, garantissant une gestion facile du contenu et une évolutivité pour l’avenir. J’ai également intégré des fonctionnalités telles que des formulaires de contact, des galeries d’images et un blog pour partager des conseils et astuces sur l’éducation canine.<br><br>Ce projet démontre ma capacité à créer des sites web attrayants et fonctionnels, tout en répondant aux besoins spécifiques de mes clients.',
    img: 'ilovemydog.jpg',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: 'https://i-love-my-dog.fr/',
  },
  {
    title: 'Kahina - Social network',
    text: 'En tant que développeur web freelance, j’ai eu l’opportunité de créer le site web de Kahina, une plateforme de social network pour les passionnés d’animes. Ce réseau social permet de discuter des dernières sorties, des séries, des films et des mangas.',
    img: 'animes.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: '/contact',
  },
  {
    title: 'Le bon agent',
    text: '<strong>Développement du Backoffice pour "<a href="https://www.lebonagent.fr/" class="underline" target="blank">le bon agent</a>" - Groupe Arche :</strong><br><br> En 2021, j\'ai développé le <strong>backoffice</strong> du réseau de mandataires immobiliers <strong>\'Le bon agent\'</strong>, intégré au groupe Arche. Ce projet clé a consisté à créer une plateforme centralisée destinée à optimiser la <strong>gestion des mandataires</strong>, des contacts, ainsi que la <strong>synergie entre les différentes entités</strong> du groupe. Le backoffice est conçu pour être un outil puissant et intuitif, permettant aux utilisateurs de travailler de manière plus efficace et coordonnée.<br><br> L\’une des fonctionnalités majeures du système permet de générer des <strong>estimations immobilières personnalisées</strong> en fonction de critères précis envoyés à une API, offrant ainsi des rapports dynamiques et détaillés au format <strong>PDF</strong>. Ce processus améliore la <strong>rapidité</strong> et la <strong>précision</strong> des estimations, tout en simplifiant le workflow des utilisateurs.<br><br>Le projet a été développé avec des technologies de pointe telles que <strong>ReactJS</strong>, <strong>Redux</strong>, et <strong>MaterialUI</strong> pour le front-end, ainsi que <strong>Symfony</strong> pour le back-end, garantissant une plateforme robuste, scalable et performante, adaptée aux besoins évolutifs du réseau de mandataires.',
    img: 'lebonagent.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: 'https://www.lebonagent.fr/',
  },
  {
    title: 'Arche',
    text: '<strong>Conception du site web pour Arche - Holding immobilière :</strong><br><br>Arche est une <strong>holding immobilière</strong> regroupant plusieurs <strong>réseaux immobiliers</strong> ainsi que des <strong>filiales support</strong>, spécialisées en immobilier (assurances, diagnostics, courtage financier). Basée à Tours et dirigée par <strong>Philippe Briand</strong>, Arche est un acteur majeur du secteur.<br><br>En 2021, j\'ai créé le <strong>design du site web</strong> à destination des particuliers. Le site a été pensé et conçu selon une approche <strong>Mobile First</strong> afin d\'optimiser l\'<strong>expérience utilisateur</strong>, garantissant une navigation fluide et intuitive sur tous types d\'appareils. De plus, le site a été optimisé pour répondre aux exigences de qualité élevées attendues par une enseigne de la stature d\'Arche.',
    img: 'arche.png',
    order: 'xl:order-last',
    btnPosition: 'float-end',
    link: 'https://github.com/eikyuu/arche-files',
  },
  {
    title: 'Carte de visite dynamique immobilier',
    text: '<strong>Création de la carte de visite dynamique pour les agents immobiliers du réseau Arche :</strong><br><br>J\'ai développé une <strong>carte de visite dynamique</strong> pour les agents immobiliers du réseau de <strong>Arche</strong>. Cette carte de visite est générée automatiquement en fonction des <strong>informations du mandataire</strong> et de son <strong>agence</strong>, offrant ainsi une solution personnalisée et moderne pour chaque agent. Grâce à cette fonctionnalité, les cartes de visite sont créées de manière fluide, avec des informations à jour, tout en respectant l’identité visuelle du réseau.<br><br>La carte de visite dynamique a été conçue en utilisant <strong>Symfony</strong>, garantissant ainsi une solution robuste et performante. Cette approche permet de simplifier le processus de création et de gestion des cartes tout en assurant une flexibilité maximale.',
    img: 'carte.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: 'https://media.sas-arche.com/businesscards/html/pbriand-1.html',
  },
])

const projectsMobile = ref<Project[]>([
  {
    title: 'B’COWORKER',
    text: '<strong>Amélioration et optimisation d\'une application de gestion de coworking</strong>\n\n<br>Mon rôle a consisté à :\n<br>- <strong>Implémenter de nouvelles fonctionnalités</strong>, notamment un calendrier interactif permettant de :\n<br>- Visualiser toutes les réservations en temps réel ;\n<br>- Bloquer des dates spécifiques pour la gestion des disponibilités ;\n<br>- Appliquer divers filtres pour l\'administration (types de réservation, disponibilités, etc.).\n<br>- <strong>Corriger des bugs</strong> existants pour améliorer la stabilité et les performances de l\'application.\n<br>- <strong>Faire évoluer la codebase</strong> pour faciliter les futures itérations et maintenir une structure solide et performante.\n\n<strong><br>Technologies utilisées :</strong>\n<br>- Flutter : pour une interface utilisateur moderne et fluide.\n<br>- Firebase : pour le back-end, incluant la gestion des données en temps réel, l\'authentification, et le stockage.\n\nCe projet démontre ma capacité à travailler sur des applications complexes, à optimiser leur fonctionnement et à ajouter des fonctionnalités clés répondant aux besoins des utilisateurs et des administrateurs.',
    img: 'bcoworker.png',
    order: 'xl:order-first',
    btnPosition: 'float-first',
    link: 'https://app.bcoworker.com/home',
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
    order: 'xl:order-first',
    btnPosition: 'float-first',
  },
])

const itemsPerPage = 2
const currentPage = ref(1)

const displayedProjects = computed(() => {
  return projects.value.slice(0, currentPage.value * itemsPerPage)
})

const canLoadMore = computed(() => {
  return displayedProjects.value.length < projects.value.length
})

const loadMoreProjects = () => {
  currentPage.value++
}

const displayedProjectsMobile = computed(() => {
  return projectsMobile.value.slice(0, currentPage.value * itemsPerPage)
})

const canLoadMoreMobile = computed(() => {
  return displayedProjectsMobile.value.length < projectsMobile.value.length
})

const loadMoreProjectsMobile = () => {
  currentPage.value++
}
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .floating-animation {
    animation: floating 6s ease-in-out infinite;
  }

  @keyframes floating {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
}
</style>
