<template>
  <footer role="contentinfo" class="bg-brand-purple text-white mt-32">
    <div class="max-w-screen-2xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <p class="font-bold text-lg mb-2">Vincent Duguet</p>
        <p class="text-sm text-white/80 leading-relaxed">
          Développeur web &amp; mobile freelance basé à Tours.
          Sites accessibles, performants et durables.
        </p>
      </div>

      <nav aria-label="Navigation secondaire" class="text-sm">
        <p class="font-semibold mb-3 uppercase tracking-wide text-white/70 text-xs">Navigation</p>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="hover:text-brand-yellow focus-ring rounded">Accueil</NuxtLink></li>
          <li><NuxtLink to="/mes-collaborations-projets" class="hover:text-brand-yellow focus-ring rounded">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/blog" class="hover:text-brand-yellow focus-ring rounded">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-brand-yellow focus-ring rounded">Contact</NuxtLink></li>
        </ul>
      </nav>

      <div class="text-sm">
        <p class="font-semibold mb-3 uppercase tracking-wide text-white/70 text-xs">Me suivre</p>
        <ul class="flex gap-3" aria-label="Réseaux sociaux">
          <li>
            <a href="https://www.instagram.com/vincentduguet.dev" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-purple focus-ring transition"
               aria-label="Instagram (nouvel onglet)">
              <Instagram class="w-5 h-5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="mailto:contact@vincentduguet.dev"
               class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-purple focus-ring transition"
               aria-label="Envoyer un email">
              <Mail class="w-5 h-5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="tel:+33659630326"
               class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-purple focus-ring transition"
               aria-label="Appeler par téléphone">
              <Phone class="w-5 h-5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/15">
      <div class="max-w-screen-2xl mx-auto px-4 py-4 text-xs text-white/70 text-center">
        © {{ currentYear }} Vincent Duguet — Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Mail, Phone } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>
