<template>
  <div>
    <ConversorPage />
  </div>
  <div id="app">
    <CountrySearchPage />
  </div>
</template>

<script>
import CountrySearchPage from "@/views/CountrySearchPage.vue";
import ConversorPage from "@/views/ConversorPage.vue";

export default {
  name: "App",
  components: {
    CountrySearchPage,
    ConversorPage,
  },
};
</script>

<style>
  body {
    background-color: #abaaaa;
    /* background-image: linear-gradient(to bottom, #0d80bf, #ffffff) */
  }

</style>
