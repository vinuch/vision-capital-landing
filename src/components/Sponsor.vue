<script lang="ts">
import Burberry from "../assets/images/icons/Burberry.vue";
import Google from "../assets/images/icons/Google.vue";
import Sony from "../assets/images/icons/Sony.vue";
import Ikea from "../assets/images/icons/Ikea.vue";
import Nectar from "../assets/images/icons/Nectar.vue";
import Logo2 from "../assets/images/icons/Logo2.vue";
import IconBase from "../assets/images/icons/IconBase.vue";

// import ToolingIcon from "./icons/Logo.vue";
// import Logo from './icons/Logo.vue'
export default {
  components: {
    Burberry,
    Google,
    Sony,
    Ikea,
    Nectar,
    Logo2,
    IconBase,
  },
};
</script>

<template>
  <div class="flex flex-wrap-reverse items-center gap-x-48">
    <div class="img-box">
      <!-- <img src="../assets/images/white-man.png" alt=""> -->
    </div>
    <div class="w-full md:w-4/12 px-6 md:p-0 my-12">
      <IconBase width="104" height="120" viewBox="0 0 104 120" icon-name="logo"
        ><Logo2
      /></IconBase>

      <h2 class="text-4xl font-bold text-primary-dark">
        <span class="text-primary font-bold">Brought to you <br /></span> by
        DeFiPie
      </h2>
      <p class="leading-loose font-light py-10">
        DeFiPie is the first DeFi app to bring together crypto lending, staking,
        P2P loans, liquidity mining, and trading. We have a strong development
        and marketing team and an active, constantly growing community.
        <br /><br />
        Project incubation is a natural next step: now that we've done it
        ourselves, we want to help other quality projects to achieve success.
      </p>
    </div>
  </div>

  <div class="flex justify-center py-24">
    <div class="w-10/12">
      <div class="flex justify-center items-center gap-4 w-full py-12">
        <hr class="w-4/12" />
        <p class="text-primary-dark font-semibold text-sm md:text-base text-center md:text-left">
          Brought to you by DeFiPie in partnership with
        </p>
        <hr class="w-4/12" />
      </div>

      <div class="flex flex-wrap w-10/12 mx-auto justify-center gap-6">
        <IconBase
          width="220"
          height="80"
          viewBox="0 0 220 80"
          icon-name="burberry"
          ><Burberry
        /></IconBase>
        <IconBase
          width="220"
          height="80"
          viewBox="0 0 220 80"
          icon-name="google"
          ><Google
        /></IconBase>
        <IconBase width="220" height="80" viewBox="0 0 220 80" icon-name="sony"
          ><Sony
        /></IconBase>
        <IconBase width="220" height="80" viewBox="0 0 220 80" icon-name="ikea"
          ><Ikea
        /></IconBase>
        <IconBase
          width="220"
          height="80"
          viewBox="0 0 220 80"
          icon-name="nectar"
          ><Nectar
        /></IconBase>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-box {
  border-radius: 0px 200px 200px 0px;
  overflow: hidden;
  height: 830px;
  width: 590px;
  background: url("../assets/images/white-man.png");
  background-size: cover;
  background-position: center;
  display: flex;
}
</style>
