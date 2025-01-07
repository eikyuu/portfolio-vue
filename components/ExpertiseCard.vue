<template>

    <div class="shadow-lg p-5 flex flex-col xl:flex-row items-center border-b-8 border-[#FFC800]">

        <NuxtImg :src="img" width="480" height="220" />

        <div class="xl:pl-10 mt-10">
            <h3 class="font-bold text-[#5A3B5D] text-xl mb-10">{{ props.title }}</h3>
            <p class="expertise-text" v-html="props.text"></p>

        </div>
    </div>

</template>

<script setup lang="ts">
interface Props {
    img: string;
    title: string;
    text: string;
}
const props = defineProps<Props>()
</script>