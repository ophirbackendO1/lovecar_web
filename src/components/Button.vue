<template>
 
    <a v-if="type === 'phone'" href="tel:+959650932592" class="text-white text-decoration-none"><button :class="props.classes" class="shadow-sm rounded-pill px-3 py-2">{{ props.text }}</button></a>

    <a v-else-if="type === 'email'" href="mailto:info.lovecar@gmail.com" class="text-white text-decoration-none"><button :class="props.classes" class="shadow-sm rounded-pill px-3 py-2">
      {{ props.text }}</button>
    </a>

  <button :class="props.classes" v-else class="shadow-sm rounded-pill px-3 py-2">
    {{ props.text }}
  </button>

</template>

<script setup>

import {defineProps} from 'vue';
const props = defineProps({
    text : String,
    color : String,
    classes : String,
    type : String
});

</script>

<style>

</style>