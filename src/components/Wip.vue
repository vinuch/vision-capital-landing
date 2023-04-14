<script lang="ts">
import Harvard from "../assets/images/icons/Harvard.vue";
import Microsoft from "../assets/images/icons/IconMicrosoft.vue";
import Nasa from "../assets/images/icons/Nasa.vue";
import IconBase from "../assets/images/icons/IconBase.vue";
import Yale from "../assets/images/icons/Yale.vue";
import Payoneer from "../assets/images/icons/Payoneer.vue";
export default {
  components: {
    Nasa,
    Harvard,
    Microsoft,
    IconBase,
    Yale,
    Payoneer,
  },
};
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10/12">
        <div class="flex justify-center items-center gap-4 w-full py-12">
          <hr class="w-3/12 md:w-5/12" />
          <p class="text-primary-dark text-sm md:text-base">In the pipeline</p>
          <hr class="w-3/12 md:w-5/12" />
        </div>

        <div class="flex flex-wrap justify-center gap-6">
          <div class="">
            <IconBase icon-name="harvard" width="220" height="80"
              ><harvard
            /></IconBase>
          </div>
          <div class="">
            <IconBase
              icon-name="microsoft"
              width="220"
              height="80"
              viewBox="0 0 220 80"
              ><microsoft
            /></IconBase>
          </div>
          <div class="">
            <IconBase
              width="220"
              height="80"
              viewBox="0 0 220 80"
              icon-name="nasa"
              ><Nasa
            /></IconBase>
          </div>
          <div class="">
            <IconBase
              icon-name="yale"
              width="220"
              height="80"
              viewBox="0 0 220 80"
              ><Yale
            /></IconBase>
          </div>
          <div class="">
            <IconBase
              icon-name="payoneer"
              width="220"
              height="80"
              viewBox="0 0 220 80"
              ><Payoneer
            /></IconBase>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-8/12 mx-auto py-20 px-8 md:px-0">
      <div class="flex flex-wrap justify-between w-full">
        <div class="w-full md:w-3/12">
          <h2 class="text-primary-dark font-bold text-4xl leading-snug">
            Traditioinal Fundraising
            <span class="text-primary">Doesn't Work <br /></span> in DeFi
          </h2>
        </div>
        <div>
          <ul>
            <li
              class="flex items-center gap-x-4 shadow-shade1 p-4 rounded-md bg-white my-4"
            >
              <span class="text-primary text-lg font-bold">01</span>
              <p class="text-sm w-full md:w-7/12">
                Without a big budget, it's hard to approach venture investors
              </p>
            </li>
            <li
              class="flex items-center gap-x-4 shadow-shade1 p-4 rounded-md bg-white my-4"
            >
              <span class="text-primary font-bold">02</span>
              <p class="text-sm w-full md:w-7/12">
                VCs don't care about your DeFi idea – only their gains
              </p>
            </li>
            <li
              class="flex items-center gap-x-4 shadow-shade1 p-4 rounded-md bg-white my-4"
            >
              <span class="text-primary font-bold">01</span>
              <p class="text-sm w-full md:w-7/12">
                They force you into selling your tokens at a huge discount…
              </p>
            </li>
            <li
              class="flex items-center gap-x-4 shadow-shade1 p-4 rounded-md bg-white my-4"
            >
              <span class="text-primary font-bold">01</span>
              <p class="text-sm w-full md:w-7/12">
                ...Then dump them at the first opportunity
              </p>
            </li>
            <li
              class="flex items-center gap-x-4 shadow-shade1 p-4 rounded-md bg-white my-4"
            >
              <span class="text-primary font-bold">01</span>
              <p class="text-sm w-full md:w-7/12">
                Result: your token collapses. Everyone goes home.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
