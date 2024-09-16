<template>
    <div class="bg-white rounded shadow p-3" style="height: 100%">
      <div class="flex justify-center">
        <img :src="image" class="w-36"
          style="width:90px;height:90px;object-fit:cover;object-position:center">
      </div>
      <div class="text-center font-semibold my-4" style="font-size:18px;">
        {{ title }}
      </div>
      <div v-if="typeof description === 'number'" class="text-center font-semibold fs-5">{{ formatNumber(displayedCount) }} ++</div>
      <div v-else class="text-center font-semibold fs-6">{{ description }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    title: String,
    description: [String, Number],
    image: String,
    type: Number
  });
  
  const displayedCount = ref(0);
  
  function animateCounter(finalCount, duration) {
    const startTime = performance.now();
    const startCount = displayedCount.value;
    const endCount = finalCount;
  
    function updateCount(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      displayedCount.value = Math.round(startCount + progress * (endCount - startCount));
  
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    }
  
    requestAnimationFrame(updateCount);
  }
  
  // Watch for changes in the description prop
  watch(() => props.description, (newValue) => {
    if (typeof newValue === 'number') {
      animateCounter(newValue, 5000); 
    }
  }, { immediate: true });

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  </script>
  
  <style></style>
  