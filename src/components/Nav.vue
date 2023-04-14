<script lang="ts">
import ToolingIcon from "../assets/images/icons/Logo.vue";
import IconCalendar from "../assets/images/icons/Logo.vue";
import Harvard from "../assets/images/icons/Harvard.vue";
import IconBase from "../assets/images/icons/IconBase.vue";
import Microsoft from "../assets/images/icons/IconMicrosoft.vue";

export default {
  components: {
    ToolingIcon,
    IconCalendar,
    IconBase,
    Harvard,
    Microsoft,
  },
};
</script>

<template>
  <div
    class="px-6 py-4 fixed left-0 top-0 bg-white flex justify-between items-center w-full"
  >
    <div>
      <IconBase
        icon-name="calendar"
        viewBox="0 0 203 68"
        width="203"
        height="68"
        ><icon-calendar
      /></IconBase>
    </div>
    <div>
      <img src="../assets/images/icons/menu.png" alt="menu" class="md:hidden w-8">
      <ul  class="items-center gap-10 text-sm hidden md:flex">
        <li class="text-primary-dark"><a href="#projects">For Projects</a></li>
        <li class="text-primary-dark">
          <a href="#investors">For Investors</a>
        </li>
        <li>
          <button class="bg-primary text-white px-4 rounded-lg py-2">
            Join Now
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
