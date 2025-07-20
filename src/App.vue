<script setup lang="ts">
import { ref } from 'vue';

const showMenu = ref(false);
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-200">
    <header class="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div class="flex items-center justify-between px-6 py-4">
        <div class="text-xl font-bold">Branding</div>
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <button class="md:hidden flex items-center text-gray-700" @click="showMenu = !showMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div v-if="showMenu" class="md:hidden px-6 pb-4">
        <nav class="flex flex-col space-y-2">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
      <!-- Header separator -->
      <div class="absolute left-[5px] right-[5px] bottom-0 h-[1px] bg-black"></div>
    </header>
    <div class="h-full">
      <RouterView />
    </div>
    <footer class="fixed bottom-0 left-0 w-full px-6 py-3 flex flex-col md:flex-row items-center justify-between z-50 bg-transparent shadow-none">
      <!-- Footer separator -->
      <div class="absolute left-[5px] right-[5px] top-0 h-[1px] bg-black"></div>
      <div class="text-gray-700 text-sm">
        Contact: <a href="mailto:your@email.com" class="hover:text-blue-600">your@email.com</a>
      </div>
      <div class="text-gray-500 text-xs mt-2 md:mt-0">
        &copy; 2024 Your Name. All rights reserved.
      </div>
    </footer>
  </div>
</template>
