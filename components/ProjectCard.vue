<template>
    <div
        class="bg-white z-0 relative shadow-lg p-5 items-center before:content-[''] before:absolute before:bg-[#FFC800] before:left-4 before:md:left-14 before:right-0 before:bottom-[-1rem] before:h-[1.5rem] before:w-11/12 before:transform before:scale-100 before:skew-x-[-15deg] before:-z-20 rounded-xl before:rounded">

        <div class="flex flex-col xl:flex-row justify-center items-center">
            <NuxtImg :src="img" width="600" height="600" :class="`${order} rounded-md mb-10`" fit="cover" />

            <div :class="{
                'xl:pr-10': order === 'xl:order-last',
                'xl:pl-10': order !== 'xl:order-last'
            }">
                <h3 class="font-bold text-[#5A3B5D] text-xl mb-10">{{ props.title }}</h3>
                <p class="mb-10"v-html="props.text"></p>
                <Button v-if="link" :link="props.link" :class="`xl:${btnPosition}`" />
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