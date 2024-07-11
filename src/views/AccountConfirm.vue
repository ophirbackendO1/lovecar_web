<template>

    <div class="row flex justify-center items-center" style="height: 70vh">
        <div class="col-lg-6 col-md-8 col-sm-10 col-12 border p-3 rounded-xl shadow-sm">
            <h5 class="my-4 text-center">We will send OTP to your email and phone</h5>
            <div class="text-center font-bold">
                {{ user.email }} <span class="font-normal mx-2" v-if="user.email != null">and </span> {{ user.phone }}
            </div>
            <img :src="user.image" alt="" class="my-10 w-50 border rounded-circle d-flex mx-auto">
            <div class="d-flex mb-3">
                <button @click="back" class="btn btn-danger mt-3 rounded-pill w-100 me-4">Cancel</button>
                <button @click="getOtp" class="btn btn-primary mt-3 rounded-pill w-100" data-bs-toggle="modal"
                    data-bs-target="#modal">Confirm</button>

            </div>
        </div>
    </div>

    <div class="modal fade" id="modal" style="backdrop-filter: blur(7px);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body py-5">
                    <div class="flex justify-center">
                        <div>
                            <div class="flex justify-center">
                                <img src="../images/otp.png" style="width: 30%;" />
                            </div>
                            <div class="text-center font-bold fs-3 mt-3">
                                Verification
                            </div>
                            <div class="text-muted text-center">
                                You will get a OTP from your phone or email
                            </div>

                            <div class="flex justify-center my-3">
                                <input v-model="otp" class="form-control w-75">
                            </div>
                            <div class="flex justify-center">
                                <button @click="checkOtp"
                                    class="btn btn-danger rounded-lg shadow-sm w-75" data-bs-dismiss="modal">Verify</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { inject, ref } from 'vue';
import { useToast } from 'vue-toastification';

const router = useRouter();
const route = useRoute();
const toast = useToast();
const baseUrl = inject('baseUrl');

const back = () => {
    router.replace('/account_delete');
}

const user =
{
    'id': route.params.id,
    'email': route.params.email ?? null,
    'phone': route.params.phone,
    'image': route.params.image
};

const otp = ref('');

const getOtp = async () => {

    let response = await axios.get(baseUrl + "/sendOtpForDeleteNoAuth?user_id=" + user.id).then(function (response) {
        return response;
    })

    if (response['data']['status'] == 200) {
        toast.success(response['data']['message']);
    }

}

const checkOtp = async () => {
    let response = await axios.post(baseUrl + "/checkOtpForDeleteNoAuth", {
        'user_id': user.id,
        'otp': otp.value
    }).then(function (response) {
        return response;
    })

    if (response['data']['status'] == 400) {
        toast.error(response['data']['message']);
    }

    if (response['data']['status'] == 200) {
        toast.success(response['data']['message']);
        router.replace('/account_delete_success');
    }

}


</script>

<style lang="scss" scoped></style>