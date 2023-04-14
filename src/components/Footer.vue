<script lang="ts">
import Facebook from "../assets/images/icons/facebook.vue";
import Twitter from "../assets/images/icons/twitter.vue";
import Telegram from "../assets/images/icons/telegram.vue";
import Github from "../assets/images/icons/github.vue";
import IconBase from "../assets/images/icons/IconBase.vue";

// import ToolingIcon from "./icons/Logo.vue";
// import IconCalendar from './icons/Logo.vue'
export default {
  components: {
    Facebook,
    Twitter,
    Telegram,
    Github,
    IconBase,
  },
};
</script>

<template>
  <div class="bg-primary-dark text-white pt-56 px-8 md:p-40 footer-container w-full">
    <h2 class="text-4xl font-bold pb-4">
      <span class="text-primary font-bold text-3xl">Join</span> <br />
      Vision Capital <br />
      and get funded
    </h2>
    <p class="text-sm font-light">We'll get back to you within 24 hours</p>

    <form action="" class="py-8">
      <ul class="flex flex-wrap w-full md:w-8/12">
        <li class="w-full md:w-5/12">
          <label for="name" class="text-sm font-light"
            >How is your project called?</label
          ><br />
          <input type="text" name="name" class="w-full md:w-10/12 rounded my-2 h-8" />
        </li>
        <li class="w-full md:w-5/12">
          <label for="email" class="text-sm font-light">Your Email</label><br />
          <input type="text" name="email" class="w-full md:w-10/12 rounded my-2 h-8" />
        </li>
        <li class="w-full md:w-5/12">
          <label for="words" class="text-sm font-light"
            >Please tell us a few words about the project</label
          ><br />
          <input type="text" name="words" class="w-full md:w-10/12 rounded my-2 h-8" />
        </li>
        <li class="w-full md:w-5/12">
          <label for="telegram" class="text-sm font-light">Telegram name</label
          ><br />
          <input type="text" name="telegram" class="w-full md:w-10/12 rounded my-2 h-8" />
        </li>
      </ul>

      <div class="flex flex-wrap gap-y-8 justify-start md:justify-between items-center pt-6">
        <button class="bg-primary py-2  w-full md:w-2/12 rounded-md">Send</button>

        <div>
          <ul class="flex md:justify-end gap-x-4 pb-4">
            <li>
              <IconBase
                width="32"
                height="32"
                viewBox="0 0 32 32"
                icon-name="Facebook"
                ><Facebook
              /></IconBase>
            </li>
            <li>
              <IconBase
                width="32"
                height="32"
                viewBox="0 0 32 32"
                icon-name="Twitter"
                ><Twitter
              /></IconBase>
            </li>
            <li>
              <IconBase
                width="32"
                height="32"
                viewBox="0 0 32 32"
                icon-name="Telegram"
                ><Telegram
              /></IconBase>
            </li>
            <li>
              <IconBase
                width="32"
                height="32"
                viewBox="0 0 32 32"
                icon-name="Github"
                ><Github
              /></IconBase>
            </li>
          </ul>
          <p class="flex gap-x-2 md:gap-x-4">
            <span class="text-sm underline font-light"
              ><a href="http://" target="_blank" rel="noopener noreferrer">
                hello@visioncapital.com</a
              ></span
            >
            <span class="text-sm underline font-light"
              ><a href="http://" target="_blank" rel="noopener noreferrer"
                >Join us on Telegram</a
              >
            </span>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.footer-container {
  border-radius: 250px 0px 0px 0px;
}
</style>
