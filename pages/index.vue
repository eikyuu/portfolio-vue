<script setup lang="ts">
import ExpertiseCard from '~/components/ExpertiseCard.vue'
import TitleUnder from '~/components/TitleUnder.vue'
import Button from '~/components/Button.vue'
import { articles } from '~/pages/blog/articles'

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
  <main class="mt-32" role="main">
    <!-- Section d’intro -->
    <section class="flex flex-col lg:flex-row items-center justify-between mb-10 lg:mb-32">
      <div class="lg:w-3/4 bg-number bg-cover mb-4">
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
            numériques centrées utilisateur, responsive, durables et inclusives.
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
        </div>



        <!-- CTA -->
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <Button text="Portfolio" link="/mes-collaborations-projets" aria-label="Voir mon portfolio" />
          <ZcalEmbed />
        </div>
      </div>


      <!-- Image desktop -->
      <div class="hidden lg:block">
        <NuxtImg class="mt-32 lg:mt-0 object-cover rounded-md" src="homme-barbu-sur-fond-jaune.png" width="500"
          height="500" sizes="sm:50vw md:400px lg:500px" format="webp" loading="lazy"
          alt="Vincent Duguet, développeur freelance devant un ordinateur" />
      </div>
    </section>

    <!-- Titre section expertises -->
    <TitleUnder v-motion-slide-visible-once-top :duration="500" :delay="100" title="Je suis un expert" tag="h2" />

    <!-- Cartes Expertise -->

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="flex flex-row justify-between flex-wrap mt-10 mb-10 lg:mt-32 lg:mb-32 gap-5">
      <NuxtLink to="/developpement-web-vue-react-symfony-adonis" class="w-full md:w-[calc(33%-1rem)]">
        <ExpertiseCard title="Développement Web sur mesure" link="/developpement-web-vue-react-symfony-adonis"
          text-btn="J’ai besoin d’un expert en Développement Web →" img="svg/web.svg">
          <p>
            Créez un <strong>site web moderne, rapide et personnalisé</strong> pour répondre aux attentes de vos
            utilisateurs.
          </p>
        </ExpertiseCard>
      </NuxtLink>

      <NuxtLink to="/developpement-mobile-react-native-swift" class="w-full md:w-[calc(33%-1rem)]">

        <ExpertiseCard title="Développement Mobile sur mesure" link="/developpement-mobile-react-native-swift"
          text-btn="Je veux une application mobile performante →" img="svg/mobile.svg">
          <p>Offrez une <strong>application mobile performante, intuitive et personnalisée</strong> à vos utilisateurs.
          </p>
        </ExpertiseCard>

      </NuxtLink>

      <NuxtLink to="/developpement-web-vue-react-symfony-adonis" class="w-full md:w-[calc(33%-1rem)]">
        <ExpertiseCard title="Template WordPress sur mesure" link="/developpement-web-vue-react-symfony-adonis"
          text-btn="Créer mon site WordPress sur-mesure →" img="svg/web.svg">
          <p>Offrez à votre entreprise un <strong>site WordPress rapide, responsive et SEO-friendly</strong>, pensé pour
            convertir.</p>
        </ExpertiseCard>
      </NuxtLink>

    </section>

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="w-full mb-10 lg:mb-32">
      <NuxtLink to="/developpement-web-vue-react-symfony-adonis" class="w-full">
        <NuxtImg src="banner.png" alt="Un site web de mariage" class="h-full object-cover rounded-md w-full" />
      </NuxtLink>
    </section>

    <TitleUnder v-motion-slide-visible-once-top :duration="500" :delay="100" title="Les articles du blog" tag="h2" />

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mt-10 mb-10 lg:mt-32 lg:mb-32">

      <div class="flex flex-col flex-wrap md:flex-row justify-between gap-5">
        <BlogCard v-for="article in articles" :key="article.slug" :article="article" />
      </div>

    </section>

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