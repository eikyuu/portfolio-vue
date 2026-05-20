<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import ExpertiseCard from '~/components/ExpertiseCard.vue'
import TitleUnder from '~/components/TitleUnder.vue'
import Button from '~/components/Button.vue'
import { articles } from '~/types/articles'

const technos = ['React', 'Angular', 'Vue.js', 'Nuxt', 'Next.js', 'Symfony', 'AdonisJS', 'React Native', 'WordPress']

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
})
</script>

<template>
  <main id="main-content" class="mt-32" role="main">
    <!-- Section d’intro -->
    <section class="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 lg:mb-32"
             aria-labelledby="hero-title">
      <div class="w-full lg:w-3/5">
        <div v-motion-slide-visible-once-top :duration="500" :delay="100">

          <p class="text-sm font-semibold uppercase tracking-wider text-brand-purple-300 mb-4">
            Développeur freelance · Tours
          </p>

          <h1 id="hero-title" class="text-brand-purple text-display max-w-readable">
            Des sites et apps qui livrent :
            <span class="text-brand-yellow">accessibles, rapides, durables.</span>
          </h1>

          <p class="mt-6 text-lg text-brand-muted max-w-readable">
            J’accompagne PME, start-ups et entrepreneurs de la stratégie au déploiement.
            Design centré utilisateur, code propre, performances mesurées.
          </p>

          <!-- Image mobile -->
          <div class="block lg:hidden flex flex-col justify-center items-center mt-10">
            <NuxtImg class="rounded-2xl object-cover floating-animation"
              src="homme-barbu-sur-fond-jaune.png" width="500" height="500"
              sizes="sm:50vw md:400px xl:742px" format="webp" loading="eager" fetchpriority="high"
              alt="Vincent Duguet, développeur freelance devant un ordinateur" />
          </div>

          <!-- CTAs : 1 primaire + 1 secondaire -->
          <div class="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button text="Réserver un appel gratuit" link="/contact"
                    aria-label="Réserver un appel gratuit"
                    color="secondary" />
            <NuxtLink to="/mes-collaborations-projets"
                      class="inline-flex items-center gap-2 text-brand-purple font-semibold hover:text-brand-purple-700 focus-ring rounded">
              Voir mes projets
              <ArrowRight class="w-4 h-4" aria-hidden="true" />
            </NuxtLink>
          </div>

          <!-- Stack en chips -->
          <ul class="mt-10 flex flex-wrap gap-2" aria-label="Technologies que j’utilise">
            <li v-for="tech in technos" :key="tech"
                class="px-3 py-1 text-sm rounded-full bg-brand-lavender text-brand-purple">
              {{ tech }}
            </li>
          </ul>
        </div>

        <AvailabilityBadge variant="extended" class="mt-10" />
      </div>

      <!-- Image desktop -->
      <div class="hidden lg:block w-2/5">
        <NuxtImg class="object-cover rounded-2xl floating-animation"
          src="homme-barbu-sur-fond-jaune.png" width="500" height="500" sizes="lg:500px" format="webp"
          loading="eager" fetchpriority="high" alt="Vincent Duguet, développeur freelance devant un ordinateur" />
      </div>
    </section>

    <!-- Titre section expertises -->
    <TitleUnder v-motion-slide-visible-once-top :duration="500" :delay="100" title="Je suis un expert" tag="h2" />

    <!-- Cartes Expertise -->

    <section v-motion-slide-visible-once-top :duration="500" :delay="100"
      class="flex flex-row justify-between flex-wrap mt-10 mb-10 lg:mt-32 lg:mb-32 gap-5">
      <NuxtLink to="/developpement-web-vue-react-symfony-adonis" class="w-full md:w-[calc(33%-1rem)]">
        <ExpertiseCard title="Développement Web sur mesure" link="/developpement-web-vue-react-symfony-adonis"
          text-btn="J’ai besoin d’un expert en Développement Web →" img="svg/web.svg">
          <p>
            Créez un <strong>site web moderne, rapide et personnalisé</strong> pour votre entreprise.
          </p>
        </ExpertiseCard>
      </NuxtLink>

      <NuxtLink to="/developpement-mobile-react-native-swift" class="w-full md:w-[calc(33%-1rem)]">

        <ExpertiseCard title="Développement Mobile sur mesure" link="/developpement-mobile-react-native-swift"
          text-btn="Je veux une application mobile performante →" img="svg/mobile.svg">
          <p>Offrez une <strong>application mobile performante, intuitive et personnalisée.</strong></p>
        </ExpertiseCard>

      </NuxtLink>

      <NuxtLink to="/developpement-web-vue-react-symfony-adonis" class="w-full md:w-[calc(33%-1rem)]">
        <ExpertiseCard title="Site WordPress sur mesure" link="/developpement-web-vue-react-symfony-adonis"
          text-btn="Je veux un site WordPress sur-mesure et rapide →" img="svg/web.svg">
          <p>Offrez à votre entreprise un <strong>site WordPress rapide, responsive et SEO-friendly.</strong></p>
        </ExpertiseCard>
      </NuxtLink>

    </section>

    <section v-motion-slide-visible-left :duration="500" :delay="100" class="w-full mb-10 lg:mb-32">
      <NuxtLink to="/developpement-web-vue-react-symfony-adonis" class="w-full block card-interactive rounded-xl">
        <NuxtImg src="banner.png" alt="Aperçu d’un site web créé sur mesure" class="h-full object-cover rounded-xl w-full" loading="lazy" />
      </NuxtLink>
    </section>

    <section v-motion-slide-visible-right :duration="500" :delay="100"
      class="flex flex-col md:flex-row items-center justify-between w-full mt-10 lg:mt-32 gap-4 md:gap-8 mb-10 lg:mb-32">
      <div class="w-full md:w-1/2 mb-10 lg:mb-0">
        <h2 class="text-2xl font-semibold mb-3">Votre vision. Mon expertise.</h2>

        <p>Un site web unique, conçu pour refléter votre image et atteindre vos objectifs.
          Design premium, performances optimisées, référencement inclus.</p>

        <p><strong>Résultat : plus de visibilité, plus de clients, plus de ventes.</strong></p>

        <Button class="mt-5" text="Demander mon devis gratuit →" link="/contact"
          aria-label="Lien vers la page de contact" target="_self" type="button" />
      </div>
      <NuxtImg src="phone.png" alt="Aperçu d’un site web responsive affiché sur smartphone" class="h-full object-cover rounded-xl w-full md:w-1/2" loading="lazy" />
    </section>

    <TitleUnder v-motion-slide-visible-once-top :duration="500" :delay="100" title="Les offres" tag="h2" />

    <section v-motion-slide-visible-once-top :duration="500" :delay="100"
      class="flex flex-col lg:flex-row items-stretch justify-between w-full gap-4 lg:gap-6 mt-10 lg:mt-32">
      <Offres />
    </section>

    <TitleUnder v-motion-slide-visible-once-top :duration="500" :delay="100" title="Les articles du blog" tag="h2"
      class="mt-10 lg:mt-32" />

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mt-10 mb-10 lg:mt-32 lg:mb-32">

      <div class="flex flex-col flex-wrap md:flex-row justify-between gap-5">
        <BlogCard v-for="article in articles" :key="article.slug" :article="article" />
      </div>

    </section>

    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mb-10 lg:mb-32">
      <Contact />
    </section>
    

  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

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