<template>
    <b>Homemade Dog Food</b>

    <p class="text-sm">Nutritious meal for your pup</p>

    <img :src="ingredientsImg" class="w-full object-contain" style="max-width:100%; max-height:40vh;" />
    <p class="text-xs font-light">Ingredients laid out</p>

    <div class="text-sm">
        <p><strong>Ingredients:</strong></p>
        <ul style="margin-left: 1.5rem;">
            <li>2 lbs ground chicken or turkey</li>
            <li>2 cups brown rice, cooked</li>
            <li>1 cup chopped carrots</li>
            <li>1 cup peas</li>
            <li>1 cup green beans, chopped</li>
            <li>2 tablespoons olive oil</li>
        </ul>
    </div>

    <img :src="finishedImg" class="w-full object-contain" style="max-width:100%; max-height:40vh;" />
    <p class="text-xs font-light">Finished meal</p>

    <div class="text-sm">
        <p><strong>Instructions:</strong></p>
        <ol style="margin-left: 1.5rem;">
            <li>Cook meat in large pan until browned</li>
            <li>Add vegetables and cook until tender</li>
            <li>Mix in cooked rice and olive oil</li>
            <li>Let cool before serving</li>
            <li>Store leftovers in fridge up to 5 days</li>
        </ol>
    </div>

    <p class="text-xs font-light" style="margin-left:auto;">Serves: 1 large dog for 3-4 days</p>
</template>

<script setup>
import ingredientsImg from '../../assets/paintings/clove.jpeg'
import finishedImg from '../../assets/paintings/bunnychow.jpeg'
</script>
