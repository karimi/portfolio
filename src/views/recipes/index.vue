<template>
    <Carousel :slides="slides">
        <template #slide="{ slide }">
            <component :is="slide.component" />
        </template>
    </Carousel>
</template>

<script setup>
import Carousel from '../../components/Carousel.vue'
import DogFood from './DogFood.vue'
import BunnyChow from './BunnyChow.vue'

const slides = [
    {
        route: 'dog-food',
        component: DogFood
    },
    {
        route: 'bunnychow',
        component: BunnyChow
    },
]
</script>

<style scoped>
.paintings-wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>