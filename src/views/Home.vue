<template>

  <div class="row" style="min-height: 80vh">

    <div
      class="col-lg-6 col-md-12 col-sm-12 col-12 flex justify-center text-lg-start text-md-center text-sm-center text-center items-center mb-lg-0 mb-md-10 mb-sm-10 mb-10">
      <div>
        <div class="fs-4 font-normal mb-2 mt-lg-0 mt-md-5 mt-sm-5 mt-5">ကားချစ်သူများအတွက် တစ်နေရာတည်းမှာ
          ပြီးပြည့်စုံစေမယ့်</div>
        <div class="fs-2 font-bold">LoveCar Application</div>
        <div
          class="flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center">
          <a href="https://play.google.com/store/apps/details?id=love.car.mm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
              class="mt-2" style="margin-left:-12px;width:150px">
          </a>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-md-12 col-sm-12 col-12 flex justify-center items-center ">
      <img src="../images/lovecar_mockup.png" style="width: 74%;">
    </div>

    <div class="mb-20 row" style="margin-top:50px;margin-left:0px;width:100%">

      <div class="col-lg-4 col-md-6 col-sm-12 col-12 my-3">
        <InfoCard title="စီမံခန့်ခွဲမှု"
          image="https://i0.wp.com/www.tireexpresspa.com/wp-content/uploads/2020/12/75-754987_car-maintenance-cliparts-car-maintenance-icon-png.png?fit=900%2C654&ssl=1"
          description="ကိုယ့်ကားရဲ့ ဆီစရိတ်၊ ပြင်ဆင်စရိတ်၊ လချုပ်စာရင်းများကို ကြည့်ရှုနိုင်မယ်။ (Taxi
            ဖြစ်လျှင် ငှားရမ်းခနှင့် ဝင်‌ငွေများကို ထည့်သွင်းတွက်ချက်နိုင်မယ်။)" />

      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 col-12 my-3">
        <InfoCard title="ရှာဖွေမှု"
          image="https://static.vecteezy.com/system/resources/thumbnails/024/861/695/small_2x/discover-your-outdoor-destination-with-this-3d-icon-of-a-map-location-png.png"
          description="ကားနှင့် ပတ်သက်သော workshop များ၊ ဆီဆိုင်များနှင့် showroom များကိုလည်း လွယ်ကူမြန်ဆန်စွာ ရှာဖွေနိုင်မည်။" />

      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 col-12 my-3">
        <InfoCard title="သိကောင်းစရာများ"
          image="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-quick-tips-with-light-bulb-icon-suggestion-logo-helpful-vector-png-image_37748712.png"
          description="ကားထိန်းသိမ်းနည်းများ၊ ဆီစျေးနှုန်းများ၊ ကားအစိတ်အပိုင်းများအကြောင်း၊ ကားနှင့်ပတ်သက်သော ပြဿနာဖြေရှင်းများကိုလည်း လေ့လာနိုင်မည်။" />

      </div>

    </div>


  </div>
</template>

<script setup>
import InfoCard from '@/components/InfoCard.vue';

</script>

<style scoped></style>
