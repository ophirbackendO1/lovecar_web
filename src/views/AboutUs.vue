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
                    ကားအသုံးပြုသူများအတွက် ကားဆီစရိတ်၊ ထိန်းသိမ်းစရိတ်၊ ကုန်ကျစရိတ်များ၊ ဝင်ငွေများကို စနစ်တကျ ထည့်သွင်းနိုင်ပြီး စာရင်းဇယားအနေဖြင့် ပြန်လည်ကြည့်ရှုနိုင်သည့် Appဖြစ်သည်။ ထို့အပြင် ယာဉ်မောင်းတစ်ယောက် လိုအပ်သော လိုင်စင်လျောက်နည်းများ၊ စည်းမျဉ်းစည်းကမ်းများကို သိရှိနိုင်မည့်အပြင် လိုင်စင်စာမေးပွဲမေးခွန်းများကို အစမ်းလေ့ကျင့် ဖြေဆိုနိုင်သော App ဖြစ်သည်။ 
                </p>
            </div>
            <div class="col-md-6 d-flex justify-center" style="margin-top: 70px">
                <img src="../images/phone.png" alt="" class="rounded-4"
                    style="width: 60%" />
            </div>
        </div>

        <!-- ဘယ်လိုလူတွေ အသုံးပြုသင့်သလဲ?  -->
        <div class="container sm:my-0 md:my-5 lg:my-5 row flex justify-center items-center">
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="../images/car-image.png" alt=""
                    class="rounded-4" style="width: 100%" />
            </div>
            <div class="col-md-6 mt-3">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        ဘယ်သူတွေ အသုံးပြုသင့်သလဲ?
                    </p>
                    <ul class="p-1 list-group leading-7">
                        <li class="mx-3" v-for="text in texts" :key="text">{{ text }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- ဘာတွေလပ်ဆောင်နိုင်သလဲ -->
        <div
            class="sm:my-0 md:my-5 lg:my-5 row flex flex-col-reverse sm:flex-col md:flex-row lg:flex-row justify-center items-center ">
            <div class="col-md-6 my-4">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        ဘာတွေ လုပ်ဆောင်နိုင်သလဲ
                    </p>
                    <ul class="p-1 list-group leading-7 ">
                        <li class="mx-3 leading-8" v-for="content in contents" :key="content">{{ content }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="../images/phone.png" alt="" class="rounded-4"
                    style="width: 80%" />
            </div>
        </div>

        <!-- Love Carရဲ့အားသာချက် -->
        <div class="sm:my-0 md:my-5 lg:my-5 row flex justify-center items-center">
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="../images/advantage.jpg" alt=""
                    class="rounded-4" style="width: 70%" />
            </div>
            <div class="col-md-6 mt-3">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        အကျိုးကျေးဇူးများ
                    </p>
                    <ul class="p-1 list-group leading-7">
                        <li class="mx-3" v-for="advantage in advantages" :key="advantage">{{ advantage }}</li>
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
                    :icon="card.icon" :type="card.type"/>
            </div>

        </div>
    </div>

    <!-- Footer section -->
     <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Footer from "@/components/Footer.vue";
import AboutUsCard from "@/components/AboutUsCard.vue";

const cards = ref([
    {
        title: 'Call Us',
        description: '09 650932592ကို ဆက်သွယ်နိုင်ပါသည်။',
        button_name: 'Call',
        icon: 'fa-solid fa-phone',
        type: 'phone'
    },
    {
        title: 'Email',
        description: 'info.lovecar@gmail.com သို့ Email ပို့ပြီးဆက်သွယ်မေးမြန်းနိုင်ပါသည်',
        button_name: 'Send',
        icon: 'fa-soild fa-envelope',
        type: 'email'
    },
])

const texts = ref([
    'အိမ်စီးကားပိုင်ရှင်နှင့်ယာဉ်မောင်းများ',
    'တက္ကစီယာဉ်ပိုင်ရှင်နှင့် ယာဉ်မောင်းများ',
    'ယာဉ်မောင်းလိုင်စင် ဖြေဆိုမည့်သူများ',
    'ယာဉ်နှင့်ပတ်သက်သော ဗဟုသုတအကြောင်းအရာများကို သိရှိလိုသူများ',
    'ယာဉ်နှင့်သက်ဆိုင်သော လုပ်ငန်းရှင်များ'
])

const contents = ref([
    'မြန်မာနိုင်ငံတဝန်းရှိ ကားဝပ်ရှော့၊ ကားအပိုပစ္စည်းများဧ။် လိပ်စာ၊ ဖုန်းနံပါတ်အပြင် ရရှိနိုင်သော ပစ္စည်းများနှင့် ဝန်ဆောင်မှုများကို လွယ်ကူစွာ ရှာဖွေနိုင်ခြင်း',
    'မြန်မာနိုင်ငံတဝန်းရှိ ဆီဆိုင်များကို လွယ်ကူစွာ ရှာဖွေဆက်သွယ်နိုင်ခြင်း',
    'အိမ်စီးကားများအတွက် နေ့စဉ် ကားဆီကုန်ကျစရိတ်၊ ပြုပြင်ထိန်းသိမ်းစရိတ်များကို ဆိုင်နာမည်၊ မြို့အလိုက် သိမ်းဆည်းထားနိုင်ပြီး အမျိုးအစားအလိုက် လွယ်ကူစွာ ပြန်ကြည့်နိုင်ခြင်း',
    'တက္ကစီများအတွက် ရက်အလိုက်၊ လအလိုက်၊ နှစ်အလိုက် ဝင်ငွေထွက်ငွေစာရင်းများနှင့် လက်ကျန်ငွေအမြတ်များကို ပြန်လည်ကြည့်ရှုနိုင်သဖြင့် စာရင်းကိုင်ပညာမလို၊ စာအုပ်ဘောပင်မလို စမတ်ကျကျ သိမ်းဆည်းနိုင်ခြင်း',
    'ယာဥ်မောင်းလိုင်စင်၊ ယာဉ်လိုင်စင် အစရှိသော လိုင်စင်သက်တမ်းကုန်ဆုံးသည့်ရက်များ၊ အင်ဂျင်ဝိုင်လဲမည့်ရက်အစရှိသော ကားနှင့်ပတ်သက်သော အရေးကြီးသည့် ရက်စွဲများကို မှတ်ထားနိုင်သည့်အပြင် သတ်မှတ်ထားသည့် ရက်၊ အချိန်တွင် Remainder အနေဖြင့် သတိပေးနိုင်ခြင်း',
    'ယာဥ်ပြုပြင်သော Customers များအနေဖြင့် ဆိုင်များဧ။် ဝန်ဆောင်မှုများကို မိမိကျေနပ်မှုအပေါ် မူတည်၍ Rating များ ပေးနိုင်သည့်အပြင် Review များရေးနိုင်ခြင်း',
    'ယာဉ်နှင့်ပတ်သက်သောလုပ်ငန်းရှင်များအနေဖြင့် လုပ်ငန်းကြော်ငြာထည့်သွင်းနိုင်ခြင်း၊ မိမိကြော်ငြာအား စီမံခန့်ခွဲနိုင်သည့်အပြင် Rating & Review များကိုဖတ်ရှုနိုင်ခြင်း',
    'ယာဉ်မောင်းလိုင်စင်နှင့် ယာဉ်လိုင်စင်လျှောက်နည်းများကို လွယ်ကူစွာ ရှာဖွေနိုင်ခြင်း',
    'ယာဉ်မောင်းလိုင်စင်စာမေးပွဲအတွက် အစမ်းလေ့ကျင့်ခန်းမေးခွန်းများကို ဖြေဆိုနိုင်ခြင်း',
    'ယာဉ်မောင်းတစ်ယောက် သိသင့်သော ယာဉ်စည်းကမ်း လမ်းစည်းကမ်းများနှင့် အချက်ပြ သင်္ကေတများကို လေ့လာနိုင်ခြင်းများ လုပ်ဆောင်နိုင်သည်။'
])

const advantages = ref([
    'ကားနှင့် ပတ်သက်သောအချက်အလက်များကို တစ်နေရာတည်းတွင် စုံစုံလင်လင်လွယ်ကူစွာ ရှာဖွေသိရှိနိုင်ခြင်း၊ ',
    'မြန်မာ၊ အင်္ဂလိပ်နှစ်ဘာသာဖြင့် လွယ်ကူစွာ အသုံးပြုနိုင်ခြင်း၊',
    'Online System ဖြစ်သဖြင့် မိမိသိမ်းဆည်းထားသော အချက်အလက် ဒေတာပျက်စီးမှုများ မရှိနိုင်ခြင်း၊',
    'ယာဉ်နှင့် သက်ဆိုင်သော စာရင်းဇယားမှတ်စုများကို စာအုပ်၊ ဘောပင် မလိုပဲ စနစ်တကျသိမ်းထည်းထားနိုင်ခြင်း၊',
    'တက္ကစီယာဉ်မောင်းများအတွက် မိမိငွေကြေးဆိုင်ရာ ကဏ္ဍများကို လွယ်ကူ တိကျစွာ စီမံခန့်ခွဲနိုင်ခြင်း၊',
    'သတိပေးစနစ်(Remainder) ပါရှိသဖြင့် ယာဉ်လိုင်စင် ၊ ယာဉ်မောင်းလိုင်စင် သက်တမ်းကျော်လွန်ခြင်းမှ ကြိုတင်ကာကွယ်နိုင်ခြင်း။'
])
</script>

<style scoped>
ul li {
    list-style-type: disc;
}
</style>
