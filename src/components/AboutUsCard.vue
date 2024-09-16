<template>
    <div class="card my-2 rounded-4 border-0" style="height:220px;">
        <div class="card-title d-flex p-3">
            <font-awesome-icon class="fs-4 text-danger" :icon="icon" />
            <p class="ms-2">{{ title }}</p>
        </div>
        <div class="card-body">
            {{ description }}
        </div>

        <div class="card-footer border-0 bg-white">
            <Button classes="bg-danger w-100 text-white" :text="button_name" :type="type"/>
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
    button_name : String,
    type : String
})

</script>

<style scoped>

</style>