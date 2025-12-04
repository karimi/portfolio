<template>
    <b>Clove</b>
    <img :src="cloveImg" class="w-full object-contain" style="max-width:100%; max-height:60vh;" />
    <div style="display: flex; justify-content: space-between; gap: 1rem;">
        <p class="text-sm">Gouache on paper</p>
        <p class="text-sm">24 x 18 inches</p>
    </div>
    <p class="text-sm font-light" style="margin-left:auto;">2025</p>
</template>

<script setup>
import cloveImg from '../../assets/paintings/clove.jpeg'
</script>
