<template>
    <div class="container flex justify-center items-center" style="min-height: 75vh">
        <div class="shadow rounded-lg border-1 p-3 py-4 col-lg-6 col-md-7 col-sm-10 col-12">
            <h4 class="fw-bold text-uppercase">Login</h4>
            <p class="text-muted text-xs mb-4">Log in to your account</p>

            <label for="phone" class="form-label mb-1 text-xs font-bold">Phone</label>
            <input type="text" v-model="phone" name="phone" class="form-control shadow-sm"
                placeholder="Enter phone number" id="" />
            <label for="password" class="form-label mt-3 mb-1 text-xs font-bold">Password</label>
            <input type="password" v-model="password" name="password" class="form-control shadow-sm"
                placeholder="Enter password.." id="" />

            <button @click="directLogin" class="bg-red-500 text-white w-100 rounded-lg mt-4 shadow-sm mb-2"
                style="padding:10px 0px">
                Login
            </button>

            <div class="flex items-center space-x-2 mb-1">
                <div class="h-px w-100 bg-gray-300"></div>
                <div class="text-gray-500">or</div>
                <div class="h-px w-100 bg-gray-300"></div>
            </div>

            <button
                class="flex items-center flex justify-center w-100 bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm hover:bg-gray-100">
                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#4285F4"
                        d="M24 9.5c3.14 0 5.65 1.08 7.77 2.87l5.79-5.79C33.57 3.17 29.14 1 24 1 14.64 1 7.09 7.3 4.47 16.02l6.91 5.31C12.7 14.07 17.9 9.5 24 9.5z">
                    </path>
                    <path fill="#34A853"
                        d="M24 44.5c5.14 0 9.57-2.17 12.77-5.62l-6.45-5.27c-1.64 1.28-3.73 2.05-6.32 2.05-4.59 0-8.49-3.1-9.89-7.26l-6.93 5.36C10.83 40.96 17.06 44.5 24 44.5z">
                    </path>
                    <path fill="#FBBC05"
                        d="M44.5 24c0-1.64-.13-3.23-.38-4.76H24v9.05h11.73c-.5 2.41-1.96 4.42-3.98 5.76l6.45 5.27C42.24 36.53 44.5 30.72 44.5 24z">
                    </path>
                    <path fill="#EA4335"
                        d="M12.55 27.72A9.93 9.93 0 0 1 12 24c0-1.33.24-2.62.55-3.72L5.64 14.97C4.6 17.18 4 19.53 4 22c0 2.47.6 4.82 1.64 7.03l6.91-5.31z">
                    </path>
                </svg>
                Continue with Google
            </button>

        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { inject, ref } from "vue";
import { useToast } from "vue-toastification";
import { RouterLink,useRouter } from "vue-router";
const toast = useToast();
const router = useRouter();

//variable declaration
const phone = ref("");
const password = ref("");
const baseUrl = inject("baseUrl");

const directLogin = async () => {

    if (phone.value == "" || password.value == "") {
        toast.error("Please fill all the fields");
        return;
    }

    let response = await axios.post(baseUrl + "/loginV2", {
        phone: phone.value,
        password: password.value,
        IMEI: "IMEI",
        model_name: "model_name"
    });

    console.log(response.data);

    if (response.data['status'] != 200) {
        toast.error(response.data['message']);
        return;
    }

    let token = response.data['token'];
    localStorage.setItem("token", token);

    router.replace(`/profile/${response.data['user']['id']}`);

};
</script>

<style></style>