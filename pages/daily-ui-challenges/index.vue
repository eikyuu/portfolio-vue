<template>
    <section>
        <h1 class="text-4xl font-bold">Daily UI Challenges</h1>

        <p class="text-sm mt-4">
            Retrouvez ici tous les défis quotidiens que je réalise via le site Daily UI.
        </p>

        <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="space-y-4">
                <NuxtLink to="/daily-ui-challenges/modal-teapot">
                    <NuxtImg src="daily-ui-challenges/teapot.jpg" class="rounded-xl object-cover" format="webp" loading="lazy" width="300" height="300" alt="Teapot" />
                </NuxtLink>

                <h1 class="text-2xl font-bold">Teapot</h1>

                <p class="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex est vel velit, recusandae veniam sequi
                    voluptatem fugiat natus laborum consectetur adipisci.
                </p>
            </div>

            <div class="space-y-4">
                <NuxtLink to="/daily-ui-challenges/coffee-ui">
                    <NuxtImg src="daily-ui-challenges/coffee-ui.jpg" class="rounded-xl object-cover" format="webp" loading="lazy" width="300" height="300" alt="Coffee" />
                </NuxtLink>

                <h1 class="text-2xl font-bold">Ice Coffee</h1>

                <p class="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex est vel velit, recusandae veniam sequi
                    voluptatem fugiat natus laborum consectetur adipisci.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>