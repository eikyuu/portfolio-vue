<template>
  <section class="mt-32 w-full overflow-x-hidden">
    <!-- Titre principal avec effet de surlignage -->
    <TitleUnder 
      motion-slide-visible-once-top :duration="500" :delay="100"
      title="Un site internet à la hauteur de ton business et tes ambitions" tag="h1" />

    <article v-motion-slide-visible-once-top :duration="500" :delay="100" class="overflow-x-hidden">
      <!-- Introduction -->

      <p class="mb-10 mt-10 lg:mb-32 lg:mt-32">Un site internet est l'outil idéal pour développer ton business et le faire passer à la vitesse
        supérieure. Il
        te permettra d'être visible 24h/24 et 7j/7 en donnant le maximum d'informations à tes lecteurs. Un site internet
        te permet d'être référencé et visible sur Google pour attirer plus de client.e.s.</p>

      <div class="flex flex-col md:flex-row items-center justify-between mt-5 w-full gap-4 md:gap-8">
        <NuxtImg src="site-web-i-love-my-dog.webp" alt="Un site web avec un chien"
          class="h-full object-cover rounded-md w-full md:w-1/2 flex-shrink-0" />
        <div class="w-full md:w-1/2 flex flex-col items-center flex-shrink-0">
          <p class="font-[Anton] text-2xl mt-5 md:mt-0">Tu es au bon endroit si</p>
          <ul class="list-none pl-5 mt-3 w-full">
            <li class="flex items-center mt-2">
              <BadgeCheck class="mr-2 flex-shrink-0" />
              <span>Tu veux faire décoller ton business</span>
            </li>
            <li class="flex items-center mt-2">
              <BadgeCheck class="mr-2 flex-shrink-0" />
              <span>Tu veux passer à la vitesse supérieure</span>
            </li>
            <li class="flex items-center mt-2">
              <BadgeCheck class="mr-2 flex-shrink-0" />
              <span>Tu veux un site internet qui te ressemble</span>
            </li>
            <li class="flex items-center mt-2">
              <BadgeCheck class="mr-2 flex-shrink-0" />
              <span>Tu veux être accompagnée</span>
            </li>
            <li class="flex items-center mt-2">
              <BadgeCheck class="mr-2 flex-shrink-0" />
              <span>Tu veux être fière de ton site internet</span>
            </li>
          </ul>
        </div>
      </div>

      <TitleUnder v-motion-slide-visible-once-top :duration="500" :delay="100" title="Création de site internet" tag="h2"
        class="mb-10 mt-10 lg:mb-32 lg:mt-32" />

      <div 
        v-motion-slide-visible-once-top 
        :duration="500" 
        :delay="100"
        class="flex flex-col lg:flex-row items-stretch justify-between w-full gap-4 lg:gap-6">
        <!-- cards offres -->

        <div
          class="bg-white rounded-md shadow-xl shadow-[#F2EBF4] flex flex-col justify-between border-b-8 border-[#FFC800] w-full lg:w-1/3 p-5 mb-10 lg:mb-0">

          <div>
            <h2 class="mb-2 font-bold">REFONTE DE SITE</h2>

            <p>À partir de <span class="font-bold text-xl">500€</span> </p>
            <p class="font-bold mt-5">Facilités de paiement disponibles.</p>

            <p class="mb-4">Pour ceux qui souhaitent que leur site reflète enfin leur personnalité & leurs valeurs.</p>

            <h3 class="font-bold">Analyse du site & plan d'amélioration</h3>
            <p class="mb-2">Définition des objectifs et axes d'amélioration. Choix des technologies, migration...</p>

            <h3 class="font-bold">Audit stratégique & créatif</h3>
            <p class="mb-2">Pour redesigner un site adapté à votre personnalité & à vos valeurs.</p>

            <h3 class="font-bold">Refonte complète</h3>
            <p class="mb-2">Refonte UX/UI pour une expérience utilisateur moderne, fluide et plus proche de votre personnalité. Refonte
              du site entier (structure, sections, composants).</p>

            <h3 class="font-bold">Mise en place des intégrations de contenu</h3>
            <p class="mb-2">(textes, images, vidéos)</p>

            <h3 class="font-bold">Refonte stratégique & SEO</h3>
            <p class="mb-2">Optimisation technique (performances du site, référencement, gestion du contenu).</p>

            <h3 class="font-bold">Accompagnement & Support</h3>
            <p class="mb-2">Formation pour vous rendre autonome.</p>
          </div>

          <Button
            class="mt-5 self-center"
            text="En savoir plus →"
            link="/contact"
            aria-label="Lien vers la page de contact"
            target="_self"
            type="button"
          />
        </div>

        <div
          class="bg-white rounded-md shadow-xl shadow-[#F2EBF4] flex flex-col justify-between border-b-8 border-[#FFC800] w-full lg:w-1/3 p-5 mb-10 lg:mb-0">
          
          <div>
            <h2 class="mb-2 font-bold">SITE CMS</h2>

            <p>Site one-page = à partir de <span class="font-bold text-xl">500€</span> </p>

            <p>Site Vitrine (5 pages) = à partir de <span class="font-bold text-xl">1000€</span> </p>

            <p>Site e-commerce = à partir de <span class="font-bold text-xl">1500€</span> </p>

            <p class="font-bold mt-5">Facilités de paiement disponibles.</p>

            <p class="mb-4">Pour ceux qui souhaitent devenir autonome rapidement & simplement.</p>

            <h3 class="font-bold">Audit stratégique & créatif</h3>
            <p class="mb-2">Pour designer un site adapté à votre personnalité & à vos valeurs. Optimisation et personnalisation de
              l'expérience utilisateur.</p>

            <h3 class="font-bold">Création d'un site - Framer</h3>
            <p class="mb-2">Structure optimisée et personnalisable Gestion simplifiée via une interface intuitive.</p>

            <h3 class="font-bold">Contenu administrable</h3>
            <p class="mb-2">Modification des textes, images et videos, ajout de nouveaux contenus.</p>

            <h3 class="font-bold">Optimisation & SEO</h3>
            <p class="mb-2">Mise en place des actions de référencement (ajout de Google Analytics, gestion des urls, optimisation des
              balises html, optimisation des médias).</p>

            <h3 class="font-bold">Accompagnement & Support</h3>
            <p class="mb-2">Formation pour vous rendre autonome, hébergement et maintenance simplifiée.</p>
          </div>

          <Button
            class="mt-5 self-center"
            text="En savoir plus →"
            link="/contact"
            aria-label="Lien vers la page de contact"
            target="_self"
            type="button"
          />
        </div>

        <div
          class="bg-white rounded-md shadow-xl shadow-[#F2EBF4] flex flex-col justify-between border-b-8 border-[#FFC800] w-full lg:w-1/3 p-5 lg:mb-0">
          
          <div>
            <h2 class="mb-2 font-bold">SITE SUR-MESURE</h2>

            <p>À partir de <span class="font-bold text-xl">500€</span> </p>
            <p class="font-bold mt-5">Facilités de paiement disponibles.</p>

            <p class="mb-4">Pour ceux qui souhaitent un site sur-mesure qui répond à tous leurs besoins. Codé à la perfection.</p>

            <h3 class="font-bold">Audit stratégique & créatif</h3>
            <p class="mb-2">Conception d'un site performant, fluide, interactif et aligné avec votre personnalité et vos valeurs. Choix
              des technologies les plus adaptées à vos besoins.</p>

            <h3 class="font-bold">Expérience utilisateur ++</h3>
            <p class="mb-2">Stratégies design UX/UI haut de gamme pour une expérience utilisateur premium (navigation fluide,
              animations interactives, responsive...).</p>

            <h3 class="font-bold">Développement sur-mesure</h3>
            <p class="mb-2">Création du site totalement sur-mesure (structure, sections, composants).</p>

            <h3 class="font-bold">Intégrations avancées</h3>
            <p class="mb-2">Création de plateforme d'administration & de fonctionnalités spécifiques (plugings d'applications externes,
              création d'API...) pour vous rendre autonome.</p>

            <h3 class="font-bold">Stratégie SEO</h3>
            <p class="mb-2">Pour un site ultra fluide, référencé et sécurisé. Mise en place des actions de référencement.</p>

            <h3 class="font-bold">Accompagnement stratégique</h3>
            <p class="mb-2">Un mois supplémentaire pour analyser les performances de votre site & les améliorer.</p>
          </div>

          <Button
            class="mt-5 self-center"
            text="En savoir plus →"
            link="/contact"
            aria-label="Lien vers la page de contact"
            target="_self"
            type="button"
          />
        </div>

      </div>

      <div 
        v-motion-slide-visible-left
        :duration="500" 
        :delay="100"
        class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 w-full gap-4 md:gap-8">
        <NuxtImg 
          src="site-web-grotte-fee.png" 
          alt="Un site web de mariage"
          class="h-full object-cover rounded-md w-full md:w-1/2 order-2 md:order-1" 
          />

        <div class="w-full md:w-1/2 order-1 md:order-2">
          <h2 class="text-2xl font-semibold mb-3">Votre site peut être en ligne dès ce mois-ci 🚀</h2>

          <p>À partir de <span class="font-bold text-xl">500€</span> – Paiement flexible possible.</p>
          <p>Chaque jour sans site, ce sont des clients potentiels qui partent chez vos concurrents.</p>

          <Button
            class="mt-5"
            text="Je lance mon site aujourd'hui →"
            link="/contact"
            aria-label="Lien vers la page de contact"
            target="_self"
            type="button"
          />
        </div>
      </div>

      <div 
        v-motion-slide-visible-right
        :duration="500" 
        :delay="100"
        class="flex flex-col md:flex-row items-center justify-between mt-10 lg:mt-32 w-full mb-10 lg:mb-0 gap-4 md:gap-8">
        <div class="w-full md:w-1/2">
          <!-- Méthodologie -->
          <h2 class="text-2xl font-semibold mb-3">Votre site, prêt à performer</h2>

          <ul class="list-disc list-inside mb-5 space-y-1">
            <li>Configuration du CMS WordPress (gestionnaire de contenu le plus utilisé au monde pour la création de
              site)</li>
            <li>Mise en forme du design des pages</li>
            <li>Intégration des contenus (textes, images, mentions légales à fournir…)</li>
            <li>Formulaire de contact</li>
            <li>Responsive design (adapté aux formats mobile, tablette, ordinateur)</li>
            <li>Installation d'une extension pour l'optimisation SEO (améliorer le référencement de votre site sur les
              moteurs de recherches / pas de rédaction de contenu de vos pages)</li>
            <li>Optimisation des performances du site (système de cache permettant un chargement rapide des pages)</li>
            <li>Site sécurisé en HTTPS (certificat SSL permettant une navigation sécurisée pour vos utilisateurs)</li>
            <li>Assistance par email</li>
            <li>Guide de prise en main (WordPress)</li>
          </ul>

          <p>One-page dès <span class="font-bold text-xl">500€</span> | Vitrine dès <span class="font-bold text-xl">1000€</span> | E-commerce dès <span class="font-bold text-xl">1500€</span></p>
          <p>Gestion simple, design pro, SEO intégré.</p>
          <p>🚀 Créez, modifiez et faites évoluer votre site en toute autonomie.</p>

          <Button
            class="mt-5"
            text="Créer mon site maintenant →"
            link="/contact"
            aria-label="Lien vers la page de contact"
            target="_self"
            type="button"
          />
        </div>
        <NuxtImg src="restaurant.png" alt="Un site web de mariage"
          class="h-full object-cover rounded-md w-full md:w-1/2" />
      </div>

      <!-- CTA -->
      <p class="mt-10 lg:mt-32">
        🚀 Prêt(e) à concrétiser votre idée avec un <strong>expert en développement web</strong> ?
        <NuxtLink to="/contact" title="Discutons ensemble de votre projet web"
          aria-label="Discutons ensemble de votre projet web"
          class="text-[#FFC800] font-bold hover:underline hover:translate-x-1 transition-all duration-300">
          Contactez-moi dès maintenant
        </NuxtLink>
        pour une <strong>consultation gratuite</strong> et sans engagement !
      </p>
    </article>

  </section>
</template>

<script setup lang="ts">
import { BadgeCheck } from 'lucide-vue-next';
// Métadonnées SEO avec useSeoMeta
useSeoMeta({
  title: 'Développement Web sur mesure : Vue, React, Next.js, Nuxt.js & Symfony, Adonis.js',
  ogTitle: 'Développement Web sur mesure : Vue, React, Next.js, Nuxt.js & Symfony, Adonis.js',
  description: 'Vous cherchez à créer une application web performante, moderne et évolutive ? Avec une expertise solide dans les frameworks frontend tels que Vue.js, React.js, Next.js et Nuxt.js, ainsi que dans les solutions backend comme Symfony, Node.js et Adonis.js, je vous accompagne dans la réalisation de votre projet de A à Z.',
  ogDescription: 'Vous cherchez à créer une application web performante, moderne et évolutive ? Avec une expertise solide dans les frameworks frontend tels que Vue.js, React.js, Next.js et Nuxt.js, ainsi que dans les solutions backend comme Symfony, Node.js et Adonis.js, je vous accompagne dans la réalisation de votre projet de A à Z.',
  ogImage: 'https://vincentduguet.dev/homme-barbu-devant-ordinateur.png',
  twitterCard: 'summary_large_image',
  keywords: 'développement web, Vue.js, React.js, Next.js, Nuxt.js, Symfony, Node.js, Adonis.js, application web performante, développement sur mesure',
  author: 'Vincent Duguet',
});
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}

a:hover {
  color: #5A3B5D;
  /* Changement de couleur au survol */
}
</style>