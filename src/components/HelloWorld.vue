<script setup lang="ts">
import { ref, computed, h } from 'vue'

const slideContent = [
  [
    h('b', { class: 'text-lg' },'Welcome to Slide 1'),
    h('img', { src: 'https://picsum.photos/200', class: 'w-full h-[40vh] object-cover rounded', style: 'max-width:100%; max-height:60vh;' }),
    h('p', { class: 'text-sm font-light' }, 'This is some description for Slide 1.')
  ],
  [
    h('img', { src: 'https://picsum.photos/250', class: 'w-full h-[40vh] object-cover rounded', style: 'max-width:100%; max-height:60vh;' }),
    h('b', 'Slide 2 Title'),
    h('p', { class: 'text-sm' }, 'Details about Slide 2.')
  ],
  [
    h('img', { src: 'https://picsum.photos/260', class: 'w-full h-[40vh] object-cover rounded', style: 'max-width:100%; max-height:60vh;' }),
    h('b', 'Slide 3 Heading'),
    h('p', { class: 'text-sm' }, 'Information for Slide 3.')
  ],
  [
    h('img', { src: 'https://picsum.photos/230', class: 'w-full h-[40vh] object-cover rounded', style: 'max-width:100%; max-height:60vh;' }),
    h('b', 'Slide 4 Overview'),
    h('p', { class: 'text-sm' }, 'Summary for Slide 4.')
  ]
]

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
    <div class="flex flex-col justify-center h-full rounded-lg text-2xl font-bold space-y-4 w-full p-8 md:p-16">
      <template v-for="item in slide">
          <component :is="item" />
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
