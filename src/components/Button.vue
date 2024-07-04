<template>
  <button :class="props.classes" class="shadow-sm rounded-pill px-3 py-2">
    {{ props.text }}
  </button>
</template>

<script setup>

import {defineProps} from 'vue';
const props = defineProps({
    text : String,
    color : String,
    classes : String
});

</script>

<style>

</style>