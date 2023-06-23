<template>
    <div class="cep">
      <h1>Informe seu CEP!</h1>
      <input type="number" v-model="cep" id="CEP" />
      <input type="button" v-on:click="consultar" value="consultar" />
      <br />
      <div v-if="response">
        <p>Endereço: {{response.logradouro}}</p>
        <p>Complemento: {{response.complemento}}</p>
        <p>Bairro: {{response.bairro}}</p>
        <p>Cidade: {{response.localidade}} - {{response.uf}}</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "via-cep",
    data() {
      return {
        cep: "",
        response: null,
      };
    },
    methods: {
      consultar() {
        fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const cidade = data.localidade;
            console.log(cidade);
            this.response = data;
          });
      },
    },
  };
</script>
  
<style scoped>
    .cep{
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    margin: auto;
    }
</style>
