<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col-md-3" v-for="blog in blogs" :key="blog.title">
                    <iframe class="rounded-4 w-100" width="400" height="280" :src="blog.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p class="mt-3">{{ blog.title }}</p>
                    <p>{{ blog.duration }}</p>
            </div>
        
        </div>
    </div>

    <!-- Footer section -->
     <Footer />

</template>

<script setup>

import {ref} from "vue"
import Footer from "@/components/Footer.vue";

const blogs = ref([
    {
        title : "LoveCar App Registration လုပ်နည်း",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/4FFCouZSv2E?si=r8LEUJUeToJKG6z9"
    },
    {
        title : "LoveCar App - Car Registration လုပ်နည်း",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/KpBPPof59W0?si=RlgQi6ySfQO7sPNb"
    },
    {
        title : "LoveCar App - Contents 02",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/drDcWnoJLqo?si=oMhic95wAg-Ab7i2"
    },
    {
        title : "Love Car App - Fuel Cost",
        duration : "Duratin 2 mins",
        src : "https://www.youtube.com/embed/g7pRkzRZn2E?si=xGRkikFQeuEcJuiv"
    },
    {
        title : "Love Car App - Maintenance Cost",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/BoUwz2ywT7M?si=cw687hmETwxubjwW"
    },
    {
        title : "Love Car App - Check List",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/vwz8d-1RKR0?si=Hm0rOFGZKVS0AQKP" 
    },
    {
        title : "Love Car App - Rental Cost",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/2_1VR6Cvc-Y?si=Dz6tklIMcD6yD1DY" 
    },

    {
        title : "Love Car App - Profile and Activity",
        duration : "Duration 2 mins",
        src : "https://www.youtube.com/embed/lHFtXAlHTUs?si=8_SRNku7sz4Zxogp"
    }
])
</script>

<style lang="scss" scoped></style>