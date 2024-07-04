<template>

  <div class="container min-vh-100 pt-4 poppins-regular">
      <Navbar/>
      <RouterView/>
  </div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router';

</script>

<style>
</style>