<template>
    <div class="card my-2 rounded-4 border-0">
        <div class="card-title d-flex p-3">
            <font-awesome-icon class="fs-4 text-danger" :icon="icon" />
            <p class="ms-2">{{ title }}</p>
        </div>
        <div class="card-body">
            {{ description }}
        </div>

        <div class="card-footer border-0">
            <Button class="bg-danger w-100 text-white" :text="button_name" />
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import Button from './Button.vue'

const props  = defineProps({
    title : String,
    description : String,
    icon : String,
    button_name : String
})

</script>

<style scoped>

</style>