<template>
  <div>

    <div class="block flex justify-center">
            <h1
                class="mb-10 xl:mb-20 relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] before:top-[1rem] before:md:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] before:md:h-[1.5rem] before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 rounded-xl before:rounded">
                <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">{{ blog.title }}</span>
            </h1>
    </div>

    <article>
      <NuxtImg :src="`${route.params.slug}.jpg`" alt="Image de l'article" class="mb-8 w-full h-full object-cover rounded-md " />
      <div v-if="blog.content" v-html="blog.content" class="space-y-4"></div>
      <p v-else>Article introuvable.</p>
    </article>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const blogs = {
  "UX-UI-et-Accessibilite-Pourquoi-un-Bon-Design-Fait-Toute-la-Difference": { 
    title: "🎨 UX/UI et Accessibilité : Pourquoi un Bon Design Fait Toute la Différence", 
    meta: "Découvrez pourquoi l’UX/UI et l’accessibilité sont essentiels dans la conception web et mobile, et comment optimiser vos interfaces pour une meilleure expérience utilisateur.",
    image : '/book.jpg',
    content: `
<h2 class='font-bold text-2xl'>Pourquoi l’UX/UI Est Indispensable en Développement Web et Mobile ?</h2>
<p>Un site ou une application bien conçus ne se limitent pas à un beau design. L’expérience utilisateur (UX) et l’interface utilisateur (UI) influencent directement l’engagement, la conversion et la fidélisation des utilisateurs.</p>

<p>Un bon design doit être :</p>
<ul>
  <li>✅ Intuitif : Navigation fluide et logique.</li>
  <li>✅ Esthétique : Harmonie des couleurs, typographies adaptées.</li>
  <li>✅ Accessible : Adapté aux personnes en situation de handicap.</li>
</ul>

<h2 class='font-bold text-2xl'>🎯 L’Accessibilité : Un Enjeu Majeur</h2>
<p>L’accessibilité numérique garantit que tout le monde puisse utiliser une interface, y compris les personnes ayant des limitations visuelles, motrices ou cognitives.</p>

<h2 class='font-bold text-2xl'>Quelques bonnes pratiques UX/UI pour améliorer l’accessibilité :</h2>
<ul>
  <li>🟢 Contraste élevé entre le texte et l’arrière-plan.</li>
  <li>🟢 Navigation clavier et compatibilité avec les lecteurs d’écran.</li>
  <li>🟢 Taille des boutons et espacements adaptés.</li>
  <li>🟢 Balises ARIA pour une meilleure compréhension du contenu par les technologies d’assistance.</li>
  <li>🎯 Conseil SEO : Google valorise les sites accessibles. Optimiser l’UX/UI améliore aussi votre référencement !</li>
</ul>

<h2 class='font-bold text-2xl'>Exemples d’Optimisation UX/UI en Développement</h2>
<p>J’ai appliqué ces principes dans mes projets pour optimiser l’expérience utilisateur :</p>
<ul>
  <li>🖥️ Design Mobile-First : Un site web pensé d’abord pour mobile assure une navigation optimale.</li>
  <li>🎨 Hiérarchisation des contenus : Une mise en page claire améliore la lisibilité et la compréhension.</li>
  <li>🚀 Temps de chargement réduit : Un site rapide réduit le taux de rebond et améliore l’expérience globale.</li>
</ul>

<h2 class='font-bold text-2xl'>Pourquoi Intégrer l’UX/UI dans Votre Stratégie Digitale ?</h2>
<p>Un design centré sur l’utilisateur, combiné à une bonne accessibilité, garantit :</p>
<ul>
  <li>🔹 Une meilleure rétention des visiteurs.</li>
  <li>🔹 Une expérience utilisateur optimisée pour tous les appareils.</li>
  <li>🔹 Une amélioration du référencement SEO.</li>
</ul>

<p>💡 Envie d’optimiser votre site ou votre application ? Contactez-moi pour un audit UX/UI personnalisé !</p>
`
  }
};

useSeoMeta({
  title: blogs[route.params.slug]?.title || 'Article introuvable',
  ogTitle: blogs[route.params.slug]?.title || 'Article introuvable',
  description: blogs[route.params.slug]?.meta || '',
  ogDescription: blogs[route.params.slug]?.meta || '',
  ogImage: 'https://vincentduguet.dev/book.jpg',
  twitterCard: 'summary_large_image',
});

const blog = blogs[route.params.slug] || { title: "Article introuvable", content: "" };
</script>

<style scoped>
p {
  white-space: pre-line; /* Preserve line breaks in content */
}
</style>