<template>
  <div class="container-fluid bg-white">
    <div class="row py-4">

      <div class="col-md-4 my-3">
        <h5 class="font-bold text-center text-sm-center text-md-start text-lg-start flex justify-center">
          LoveCar
        </h5>
        <ul class="p-1 m-0 text-center text-sm-center text-md-start text-lg-start">
          <RouterLink to="/blog" class="text-decoration-none text-black">
            <li class="my-2 font-semibold text-center">Blog</li>
          </RouterLink>
          <RouterLink to="/about-us" class="text-decoration-none text-black">
            <li class="my-2 font-semibold text-center">About Us</li>
          </RouterLink>
          <RouterLink to="/" class="text-decoration-none text-black">
            <li class="my-2 font-semibold text-center">Contact Us</li>
          </RouterLink>
          <a href="/privacy-policy" class="text-decoration-none text-black">
            <li class="my-2 font-semibold text-center">Privacy Policy</li>
          </a>
          <a href="/user-agreement" class="text-decoration-none text-black">
            <li class="my-2 font-semibold text-center">User Agreement</li>
          </a>
        </ul>
      </div>

      <div class="col-md-4 mt-3 text-center text-sm-center text-md-start text-lg-start my-3">
        <h5 class="font-bold mb-3">Download</h5>
        <a class="flex justify-center sm:justify-center md:justify-start lg:justify-start" href="https://play.google.com/store/apps/details?id=love.car.mm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
              class="mt-2" style="margin-left: -12px; width: 150px" />
        </a>
        <Button @click="download" text="Download"
        classes="btn btn-danger mt-3" />
      </div>

      <div class="col-md-4 my-1 text-center text-sm-center text-md-start text-lg-start">
        <RouterLink to="/" class="nav-brand flex justify-center sm:justify-center md:justify-start lg:justify-start items-center font-bold text-red-500 fs-3 text-decoration-none">
          <img src="../images/logo.png" class="w-28"/>
        </RouterLink>

        <a href="mailto:info.lovecar@gmail.com"
          class="nav-brand text-center text-sm-center text-md-start text-lg-start font-bold text-red-500 text-decoration-none mt-5">
          info.lovecar@gmail.com
        </a>
        <a href="tel:+959650932592"
          class="text-red-500 font-semibold mt-2 me-2 d-block text-decoration-none">+959650932592</a>
        <p class="font-semibold mt-2"></p>
        <div class="mb-3">
          <a href="https://www.facebook.com/lovecarmyanmar?mibextid=JRoKGi"><font-awesome-icon
              class="fs-4 text-red-500 mx-2" icon="fa-brands fa-facebook" /></a>
          <a href="https://www.youtube.com/@LoveCar224"><font-awesome-icon class="fs-4 text-red-500 mx-2"
              icon="fa-brands fa-youtube" /></a>
        </div>
        <p class="">
          © 2024 LoveCar. All Rights reserved.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Button from '@/components/Button.vue'

const download = () => {
    window.open("https://lovecar.autos/storage/apk/lovecar.apk");
}

</script>

<style lang="scss" scoped></style>
