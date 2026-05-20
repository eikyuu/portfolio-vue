<template>
  <div v-motion-slide-visible-once-top :duration="500" :delay="100" class="mt-32 ">

    <div class="block flex justify-center">
            <h1
                class="mb-10 xl:mb-32 relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] before:top-[1rem] before:md:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] before:md:h-[1.5rem] before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 rounded-xl before:rounded">
                <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">{{ blog.title }}</span>
            </h1>
    </div>

    <article v-if="blog.content">
      <NuxtImg :src="`/${route.params.slug}.webp`" :alt="blog.alt" class="mb-8 w-full h-full object-cover rounded-xl" format="webp" loading="lazy"/>
      <div v-html="blog.content" class="space-y-4"></div>
    </article>
    <p v-else>Article introuvable.</p>
    <router-link to="/blog" class="text-blue-600 hover:underline mt-10 block">← Retour au blog</router-link>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { blogs, type BlogContent } from '~/data/blogs';

const route = useRoute();
const slug = route.params.slug as string;

const fallback: BlogContent = {
  title: 'Article introuvable',
  meta: '',
  alt: '',
  content: '',
};

const blog: BlogContent = blogs[slug as keyof typeof blogs] ?? fallback;

useSeoMeta({
  title: blog.title,
  ogTitle: blog.title,
  description: blog.meta,
  ogDescription: blog.meta,
  ogImage: 'https://vincentduguet.dev/book.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
