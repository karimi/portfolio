<script setup lang="ts">
import { ref, computed } from 'vue'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()


import { defineProps } from 'vue'

const props = defineProps<{
  slideContent: Array<{
    route: string,
    content: any[]
  }>
}>()

const slideContent = props.slideContent

const active = ref(0)
const next = computed(() => (active.value + 1) % slideContent.length)

function goNext() {
  active.value = next.value
}

// Calculate left position for each slide
function getLeft(index: number) {
  const diff = (index - active.value + slideContent.length) % slideContent.length
  if (diff === 0) return '0%'           // active
  if (diff === 1) return '66.666%'      // next
  if (diff === 2) return '133.333%'     // after next
  if (diff === slideContent.length - 1) return '-66.666%' // previous
  return '200%'                         // hidden
}

// On mount, set active from URL if present
if (route.query.slide) {
  const idx = slideContent.findIndex(s => s.route === route.query.slide)
  if (idx !== -1) {
    active.value = idx
  }
}

// Update URL when active changes
watch(active, (val) => {
  router.replace({ query: { ...route.query, slide: slideContent[val].route } })
})
</script>

<template>
<div class="relative w-full h-full overflow-hidden">
  <div
    v-for="(slide, index) in slideContent"
    :key="index"
    :style="{
      left: getLeft(index),
      transition: 'left 0.5s cubic-bezier(.4,0,.2,1)'
    }"
    :class="[
      'absolute top-0 h-full w-2/3',
      (index === next || index === ((active - 1 + slideContent.length) % slideContent.length)) ? 'cursor-pointer inactive-slide' : '',
      (index !== active && index !== next && index !== ((active - 1 + slideContent.length) % slideContent.length))
      ? 'opacity-0'
      : ''
    ]"
    @click="index === next && goNext()"
  >
    <div class="flex flex-col justify-center h-full-lg text-2xl font-bold space-y-4 w-full p-8 md:p-16">
      <template v-for="item in slide.content">
        <template v-if="item.type === 'img' || (item.tag && item.tag === 'img')">
          <span class="img-bracket" style="position:relative;display:inline-block;">
            <component :is="item" />
            <span class="corner tl"></span>
            <span class="corner tr"></span>
            <span class="corner bl"></span>
            <span class="corner br"></span>
          </span>
        </template>
        <template v-else>
          <component :is="item" />
        </template>
      </template>
      <div
        v-if="index === active"
        class="absolute right-0"
        style="top:100px; bottom:80px; width:1px; background:black;"
      ></div>
    </div>
  </div>
</div>
</template>

<style scoped>
.inactive-slide {
  filter: grayscale(1) blur(4px);
  transition: filter 0.5s;
}
</style>
