<template>
  <div class="container-fluid bg-[#f5e0e0]">
    <div class="row py-4">
      <div class="col-md-4 mt-5">
        <RouterLink to="/" class="nav-brand flex items-center font-bold text-red-500 fs-3 text-decoration-none">
          <img src="../images/logo.png" class="flex mx-auto" style="width: 150px" />
        </RouterLink>
        <p class="mx-20 sm:mx-20 md:mx-0 text-center sm:text-center font-semibold mt-10">© 2024 LoveCar. All Rights reserved.</p>
      </div>

      <div class="col-md-4 my-3">
        <h4 class="font-semibold text-center text-sm-center text-md-start text-lg-start">LoveCar</h4>
        <ul class="p-1 m-0 text-center text-sm-center text-md-start text-lg-start">
          <RouterLink to="/blog" class="text-decoration-none text-black">
            <li class="my-2 font-semibold">Blog</li>
          </RouterLink>
          <RouterLink to="/about-us" class="text-decoration-none text-black">
            <li class="my-2 font-semibold">About Us</li>
          </RouterLink>
          <RouterLink to="/" class="text-decoration-none text-black">
            <li class="my-2 font-semibold">Contact Us</li>
          </RouterLink>
          <RouterLink to="/privacy-policy" class="text-decoration-none text-black">
            <li class="my-2 font-semibold">Privacy Policy</li>
          </RouterLink>
          <RouterLink to="/user-agreement" class="text-decoration-none text-black">
            <li class="my-2 font-semibold">User Agreement</li>
          </RouterLink>
        </ul>
      </div>

      <div class="col-md-4 text-center text-sm-center text-md-start text-lg-start">
        <h4 class="font-semibold mb-3">Social Links</h4>
        <a href="mailto:info.lovecar@gmail.com" class="nav-brand text-center text-sm-center text-md-start text-lg-start font-bold text-red-500 text-decoration-none mt-5">
          info.lovecar@gmail.com
        </a>
        <p class="font-semibold mt-2">+97867676767 , +95232434343</p>
        <div class="mb-3">
          <a href="https://www.facebook.com"><font-awesome-icon class="fs-4 text-red-500 mx-2" icon="fa-brands fa-facebook" /></a>
          <a href="https://www.instagram.com"><font-awesome-icon class="fs-4 text-red-500 mx-2" icon="fa-brands fa-instagram" /></a>
          <a href="https://mm.linkedin.com"><font-awesome-icon class="fs-4 text-red-500 mx-2" icon="fa-brands fa-linkedin" /></a>
          <a href="https://www.youtube.com"><font-awesome-icon class="fs-4 text-red-500 mx-2" icon="fa-brands fa-youtube" /></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style lang="scss" scoped></style>