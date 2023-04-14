<script lang="ts">
import ToolingIcon from "../assets/images/icons/Logo.vue";
import Tick from "../assets/images/icons/Tick.vue";
import IconBase from "../assets/images/icons/Tick.vue";
export default {
  components: {
    Tick,
    IconBase,
  },
};
</script>

<template>
  <div
    id="projects"
    class="box mx-auto w-full py-44 px-8 md:px-72"
    style="border-radius: 250px 0px 0px 0px"
  >
    <h3 class="text-primary font-semibold">- For Projects</h3>
    <h2 class="text-2xl md:text-5xl text-primary-dark font-bold leading-normal my-4">
      Vision is the <span class="text-primary">answer</span>
    </h2>
    <p class="w-full md:w-6/12 md:leading-loose font-light text-sm text-grey1">
      You have an idea, IncuPie has a plan. We offer everything you need to go
      from an early-stage idea to a successful exchange listing.
    </p>

    <ul class="flex flex-wrap gap-y-6 gap-x-4 justify- py-8">
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Decentralized investments</h5>
          <p class="text-sm font-light mt-2">
            we'll distribute your tokens among our huge and active community
          </p>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Access to professional investors</h5>
          <p class="text-sm font-light mt-2">
            we'll put you in touch with funds and business angels ready to
            invest larger sums
          </p>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Exchange relations</h5>
          <p class="text-sm font-light mt-2">
            get better terms when listing your token
          </p>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Staking</h5>
          <p class="text-sm font-light mt-2">
            allow users to stake your tokens on DeFiPie and earn rewards
          </p>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Product-market fit analysis</h5>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Detailed tokenomics</h5>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">Smart contract audit</h5>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 w-full gap-x-2 md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">
            Community-building and social media marketing
          </h5>
        </div>
      </li>
      <li
        class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p"
      >
        <div class="w-8">
          <IconBase icon-name="calendar"><Tick /></IconBase>
        </div>
        <div>
          <h5 class="font-semibold">
            White Paper, blog, and media content from the best authors
          </h5>
        </div>
      </li>
    </ul>

    <div class="flex justify-between md:justify-start gap-x-4">
      <button class="text-white bg-primary px-6 md:px-8 py-3 rounded-md">
        I Need Funding
      </button>
      <button class="border border-primary px-6 md:px-12 py-3 text-primary rounded-md">
        Learn More
      </button>
    </div>
  </div>
</template>

<style scoped>
.box {
  /* background-color: linear-gradient(180deg, #fbfaff 29.73%, #ffffff 100%); */
  background-image: url("../assets/images/icons/bg3.svg"),
    linear-gradient(180deg, #fbfaff 29.73%, #ffffff 100%);
  background-size: cover;
  /* background-position: -80px -20px; */
  background-repeat: no-repeat;
}
</style>
