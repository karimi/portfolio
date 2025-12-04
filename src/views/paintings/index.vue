<template>
    <Carousel :slides="slides">
        <template #slide="{ slide }">
            <component :is="slide.component" />
        </template>
    </Carousel>
</template>

<script setup>
import Carousel from '../../components/Carousel.vue'
import Clove from './Clove.vue'
import BunnyChow from './BunnyChow.vue'
import ThreeAM from './ThreeAM.vue'
import ATrain from './ATrain.vue'
import Cat from './Cat.vue'
import Fredrickstead from './Fredrickstead.vue'
import Lullaby from './Lullaby.vue'
import RoadTrip from './RoadTrip.vue'
import Mesimeri from './Mesimeri.vue'
import OnIce from './OnIce.vue'
import Raw from './Raw.vue'
import Rise from './Rise.vue'
import Utah from './Utah.vue'
import WeAreTheSea from './WeAreTheSea.vue'

const slides = [
    { route: 'clove', component: Clove },
    { route: 'bunnychow', component: BunnyChow },
    { route: '300am', component: ThreeAM },
    { route: 'atrain', component: ATrain },
    { route: 'cat', component: Cat },
    { route: 'fredrickstead', component: Fredrickstead },
    { route: 'lullaby', component: Lullaby },
    { route: 'roadtrip', component: RoadTrip },
    { route: 'mesimeri', component: Mesimeri },
    { route: 'onice', component: OnIce },
    { route: 'raw', component: Raw },
    { route: 'rise', component: Rise },
    { route: 'utah', component: Utah },
    { route: 'wearethesea', component: WeAreTheSea },
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