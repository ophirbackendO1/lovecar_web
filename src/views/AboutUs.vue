<template>
    <div class="container d-flex flex-col justify-center items-center" style="min-height: 60vh">
        <h4 class="text-center font-semibold" style="margin-top: 50px">About Us</h4>
        <div
            class="sm:my-0 md:my-5 lg:my-5 row flex flex-col-reverse sm:flex-col md:flex-row lg:flex-row justify-center items-center">
            <div class="col-md-6">
                <h5 class="my-3 text-center text-sm-center text-md-start text-lg-start">
                    LoveCar Application
                </h5>
                <p class="mt-3 leading-7">
                    LoveCar Application ဟာ ကားချစ်သူများအတွက် မိမိတို့ကားများရဲ့ဆီစရိတ် ၊ ကားပြင်စရိတ်များ နှင့်
                    လချုပ်စာရင်းများကို ကြည့်ရှုနိုင်မည့်အပြင် ကားနှင့်ပတ်သက်သော workshpများ ၊ ဆီဆိုင်များနှင့် showroom
                    များကိုလည်းလွယ်ကူစွာရှာဖွေကြည့်ရှုနိုင်မည့် Application တစ်ခုဖြစ်ပါတယ်။
                </p>
            </div>
            <div class="col-md-6 d-flex justify-center" style="margin-top: 70px">
                <img src="https://www.allkpop.com/upload/2024/01/content/111110/web_data/allkpop_1704989558_untitled-1.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
        </div>

        <!-- ဘယ်လိုလူတွေ အသုံးပြုသင့်သလဲ?  -->
        <div class="sm:my-0 md:my-5 lg:my-5 row flex justify-center items-center">
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="https://www.allkpop.com/upload/2024/01/content/111110/web_data/allkpop_1704989558_untitled-1.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
            <div class="col-md-6 mt-3">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        ဘယ်လိုလူတွေ အသုံးပြုသင့်သလဲ?
                    </p>
                    <ul class="p-1 list-group leading-7">
                        <li class="mx-3" v-for="text in texts" :key="text">{{ text }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- ဘယ်လိုအကြောင်းအရာတွေပါလဲ  -->
        <div
            class="sm:my-0 md:my-5 lg:my-5 row flex flex-col-reverse sm:flex-col md:flex-row lg:flex-row justify-center items-center ">
            <div class="col-md-6 my-4">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        ဘယ်လိုအကြောင်းအရာတွေပါလဲ
                    </p>
                    <ul class="p-1 list-group leading-7">
                        <li class="mx-3" v-for="content in contents" :key="content">{{ content }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="https://www.allkpop.com/upload/2024/01/content/111110/web_data/allkpop_1704989558_untitled-1.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
        </div>

        <!-- Love Carရဲ့အားသာချက် -->
        <div class="sm:my-0 md:my-5 lg:my-5 row flex justify-center items-center">
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="https://www.allkpop.com/upload/2024/01/content/111110/web_data/allkpop_1704989558_untitled-1.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
            <div class="col-md-6 mt-3">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        Love Carရဲ့အားသာချက်
                    </p>
                    <ul class="p-1 list-group leading-7">
                        <li class="mx-3" v-for="advantage in advantages" :key="advantage">{{ advantage }}</li>
                        <!-- <li class="mx-3">ကိုယ်ပိုင်ကားရှိသူများ နှင့် အငှားယာဉ် မောင်းသူများ အလွယ်တကူသုံးစွဲနိုင်တဲ့ တစ်ခုဖြစ်ပါတယ်။</li>
                        <li class="mx-3"></li>
                        <li class="mx-3">တစ်ခါ download လုပ်ထားရုံနဲ့ offline မှာ အခါခါပြန်လည် ဖတ်ရှုနားဆင်နိုင်တယ်။
                        </li>
                        <li class="mx-3">စာအုပ်ပေါင်း(၅၀၀)နီးပါး ထည့်သွင်းတင်ဆက်ပေးထားတယ်။</li>
                        <li class="mx-3">နိုင်ငံတကာစာအုပ်တွေကို up - to - date တင်ဆက်ပေးနေတယ်။</li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Us -->
    <div class="container-fluid py-5 mt-5 bg-[#e6e0f5]">
        <h4 class="text-center mb-5">Contact Us</h4>
        <div class="row d-flex justify-center items-center">
            <div v-for="card in cards" :key="card.title" class="col-md-3">
                <AboutUsCard :title="card.title" :description="card.description" :button_name="card.button_name"
                    :icon="card.icon" />
            </div>

        </div>
    </div>

    <!-- Footer Section -->
    <Footer />
</template>

<script setup>
import { ref } from 'vue';
import AboutUsCard from "@/components/AboutUsCard.vue";
import Footer from "@/components/Footer.vue";

const cards = ref([
    {
        title: 'Call Us',
        description: '09++++++++++ နှင့် 09++++++++++ တို့ကို ဆက်သွယ်နိုင်ပါသည်။',
        button_name: 'Call',
        icon: 'fa-solid fa-phone'
    },
    {
        title: 'Email',
        description: 'info.lovecar@gmail.com သို့ Email ပို့ပြီးဆက်သွယ်မေးမြန်းနိုင်ပါသည်',
        button_name: 'Send',
        icon: 'fa-soild fa-envelope'
    },
])

const texts = ref(['ကိုယ်ပိုင်ကားရှိသူတွေ','taxi အငှားယာဉ်မောင်းနေသူများ','ကားလိုင်စင်နဲ့ပတ်သက်ပြီး သိရှိလိုသူများ','worshop ဆီဆိုင် ၊ အစရှိသည့် မိမိကိုယ်ပိုင်ဆိုင်များကို ကြော်ညာလိုသူများ'])

const contents = ref([''])
const advantages = ref(['ကိုယ်ပိုင်ကားရှိသူများ နှင့် taxi အငှားယာဉ်မောင်းသူများ အလွယ်တကူသုံးစွဲနိုင်တဲ့ Applicaiton တစ်ခုဖြစ်ပါတယ်။'])
</script>

<style scoped>
ul li {
    list-style-type: disc;
}
</style>
