<template>
    <section>
        <button type="button" class="bg-[#F2EBF4] p-5 rounded-md" @click="showModal = true">NEED COFFEE</button>
        <div v-if="showModal" class="modal" @click="showModal = false">
            <div
                class="modal-overlay flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full">
                <div class="bg-white w-[80vw] p-4 rounded-md flex flex-col" @click.stop>
                    <button type="button" class="bg-[#F2EBF4] h-10 w-10 rounded-full self-end" @click="showModal = false">X</button>

                    <div class="flex flex-col items-center space-y-5">
                        <NuxtImg class="h-20 w-20 rounded-full" src="daily-ui-challenges/teapot.jpg" alt="Téléphone" />
                        <p class="text-5xl">418 I'm a teapot </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: '/teapot.jpg',
        },
    ],
})

const showModal = ref(false)
</script>