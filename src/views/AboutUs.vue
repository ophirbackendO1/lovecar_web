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
                    LoveCar Application ဆိုသည်မှာ ကားအသုံးပြုသူများအတွက် မိမိကားရဲ့ ကုန်ကျစရိတ်၊ အသုံးစရိတ်များကို စီမံခန့်ခွဲနိုင်ပြီး တစ်လအတွင်း ကုန်ကျစရိတ်၊ ဝင်ငွေများကို လချုပ်စာရင်းမှတ်တမ်းအနေနဲ့ ပြန်လည်ကြည့်ရှုနိုင်တဲ့ App တစ်ခုဖြစ်ပါတယ်။ ထို့အပြင် ယာဥ်မောင်းတစ်ယောက်သိသင့် ၊ သိထိုက်တဲ့ ဗဟုသုတအကြောင်းအရာတွေကို ဖတ်ရှုနိုင်မယ့်အပြင် ယာဥ်မောင်းလိုင်စင်ဖြေဆိုသူများအနေနဲ့ လေ့ကျင့်ခန်းမေးခွန်းလွှာများကို အစမ်းလေ့ကျင့် ဖြေဆိုနိုင်ပါတယ်။
                </p>
            </div>
            <div class="col-md-6 d-flex justify-center" style="margin-top: 70px">
                <img src="https://cdn.pixabay.com/photo/2022/01/07/01/22/girl-6920630_1280.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
        </div>

        <!-- ဘယ်လိုလူတွေ အသုံးပြုသင့်သလဲ?  -->
        <div class="sm:my-0 md:my-5 lg:my-5 row flex justify-center items-center">
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="https://cdn.pixabay.com/photo/2016/02/07/14/35/smartphone-1184865_1280.png"
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
                    <ul class="p-1 list-group leading-7 ">
                        <li class="mx-3" v-for="content in contents" :key="content">{{ content }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="https://cdn.pixabay.com/photo/2022/01/07/01/22/girl-6920627_640.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
        </div>

        <!-- Love Carရဲ့အားသာချက် -->
        <div class="sm:my-0 md:my-5 lg:my-5 row flex justify-center items-center">
            <div class="col-md-6 d-flex justify-center" style="margin-top: 80px">
                <img src="https://cdn.pixabay.com/photo/2020/09/23/16/39/purchase-5596478_640.jpg"
                    alt="" class="rounded-4" style="width: 90%" />
            </div>
            <div class="col-md-6 mt-3">
                <div class="ms-4">
                    <p class="font-semibold text-center text-sm-center text-md-start text-lg-start fs-5">
                        Love Carရဲ့အားသာချက်
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
        description: '09 650932592ကို ဆက်သွယ်နိုင်ပါသည်။',
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

const texts = ref(['ကားအကြောင်းစိတ်ဝင်စားတဲ့သူတွေ','ကားနဲ့ နေ့စဉ်ထိတွေ့အလုပ်လုပ်ကြတဲ့သူတွေ','ကားဝယ်ထားပြီး ဘယ်လိုထိန်းသိမ်း ရမလဲဆိုတာ မသိသေးတဲ့သူတွေ','ကားကို အခုမှ စမောင်းမဲ့သူတွေ','ကားလိုင်စင် ဖြေဆိုမဲ့သူတွေ','ယာဉ်လိုင်စင် သက်တမ်းတိုးမည့်သူတွေ','ယာဥ်စည်းကမ်း လမ်းစည်းကမ်း လေ့လာချင်သူတွေ','Taxi ဆရာကြီးတွေအတွက် နေ့စဉ် / လစဉ် ဝင်ငွေ ထွက်ငွေ မိမိအတွက် ကျန်ငွေ တွေကိုလဲစနစ်တကျမှတ်တမ်း တင်လိုသူများ'])

const contents = ref(['ယာဥ်မောင်းလိုင်စင်နှင့် ယာဥ်လိုင်စင်လျှောက်နည်းများ','ယာဥ်မောင်းလိုင်စင်စာမေးပွဲအတွက် လိုအပ်သော အစမ်းလေ့ကျင့်ခန်းမေးခွန်းများ','ယာဥ်မောင်းတစ်‌ယောက်သိသင့်သော ယာဥ်စည်းကမ်း၊ လမ်းစည်းကမ်းနှင့် အချက်ပြသင်္ကေတများ','ကားအရောင်းပြခန်း၊ ကားဝပ်ရှော့၊ ကားအပိုပစ္စည်းဆိုင်များရဲ့ တည်နေရာများ','ယာဥ်နှင့် ပက်သက်သော လုပ်ငန်းကြော်ငြာများ ထည့်သွင်းခြင်းနှင့် ဆိုင်အချက်အလက်စီမံခန့်ခွဲခြင်း','ယာဥ်နှင့်ပက်သက်သော ကုန်ကျစရိတ်၊ ဝင်ငွေထွက်ငွေစာရင်းများ ကို ထည့်သွင်းတွက်ချက်နိုင်ပြီး လချုပ်စာရင်းအနေနဲ့ ပြန်လည်ကြည့်ရှုနိုင်မှာပဲဖြစ်ပါတယ်'])
const advantages = ref(['ကားကို နေ့စဥ် မောင်းနှင်အသုံးပြုသူများအတွက်သာမက ကားအကြောင်းစိတ်ဝင်စားသူများနှင့် ယာဥ်မောင်းလိုင်စင်ဖြေဆိုမည့်သူများအတွက်ပါ လွယ်ကူစွာ အသုံးပြုနိုင်ခြင်း','နေ့စဥ် ယာဥ်နှင့်ပက်သက်သော up-to-date သတင်းများကို အချိန်နှင့်တစ်ပြေးညီ ဖတ်ရှုနိုင်ခြင်း','နေ့စဥ် မိမိကားနှင့်ပက်သက်သော ဝင်ငွေထွက်ငွေစာရင်းများကို အလွယ်တကူ တွက်ချက်နိုင်ခြင်း','လအလိုက် ဝင်ငွေထွက်ငွေစာရင်းများကို ပြန်လည်ကြည့်ရှုနိုင်ခြင်း','ကားနှင့်ပက်သက်သော ဆိုင်များ၊ ဆီဆိုင်များကို အလွယ်တကူ ရှာဖွေနိုင်ခြင်း','ကားနှင့်ပက်သက်သောလုပ်ငန်းပိုင်ရှင်များအနေနဲ့ ဆိုင်များကို ကြော်ငြာနိုင်သည့်အပြင် ဆိုင်နှင့်ပက်သက်သော အချက်အလက်များကို စီမံခန့်ခွဲနိုင်ခြင်း'])
</script>

<style scoped>
ul li {
    list-style-type: disc;
}
</style>
