<template>
  <div id="conversor">
    <h1 class="text-center">Valores de Câmbio Internacional</h1>
    <div class="linha">
      <ConversorMoeda moeda-a="USD" moeda-b="BRL" />
      <ConversorMoeda moeda-a="BRL" moeda-b="USD" />
    </div>
    <div class="linha">
      <ConversorMoeda moeda-a="EUR" moeda-b="BRL" />
      <ConversorMoeda moeda-a="BRL" moeda-b="EUR" />
    </div>
    <div class="linha">
      <ConversorMoeda moeda-a="JPY" moeda-b="BRL" />
      <ConversorMoeda moeda-a="BRL" moeda-b="JPY" />
    </div>
    <div class="kanye">
      <KanyeRest />
    </div>
  </div>
</template>

<script>
import ConversorMoeda from "@/components/ConversorMoeda.vue";
import KanyeRest from "@/components/KanyeRest.vue";

export default {
  name: "ConversorPage",
  components: {
    ConversorMoeda,
    KanyeRest,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}
#conversor {
  margin: auto;
  max-width: 900px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 90px;
}

.linha {
  margin: 40px;
  display: flex;
  justify-content: space-around;
  gap: 600px;
}

.text-center {
  text-align: center;
}
</style>