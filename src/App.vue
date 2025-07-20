<script setup lang="ts">
import { ref, watch } from 'vue';

const showMenu = ref(false);
const headerHeight = ref('64px');

const links = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'About' },
  { href: '/paintings', label: 'Paintings' },
  { href: '#', label: 'Failed Attempts At Becoming Rich' },
  { href: '#', label: 'Contact' }
];

watch(showMenu, (val) => {
  headerHeight.value = val ? '220px' : '64px'; // Adjust height as needed for menu items
});
</script>

<template>
  <div class="h-screen flex flex-col bg-gray-300 font-sans font-extralight">
    <header
      class="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
      :style="{ height: headerHeight }"
    >
      <div class="flex items-center justify-between px-6 py-4 h-[64px]">
        <div class="text-xl font-bold">Morteza Karimi</div>
        <nav class="hidden md:flex space-x-6">
          <template v-for="link in links" :key="link.label">
            <a :href="link.href" class="text-gray-700 hover:text-blue-600">{{ link.label }}</a>
          </template>
        </nav>
        <button class="md:hidden flex items-center text-gray-700" @click="showMenu = !showMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <transition name="slide-fade">
        <div
          v-if="showMenu"
          class="md:hidden px-6 pb-4"
          style="overflow: hidden;"
        >
          <nav class="flex flex-col space-y-2">
            <template v-for="link in links" :key="link.label">
              <a :href="link.href" class="text-gray-700 hover:text-blue-600">{{ link.label }}</a>
            </template>
          </nav>
        </div>
      </transition>
      <!-- Header separator -->
      <div class="absolute left-[5px] right-[5px] bottom-0 h-[1px] bg-black"></div>
    </header>
    <main
      class="flex-1 overflow-auto transition-all duration-300"
      :style="{
        marginTop: headerHeight,
        marginBottom: '56px'
      }"
    >
      <RouterView />
    </main>
    <footer class="fixed bottom-0 left-0 w-full px-6 py-3 flex flex-col md:flex-row items-center justify-between z-50 bg-transparent shadow-none" style="height:56px;">
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

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
