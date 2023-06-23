<template>
  <div id="app">
  <div>
    <CountryPage />
  </div>
    <h1 class="text-center">Valores de Câmbio Internacional</h1>
  <div class="linha">
  <ConversorMoeda moeda-a="USD" moeda-b="BRL"/>
  <ConversorMoeda moeda-a="BRL" moeda-b="USD"/>
  </div>
  <div class="linha">
  <ConversorMoeda moeda-a="EUR" moeda-b="BRL"/>
  <ConversorMoeda moeda-a="BRL" moeda-b="EUR"/>
  </div>
  <div class="linha">
  <ConversorMoeda moeda-a="JPY" moeda-b="BRL"/>
  <ConversorMoeda moeda-a="BRL" moeda-b="JPY"/>
  </div>
  <div>
    <ViaCep />
  </div>
  <div>
    <KanyeRest />
  </div>
</div>
</template>

<script>
import CountryPage from "@/views/CountrySearchPage.vue"
import ConversorMoeda from "@/components/ConversorMoeda.vue"
import KanyeRest from "@/components/KanyeRest.vue"
import ViaCep from "@/components/ViaCep.vue"

export default {
  name: "App",
  components: {
    ConversorMoeda,
    CountryPage,
    ViaCep,
    KanyeRest,
  },
};
</script>

<style>
#app {
  margin: auto;
  max-width: 900px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.linha{
  margin: 40px;
  display: flex;
  justify-content: space-around;
}
.text-center{
  text-align: center;
}
</style>