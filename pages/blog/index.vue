<template>
    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mt-20 md:mt-32">
        <TitleUnder :title="title" tag="h1" />
            <ul class="flex flex-col xl:flex-row flex-wrap items-center md:justify-between gap-8 shadow-xl md:shadow-[#F2EBF4] md:p-10">
                <li v-for="article in articles" :key="article.slug" class=" bg-[#F2EBF4]/20 rounded-md  w-full md:w-[25rem] md:h-[35rem] shadow-md shadow-[#F2EBF4]">
                    <NuxtLink :to="`/blog/${article.slug}`" prefetch class="flex flex-col items-center justify-between p-5 h-full">

                            <NuxtImg :src="article.image" alt="Article 1" class="mb-2 w-full h-60 object-cover" />
                            <h2 class="text-lg font-bold">{{ article.title }}</h2>
                            <p class="text-sm max-w-xl">
                                {{ article.resume }}
                            </p>

                            <div class="flex justify-between w-full mt-5">
                                <p class="text-sm text-[#5A3B5D]">Publié le {{article.publishedDate}}</p>
                                <p class="text-sm text-[#5A3B5D]">Temps de lecture : {{article.time}} min</p></div>

                            <Button class="mt-5" text="Lire la suite" aria-label="Lire la suite"/>

                    </NuxtLink>
                </li>
               
            </ul>
    </section>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import { ref } from 'vue'

interface Article {
    title: string;
    slug: string;
    image: string;
    publishedDate: string;
    time: string;
    resume: string;
}

const title = ref('Blog Tech & Design : UX, Développement et SEO 🚀')

const articles : Article[] = [
  { title: "🎨 UX/UI et Accessibilité : Pourquoi un Bon Design Fait Toute la Différence", slug: "UX-UI-et-Accessibilite-Pourquoi-un-Bon-Design-Fait-Toute-la-Difference", image : '/UX-UI-et-Accessibilite-Pourquoi-un-Bon-Design-Fait-Toute-la-Difference.webp', publishedDate : "10/03/2025", time :"5", resume : "Un site ou une application bien conçus ne se limitent pas à un beau design. L’expérience utilisateur (UX) et l’interface utilisateur (UI) influencent directement l’engagement, la conversion et la fidélisation des utilisateurs..."},
  {
  title: "🤖 IA et Création de Contenu : Révolution ou Illusion ?",
  slug: "IA-et-Creation-de-Contenu-Revolution-ou-Illusion",
  image: "/IA-et-Creation-de-Contenu-Revolution-ou-Illusion.webp",
  publishedDate: "04/08/2025",
  time: "6",
  resume: "L’intelligence artificielle transforme la création de contenu à grande vitesse. De la rédaction d’articles à la génération de vidéos, elle offre de nouveaux outils aux créateurs et marketeurs. Découvrez ses applications concrètes, ses avantages, ses limites..."
},
{
  "title": "💡 Pourquoi WordPress Domine la Création de Sites Web en 2025",
  "slug": "Pourquoi-WordPress-Domine-la-Creation-de-Sites-Web-en-2025",
  "image": "/Pourquoi-WordPress-Domine-la-Creation-de-Sites-Web-en-2025.webp",
  "publishedDate": "04/08/2025",
  "time": "6",
  "resume": "WordPress reste en 2025 la solution de création de sites web la plus puissante et polyvalente du marché. De grandes marques comme Disney, des écoles comme 42, ou des PME tirent parti de ses capacités pour développer leur présence en ligne. Découvrez pourquoi il continue de dominer le web..."
}

];

</script>