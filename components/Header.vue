<template>
  <!-- Header -->
  <header class="shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
    <nav class="max-w-screen xl:max-w-max mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-bold text-[#5A3B5D]">VINCENTDUGUET.DEV</NuxtLink>
        </div>

        <!-- service dropdown -->
        <div class="dropdown relative block ml-10 hidden xl:block" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
          <button class="dropbtn text-[#5A3B5D]">Services</button>
          <div class="dropdown-content hidden absolute z-50 bg-white text-[#5A3B5D]">
            <ul class="flex flex-col justify-center items-center w-max text-[#5A3B5D] text-base gap-8 rounded-md shadow-md p-4">
              <li v-for="item in services" :key="item.to" class="w-full hover:bg-gray-50 text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Menu pour les grands écrans -->
        <div class="hidden xl:block">
          <div class="ml-10 flex items-baseline space-x-4">

            <ul class="flex justify-center text-[#5A3B5D] text-base gap-8">
              <li v-for="item in nav" :key="item.to">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
              </li>
            </ul>

          </div>
        </div>

        <!-- Bouton Hamburger -->
        <div class="flex xl:hidden">
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
    <div v-if="isOpen" ref="componentRef" class="xl:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ul>
          <li v-for="item in [...services, ...nav]" :key="item.to"
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

const services = [
  { label: 'Développement Web', to: '/developpement-web-vue-react-symfony-adonis' },
  { label: 'Développement Mobile', to: '/developpement-mobile-react-native-swift' },
  { label: 'Développement WordPress', to: '/developpement-wordpress-sur-mesure' },
]

const nav = [
  { label: 'Design UX/UI', to: '/design-ux-ui-figma' },
  { label: 'Mes Collaborations & Projets', to: '/mes-collaborations-projets' },
  { label: 'Contact', to: '/contact' },
  { label: 'Blog', to: '/blog' },
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

const onmouseenter = () => {
  const dropdown = document.querySelector('.dropdown-content')
  dropdown.classList.toggle('hidden')  
}

const onmouseleave = () => {
  const dropdown = document.querySelector('.dropdown-content')
  dropdown.classList.add('hidden')
}

</script>
