<template>
        <NuxtLink :to="`/blog/${article.slug}`" prefetch class="flex flex-col justify-between p-5 w-full h-full md:w-[calc(50%-1rem)] md:h-[35rem] lg:w-[calc(33%-1rem)] bg-[#F2EBF4]/20 rounded-md shadow-md shadow-[#F2EBF4]">

            <NuxtImg :src="article.image" alt="Article 1" class="mb-2 w-full h-60 object-cover" />
            <h2 class="text-lg font-bold">{{ article.title }}</h2>
            <p class="text-sm max-w-xl">
                {{ article.resume }}
            </p>

            <div class="flex justify-between w-full mt-5">
                <p class="text-sm text-[#5A3B5D]">Publié le {{ article.publishedDate }}</p>
                <p class="text-sm text-[#5A3B5D]">Temps de lecture : {{ article.time }} min</p>
            </div>

            <Button class="mt-5 self-start" text="Lire la suite" aria-label="Lire la suite" />

        </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article';
import Button from '~/components/Button.vue';

interface Props {
    article: Article;
}

const props = defineProps<Props>();
</script>
