<template>
    <div class="bg-white rounded shadow p-3" style="height: 100%">
        <div class="flex justify-center">
            <img :src="image" class="w-36 rounded-circle img-thumbnail"
                style="width:130px;height:130px;object-fit:cover;object-position:center">
        </div>
        <div class="text-center font-bold my-4 fs-4">
            {{ title }}
        </div>
        <div class="text-center">{{ description }}</div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props  = defineProps({
    title : String,
    description : String,
    image : String
})

console.log(props.image);

</script>

<style></style>