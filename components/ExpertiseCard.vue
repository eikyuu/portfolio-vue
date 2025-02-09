<template>

    <div class="shadow-xl shadow-[#F2EBF4] p-5 flex flex-col xl:flex-row items-center border-b-8 border-[#FFC800] mb-20">

        <NuxtImg :src="img" width="480" height="220" alt="Un logo violet et jaune" />

        <div class="flex flex-col items-center xl:items-start xl:pl-10 mt-10">
            <h3 v-if="props.title" class="font-bold text-[#5A3B5D] text-xl mb-10">{{ props.title }}</h3>
            <div class="expertise-text" v-html="props.text"></div>
            <Button v-if="props.link" class="my-5" :text="props.textBtn" :link="props.link" />
        </div>
    </div>

</template>

<script setup lang="ts">
import Button from './Button.vue';

interface Props {
    img: string;
    title?: string;
    text: string;
    btnPosition?: 'float-end' | 'float-first',
    link?: string;
    textBtn: string;
}
const props = defineProps<Props>()
</script>