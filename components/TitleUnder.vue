<template>
    <div class="block flex justify-center">
        <div
            class="relative inline-block before:content-[''] before:absolute before:bg-[#FFC800] before:top-[1rem] before:md:top-[1rem] before:left-0 before:right-0 before:h-[0.8rem] before:md:h-[1.5rem] before:transform before:scale-100 before:skew-x-[-8deg] before:-z-10 rounded-xl before:rounded">
            <span class="relative text-[#5A3B5D] font-bold text-2xl md:text-3xl xl:text-4xl">{{ props.title }}</span>
        </div>

    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
}
const props = defineProps<Props>()
</script> 