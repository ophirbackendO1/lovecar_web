<template>
  <!-- Home -->
  <div class="container">
    <div class="row" style="min-height: 80vh">
      <div
        class="col-lg-6 col-md-12 col-sm-12 col-12 flex justify-center text-lg-start text-md-center text-sm-center text-center items-center mb-lg-0 mb-md-10 mb-sm-10 mb-10">
        <div>
          <div class="fs-4 font-normal mb-2 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
            ကားချစ်သူများအတွက် တစ်နေရာတည်းမှာ ပြီးပြည့်စုံစေမယ့်
          </div>
          <div class="fs-3 font-semibold">ALL IN ONE LoveCar Application</div>
          <div
            class="flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center">
            <a href="https://play.google.com/store/apps/details?id=love.car.mm">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
                class="mt-2" style="margin-left: -12px; width: 150px" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-12 flex justify-center items-center">
        <img src="../images/lovecar_mockup.png" style="width: 74%" />
      </div>
    </div>
  </div>

  <!-- Manage -->
  <div class="container-fluid bg-[#f5e0e0] bg-opacity-30">
    <div class="container">
      <div class="mb-20 row py-5" style="margin-top: 50px; margin-left: 0px; width: 100%">
        <div v-for="manageCard in manageCards" :key="manageCard.title" class="col-lg-4 col-md-6 col-sm-12 col-12 my-3">
          <InfoCard :title="manageCard.title" :image="manageCard.image" :description="manageCard.description" />
        </div>
      </div>
    </div>
  </div>

  <!-- what is love car section -->
  <div class="container">
    <div class="mb-5 row d-flex justify-center items-center">
      <div class="col-lg-7 col-md-12 col-sm-12 col-12 d-flex justify-center">
        <img src="../images/lovecar_mockup.png" style="width: 55%" />
      </div>

      <div class="col-md-6 text-center mt-4">
        <p class="fs-5 font-semibold">{{ carSection.title }}</p>
      </div>
      <div class="col-md-12 mt-3">
        <p class="tracking-wide text-base sm:text-base md:text-lg lg:text-lg xl:text-lg leading-8">
          {{ carSection.description }}
        </p>
      </div>
    </div>
  </div>

  <!-- why use love car section -->
  <div class="container-fluid bg-[#f5e0e0] bg-opacity-30">
    <div class="container">
      <div class="mt-5 row d-flex justify-center items-center">
        <div class="col-md-6 d-flex justify-center">
          <p class="font-semibold mt-4" style="font-size: 18px">
            ဘာကြောင့် Love Carကိုအသုံးပြုသင့်တာလဲ
          </p>
        </div>

        <div class="col-md-12">
          <div class="mb-20 row" style="margin-left: 0px; width: 100%">
            <div v-for="card in cards" class="col-lg-4 col-md-6 col-sm-12 col-12 my-3">
              <InfoCard :title="card.title" :key="card.title" :image="card.image" :description="card.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- feedback section -->
  <div class="container-fluid bg-opacity-30 py-4 my-5">
    <div class="container">
      <div class="row d-flex justify-center items-center">
        <div class="col-md-6 d-flex justify-center items-center">
          <p class="fs-5 font-semibold">User's Feedbacks</p>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">ကားအသုံးပြုတဲ့သူတွေအတွက် အရမ်းအသုံးတည့်တဲ့ App လေးပါ</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client6.jpeg" alt="">
                  </div>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">သုံးရတာ အရမ်းအဆင်ပြေပါတယ် ဒီ Love Car App လေးကြောင့် ကားနဲ့ ပတ်သက်တဲ့လချုပ်စာရင်းတွေကို အလွယ်တကူသိနိုင်လို့ အချိန်ကုန် သက်သာပါတယ်</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client2.jpeg" alt="">
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">လိုင်စင်စာမေးပွဲအတွက် အပြင်သင်တန်းတွေတက်ဖို့ အချိန်မရှိတာနဲ့ ဒီLove Car App ထဲက လေ့ကျင့်ခန်းတွေနဲ့ပဲ သွားဖြေလာတာ အဆင်ပြေလာတယ် ။ ကျေးဇူးပါပဲ Love Car ရေ</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client3.webp" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">အရင်ကဆို ကားပြင်ဖို့ ဆီ ဖြည့်ဖို့ မနည်းလိုက်ရှာပြီး သူများမေးပြီးသွားနေရတာ အခုတော့ LoveCar App က Map လေးကိုသုံးပြီး ဆိုင်ရှာရတာ အဆင်ပြေသွားပြီ။</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client4.jpeg" alt="">
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">ကားလိုင်စင်လျောက်ဖို့ကို အရင်ကဆိုရင် လိုက်ရှာရ လိုက်မေးနေရတာ အခုတော့ LoveCar App ထဲမှာက အကုန်လိုင်စင်လျောက်နည်းတွေကို တစ်စုတစ်စည်းတည်းတင်ပေးထားတော့ လွယ်လွယ်ကူကူနဲ့ သိနိုင်ပြီလေ</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client5.webp" alt="">
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">ဒီ App လေးကနေ ကျွန်တော့်ကားနဲ့ ပတ်သက်တဲ့ လချုပ်စာရင်းတွေ ကြည့်လို့ရရုံတင် မဟုတ်ဘူး ကျွန်‌တော့်ကားဝပ်ရှော့ဆိုင်လုပ်ငန်းတွေနဲ့ ပတ်သက်တဲ့ ကြော်ငြာတွေ Review တွေကို သိနိုင်လို့ လိုအပ်တာလေးတွေပြင်ဆင်နိုင်ပြီး အခုဆိုလုပ်ငန်းတွေ ထပ်မံတိုးချဲ့နိုင်နေပြီလေ။</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client6.jpeg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">ဒီ App လေးထဲကနေ တင်ပေးတဲ့ ဆိုင်ကြော်ငြာတွေကြောင့်ပဲ ကျွန်တော့်ကားဝပ်ရှော့ဆိုင်‌လေးက တဖြည်းဖြည်း လူသိများလာပြီး အခုဆို နောက်တစ်ဆိုင်ထပ်ဖွင့်ဖို့ လုပ်နေပြီ။</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client.jpg" alt="">
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">ကျွန်တော် အစကဆိုရင် Taxi ဆွဲလို့ရတဲ့ တစ်နေ့ဝင်ငွေ ဘယ်လောက်ဆိုတာ သေချာလည်း မသိရနဲ့ တွက်လည်း မတွက်နိုင်တော့ ရှုံးလားမြတ်လားဆိုတာ မသိရဘူးလေ။ အခုတော့ ဒီ App လေးကြောင့် ကျွန်တော့်တစ်နေ့ဝင်ငွေကို သိရတဲ့အပြင် တစ်လစာဝင်ငွေထွက်ငွေ အရှုံးအမြတ်ကို သိရတော့ ပိုပြီး အဆင်ပြေပြီး ပိုတွက်ခြေကိုက်လာတယ်လေ။</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client3.webp" alt="">
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height:300px;">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">အရမ်းကောင်းတဲ့ App လေးပါ ကျွန်တော့်အတွက် အသုံးဝင်တဲ့ App လေးပါ</p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="../images/client4.jpeg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- download section -->
  <div class="container-fluid d-flex justify-center items-center bg-[#f5e0e0] bg-opacity-30 py-4">
    <div class="row d-flex justify-center items-center mt-4">
      <div class="col-md-7 leading-10">
        <h3 class="font-semibold text-center mb-5">Download Now</h3>
        <p class="text-center font-semibold">
          ကားအသုံးပြုသူများအတွက် အကျိုးရှိစေမည့် Love Car App ကို အခုပဲ Download
          ပြုလုပ်လိုက်ပါ
        </p>

        <div class="flex justify-content-center">
          <a href="https://play.google.com/store/apps/details?id=love.car.mm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
              class="mt-2" style="margin-left: -12px; width: 150px" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- footer section -->
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import InfoCard from "@/components/InfoCard.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios"; 

const user_count = ref();
onMounted(async () => {
  try {
    const response = await axios.get('https://lovecar.autos/api/getAllUsers');
    user_count.value = response.data.data;
  } catch (error) {
    console.error('Error fetching user count:', error);
  }
});
const cards = ref([
  {
    title: "လိုင်စင်လျှောက်နည်းများ",
    description:
      "ယာဥ်လိုင်စင်  ယာဥ်မောင်းလိုင်စင် လျှောက်နည်းများကို တစုတစည်းတည်း ရှာဖွေနိုင်မယ်။",
    image:
      "https://cdn.pixabay.com/photo/2017/10/17/07/51/license-2859796_1280.png",
  },
  {
    title: "ဗဟုသုတအကြောင်းအရာများ",
    description:
      "ယာဥ်မောင်းတစ်ယောက်အနေနဲ့ သိသင့်တဲ့ ဗဟုသုတတွေ၊ သတင်းအကြောင်းအရာတွေကို ဖတ်ရှုနိုင်မယ်။",
    image:
      "https://cdn.pixabay.com/photo/2023/03/19/14/04/lamp-7862625_640.png",
  },
  {
    title: "လေ့ကျင့်ခန်းမေးခွန်းများ",
    description:
      "ယာဥ်မောင်းလိုင်စင် ဖြေမယ့်သူတွေအနေနဲ့လည်း အစမ်းလေ့ကျင့်ခန်းမေးခွန်းတွေ ဖြေဆိုနိုင်မယ်။",
    image:
      "https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png",
  },
  {
    title: "အသုံးစရိတ်စီမံခန့်ခွဲမှုများ",
    description:
      "ယာဥ်မောင်း၊ ယာဥ်ပိုင်ရှင်၊ ယာဥ်အသုံးပြုသူတွေအနေနဲ့ ကားရဲ့ဆီစရိတ်၊ ကုန်ကျစရိတ် တွေကို တွက်ချက်နိုင်မယ်။ (တက္ကစီဖြစ်ပါက ဝင်ငွေနှင့် ငှားရမ်းခကိုပါ တွက်ချက်နိုင်မယ်။)",
    image:
      "https://cdn.pixabay.com/photo/2015/11/03/08/53/calculator-1019743_640.jpg",
  },
  {
    title: "တည်နေရာရှာဖွေမှုများ",
    description:
      "ယာဥ်နှင့် ပက်သက်သော ဆိုင်များ၊ ကားအရောင်းဆိုင်၊ကားဝပ်‌ရှော့ဆိုင်၊ကားအပိုပစ္စည်းဆိုင်များရဲ့ တည်နေရာကို အလွယ်တကူ ရှာဖွေနိုင်မယ်။",
    image: "https://cdn.pixabay.com/photo/2024/07/06/04/27/map-8875912_640.png",
  },
  {
    title: "ကားလုပ်ငန်းကြောငြာနှင့်စီမံခန့်ခွဲမှုများ",
    description:
      "ယာဥ်နှင့် ပက်သက်သောလုပ်ငန်းများလုပ်ကိုင်နေသော လုပ်ငန်းရှင်များအနေနဲ့လည်း ကိုယ့်ရဲ့လုပ်ငန်းနဲ့ပက်သက်တဲ့အကြောင်းအရာတွေကို ကြော်ငြာနိုင်မယ့်အပြင် စီမံခန့်ခွဲနိုင်မယ်။",
    image:
      "https://cdn.pixabay.com/photo/2018/01/25/10/47/marketing-strategies-3105875_1280.jpg",
  },
]);

const manageCards = ref([
  {
    title: "ဗဟုသုတတွေလည်းရ၊ အသုံးစရိတ်တွေကို စီမံခန့်ခွဲလို့လည်းရ",
    description:
      "ယာဥ်စည်းကမ်း၊ လမ်းစည်းကမ်းများဖတ်ရှုနိုင်ပီး ကားအသုံးစရိတ်၊ဝင်ငွေများကို တွက်ချက်နိုင်",
    image:
      "https://i0.wp.com/www.tireexpresspa.com/wp-content/uploads/2020/12/75-754987_car-maintenance-cliparts-car-maintenance-icon-png.png?fit=900%2C654&ssl=1",
  },
  {
    title: "အချိန်ကုန်လူပင်ပန်းအသက်သာဆုံး",
    description: "လချုပ်စာရင်းမှတ်တမ်းများကို လွယ်ကူစွာ တွက်ချက်ကြည့်ရှုနိုင်",
    image:
      "https://cdn.pixabay.com/photo/2018/01/11/20/33/accounting-3076855_640.jpg",
  },
  {
    title: "လက်ရှိအသုံးပြုသူပေါင်း",
    description: user_count,
    image:
      "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png",
  },
]);

const carSection = ref({
  title: "Love Car ဆိုတာဘာလဲ",
  description:
    "ကားအသုံးပြုသူများအတွက် မိမိကားရဲ့ အသုံးစရိတ်၊ ကုန်ကျစရိတ်များ၊ဝင်ငွေများကိုတွက်ချက်နိုင်ပြီးလချုပ်စာရင်းများကို ကြည့်ရှုနိုင်သည့်အပြင် ကားနှင့်ပက်သက်သောအရောင်းဆိုင်များ၊ကားဝပ်ရှော့ဆိုင်များ နှင့် ဆီဆိုင်များကို အလွယ်တကူရှာဖွေကြည့်ရှုနိုင်မည့် Application တစ်ခုပဲဖြစ်ပါတယ်။",
});

</script>

<style scoped>
.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.carousel-indicators button {
  background-color: red;
  /* Change this to your desired color */
}

.carousel-indicators .active {
  background-color: darkred;
  /* Change this to your desired active color */
}

.skew {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  left: 8rem;
  bottom: -30px;
  transform: skewY(-35deg);
  background-color: #DC3545;

}

.client img {
  width: 6rem;
  height: 6rem;
  border-radius: 50px;
  object-fit: cover;
  border: 5px solid #fff;
  position: relative;
  bottom: 15px;
  left: 5px;
}
</style>
