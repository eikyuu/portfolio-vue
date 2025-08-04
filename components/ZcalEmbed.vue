<template>
  <div>
    <!-- Bouton d'ouverture -->
    <Button :text="text" :calendar="true" @click="isOpen = true" />

    <!-- Overlay + Modale -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <!-- Container scrollable sur mobile -->
        <div
          class="bg-white rounded-xl shadow-xl w-full max-w-4xl h-[90vh] xl:h-[1060px] flex flex-col"
          :class="{ 'mx-2': isMobile }"
          @click.self="isOpen = false"
        >
          <!-- Header -->
          <div class="flex justify-between items-center px-4 py-2 border-b">
            <h2 class="text-lg font-semibold">{{ text }}</h2>
            <button @click="isOpen = false" class="text-gray-600 hover:text-black text-2xl">&times;</button>
          </div>

          <!-- Contenu scrollable -->
          <div class="flex-1 overflow-auto">
            <iframe
              :src="`${link}?embed=1&embedType=iframe`"
              loading="lazy"
              scrolling="yes"
              class="w-full"
              :style="`border:none; height:100%; min-height:600px;`"
              id="zcal-invite"
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Button from './Button.vue';

const props = defineProps({
  link: { type: String, default: 'https://zcal.co/i/FCOozu0P' },
  text: { type: String, default: 'Planifier une réunion' },
})

const isOpen = ref(false)
const isMobile = ref(false)

onMounted(() => {
  const update = () => {
    isMobile.value = window.innerWidth < 768
  }
  update()
  window.addEventListener('resize', update)
})

// Bloquer le scroll du body quand la modale est ouverte
watch(isOpen, (open) => {
  const body = document.body
  if (open) {
    body.classList.add('overflow-hidden')
  } else {
    body.classList.remove('overflow-hidden')
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
