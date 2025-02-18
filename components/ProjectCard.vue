<template>
    <div
        class="bg-white z-0 relative shadow-xl shadow-[#F2EBF4] p-5 xl:p-10 items-center before:content-[''] before:absolute before:bg-[#FFC800] before:left-4 before:md:left-14 before:right-0 before:bottom-[-1rem] before:h-[1.5rem] before:w-11/12 before:transform before:scale-100 before:skew-x-[-15deg] before:-z-20 rounded-xl before:rounded">

        <div class="flex flex-col xl:flex-row justify-center items-center">
            <NuxtImg :src="img" width="600" height="600" :class="`${order} rounded-md mb-20`" fit="cover"
                alt="Une image qui représente un projet web ou mobile" />

            <div :class="{
                'flex flex-col items-center xl:items-start xl:pr-10': order === 'flex flex-col items-center xl:items-start xl:order-last',
                'flex flex-col items-center xl:items-start xl:pl-10': order !== 'flex flex-col items-center xl:items-start xl:order-last'
            }">
                <h3 class="font-bold text-[#5A3B5D] text-xl mb-10">{{ props.title }}</h3>
                <p class="mb-20" v-html="props.text"></p>
                <Button class="mb-5" v-if="link" text="Découvrir le projet" blank="_blank" :link="props.link ?? ''" :class="`xl:${btnPosition}`" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

interface Props {
    img: string;
    title: string;
    text: string;
    order: string
    btnPosition: 'float-end' | 'float-first',
    link?: string;
}
const props = defineProps<Props>()

</script>