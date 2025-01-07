<template>
    <button class="relative border rounded-md border-[#5A3B5D] hover:bg-white ease-in-out duration-300 w-52 h-10 before:content-[''] before:absolute before:bg-[#FFC800] before:left-1 before:right-0 before:top-1 before:-z-10 before:h-10 before:w-[13rem] before:rounded  ">
        <!-- <span class="relative z-20">voir le projet</span> -->
         <a :href="props.link" target="_blank" class="relative z-20">voir le projet</a>
    </button>
</template>

<script setup lang="ts">
interface Props {
    link: string;
}
const props = defineProps<Props>()
</script>