<template>
  <header class="shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" role="banner">
    <nav
      class="max-w-screen xl:max-w-max mx-auto px-4 sm:px-6 lg:px-8"
      role="navigation"
      aria-label="Menu principal"
    >
      <div class="flex h-16 items-center justify-between gap-8">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-[#5A3B5D]" aria-label="Retour à l’accueil">
          VINCENTDUGUET.DEV
        </NuxtLink>

        <!-- Dropdown Services -->
        <div
          class="relative hidden xl:block"
          @mouseenter="showDropdown = true"
          @mouseleave="showDropdown = false"
        >
          <button
            class="text-[#5A3B5D] font-medium focus:outline-none"
            type="button"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
          >
            Services
          </button>
          <div
            v-show="showDropdown"
            class="absolute bg-white text-[#5A3B5D] w-max rounded-md shadow-md z-50"
          >
            <ul class="flex flex-col text-base gap-2 p-4">
              <li
                v-for="item in services"
                :key="item.to"
              >
                <NuxtLink
                  :to="item.to"
                  class="block px-3 py-2 rounded-md text-[#5A3B5D] hover:bg-gray-50"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Navigation Desktop -->
        <ul class="hidden xl:flex items-center gap-8 text-[#5A3B5D] text-base">
          <li
            v-for="item in nav"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="block rounded-md text-[#5A3B5D] hover:bg-gray-50 font-medium"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Menu Mobile (Hamburger) -->
        <div class="xl:hidden">
          <button
            ref="excludeRef"
            @click="isOpen = !isOpen"
            type="button"
            aria-label="Menu mobile"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFC800]"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Menu Mobile -->
    <div
      v-if="isOpen"
      id="mobile-menu"
      ref="componentRef"
      class="xl:hidden bg-white shadow-md mt-1"
    >
      <ul class="px-4 py-4 space-y-2">
        <li
          v-for="item in [...services, ...nav]"
          :key="item.to"
        >
          <NuxtLink
            :to="item.to"
            class="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 text-base font-medium"
            @click="isOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

const isOpen = ref(false)
const showDropdown = ref(false)

const componentRef = ref<HTMLElement | null>(null)
const excludeRef = ref<HTMLElement | null>(null)

useClickOutside(
  componentRef as Ref<HTMLElement>,
  () => {
    isOpen.value = false
  },
  excludeRef as Ref<HTMLElement>
)

const services = [
  {
    label: 'Création de Site Internet',
    to: '/developpement-web-vue-react-symfony-adonis',
  },
  {
    label: "Création d'Application Mobile",
    to: '/developpement-mobile-react-native-swift',
  },
  {
    label: 'WordPress',
    to: '/developpement-wordpress-sur-mesure',
  },
  {
    label: 'Design UX/UI',
    to: '/design-ux-ui-figma',
  },
]

const nav = [
  {
    label: 'Mes Collaborations & Projets',
    to: '/mes-collaborations-projets',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
]
</script>
