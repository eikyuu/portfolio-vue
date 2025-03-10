<template>
    <section>
        <div class="block flex justify-center">
            <h1
                class="mb-10 xl:mb-20 relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] before:top-[1rem] before:md:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] before:md:h-[1.5rem] before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 rounded-xl before:rounded">
                <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">{{ title }}</span>
            </h1>

        </div>


            <ul class="flex flex-col xl:flex-row flex-wrap items-center md:justify-between gap-8 shadow-xl md:shadow-[#F2EBF4] md:p-10">
                <li v-for="article in articles" :key="article.slug" class=" bg-[#F2EBF4]/20 rounded-md  w-full md:w-[25rem] md:h-[35rem] shadow-md shadow-[#F2EBF4]">
                    <NuxtLink :to="`/blog/${article.slug}`" class="flex flex-col items-center justify-between p-5 h-full">

                            <NuxtImg :src="article.image" alt="Article 1" class="mb-2 w-full h-60 object-cover" />
                            <h2 class="text-lg font-bold">{{ article.title }}</h2>
                            <p class="text-sm max-w-xl">
                                {{ article.resume }}
                            </p>

                            <div class="flex justify-between w-full mt-5">
                                <p class="text-sm text-[#5A3B5D]">Publié le {{article.publishedDate}}</p>
                                <p class="text-sm text-[#5A3B5D]">Temps de lecture : {{article.time}} min</p>
                            </div>

                            <Button class="mt-5" text="Lire la suite" />

                    </NuxtLink>
                </li>
               
            </ul>

    </section>

</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import { ref } from 'vue'

const title = ref('Blog de Vincent Duguet')

const articles = [
  { title: "🎨 UX/UI et Accessibilité : Pourquoi un Bon Design Fait Toute la Différence", slug: "UX-UI-et-Accessibilite-Pourquoi-un-Bon-Design-Fait-Toute-la-Difference", image : '/book.jpg', publishedDate : "10/03/2025", time :"5", resume : "Un site ou une application bien conçus ne se limitent pas à un beau design. L’expérience utilisateur (UX) et l’interface utilisateur (UI) influencent directement l’engagement, la conversion et la fidélisation des utilisateurs..."}
];

</script>