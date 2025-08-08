<template>
    <section class="text-orange-900 max-w-xs mx-auto p-4 bg-white shadow-md rounded-md font-mono">

        <div class="space-y-4">
            <NuxtImg src="daily-ui-challenges/coffee-ui.jpg" class="rounded-xl object-cover" format="webp" loading="lazy" width="300" height="300" alt="Coffee" />

            <h1 class="text-2xl font-bold">Ice Coffee</h1>

            <p class="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex est vel velit, recusandae veniam sequi
                voluptatem fugiat natus laborum consectetur adipisci.
            </p>
        </div>

        <div class="flex flex-row justify-between mt-4">
            <div>
                <p class="text-xl font-semibold mb-2">Cup size</p>
                <div class="space-x-2">
                    <button
                        class="rounded-full border h-8 w-8" :class="{ 'bg-orange-900 text-white': size === 'S' }"
                        type="button" @click="size = 'S'">S</button>
                    <button
                        class="rounded-full border h-8 w-8" :class="{ 'bg-orange-900 text-white': size === 'M' }"
                        type="button" @click="size = 'M'">M</button>
                    <button
                        class="rounded-full border h-8 w-8" :class="{ 'bg-orange-900 text-white': size === 'L' }"
                        type="button" @click="size = 'L'">L</button>
                </div>
            </div>

            <div>
                <p class="text-xl font-semibold mb-2">Amount</p>
                <div class="flex items-center space-x-2">
                    <button
                        class="rounded-full border h-8 w-8 active:bg-orange-900 active:text-white"
                        type="button" @click="decrement">-</button>
                    <p>{{ amout }}</p>
                    <button
                        class="rounded-full border h-8 w-8 active:bg-orange-900 active:text-white"
                        type="button" @click="increment">+</button>
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center mt-32">
            <div>
                <p class="text-sm font-normal">Total price</p>
                <p class="font-bold text-xl">${{ price }}</p>
            </div>

            <button
                class="border rounded-full bg-orange-900 py-2 px-6 text-white hover:bg-white hover:text-orange-900 transition delay-150 duration-300"
                type="button">Order now</button>
        </div>

    </section>

</template>

<script setup lang="ts">

const priceBySize = {
    S: 10,
    M: 12,
    L: 15
}
const size = ref<'S' | 'M' | 'L'>('M')

const price = computed(() => priceBySize[size.value] * amout.value)

const amout = ref(0)


const increment = () => {
    amout.value++
}

const decrement = () => {
    if (amout.value > 1) {
        amout.value--
    }
}

</script>