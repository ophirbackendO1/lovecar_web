<template>
    <nav class="flex justify-between items-center bg-white py-2" style="position: sticky; sticky: top; top: 0px">
            <RouterLink to="/" class="nav-brand flex items-center font-bold text-red-500 fs-3 text-decoration-none">
                <img src="../images/logo.png" style="width: 45px" />
                LoveCar
            </RouterLink>
        <ul class="list-group list-group-horizontal d-lg-flex d-md-flex d-sm-none d-none">
            <li class="list-group-item border-0">
                <RouterLink to="/" class="text-decoration-none text-black font-bold">Home</RouterLink>
            </li>
            <li class="list-group-item border-0">
                <RouterLink to="/" class="text-decoration-none text-black font-bold">Pricing</RouterLink>
            </li>
            <li class="list-group-item border-0">
                <RouterLink to="/privacy-policy" class="text-decoration-none text-black font-bold">Blog</RouterLink>
            </li>
            <li class="list-group-item border-0">
                <RouterLink to="/user-agreement" class="text-decoration-none text-black font-bold">About us</RouterLink>
            </li>
        </ul>
        <div class="flex items-center">
            <Button @click="download" text="Download" classes="btn btn-danger d-lg-block d-md-block d-sm-none d-none" />
            <button @click="download" class="text-red-500 fw-bold d-lg-none d-md-none d-sm-block d-block me-2 mb-1">
                Download
            </button>
            <button class="ms-2 d-lg-none d-md-none d-sm-inline d-inline me-2">
                <font-awesome-icon class="fs-5 text-red-500" icon="fa-solid fa-bars" />
            </button>
        </div>
    </nav>
</template>

<script setup>
import Button from "@/components/Button.vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const download = () => {
    window.open("https://admin.love-car.org/Downloads/lovecar.apk");

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

<style scoped></style>
