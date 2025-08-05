<script setup lang="ts">
import ExpertiseCard from '~/components/ExpertiseCard.vue'
import TitleUnder from '~/components/TitleUnder.vue'
import Contact from '~/components/Contact.vue'
import Button from '~/components/Button.vue'

useHead({
  title: 'Vincent Duguet - Développeur Web et Mobile Full Stack Freelance à Tours',
  meta: [
    {
      name: 'description',
      content:
        'Développeur web & mobile freelance, Vincent Duguet conçoit des sites performants, des applications intuitives et des expériences utilisateurs accessibles.',
    },
    {
      name: 'keywords',
      content:
        'Vincent Duguet, développeur web freelance, application mobile, UX/UI, React, Vue.js, Symfony, Nuxt, Swift, SEO, accessibilité web',
    },
    { name: 'author', content: 'Vincent Duguet' },
    { property: 'og:title', content: 'Vincent Duguet - Développeur Web Full Stack Freelance' },
    {
      property: 'og:description',
      content: 'Sites performants et applications intuitives réalisés par Vincent Duguet, freelance à Tours.',
    },
    { property: 'og:image', content: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png' },
    { property: 'og:url', content: 'https://vincentduguet.dev' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Vincent Duguet - Développeur Web Full Stack Freelance' },
    {
      name: 'twitter:description',
      content: 'Sites performants et applications intuitives réalisés par Vincent Duguet, freelance à Tours.',
    },
    { name: 'twitter:image', content: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png' },
  ],
  htmlAttrs: { lang: 'fr' },
  bodyAttrs: { class: 'portfolio' },
  script: [{ innerHTML: "console.log('Bienvenue sur le portfolio de Vincent Duguet !')" }],
})
</script>

<template>
  <main class="mt-20 md:mt-32" role="main">
    <!-- Section d’intro -->
    <section class="flex flex-col xl:flex-row items-center justify-between mb-20">
      <div class="xl:w-3/6 bg-number bg-cover mb-4">
        <div v-motion-slide-visible-once-top :duration="500" :delay="100">
          <h1 class="uppercase text-[#5A3B5D] text-4xl font-bold">
            Salut, je suis <span class="text-[#FFC800]">Vincent Duguet</span><br>
            Développeur web & mobile Freelance à Tours.
          </h1>

          <!-- Image mobile -->
          <div class="block lg:hidden flex justify-center mt-10 mb-10">
            <NuxtImg class="rounded-md object-cover" src="homme-barbu-sur-fond-jaune.png" width="500" height="500"
              sizes="sm:50vw md:400px xl:742px" format="webp" loading="lazy"
              alt="Vincent Duguet, développeur freelance devant un ordinateur" />
          </div>

          <h2 class="text-[#5A3B5D] text-2xl font-bold mt-10 uppercase">
            J’accompagne les entreprises dans la création de sites et d’applications
            <strong>accessibles</strong>, <strong>performantes</strong> et <strong>optimisées</strong>.
          </h2>

          <p class="mt-8">
            <strong>Passionné de développement web et de design UX/UI</strong>, je conçois des solutions
            digitales centrées utilisateur, responsive, durables et inclusives.
          </p>

          <h3 class="mt-10 text-lg font-semibold">💡 Technologies modernes</h3>
          <p>
            J’utilise des outils comme
            <NuxtLink to="https://fr.react.dev/" class="underline" target="_blank">React</NuxtLink>,
            <NuxtLink to="https://nextjs.org/" class="underline" target="_blank">Next.js</NuxtLink>,
            <NuxtLink to="https://vuejs.org/" class="underline" target="_blank">Vue.js</NuxtLink>,
            <NuxtLink to="https://nuxt.com/" class="underline" target="_blank">Nuxt</NuxtLink>,
            ou encore <NuxtLink to="https://wordpress.com/" class="underline" target="_blank">WordPress</NuxtLink>.
          </p>

          <p class="mt-8 font-semibold">Mon objectif :</p>
          <ul class="list-disc list-inside mt-2">
            <li>Des <strong>sites responsives</strong>, pour tous les écrans</li>
            <li>Des <strong>applications rapides</strong> et évolutives</li>
            <li>Des <strong>interfaces accessibles</strong>, pensées pour chacun</li>
          </ul>

          <h3 class="mt-10 text-lg font-semibold">🎯 Pourquoi travailler ensemble ?</h3>
          <p class="mb-10">
            PME, start-up, entrepreneur : je vous accompagne de la stratégie au déploiement, pour un
            <strong>résultat sur-mesure</strong> et <strong>adapté à vos besoins</strong>.
          </p>

          <!-- CTA -->
          <div class="flex flex-col md:flex-row gap-5 items-center">
            <Button text="Voir mes collaborations & projets" link="/mes-collaborations-projets"
              aria-label="Voir mes projets et collaborations" />
            <ZcalEmbed />
          </div>
        </div>
      </div>

      <!-- Image desktop -->
      <div class="hidden lg:block">
        <NuxtImg class="mt-20 xl:mt-0 object-cover rounded-md" src="homme-barbu-sur-fond-jaune.png" width="500"
          height="500" sizes="sm:50vw md:400px xl:742px" format="webp" loading="lazy"
          alt="Vincent Duguet, développeur freelance devant un ordinateur" />
      </div>
    </section>

    <!-- Titre section expertises -->
    <TitleUnder title="Je suis un expert" tag="h2" />

    <!-- Cartes Expertise -->
    <ExpertiseCard title="Développement Web sur mesure" link="/developpement-web-vue-react-symfony-adonis"
      text-btn="J’ai besoin d’un expert en Développement Web →" img="svg/web.svg" class="mt-20 md:mt-20">
      Créez un <strong>site web moderne, rapide et personnalisé</strong> pour répondre aux attentes de vos utilisateurs.
      <br>
      Que ce soit un <strong>site vitrine</strong>, une <strong>plateforme interactive</strong> ou une
      <strong>application web complexe</strong>, je conçois des interfaces :
      <ul class="list-disc list-inside mt-4">
        <li><strong>Fluides</strong> : navigation intuitive et rapide</li>
        <li><strong>Esthétiques</strong> : design professionnel et aligné à votre image</li>
        <li><strong>Accessibles</strong> : respect des standards d’accessibilité (WCAG)</li>
      </ul>

      <strong class="block mt-6">💡 Une expertise Full Stack complète</strong>
      <br>
      Je développe des projets robustes de bout en bout grâce à :
      <ul class="list-disc list-inside mt-2">
        <li>Des frameworks modernes : <a href="https://vuejs.org" class="underline" target="_blank">Vue.js</a>,
          <a href="https://nuxt.com/" class="underline" target="_blank">Nuxt</a>,
          <a href="https://fr.react.dev" class="underline" target="_blank">React</a>,
          <a href="https://nextjs.org" class="underline" target="_blank">Next.js</a>
        </li>
        <li>Un back-end solide : <a href="https://symfony.com/" class="underline" target="_blank">Symfony</a>,
          <a href="https://adonisjs.com/" class="underline" target="_blank">AdonisJS</a>
        </li>
        <li>Une attention à la <strong>performance</strong>, la <strong>sécurité</strong> et au <strong>SEO</strong>
        </li>
      </ul>

      <strong class="block mt-6">🎯 Un site web qui reflète vos ambitions</strong>
      <br>
      Mon objectif : créer un site <strong>scalable, rapide et accessible</strong>, en parfaite adéquation avec votre
      vision et les attentes de vos utilisateurs.
    </ExpertiseCard>


    <ExpertiseCard title="Développement Mobile sur mesure" link="/developpement-mobile-react-native-swift"
      text-btn="Je veux une application mobile performante →" img="svg/mobile.svg" class="mt-20 md:mt-20">
      Offrez une <strong>application mobile performante, intuitive et personnalisée</strong> à vos utilisateurs.
      <br>
      Que ce soit sur <strong>iOS</strong>, <strong>Android</strong> ou en <strong>cross-platform</strong>, je conçois
      des expériences mobiles modernes, fluides et évolutives.

      <strong class="block mt-6">🚀 Technologies utilisées</strong>
      <ul class="list-disc list-inside mt-2">
        <li><strong>React Native</strong> : développement multiplateforme rapide et natif</li>
        <li><strong>Swift</strong> : performances optimales sur iOS</li>
        <li><strong>Design UX/UI</strong> : interfaces ergonomiques et attractives</li>
        <li><strong>Accessibilité</strong> : conformité avec les normes d’inclusion numérique</li>
      </ul>

      <strong class="block mt-6">📱 Un accompagnement de A à Z</strong>
      <br>
      De la <strong>conception</strong> à la <strong>mise en ligne sur les stores</strong>, je vous accompagne à chaque
      étape :
      <ul class="list-disc list-inside mt-2">
        <li>Expérience utilisateur fluide</li>
        <li>Optimisation des performances</li>
        <li>Sécurité des données</li>
      </ul>

      <strong class="block mt-6">🎯 Créez une application qui se démarque</strong>
      <br>
      Je conçois des solutions mobiles qui génèrent de l’impact et fidélisent vos utilisateurs.
    </ExpertiseCard>


    <ExpertiseCard title="Création de Sites WordPress Performants & Sur-Mesure"
      link="/developpement-wordpress-sur-mesure" text-btn="Créer mon site WordPress sur-mesure →" img="svg/web.svg"
      class="mt-20 mb-20 md:mt-20 md:mb-20">
      Offrez à votre entreprise un <strong>site WordPress rapide, responsive et SEO-friendly</strong>, pensé pour
      convertir.

      <strong class="block mt-6">📊 Un site aligné sur vos objectifs</strong>
      <br>
      Chaque projet débute par une <strong>analyse stratégique</strong> de vos besoins, de votre audience et de votre
      marché.

      <strong class="block mt-6">🎨 Processus de création :</strong>
      <ul class="list-disc list-inside mt-2">
        <li><strong>Recherche utilisateur</strong> : comprendre les attentes de vos visiteurs</li>
        <li><strong>Prototypes & wireframes</strong> : tester les idées rapidement</li>
        <li><strong>Design system</strong> : garantir cohérence et évolutivité</li>
      </ul>

      <strong class="block mt-6">♿ Accessibilité & conformité WCAG</strong>
      <br>
      Tous les sites sont conçus pour être <strong>accessibles à tous</strong>, dans le respect des <a class="underline"
        href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">standards WCAG</a>.

      <strong class="block mt-6">🔍 SEO intégré dès la conception</strong>
      <br>
      Structure sémantique HTML optimisée, rapidité, balises métas bien pensées : votre site est prêt à performer sur
      Google dès le lancement.

      <strong class="block mt-6">🌟 Un site qui valorise votre image</strong>
      <br>
      Créez une présence digitale professionnelle avec un site WordPress <strong>moderne, évolutif</strong> et
      <strong>aligné à votre identité</strong>.
    </ExpertiseCard>


    <ExpertiseCard title="Design UX/UI centré sur vos utilisateurs" link="/design-ux-ui-figma"
      text-btn="Je veux un design qui me ressemble →" img="svg/design.svg" class="mt-20 mb-20 md:mt-20 md:mb-20">
      Concevez des <strong>interfaces élégantes, intuitives et accessibles</strong>, centrées sur les besoins réels de
      vos utilisateurs.

      <strong class="block mt-6">🎨 Une méthodologie éprouvée :</strong>
      <ul class="list-disc list-inside mt-2">
        <li><strong>Recherche utilisateur</strong> : comprendre vos cibles</li>
        <li><strong>Wireframes & prototypes</strong> : valider les concepts rapidement</li>
        <li><strong>Design system</strong> : garantir la cohérence et la scalabilité</li>
      </ul>

      <strong class="block mt-6">♿ Design inclusif & accessible</strong>
      <br>
      Je conçois des interfaces conformes aux <a href="https://www.w3.org/WAI/standards-guidelines/wcag/"
        class="underline" target="_blank">normes WCAG</a> pour que chaque utilisateur puisse naviguer sans obstacle.

      <strong class="block mt-6">🌟 Un design qui raconte une histoire</strong>
      <br>
      Mon objectif : créer un design qui <strong>valorise votre marque</strong>, renforce l'engagement et délivre une
      <strong>expérience utilisateur mémorable</strong>.
    </ExpertiseCard>

  </main>
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