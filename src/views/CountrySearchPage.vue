<template>
  <div class="container">
    <CountrySearch
      @country-found="handleCountryFound"
      @country-error="handleCountryError"
    />
    <div id="result">
      <CountryShow v-if="countryData" :country="countryData" />
      <div v-else class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import CountrySearch from "@/components/CountrySearch.vue";
import CountryShow from "@/components/CountryShow.vue";

export default {
  name: "CountrySearchPage",
  components: {
    CountrySearch,
    CountryShow,
  },
  data() {
    return {
      countryData: null,
      errorMessage: "",
    };
  },
  methods: {
    handleCountryFound(country) {
      this.countryData = country;
      this.errorMessage = "";
    },
    handleCountryError(errorMessage) {
      this.errorMessage = errorMessage;
      this.countryData = null;
    },
  },
};
</script>

<style scoped>

/* Estilos da view ou do componente principal */
.error-message {
  text-align: center;
  font-size: 1.2em;
  font-weight: 400;
  color: #ff465a;
}

</style>
