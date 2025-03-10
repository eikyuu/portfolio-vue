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

                <h2 class="text-2xl font-bold">Teapot</h2>

            </div>

            <div class="space-y-4">
                <NuxtLink to="/daily-ui-challenges/coffee-ui">
                    <NuxtImg src="daily-ui-challenges/coffee-ui.jpg" class="rounded-xl object-cover" format="webp" loading="lazy" width="300" height="300" alt="Coffee" />
                </NuxtLink>

                <h2 class="text-2xl font-bold">Ice Coffee</h2>
            </div>

            <div class="space-y-4">
                <NuxtLink to="/daily-ui-challenges/select-your-role">
                    <NuxtImg src="daily-ui-challenges/role-1.png" class="rounded-xl object-cover" format="webp" loading="lazy" width="300" height="300" alt="Select your role" />
                </NuxtLink>

                <h2 class="text-2xl font-bold">Select your role</h2>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>