<template>
  <!-- Header -->
  <header class="shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-bold text-[#5A3B5D]">VINCENTDUGUET.DEV</NuxtLink>
        </div>

        <!-- Menu pour les grands écrans -->
        <div class="hidden lg:block">
          <div class="ml-10 flex items-baseline space-x-4">

            <ul class="flex justify-center text-[#5A3B5D] text-base gap-8">
              <li v-for="item in nav" :key="item.to">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
              </li>
            </ul>

          </div>
        </div>

        <!-- Bouton Hamburger -->
        <div class="flex lg:hidden">
          <button ref="excludeRef" @click="isOpen = !isOpen" type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Menu Mobile -->
    <div v-if="isOpen" ref="componentRef" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ul>
          <li v-for="item in nav" :key="item.to"
            class="hover:bg-gray-50 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const nav = [
  { label: 'Accueil', to: '/' },
  { label: 'Développement Web', to: '/developpement-web-vue-react-symfony-adonis' },
  { label: 'Développement Mobile', to: '/developpement-mobile-react-native-flutter-swift-kotlin' },
  { label: 'Design UX/UI', to: '/design-ux-ui-figma' },
  { label: 'Mes Collaborations & Projets', to: '/mes-collaborations-projets' },
  { label: 'Contact', to: '/contact' },
]

const isOpen = ref<boolean>(false);
const componentRef = ref<HTMLElement | null>(null)
const excludeRef = ref<HTMLElement | null>(null)

useClickOutside(
  componentRef as Ref<HTMLElement>,
  () => {
    isOpen.value = false
  },
  excludeRef as Ref<HTMLElement>
)

</script>
