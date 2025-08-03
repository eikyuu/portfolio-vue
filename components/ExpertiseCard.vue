<template>

    <div class="bg-white rounded-md shadow-xl shadow-[#F2EBF4] p-5 flex flex-col xl:flex-row items-center border-b-8 border-[#FFC800] ">

        <NuxtImg class="rounded-md" :src="img" width="240" height="110" format="webp" loading="lazy" alt="Une image qui représente un service" fit="cover" />

        <div class="flex flex-col items-center xl:items-start xl:pl-10 mt-10">
            <h3 v-if="props.title" class="font-bold text-[#5A3B5D] text-xl mb-10">{{ props.title }}</h3>
            <div class="expertise-text">
                <slot></slot>
            </div>
            <Button v-if="props.link" class="my-5" :text="props.textBtn" :link="props.link" />
        </div>
    </div>

</template>

<script setup lang="ts">
import Button from './Button.vue';

interface Props {
    img: string;
    title?: string;
    btnPosition?: 'float-end' | 'float-first',
    link?: string;
    textBtn: string;
    width?: string
    height?: string;
}
const props = defineProps<Props>()
</script>