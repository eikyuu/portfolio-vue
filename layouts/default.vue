<template>

  <!-- header desktop -->
  <header class="hidden md:flex flex-row items-center justify-center gap-8 mb-20 mt-20">
    <nav>
      <ul class="flex justify-center text-[#5A3B5D] text-base gap-8">
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/developpement-web-vue-react-symfony-adonis">Développement Web</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/developpement-mobile-react-native-flutter-swift-kotlin">Développement Mobile</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/design-ux-ui-figma">Design UX/UI</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>

    <NuxtLink to="/contact"
      class="hidden lg:inline-flex bg-[#FFC800] text-[#5A3B5D] text-base text-center rounded-md items-center gap-2 p-2">
      <p>Disponibilité confirmée</p>
      <span class="inline-block bg-green-400 h-3 w-3 rounded-full"></span>
    </NuxtLink>

  </header>


  <!-- header mobile -->
  <!-- <header class="md:hidden">
    <nav class="bg-[#5A3B5D] p-4 fixed bottom-0 left-0 right-0 flex items-center justify-around z-50">
      <NuxtLink to="/">
        <NuxtImg src="house.svg" width="30" height="30" alt="Un logo violet et jaune" />
      </NuxtLink>
      <NuxtLink to="/contact">
        <NuxtImg src="mail.svg" width="30" height="30" alt="Un logo violet et jaune" />
      </NuxtLink>
      <NuxtLink to="/developpement-web-vue-react-symfony-adonis">
        <NuxtImg src="send.svg" width="30" height="30" alt="Un logo violet et jaune" />
      </NuxtLink>
    </nav>
  </header> -->

  <main class="max-w-screen-2xl mx-auto p-4 md:p-0 md:px-4 text-sm md:text-base leading-5 md:leading-8">
    <slot />
  </main>   
  
  <!-- <Footer /> -->

  <footer class=" text-[#FFC800] text-sm md:text-base text-center mt-20 mb-20">
    <p>© 2025 Vincent Duguet - Développeur Web & Mobile Freelance à Tours</p>
  </footer>

</template>
