<script lang="ts">
import IconBase from "../assets/images/icons/IconBase.vue";
import Tick from "../assets/images/icons/Tick.vue";
export default {
  components: {
    Tick,
    IconBase,
  },
};
</script>

<template>
  <div
    id="investors"
    class="w-full mx-auto py-44 px-8 md:px-72 box"
    style=" border-radius: 0px 250px 0px 0px"
  >
    <h3 class="text-primary font-semibold">- For Investors</h3>
    <h2 class="text-2xl md:text-5xl text-primary-dark font-bold leading-loose">
      Access <span class="text-primary">high-potential</span> DeFi <br />
      startups before everyone elsed
    </h2>

    <ul class="flex flex-wrap gap-y-6 gap-x-4 justify- py-8">
      <li class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p">
        <IconBase
          width="24"
          height="24"
          viewBox="0 0 24 24"
          icon-name="calendar"
          ><Tick
        /></IconBase>

        <p class="text-primary-dark">Low entry prices on DeFi tokens</p>
      </li>
      <li class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p">
        <IconBase
          width="24"
          height="24"
          viewBox="0 0 24 24"
          icon-name="calendar"
          ><Tick
        /></IconBase>

        <p class="text-primary-dark">Fully decentralized</p>
      </li>
      <li class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p">
        <IconBase
          width="24"
          height="24"
          viewBox="0 0 24 24"
          icon-name="calendar"
          ><Tick
        /></IconBase>

        <p class="text-primary-dark">
          Only vetted projects that passed our due diligence
        </p>
      </li>
      <li class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p">
        <IconBase
          width="24"
          height="24"
          viewBox="0 0 24 24"
          icon-name="calendar"
          ><Tick
        /></IconBase>

        <p class="text-primary-dark">New projects every month</p>
      </li>
      <li class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p">
        <IconBase
          width="24"
          height="24"
          viewBox="0 0 24 24"
          icon-name="calendar"
          ><Tick
        /></IconBase>

        <p class="text-primary-dark">
          High chance of success thanks to our incubation program
        </p>
      </li>
      <li class="flex shadow-shade1 bg-white rounded-lg p-4 gap-x-2 w-full md:w-45p">
        <IconBase
          width="24"
          height="24"
          viewBox="0 0 24 24"
          icon-name="calendar"
          ><Tick
        /></IconBase>

        <p class="text-primary-dark">
          Yield farming rewards in PIE (up to 100% a year)
        </p>
      </li>
    </ul>

    <div>
      <button class="bg-primary text-white px-6 py-4 rounded-md">
        Become an Investor
      </button>
    </div>
  </div>
</template>

<style scoped>
.box {
  /* background-color: linear-gradient(180deg, #fbfaff 29.73%, #ffffff 100%); */
  background-image: url("../assets/images/icons/bg4.svg"),
    linear-gradient(180deg, #fbfaff 29.73%, #ffffff 100%);
  background-size: cover;
  /* background-position: 20px -80px; */
  background-repeat: no-repeat;
}
</style>
