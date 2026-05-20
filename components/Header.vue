<template>
  <header class="bg-white/85 shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-brand-lavender">
    <nav class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
         aria-label="Menu principal">
      <div class="flex h-16 items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="text-lg font-bold text-brand-purple focus-ring rounded"
                    aria-label="Vincent Duguet — Retour à l’accueil">
            VINCENTDUGUET.DEV
          </NuxtLink>
          <AvailabilityBadge variant="compact" class="hidden sm:inline-flex" />
        </div>

        <!-- Navigation Desktop -->
        <ul class="hidden xl:flex items-center gap-2 text-brand-purple text-sm font-semibold uppercase tracking-wide">
          <li ref="dropdownRef" class="relative">
            <button
              type="button"
              class="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-brand-lavender focus-ring"
              aria-haspopup="menu"
              :aria-expanded="showDropdown"
              @click="toggleDropdown"
              @keydown.escape="closeDropdown"
            >
              Services
              <ChevronDown class="w-4 h-4 transition-transform" :class="showDropdown && 'rotate-180'" aria-hidden="true" />
            </button>
            <ul
              v-show="showDropdown"
              role="menu"
              class="absolute left-0 top-full mt-1 min-w-[280px] bg-white rounded-xl shadow-card border border-brand-lavender py-2"
            >
              <li v-for="item in services" :key="item.to" role="none">
                <NuxtLink
                  :to="item.to"
                  role="menuitem"
                  class="block px-4 py-2 text-brand-purple hover:bg-brand-lavender focus-ring"
                  :aria-current="isCurrent(item.to) ? 'page' : undefined"
                  @click="closeDropdown"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li v-for="item in nav" :key="item.to">
            <NuxtLink
              :to="item.to"
              :aria-current="isCurrent(item.to) ? 'page' : undefined"
              class="px-3 py-2 rounded-lg hover:bg-brand-lavender focus-ring transition"
              :class="isCurrent(item.to) && 'bg-brand-yellow/20 text-brand-purple-700'"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Menu Mobile (Hamburger) -->
        <div class="xl:hidden">
          <button
            ref="excludeRef"
            type="button"
            :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-brand-purple hover:bg-brand-lavender focus-ring"
            @click="isOpen = !isOpen"
          >
            <X v-if="isOpen" class="w-6 h-6" aria-hidden="true" />
            <Menu v-else class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Menu Mobile -->
    <div
      v-show="isOpen"
      id="mobile-menu"
      ref="componentRef"
      class="xl:hidden bg-white border-t border-brand-lavender shadow-card"
    >
      <ul class="px-4 py-4 space-y-1 text-sm font-semibold uppercase tracking-wide">
        <li v-for="item in [...services, ...nav]" :key="item.to">
          <NuxtLink
            :to="item.to"
            :aria-current="isCurrent(item.to) ? 'page' : undefined"
            class="block px-3 py-3 rounded-lg text-brand-purple hover:bg-brand-lavender focus-ring"
            :class="isCurrent(item.to) && 'bg-brand-yellow/20'"
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
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const route = useRoute()

const isOpen = ref(false)
const showDropdown = ref(false)

const componentRef = ref<HTMLElement | null>(null)
const excludeRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

useClickOutside(componentRef as Ref<HTMLElement | null>, () => { isOpen.value = false }, excludeRef as Ref<HTMLElement | null>)
useClickOutside(dropdownRef as Ref<HTMLElement | null>, () => { showDropdown.value = false })

const toggleDropdown = () => { showDropdown.value = !showDropdown.value }
const closeDropdown = () => { showDropdown.value = false }

const isCurrent = (to: string) => route.path === to

const services = [
  { label: 'Création de site internet', to: '/developpement-web-vue-react-symfony-adonis' },
  { label: "Création d'application mobile", to: '/developpement-mobile-react-native' },
]

const nav = [
  { label: 'Portfolio', to: '/mes-collaborations-projets' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
</script>
