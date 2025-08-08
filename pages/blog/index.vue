<template>
    <section v-motion-slide-visible-once-top :duration="500" :delay="100" class="mt-32 ">
        <TitleUnder :title="title" tag="h1" />
        <div class="flex flex-col flex-wrap md:flex-row justify-between gap-5 mt-10 lg:mt-32">
            <BlogCard v-for="article in articles" :key="article.slug" :article="article" />
        </div>

    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlogCard from '~/components/blog/BlogCard.vue'
import { articles } from '~/pages/blog/articles'

const title = ref('Blog Tech & Design : UX, Développement et SEO 🚀')

</script>