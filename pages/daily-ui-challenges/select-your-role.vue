<template>
    <section class="max-w-5xl mx-auto text-center space-y-10">
      <h1>Select your roles</h1>
      <p>To start your project we need to customize your preferences.</p>
  
      <!-- Conteneur des rôles -->
      <div class="flex flex-col md:flex-row justify-between space-y-10 md:space-x-4 md:space-y-0">
        <div 
          v-for="r in roles" 
          :key="r" 
          @click="selectRole(r)" 
          class="cursor-pointer rounded-lg transition border-2 w-lg md:w-[20rem] h-[20rem] flex items-center justify-center flex-col " 
          :class="role === r ? 'border-teal-300 shadow-lg shadow-teal-300/50' : 'border-[#D9D9D9]'"
        >
          <input type="radio" :id="r" name="role" :value="r" class="sr-only">
          <label :for="r">
            <NuxtImg :src="`daily-ui-challenges/${r}.png`" :alt="r" class="rounded-lg" sizes="150"/>
          </label>

            <p class="mt-4 text-lg font-semibold" :class="{ 'text-teal-300': role === r }">{{ r }}</p>
        </div>
      </div>
  
      <!-- Indicateurs (bulles) -->
      <div class="flex justify-center mt-4 space-x-2">
        <span 
          v-for="r in roles" 
          :key="r" 
          class="h-3 w-3 rounded-full bg-gray-300 transition-all"
          :class="{ 'bg-teal-300 scale-125': role === r }"
        ></span>
      </div>
  
      <button class="mt-6 px-6 py-2 bg-teal-300 text-black rounded-lg">Next</button>
    </section>
  </template>
  
  <script lang="ts" setup>
  const role = ref<string>('')
  const roles = ['role-1', 'role-2', 'role-3']
  
  const selectRole = (selectedRole: string) => {
    role.value = selectedRole
  }
  </script>
  