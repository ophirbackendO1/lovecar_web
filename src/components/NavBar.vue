<template>
    <div class="z-10" style="position:sticky;top:0">
        <nav class="flex justify-around items-center bg-white py-3">
            <RouterLink to="/" class="nav-brand flex items-center font-semibold text-red-500 fs-3 text-decoration-none">
                <img src="../images/logo.png" style="width: 45px" />
                LoveCar
            </RouterLink>
            <ul class="list-group list-group-horizontal d-lg-flex d-md-flex d-sm-none d-none">
                <li class="list-group-item border-0">
                    <RouterLink to="/" class="text-decoration-none font-semibold">Home</RouterLink>
                </li>
                <li class="list-group-item border-0">
                    <RouterLink to="/pricing" class="text-decoration-none font-semibold">Pricing</RouterLink>
                </li>
                <li class="list-group-item border-0">
                    <RouterLink to="/blog" class="text-decoration-none font-semibold">Blog</RouterLink>
                </li>
                <li class="list-group-item border-0">
                    <RouterLink to="/about-us" class="text-decoration-none font-semibold">About us
                    </RouterLink>
                </li>
            </ul>
            <div class="flex items-center">
                <Button @click="download" text="Download"
                    classes="btn btn-danger d-lg-block d-md-block d-sm-none d-none " />
                <button v-if="!dropDown" @click="download" class="text-red-500 fw-bold d-lg-none d-md-none d-sm-block d-block me-2 mb-1">
                    Download
                </button>
                <button @click="menuOpen" class="ms-2 d-lg-none d-md-none d-sm-inline d-inline me-2">
                    <font-awesome-icon v-if="!dropDown" class="fs-5 text-red-500" icon="fa-solid fa-bars" />
                    <font-awesome-icon v-if="dropDown" class="fs-5 text-red-500" icon="fa-solid fa-xmark" />
                </button>
                
            </div>
        </nav>
        <ul v-if="dropDown" class="p-2 m-0 bg-[#f5cac3]">
            <li class="my-4 text-red-500 px-3"><a href="/">Home</a></li>
            <li class="my-4 text-red-500 px-3"><a href="/blog">Blog</a></li>
            <li class="my-4 text-red-500 px-3"><a href="/about-us">About Us</a></li>
            <li class="my-4 text-red-500 px-3"><button @click="download">Download</button></li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import Button from "@/components/Button.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { Dropdown } from 'bootstrap';

const download = () => {
    window.open("https://admin.love-car.org/Downloads/lovecar.apk");
}

const dropDown = ref(false)

const menuOpen = () => {
    dropDown.value = !dropDown.value
}



// const download = async () => {
//     const response = await axios.get("@/LoveCar.apk", {
//         responseType: "blob", // Important for handling binary data
//     });

//     // Check the content type
//     const contentType = response.headers["content-type"];
//     console.log("Content-Type:", contentType);

//     // Create a new Blob object using the response data
//     const fileBlob = new Blob([response.data], { type: contentType });

//     // Create a link element
// const link = document.createElement("a");
// link.href = window.URL.createObjectURL(fileBlob);
// link.setAttribute("download", "LoveCar.apk");

// // Append the link to the body (required for Firefox)
// document.body.appendChild(link);

// // Programmatically click the link to trigger the download
// link.click();

// // Clean up by revoking the object URL and removing the link element
// window.URL.revokeObjectURL(link.href);
// document.body.removeChild(link);
// };
</script>

<style scoped>

li a.router-link-exact-active{
    color:red;
}


ul li a{
    color:black;
    text-decoration:none;
}
 .container-fluid ul li:before{
    content: "";
    position:absolute;
    width:0%;
    height:3px;
    background-color:#000;
    bottom:0;
    left:0;
    transition:0.5s;
    border-radius:5px;
}
 .container-fluid ul li:after{
    content: "";
    position:absolute;
    width:0%;
    height:3px;
    background-color:red;
    bottom:0;
    right:0;
    transition:0.5s;
}
 .container-fluid ul li:hover:before{
    width:50%;
    transform:translateX(100%);
}
 .container-fluid ul li:hover:after{
    width:50%;
    transform:translateX(-100%);
}


</style>
