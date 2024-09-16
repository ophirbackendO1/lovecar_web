<template>
  <div class="col-lg-6 col-md-12 col-sm-12 col-12 flex justify-center items-center position-relative">
    <div class="">
      <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" style="width: 50%"
        id="car-image" alt="" />
    </div>
    <div class="moving-icon d-none d-sm-none d-md-none d-lg-block">
      <img src="../images/fuel_cost.png" class="circle-image position-absolute"
        style="width: 40px; left: 15%;bottom:30%" alt="" />
      <img src="../images/coin.png" class="circle-image position-absolute" style="width: 40px; left: 15%; top:35%"
        alt="" />
      <img src="../images/alarm-clock.png" class="circle-image position-absolute"
        style="width: 40px; left: 40%; top: 25%" alt="" />
      <img src="../images/google-docs.png" class="circle-image position-absolute"
        style="width: 40px; right:28%; top: 28%" alt="" />
      <img src="../images/saving.png" class="circle-image position-absolute" style="width: 40px; right: 12%; top: 45%"
        alt="" />
      <img src="../images/checklist.png" class="circle-image position-absolute"
        style="width: 40px; right: 80px; top: 400px" alt="" />

        <img src="../images/wrench.png" class="circle-image" style="width: 40px; right: 30%; bottom: 20%;" alt="Wrench" />

      <img src="../images/wallet.png" class="circle-image position-absolute" style="width: 40px; left:40%; bottom: 20%"
        alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const images = document.querySelectorAll('.circle-image');
  let currentIndex = 0;

  function showNextImage() {
    images.forEach(image => {
      image.style.opacity = '0'; 
    });

    const image = images[currentIndex];
    image.style.opacity = '1'; 
    image.classList.add('zoom-out'); 

    setTimeout(() => {
      image.classList.remove('zoom-out'); 
      currentIndex = (currentIndex + 1) % images.length; 
    }, 1000); 
  }

  setInterval(showNextImage, 1000);
});
</script>


  <style scoped>
    #car-image {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    .circle-image {
      position: absolute;
      transform-origin: 50% 50%;
      opacity: 0.5;
      transform: scale(1);
      transition: transform 1s ease, opacity 1s ease;
    }

    .circle-image.zoom-out {
      transform: scale(1);
      opacity: 1;
    }
  </style>
