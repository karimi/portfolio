<template>
    <Carousel :slideContent="[
        {
            route: 'clove',
            content: [
            h('b',  'Clove'),
            h('img', { src: cloveImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: '300am',
            content: [
            h('b', '3:00 AM'),
            h('img', { src: am300Img, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'atrain',
            content: [
            h('b', 'A Train'),
            h('img', { src: atrainImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'cat',
            content: [
            h('b', 'Cat in Tours'),
            h('img', { src: catImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'fredrickstead',
            content: [
            h('b', 'Fredrickstead'),
            h('img', { src: fredricksteadImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'lullaby',
            content: [
            h('b', 'Lullaby'),
            h('img', { src: lullabyImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'roadtrip',
            content: [
            h('b', 'Road Trip'),
            h('img', { src: mamanImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'mesimeri',
            content: [
            h('b', 'Mesimeri'),
            h('img', { src: mesimeriImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'onice',
            content: [
            h('b', 'On Ice'),
            h('img', { src: oniceImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'raw',
            content: [
            h('b', 'Raw'),
            h('img', { src: rawImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'rise',
            content: [
            h('b', 'Rise'),
            h('img', { src: riseImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'utah',
            content: [
            h('b', 'Utah'),
            h('img', { src: utahImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
            ]
        },
        {
            route: 'wearethesea',
            content: [
            h('b', 'We Are The Sea'),
            h('img', { src: wearetheseaImg, class: 'w-full object-contain', style: 'max-width:100%; max-height:60vh;' }),
            h('div', { style: 'display: flex; justify-content: space-between; gap: 1rem;' }, [
                h('p', { class: 'text-sm ' }, 'Gouache on paper'),
                h('p', { class: 'text-sm ' }, '24 x 18 inches'),
            ]),
            h('p', { class: 'text-sm font-light', style: 'margin-left:auto;' }, '2025')
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