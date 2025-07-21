<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const showMenu = ref(false);
const headerHeight = ref('64px');

const links = [
  { href: '/', label: 'About' },
  { href: '#', label: 'Art', children: [
    // { href: '/art/things', label: 'Things' },
    { href: '/art/paintings', label: 'Paintings' },
    { href: '/art/shows', label: 'Shows' }
  ]},
  // { href: '#', label: 'Failed Attempts At Becoming Rich' }, 
  { href: '#', label: 'Contact'}
];

watch(showMenu, (val) => {
  headerHeight.value = val ? '220px' : '64px';
});

// Circle position
const circleX = ref(window.innerWidth / 2 - 400);
const circleY = ref(window.innerHeight / 2 - 400);


function handleMove(e: MouseEvent | TouchEvent) {
  let x = 0, y = 0;
  if (e instanceof MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  } else if (e instanceof TouchEvent && e.touches.length) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }
  circleX.value = x - 400;
  circleY.value = y - 400;
}

onMounted(() => {
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('touchmove', handleMove);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('touchmove', handleMove);
});

</script>

<template>
  <div class="h-screen flex flex-col bg-gray-300 font-sans font-extralight relative overflow-hidden">
    <!-- Moving Circle Underlay -->
    <div
      class="fixed top-0 left-0 pointer-events-none z-0"
      :style="{
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, #a7f3d0 60%, #38bdf8 100%)',
        transform: `translate(${circleX}px, ${circleY}px)`,
        transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)'
      }"
    ></div>
    <header
      class="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
      :style="{ height: headerHeight }"
    >
      <div class="flex items-start justify-between px-6 py-4 h-[64px]">
        <div class="text-xl font-bold">Morteza Karimi</div>
        <nav class="hidden md:flex space-x-6 relative">
          <template v-for="link in links" :key="link.label">
            <div
              class="flex flex-col items-center group relative"
              @mouseenter="link.children && (headerHeight = '110px')"
              @mouseleave="link.children && (headerHeight = '64px')"
            >
              <a
                :href="link.href"
                class="text-gray-700 px-2 py-1 transition-colors duration-200"
                :class="link.children ? 'group-hover:text-blue-600' : 'hover:text-blue-600'"
              >
                {{ link.label }}
              </a>
              <div
                v-if="link.children"
                class="flex space-x-4 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
              >
                <a
                  v-for="child in link.children"
                  :key="child.label"
                  :href="child.href"
                  class="text-gray-700 hover:text-blue-600 whitespace-nowrap px-2 py-1"
                >
                  {{ child.label }}
                </a>
              </div>
            </div>
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
                <div>
                  <a :href="link.href" class="text-gray-700 hover:text-blue-600 block">{{ link.label }}</a>
                  <div v-if="link.children" class="flex flex-col space-y-1 pl-2 mt-1">
                  <a
                    v-for="child in link.children"
                    :key="child.label"
                    :href="child.href"
                    class="text-gray-700 hover:text-blue-600 block font-extralight"
                  >
                    {{ child.label }}
                  </a>
                  </div>
                </div>
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
        &copy; 2025 Morteza Karimi. All rights reserved.
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
