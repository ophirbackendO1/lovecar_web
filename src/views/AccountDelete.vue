<template>
  <div class="container flex justify-center items-center" style="height: 70vh">
    <div class="row flex justify-center">
      <div class="col-md-7 px-lg-5 px-md-4 px-sm-3 px-2">
        <div class="text-center font-bold mb-3 fs-5">
          Account delete guide is here!
        </div>
        <ul class="list-group">
          <li class="text-muted">To delete your account, please enter your mobile phone number or email address.</li>
          <li class="text-muted">First you have to confirm your account or not to send OTP your email or phone.</li>
          <li class="text-muted">If you click the confirm button, we sent an OTP to your email or phone.</li>
          <li class="text-muted">If you verify with your OTP, your account will be deleted after 14 days</li>
        </ul>
      </div>
      <div class="col-lg-6 col-md-8 col-sm-10 col-12 border p-3 rounded-xl shadow-sm mt-4">
        <div>
          <h3 class="text-danger font-bold mb-4 mt-3">Account Delete</h3>
          <div class="form-group">
            <label for="" class="fs-6 my-1">Enter your mobile phone number or email address</label>
            <input @keyup.enter="submit" v-model="phoneOrEmail" type="text" class="form-control opacity-50 my-3"
              placeholder="Mobile number or email" />
          </div>
          <button @click="submit" class="btn btn-danger mt-3 rounded-pill w-100">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import axios from "axios";

const router = useRouter();
const toast = useToast();
const baseUrl = inject('baseUrl');
const phoneOrEmail = ref('');
const user = ref(null);

const submit = async () => {

  if (phoneOrEmail.value == '' || phoneOrEmail.value == null) {
    toast.error("Please enter your phone number or email address");
    return;
  }

  user.value = await axios.get(baseUrl + '/getUserByPhoneOrEmail?' + 'phoneOrEmail=' + phoneOrEmail.value).then(function (response) {
    if (response['data']['status'] == 404) {
      toast.error(response['data']['message']);
      return;
    }

    if (response['data']['status'] == 405) {
      toast.error(response['data']['message']);
      return;
    }

    console.log(response['data']);

    return response['data']['data'];
  })

  if (phoneOrEmail.value == '' || phoneOrEmail.value == null) {
    toast.error("Please enter your phone number or email address");
    return;
  }

  router.replace({
    "name": "AccountConfirm",
    "params": {
      'id': user.value.id,
      'email': user.value.email ?? null,
      'phone': user.value.phone,
      'image': user.value.photo ?? user.value.image
    }
  });

}

</script>

<style scoped>
ul li {
  list-style-type:decimal;
}
</style>