<template>

    <!-- <pre>{{ user }}</pre> -->

    <div class="row flex justify-center">
        <div class="col-lg-8 col-md-10 col-sm-12 col-12 p-0">

            <div class="card bg-white rounded-lg" style="min-height:90vh">
                <img src="@/images/background.jpg" class="w-100 card-img-top" alt="..."
                    style="height:200px;object-fit:cover;object-postion:center">
                <img :src="user?.photo ?? user?.image"
                    style="width:150px;height:150px;object-fit:cover;object-postion:center;border-radius:50%;margin-top:-80px;margin-left:10px;border:5px solid white">
                <!-- <button class="btn btn-outline-danger rounded-pill px-4 font-bold" style="position:absolute;top:210px;right:10px"><font-awesome-icon icon="fa-solid fa-pencil" /> Edit</button> -->
                <div class="ms-3">
                    <div class="font-bold fs-3">
                        {{ user?.name }}
                    </div>
                    <div class="text-indigo-500 text-sm font-bold" style="margin-top:-7px">#{{ user?.user_code }}</div>
                    <div class="flex items-center my-2"><font-awesome-icon icon="fa-solid fa-envelope"
                            class="text-primary" />
                        <span class="font-bold text-xs ms-1">{{ user?.email }}</span>
                    </div>
                    <div class="flex items-center my-2"><font-awesome-icon icon="fa-solid fa-phone"
                            class="text-success" />
                        <span class="font-bold text-xs ms-1">{{ user?.phone }}</span>
                    </div>
                </div>
                <div class="flex mt-10">
                    <button @click="deleteMyAccount" class="shadow-sm bg-red-100 text-red-500 py-2 px-3 ms-2 rounded-lg mb-3 font-bold">
                        <font-awesome-icon icon="fa-solid fa-trash-can" /> Delete my account
                    </button>
                </div>

            </div>


        </div>
    </div>

</template>

<script setup>
import { ref, inject, defineProps, onUpdated, onMounted } from "vue";
import axios from "axios";
import { useRoute,useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const token = ref('');
const baseUrl = inject("baseUrl");
const user = ref(null);

const getUser = async () => {

    let response = await axios.get(baseUrl + "/profile/", {
        params: {
            id: id
        },
        headers: {
            Authorization: "Bearer " + token.value
        }
    });
    user.value = response.data.data;
}

const deleteMyAccount = async () => {
    let response = await axios.delete(baseUrl + "/users", {
        headers: {
            Authorization: "Bearer " + token.value
        }
    });

    if(response.data['status'] != 200){
        toast.error(response.data['message']);
    }

    localStorage.removeItem("token");
    router.replace('/login');

}

onMounted(() => {
    token.value = localStorage.getItem("token");
    getUser();
});


</script>

<style></style>