<template>
    <div class="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-[#F2EBF4]">
        <div class="w-64 bg-gray-200 rounded-full h-2.5">
            <div class="bg-[#AD88C7] h-2.5 rounded-full" :style="{ width: progress + '%' }"></div>
        </div>
        <span class="mt-4 text-lg font-semibold text-[#AD88C7]">{{ Math.round(progress) }}%</span>
    </div>
</template>
    
<script setup lang="ts">
defineProps({
  progress: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
/* Le style est géré par Tailwind CSS, plus besoin de CSS spécifique ici */
</style>