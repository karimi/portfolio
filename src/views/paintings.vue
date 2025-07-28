<template>
    <Carousel :slideContent="[
        {
            route: 'welcome',
            content: [
            h('b',  'Clove'),
            h('img', { src: cloveImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
            h('p', { class: 'text-sm font-light' }, 'This is some description for Clove.')
            ]
        },
        {
            route: '300am',
            content: [
                h('b', '3:00 AM'),
                h('img', { src: am300Img, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for 3:00 AM.')
            ]
        },
        {
            route: 'atrain',
            content: [
                h('b', 'A Train'),
                h('img', { src: atrainImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for A Train.')
            ]
        },
        {
            route: 'cat',
            content: [
                h('b', 'Cat'),
                h('img', { src: catImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Cat.')
            ]
        },
        {
            route: 'fredrickstead',
            content: [
                h('b', 'Fredrickstead'),
                h('img', { src: fredricksteadImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Fredrickstead.')
            ]
        },
        {
            route: 'jaguar',
            content: [
                h('b', 'Jaguar'),
                h('img', { src: jaguarImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Jaguar.')
            ]
        },
        {
            route: 'lullaby',
            content: [
                h('b', 'Lullaby'),
                h('img', { src: lullabyImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Lullaby.')
            ]
        },
        {
            route: 'maman',
            content: [
                h('b', 'Maman'),
                h('img', { src: mamanImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Maman.')
            ]
        },
        {
            route: 'mesimeri',
            content: [
                h('b', 'Mesimeri'),
                h('img', { src: mesimeriImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Mesimeri.')
            ]
        },
        {
            route: 'onice',
            content: [
                h('b', 'On Ice'),
                h('img', { src: oniceImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for On Ice.')
            ]
        },
        {
            route: 'raw',
            content: [
                h('b', 'Raw'),
                h('img', { src: rawImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Raw.')
            ]
        },
        {
            route: 'rise',
            content: [
                h('b', 'Rise'),
                h('img', { src: riseImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Rise.')
            ]
        },
        {
            route: 'utah',
            content: [
                h('b', 'Utah'),
                h('img', { src: utahImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for Utah.')
            ]
        },
        {
            route: 'wearethesea',
            content: [
                h('b', 'We Are The Sea'),
                h('img', { src: wearetheseaImg, class: 'w-full h-[40vh] object-cover', style: 'max-width:100%; max-height:60vh;' }),
                h('p', { class: 'text-sm font-light' }, 'This is some description for We Are The Sea.')
            ]
        }
    ]" />
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import { h } from 'vue'
import cloveImg from '../assets/paintings/clove.jpeg'
import am300Img from '../assets/paintings/300am.jpeg'
import atrainImg from '../assets/paintings/atrain.jpeg'
import catImg from '../assets/paintings/cat.jpeg'
import fredricksteadImg from '../assets/paintings/fredrickstead.jpeg'
import jaguarImg from '../assets/paintings/jaguar.jpeg'
import lullabyImg from '../assets/paintings/lullaby.jpeg'
import mamanImg from '../assets/paintings/maman.jpeg'
import mesimeriImg from '../assets/paintings/mesimeri.jpeg'
import oniceImg from '../assets/paintings/onice.jpeg'
import rawImg from '../assets/paintings/raw.jpeg'
import riseImg from '../assets/paintings/rise.jpeg'
import utahImg from '../assets/paintings/utah.jpeg'
import wearetheseaImg from '../assets/paintings/wearethesea.jpeg'




</script>

<style scoped>
.paintings-wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>