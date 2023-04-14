<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Nav from "./components/Nav.vue";
// @ts-ignore
import Banner from "./components/Banner.vue";
// @ts-ignore
import Wip from "./components/Wip.vue";
// @ts-ignore
import Projects from "./components/Projects.vue";
// @ts-ignore
import Investors from "./components/Investors.vue";
// @ts-ignore
import Sponsor from "./components/Sponsor.vue";
// @ts-ignore
import Footer from "./components/Footer.vue";

export default {
    components: {
      Nav,
      Banner,
      Wip,
      Projects,
      Investors,
      Sponsor,
      Footer
    }
}
</script>

<template>
  <header class="px-2 md:px-4">
    <Nav />
  </header>

  <main class="px- mt-32">
    <Banner />
    <Wip />
    <Projects />
    <Investors />
    <Sponsor />
    <Footer />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
