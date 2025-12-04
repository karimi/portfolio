<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

import { defineProps } from 'vue'

const props = defineProps<{
  slides: Array<{
    route: string,
    [key: string]: any
  }>
}>()

const slideContent = props.slides

const active = ref(0)
const carouselRef = ref<HTMLElement | null>(null)

function scrollToActive() {
  nextTick(() => {
    const el = carouselRef.value?.children[active.value] as HTMLElement
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  })
}

// On mount, set active from URL if present
if (route.query.slide) {
  const idx = slideContent.findIndex(s => s.route === route.query.slide)
  if (idx !== -1) {
    active.value = idx
  }
}

watch(active, (val) => {
  router.replace({ query: { ...route.query, slide: slideContent[val].route } })
  scrollToActive()
})

onMounted(scrollToActive)
</script>

<template>
  <div class="relative w-full h-full overflow-x-auto overflow-y-hidden">
    <div
      class="flex flex-row h-full gap-4 scroll-smooth"
      ref="carouselRef"
      style="scroll-snap-type: x mandatory;"
    >
        <div
          v-for="(slide, index) in slideContent"
          :key="index"
          :class="[
            'flex-shrink-0 w-2/3 h-full relative scroll-snap-align-center',
            index !== active ? 'inactive-slide' : ''
          ]"
          @click="active = index"
        >
        <div class="flex flex-col justify-center h-full-lg text-2xl font-bold space-y-4 w-full p-8 md:p-16">
          <slot name="slide" :slide="slide" :index="index" :active="active === index"></slot>
          <div
            class="absolute right-0"
            style="top:20px; bottom:20px; width:1px; background:black;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inactive-slide {
  filter: grayscale(1) blur(4px);
  transition: filter 0.5s;
}
.scroll-snap-align-center {
  scroll-snap-align: center;
}
</style>
