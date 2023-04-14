<script lang="ts">
import BannerBg from "../assets/images/icons/Sony.vue";
// import IconCalendar from './icons/Logo.vue'
export default {
  components: {
    BannerBg,
  },
};
</script>

<template>
  <div class="flex justify-center items-center">
    <div
      class="w-full md:w-10/12 rounded-lg box flex items-center justify-center text-center"
      style="height: 65vh"
    >
      <div class="md:w-6/12">
        <h2 class="text-4xl md:text-6xl font-bold text-primary-dark">Vision Capital</h2>
        <p class="my-8 font-light text-lg md:text-xl text-grey1">
          The right way to fund and incubate your DeFi startup
        </p>

        <div class="flex justify-center gap-x-4">
          <button class="bg-primary text-white md:px-8 md:py-3 px-2 py-2 rounded-lg text-sm md:text-base">
            I Need Funding
          </button>
          <button
            class="border border-primary md:px-8 md:py-3 px-2 py-2 rounded-lg text-primary text-sm md:text-base"
          >
            Become an Investor
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: #fbfaff;
  background-image: url("../assets/images/icons/bg.svg"),
    url("../assets/images/icons/bg2.svg");
  /* background-image: url( '../assets/images/icons/bg2.svg' ); */
  background-size: cover;
  background-position:50% 80px, 50% 55%;
  background-repeat: no-repeat;
}
</style>
