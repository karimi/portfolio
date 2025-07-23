<template>
    <Carousel :slideContent="[
        {
            route: 'welcome',
            content: [
            h('b',  'Welcome to Slide 1'),
            h('img', { src: 'https://picsum.photos/800', class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
            h('p', { class: 'text-sm font-light' }, 'This is some description for Slide 1.')
            ]
        },
        {
            route: 'slide2',
            content: [
            h('img', { src: 'https://picsum.photos/850', class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
            h('b', 'Slide 2 Title'),
            h('p', { class: 'text-sm' }, 'Details about Slide 2.')
            ]
        },
        {
            route: 'slide3',
            content: [
            h('img', { src: 'https://picsum.photos/860', class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
            h('b', 'Slide 3 Heading'),
            h('p', { class: 'text-sm' }, 'Information for Slide 3.')
            ]
        },
        {
            route: 'overview',
            content: [
            h('img', { src: 'https://picsum.photos/830', class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
            h('b', 'Slide 4 Overview'),
            h('p', { class: 'text-sm' }, 'Summary for Slide 4.')
            ]
        }
    ]" />
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import { h } from 'vue'
</script>

<style scoped>
.paintings-wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>