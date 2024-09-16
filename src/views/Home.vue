<template>
  <!-- Home -->
  <div class="container">
    <div class="row" style="min-height: 70vh">
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
      <MovingIcon />
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
          <p class="font-semibold mt-4" style="font-size: 20px">
            ဘာကြောင့် အသုံးပြုသင့်တာလဲ
          </p>
        </div>

        <div class="col-md-12">
          <div class="mb-20 row" style="margin-left: 0px; width: 100%">
            <div v-for="card in cards" class="col-lg-3 col-md-6 col-sm-12 col-12 my-3">
              <InfoCard :title="card.title" :key="card.title" :image="card.image" :description="card.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- App Features -->
  <div class="container-fluid bg-[#f8b2b2] bg-opacity-30">
    <div class="container">
      <div class="d-flex justify-center items-center">
        <h3 class="my-4 font-semibold">App Features</h3>
      </div>
      <div class="row">
        <div class="col-md-4 order-sm-1 order-md-2 d-flex justify-center my-5 ">
          <div class="d-flex rounded-5"
            style="border:6px solid black; width:260px; height:500px; position:relative; ">
            <div class="carousel-images d-flex">
              <img :src="currentImage" class="loop-image w-100 h-100 rounded-5" alt="">
            </div>
            <!-- <div class="bg-black rounded-lg dynamic"></div> -->
            <div class="bg-black rounded-md action-button"></div>
            <div class="bg-black rounded-md vol-button-1"></div>
            <div class="bg-black rounded-md vol-button-2"></div>
            <div class="bg-black rounded-md power-button"></div>
          </div>
        </div>

        <div class="col-md-4 order-sm-2 order-md-1">
          <div v-for="feature in features.slice(0, 4)" :key="feature.id"
            class="d-flex justify-between rounded shadow p-3 my-3 bg-white">
            <img :src="feature.image" style="width: 30px; height: 30px; object-fit: cover" alt="" />
            <div class="ms-4">
              <h6 class="font-semibold" style="font-size: 15px">{{ feature.title }}</h6>
              <p style="font-size: 14px" class="mt-3">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 order-sm-3 order-md-3">
          <div v-for="feature in features.slice(4, 8)" :key="feature.id"
            class="d-flex justify-between rounded shadow p-3 my-3 bg-white">
            <img :src="feature.image" style="width: 30px; height: 30px; object-fit: cover" alt="" />
            <div class="ms-4">
              <h6 class="font-semibold" style="font-size: 15px">{{ feature.title }}</h6>
              <p style="font-size: 14px" class="mt-3">{{ feature.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- feedback section -->
  <div class="container-fluid bg-opacity-30 py-4 bg-[#ccd5ae]">
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
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      ကားအသုံးပြုတဲ့သူတွေအတွက် အရမ်းအသုံးတည့်တဲ့ App လေးပါ
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      သုံးရတာ အရမ်းအဆင်ပြေပါတယ် ဒီ Love Car App လေးကြောင့်
                      ကားနဲ့ ပတ်သက်တဲ့လချုပ်စာရင်းတွေကို အလွယ်တကူသိနိုင်လို့
                      အချိန်ကုန် သက်သာပါတယ်
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      လိုင်စင်စာမေးပွဲအတွက် အပြင်သင်တန်းတွေတက်ဖို့
                      အချိန်မရှိတာနဲ့ ဒီLove Car App ထဲက လေ့ကျင့်ခန်းတွေနဲ့ပဲ
                      သွားဖြေလာတာ အဆင်ပြေလာတယ် ။ ကျေးဇူးပါပဲ Love Car ရေ
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      အရင်ကဆို ကားပြင်ဖို့ ဆီ ဖြည့်ဖို့ မနည်းလိုက်ရှာပြီး
                      သူများမေးပြီးသွားနေရတာ အခုတော့ LoveCar App က Map
                      လေးကိုသုံးပြီး ဆိုင်ရှာရတာ အဆင်ပြေသွားပြီ။
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      ကားလိုင်စင်လျောက်ဖို့ကို အရင်ကဆိုရင် လိုက်ရှာရ
                      လိုက်မေးနေရတာ အခုတော့ LoveCar App ထဲမှာက
                      အကုန်လိုင်စင်လျောက်နည်းတွေကို
                      တစ်စုတစ်စည်းတည်းတင်ပေးထားတော့ လွယ်လွယ်ကူကူနဲ့ သိနိုင်ပြီလေ
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      ဒီ App လေးကနေ ကျွန်တော့်ကားနဲ့ ပတ်သက်တဲ့ လချုပ်စာရင်းတွေ
                      ကြည့်လို့ရရုံတင် မဟုတ်ဘူး
                      ကျွန်‌တော့်ကားဝပ်ရှော့ဆိုင်လုပ်ငန်းတွေနဲ့ ပတ်သက်တဲ့
                      ကြော်ငြာတွေ Review တွေကို သိနိုင်လို့
                      လိုအပ်တာလေးတွေပြင်ဆင်နိုင်ပြီး အခုဆိုလုပ်ငန်းတွေ
                      ထပ်မံတိုးချဲ့နိုင်နေပြီလေ။
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      ဒီ App လေးထဲကနေ တင်ပေးတဲ့ ဆိုင်ကြော်ငြာတွေကြောင့်ပဲ
                      ကျွန်တော့်ကားဝပ်ရှော့ဆိုင်‌လေးက တဖြည်းဖြည်း လူသိများလာပြီး
                      အခုဆို နောက်တစ်ဆိုင်ထပ်ဖွင့်ဖို့ လုပ်နေပြီ။
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      ကျွန်တော် အစကဆိုရင် Taxi ဆွဲလို့ရတဲ့ တစ်နေ့ဝင်ငွေ
                      ဘယ်လောက်ဆိုတာ မသိရ တွက်လည်း မတွက်နိုင်တော့
                      ရှုံးလားမြတ်လားဆိုတာ မသိရဘူးလေ။ အခုတော့ ဒီ App လေးကြောင့်
                      ကျွန်တော့်တစ်နေ့ဝင်ငွေကို သိရတဲ့အပြင် တစ်လစာဝင်ငွေထွက်ငွေ
                      အရှုံးအမြတ်ကို သိရတော့ ပိုပြီး အဆင်ပြေပြီး
                      ပိုတွက်ခြေကိုက်လာတယ်လေ။
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
                  <div class="bg-danger px-16 py-8 rounded-4 position-relative" style="height: 300px">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="fs-2 text-white" />
                    <p class="text-white pl-5">
                      အရမ်းကောင်းတဲ့ App လေးပါ ကျွန်တော့်အတွက် အသုံးဝင်တဲ့ App
                      လေးပါ
                    </p>
                    <p class="skew"></p>
                  </div>
                  <div class="client">
                    <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" />
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

  <!-- download section
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
  </div> -->

  <!-- Footer section -->
  <Footer />

</template>

<script setup>
import { ref,computed, onMounted,onBeforeUnmount } from "vue";
import InfoCard from "@/components/InfoCard.vue";
import Footer from "@/components/Footer.vue";
import MovingIcon from "@/components/MovingIcon.vue";
import ManageCard from "../jsonData/ManageCard.json";
import Card from "../jsonData/Card.json";
import Feature from "../jsonData/Feature.json";

// import axios from "axios";

// const user_count = ref();

// onMounted(async () => {
//   try {
//     const response = await axios.get('https://lovecar.autos/api/getAllUsers');
//     user_count.value = response.data.data;
//   } catch (error) {
//     console.error('Error fetching user count:', error);
//   }
// });

const manageCards = ref(ManageCard);
const cards = ref(Card);
const features = ref(Feature);

const carSection = ref({
  title: "Love Car ဆိုတာဘာလဲ",
  description:
    "ကားအသုံးပြုသူများအတွက် မိမိကားရဲ့ အသုံးစရိတ်၊ ကုန်ကျစရိတ်များ၊ဝင်ငွေများကိုတွက်ချက်နိုင်ပြီးလချုပ်စာရင်းများကို ကြည့်ရှုနိုင်သည့်အပြင် ကားနှင့်ပက်သက်သောအရောင်းဆိုင်များ၊ကားဝပ်ရှော့ဆိုင်များ နှင့် ဆီဆိုင်များကို အလွယ်တကူရှာဖွေကြည့်ရှုနိုင်မည့် Application တစ်ခုပဲဖြစ်ပါတယ်။",
});

const images = ref([
  'src/images/appFeature1.jpg',
  'src/images/fuel_cost_image.jpg',
  'src/images/maintenance.jpg',
  'src/images/income.jpg',
  'src/images/report.jpg'
])

const currentIndex = ref(0);
const currentImage = computed(() => images.value[currentIndex.value]);

// Function to switch image every 2 seconds
const startImageLoop = () => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 4000);
};

onMounted(() => {
  startImageLoop();
});

// If you need to clear interval on unmount
onBeforeUnmount(() => {
  clearInterval(startImageLoop);
});



</script>

<style scoped>

/* I Phone */
.action-button {
  width: 23px;
  height: 5px;
  position: absolute;
  left: -18px;
  top: 100px;
  transform: rotate(90deg);
}

.vol-button-1 {
  width: 35px;
  height: 5px;
  position: absolute;
  left: -24px;
  top: 150px;
  transform: rotate(90deg);
}

.vol-button-2 {
  width: 35px;
  height: 5px;
  position: absolute;
  left: -24px;
  top: 200px;
  transform: rotate(90deg);
}

.power-button {
  width: 60px;
  height: 5px;
  position: absolute;
  right: -36px;
  top: 150px;
  transform: rotate(90deg);
}

.dynamic {
  width: 17px;
  height: 65px;
  position: absolute;
  left: 120px;
  top: -15px;
  transform: rotate(90deg);
}

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

@keyframes rotateText {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#car-image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.circle-image {
  position: absolute;
  transform-origin: 50% 50%;
  animation: rotateText 3s linear infinite;
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
  background-color: #dc3545;
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
