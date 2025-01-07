<template>
    <nav class="flex flex-row justify-center gap-4 text-xl text-[#5A3B5D] p-8 font-sans">
        <NuxtLink v-for="nav in nav" :to="nav.to">
            {{ nav.label }}
        </NuxtLink>
    </nav>
</template>

<script setup lang="ts">
const router = useRouter()

const nav = [
    { label: 'Accueil', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Réalisations', to: '/realisations' },
    { label: 'Compétences', to: '/competences' },
    { label: 'CV', to: '/cv' },
    { label: 'Contact', to: '/contact' },
    // { label: 'Keyed child', onClick: () => router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`) },
    // { label: 'Non-Keyed child', onClick: () => router.push(`/parent/static-${(Math.random() * 100).toFixed()}`) },
]
</script>