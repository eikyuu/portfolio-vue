<template>



<NuxtLink v-if="link" :to="props.link" :target="blank" class=" z-20 ">
    <button
        ref="buttonRef"
        class="relative border rounded-md border-[#5A3B5D] px-6 py-1 before:content-[''] before:absolute before:bg-[#F2EBF4] before:left-2 before:right-0 before:top-1 before:-z-10 before:h-[calc(var(--button-height))] before:w-full before:rounded hover:bg-white ease-in-out duration-300">
        <span class="z-20 ">{{ props.text }}</span>
    </button>
</NuxtLink>


<button v-else
        ref="buttonRef"
        class="relative border rounded-md border-[#5A3B5D] px-6 py-1 before:content-[''] before:absolute before:bg-[#F2EBF4] before:left-2 before:right-0 before:top-1 before:-z-10 before:h-[calc(var(--button-height))] before:w-full before:rounded hover:bg-white ease-in-out duration-300">
        <span  class="z-20 ">{{ props.text }}</span>
    </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
    link?: string;
    text: string;
    color?: 'bg-[#FFC800]' | 'bg-[#F2EBF4]';
    blank?: '_blank' | '_self';
}

const props = withDefaults(defineProps<Props>(), {
    color: 'bg-[#F2EBF4]',
});

// Référence au bouton
const buttonRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (buttonRef.value) {
        // Calcul de la hauteur du bouton
        const buttonHeight = buttonRef.value.offsetHeight + 2;

        // Mise à jour de la variable CSS --button-height
        buttonRef.value.style.setProperty('--button-height', `${buttonHeight}px`);
    }
});
</script>

<style scoped>
button {
    --button-height: 32px; /* Valeur initiale, sera recalculée dynamiquement */
}
</style>