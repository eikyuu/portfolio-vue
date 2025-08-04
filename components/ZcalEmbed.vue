<template>
  <div>
    <!-- Trigger button -->

    <Button :text="text" :calendar="true" @click="isOpen = true" />

    <!-- Overlay + Modal -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2"
        @click.self="isOpen = false"
      >
        <div
          class="bg-white rounded-md shadow-md w-full max-w-[1260px] max-h-[95vh] overflow-scroll relative"
        >
          <div class="flex justify-between items-center px-4 py-2 border-b">
            <h2 class="text-lg font-semibold">{{ text }}</h2>
            <button @click="isOpen = false" class="text-gray-600 hover:text-black text-2xl">&times;</button>
          </div>
          <div class="w-full">
            <iframe
              :src="`${link}?embed=1&embedType=iframe`"
              loading="lazy"
              scrolling="no"
              :style="iframeStyle"
              id="zcal-invite"
              class="w-full"
            />
          </div>
        </div>  
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  link: {
    type: String,
    default: 'https://zcal.co/i/FCOozu0P',
  },
  height: {
    type: Number,
    default: 870,
  },
  text: {
    type: String,
    default: 'Planifier une réunion',
  },
})

const isOpen = ref(false)

const iframeStyle = computed(() =>
  `border:none; height:${props.height}px;`
)

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
